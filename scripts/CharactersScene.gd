extends Control

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Characters Scene
#  Godot 4.x  |  GDScript 2.0
#
#  Layout (all built in script on top of CharactersScene.tscn shell):
#    Left panel  — scrollable character card grid
#    Right panel — scrollable character info (stats + skills)
#    Bottom bar  — Delete (bottom-left), Choose / Create (bottom-right)
# ─────────────────────────────────────────────────────────────

const SCENE_MAIN := "res://scenes/MainMenu.tscn"

# Elin palette
const C_INK    := Color(0.228, 0.145, 0.063, 1.0)
const C_HEADER := Color(0.420, 0.243, 0.071, 1.0)
const C_MUTED  := Color(0.490, 0.390, 0.240, 0.85)
const C_SEL_BG := Color(0.770, 0.690, 0.510, 1.0)   # selected card tint
const C_BORDER := Color(0.380, 0.259, 0.125, 0.75)
const C_BONUS  := Color(0.10,  0.60,  0.15,  1.0)   # positive skill value — green
const C_MALUS  := Color(0.72,  0.12,  0.08,  1.0)   # negative skill value — red

# ── Node refs (matched to CharactersScene.tscn) ───────────────
@onready var card_container  : VBoxContainer   = $HBox/LeftPanel/LeftMargin/Scroll/CardVBox
@onready var info_scroll     : ScrollContainer = $HBox/RightPanel/RightMargin/InfoScroll
@onready var info_vbox       : VBoxContainer   = $HBox/RightPanel/RightMargin/InfoScroll/InfoVBox
@onready var btn_back        : Button          = $BackPanel/BtnBack
@onready var btn_delete_char : Button          = $BottomBar/RightBtns/BtnDeleteChar
@onready var btn_choose      : Button          = $BottomBar/RightBtns/BtnChoose
@onready var btn_create      : Button          = $BottomBar/RightBtns/BtnCreate
# Confirmation popup nodes
@onready var confirm_overlay : Control = $ConfirmOverlay
@onready var char_name_lbl   : Label   = $ConfirmOverlay/DialogPanel/DialogMargin/DialogVBox/CharNameLbl
@onready var btn_yes         : Button  = $ConfirmOverlay/DialogPanel/DialogMargin/DialogVBox/BtnRow/BtnConfirmYes
@onready var btn_no          : Button  = $ConfirmOverlay/DialogPanel/DialogMargin/DialogVBox/BtnRow/BtnConfirmNo

var _selected_idx : int = -1
var _card_nodes   : Array[PanelContainer] = []


# ─────────────────────────────────────────────────────────────
func _ready() -> void:
	btn_back.pressed.connect(_on_back)
	btn_delete_char.pressed.connect(_on_delete_pressed)
	btn_choose.pressed.connect(_on_choose)
	btn_create.pressed.connect(_on_create)
	btn_yes.pressed.connect(_on_confirm_delete)
	btn_no.pressed.connect(_close_popup)

	for btn : Button in [btn_back, btn_delete_char, btn_choose, btn_create, btn_yes, btn_no]:
		UIEffects.apply_hover(btn)

	confirm_overlay.visible = false

	_refresh_cards()
	_update_buttons()

	modulate.a = 0.0
	create_tween().tween_property(self, "modulate:a", 1.0, 0.40)


# ─────────────────────────────────────────────────────────────
#  CARD LIST
# ─────────────────────────────────────────────────────────────

func _refresh_cards() -> void:
	# Clear old cards
	for c in card_container.get_children():
		c.queue_free()
	_card_nodes.clear()
	_selected_idx = -1
	_clear_info()

	if CharacterManager.characters.is_empty():
		var lbl := Label.new()
		lbl.text = "No characters yet.\nClick 'Create Character' to get started."
		lbl.add_theme_color_override("font_color", C_MUTED)
		lbl.add_theme_font_size_override("font_size", 20)
		lbl.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
		lbl.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
		card_container.add_child(lbl)
		return

	for i : int in CharacterManager.characters.size():
		var c : Dictionary = CharacterManager.characters[i]
		_add_card(i, c)


func _add_card(idx: int, c: Dictionary) -> void:
	# Outer panel (acts as the selection border)
	var panel := PanelContainer.new()
	panel.custom_minimum_size = Vector2(0, 72)
	panel.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	_style_card(panel, false)
	card_container.add_child(panel)
	_card_nodes.append(panel)

	var margin := MarginContainer.new()
	margin.add_theme_constant_override("margin_left",   12)
	margin.add_theme_constant_override("margin_right",  12)
	margin.add_theme_constant_override("margin_top",    8)
	margin.add_theme_constant_override("margin_bottom", 8)
	panel.add_child(margin)

	var hbox := HBoxContainer.new()
	hbox.add_theme_constant_override("separation", 14)
	margin.add_child(hbox)

	# Silhouette icon placeholder (◉ Unicode approximation)
	var icon := Label.new()
	icon.text = "◉"
	icon.add_theme_font_size_override("font_size", 36)
	icon.add_theme_color_override("font_color", C_HEADER)
	icon.vertical_alignment = VERTICAL_ALIGNMENT_CENTER
	hbox.add_child(icon)

	# Name / race / level text
	var vb := VBoxContainer.new()
	vb.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	vb.add_theme_constant_override("separation", 2)
	hbox.add_child(vb)

	var lbl_name := Label.new()
	lbl_name.text = c.name
	lbl_name.add_theme_font_size_override("font_size", 22)
	lbl_name.add_theme_color_override("font_color", C_INK)
	vb.add_child(lbl_name)

	var lbl_sub := Label.new()
	lbl_sub.text = "%s  ·  Level %d" % [c.race, c.level]
	lbl_sub.add_theme_font_size_override("font_size", 17)
	lbl_sub.add_theme_color_override("font_color", C_MUTED)
	vb.add_child(lbl_sub)

	var lbl_job := Label.new()
	lbl_job.text = c.job if c.job != "None" else c.gender
	lbl_job.add_theme_font_size_override("font_size", 16)
	lbl_job.add_theme_color_override("font_color", C_MUTED)
	vb.add_child(lbl_job)

	# Make the whole card clickable
	var btn := Button.new()
	btn.flat = true
	btn.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	btn.size_flags_vertical   = Control.SIZE_FILL | Control.SIZE_EXPAND
	# Transparent button overlaid on top
	panel.add_child(btn)
	btn.mouse_filter = Control.MOUSE_FILTER_PASS

	# Use a local copy of idx for the closure
	var captured_idx := idx
	panel.gui_input.connect(func(event: InputEvent) -> void:
		if event is InputEventMouseButton \
				and (event as InputEventMouseButton).button_index == MOUSE_BUTTON_LEFT \
				and (event as InputEventMouseButton).pressed:
			_select_card(captured_idx)
	)
	panel.mouse_filter = Control.MOUSE_FILTER_STOP


func _select_card(idx: int) -> void:
	_selected_idx = idx
	for i : int in _card_nodes.size():
		_style_card(_card_nodes[i], i == idx)
	_show_info(CharacterManager.characters[idx])
	_update_buttons()


func _style_card(panel: PanelContainer, selected: bool) -> void:
	var sty := StyleBoxFlat.new()
	sty.bg_color      = C_SEL_BG if selected else Color(0.906, 0.851, 0.722, 1.0)
	sty.border_width_left   = 3 if selected else 2
	sty.border_width_top    = 3 if selected else 2
	sty.border_width_right  = 3 if selected else 2
	sty.border_width_bottom = 3 if selected else 2
	sty.border_color  = C_HEADER if selected else C_BORDER
	sty.corner_radius_top_left     = 5
	sty.corner_radius_top_right    = 5
	sty.corner_radius_bottom_right = 5
	sty.corner_radius_bottom_left  = 5
	panel.add_theme_stylebox_override("panel", sty)


# ─────────────────────────────────────────────────────────────
#  RIGHT PANEL — INFO
# ─────────────────────────────────────────────────────────────

func _clear_info() -> void:
	for c in info_vbox.get_children():
		c.queue_free()
	# Inner pad so placeholder also respects right margin
	var pad := _make_content_pad()
	var placeholder := Label.new()
	placeholder.text = "Select a character\nto view their details."
	placeholder.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	placeholder.add_theme_color_override("font_color", C_MUTED)
	placeholder.add_theme_font_size_override("font_size", 20)
	placeholder.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
	pad.add_child(placeholder)


func _show_info(c: Dictionary) -> void:
	for child in info_vbox.get_children():
		child.queue_free()

	# All content goes into this inner VBox which has right padding,
	# keeping it clear of the overlay scrollbar without moving the bar itself.
	var pad := _make_content_pad()

	# ── Row 1: Character (left col) + Characteristics (right col) ─
	var top_hbox := HBoxContainer.new()
	top_hbox.add_theme_constant_override("separation", 20)
	top_hbox.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	pad.add_child(top_hbox)

	var char_col := _make_info_col()
	top_hbox.add_child(char_col)

	var stat_col := _make_info_col()
	top_hbox.add_child(stat_col)

	# Character column
	_col_section(char_col, "Character")
	_col_row(char_col, "Name",      c.name)
	_col_row(char_col, "Level",     str(c.level))
	_col_row(char_col, "Race",      CharacterManager.race_name(c.race))
	_col_row(char_col, "Gender",    c.gender)
	_col_row(char_col, "Job",       CharacterManager.job_name(c.job))
	_col_row(char_col, "Expertise", CharacterManager.expertise_name(c.expertise))
	_col_row(char_col, "XP",        str(c.xp))

	# Characteristics column
	_col_section(stat_col, "Characteristics")
	for char_id : String in CharacterManager.characteristic_ids:
		_col_row(stat_col, CharacterManager.char_display_name(char_id),
				 str(c.characteristics.get(char_id, 100)))

	_pad_gap(pad, 10)

	# ── Row 2: Skills — two-column alphabetical split ─────────
	var sep := HSeparator.new()
	pad.add_child(sep)

	var skills_hdr := Label.new()
	skills_hdr.text = "Skills"
	skills_hdr.add_theme_font_size_override("font_size", 20)
	skills_hdr.add_theme_color_override("font_color", C_HEADER)
	pad.add_child(skills_hdr)

	var skills_hbox := HBoxContainer.new()
	skills_hbox.add_theme_constant_override("separation", 20)
	skills_hbox.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	pad.add_child(skills_hbox)

	var skill_col1 := _make_info_col()
	var skill_col2 := _make_info_col()
	skills_hbox.add_child(skill_col1)
	skills_hbox.add_child(skill_col2)

	var all_skills : Array[String] = []
	for sk : String in CharacterManager.skill_ids:
		all_skills.append(sk)

	var split : int = ceili(all_skills.size() / 2.0)
	for i : int in all_skills.size():
		var col : VBoxContainer = skill_col1 if i < split else skill_col2
		var skill_id : String = all_skills[i]
		_col_row_valued(col,
			CharacterManager.skill_display_name(skill_id),
			int(c.skills.get(skill_id, 0)))

	_pad_gap(pad, 16)

	# Scroll back to top whenever a new character is selected
	info_scroll.scroll_vertical = 0


# ─────────────────────────────────────────────────────────────
#  INFO COLUMN HELPERS
# ─────────────────────────────────────────────────────────────

## Create a VBoxContainer sized to fill its half of an HBoxContainer.
func _make_info_col() -> VBoxContainer:
	var vb := VBoxContainer.new()
	vb.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	vb.add_theme_constant_override("separation", 2)
	return vb


## Section header inside a column.
func _col_section(col: VBoxContainer, title: String) -> void:
	var sep := HSeparator.new()
	col.add_child(sep)
	var lbl := Label.new()
	lbl.text = title
	lbl.add_theme_font_size_override("font_size", 20)
	lbl.add_theme_color_override("font_color", C_HEADER)
	col.add_child(lbl)


## Key / value row inside a column.
func _col_row(col: VBoxContainer, key: String, value: String) -> void:
	var row := HBoxContainer.new()
	row.add_theme_constant_override("separation", 4)
	col.add_child(row)

	var k := Label.new()
	k.text = key
	k.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	k.add_theme_font_size_override("font_size", 18)
	k.add_theme_color_override("font_color", C_INK)
	row.add_child(k)

	var v := Label.new()
	v.text = value
	v.custom_minimum_size = Vector2(42, 0)
	v.horizontal_alignment = HORIZONTAL_ALIGNMENT_RIGHT
	v.add_theme_font_size_override("font_size", 18)
	v.add_theme_color_override("font_color", C_MUTED)
	row.add_child(v)


## Same as _col_row but colours the value green (positive) or red (negative).
## Zero uses the normal muted colour.
func _col_row_valued(col: VBoxContainer, key: String, num: int) -> void:
	var value_str : String
	var value_color : Color
	if num > 0:
		value_str   = "+%d" % num
		value_color = C_BONUS
	elif num < 0:
		value_str   = "%d" % num
		value_color = C_MALUS
	else:
		value_str   = "0"
		value_color = C_MUTED

	var row := HBoxContainer.new()
	row.add_theme_constant_override("separation", 4)
	col.add_child(row)

	var k := Label.new()
	k.text = key
	k.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	k.add_theme_font_size_override("font_size", 18)
	k.add_theme_color_override("font_color", C_INK)
	row.add_child(k)

	var v := Label.new()
	v.text = value_str
	v.custom_minimum_size = Vector2(42, 0)
	v.horizontal_alignment = HORIZONTAL_ALIGNMENT_RIGHT
	v.add_theme_font_size_override("font_size", 18)
	v.add_theme_color_override("font_color", value_color)
	row.add_child(v)


func _info_gap(h: float = 8.0) -> void:
	var s := Control.new()
	s.custom_minimum_size = Vector2(0, h)
	info_vbox.add_child(s)


## Creates a VBoxContainer with right padding inside info_vbox.
## All content rows go into this so they sit clear of the scrollbar.
func _make_content_pad() -> VBoxContainer:
	var margin := MarginContainer.new()
	margin.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	margin.add_theme_constant_override("margin_right", 20)
	info_vbox.add_child(margin)

	var vb := VBoxContainer.new()
	vb.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	vb.add_theme_constant_override("separation", 3)
	margin.add_child(vb)
	return vb


## Gap spacer appended directly to a content pad vbox.
func _pad_gap(pad: VBoxContainer, h: float = 8.0) -> void:
	var s := Control.new()
	s.custom_minimum_size = Vector2(0, h)
	pad.add_child(s)


# ─────────────────────────────────────────────────────────────
#  BUTTON STATE
# ─────────────────────────────────────────────────────────────

func _update_buttons() -> void:
	var has_sel := _selected_idx >= 0
	btn_delete_char.disabled = not has_sel
	btn_choose.disabled      = not has_sel


# ─────────────────────────────────────────────────────────────
#  BUTTON HANDLERS
# ─────────────────────────────────────────────────────────────

func _on_back() -> void:
	var t := create_tween()
	t.tween_property(self, "modulate:a", 0.0, 0.35)
	t.tween_callback(func() -> void:
		get_tree().change_scene_to_file(SCENE_MAIN)
	)


func _on_delete_pressed() -> void:
	if _selected_idx < 0:
		return
	# Populate the popup with the character's name then show it
	var c : Dictionary = CharacterManager.characters[_selected_idx]
	char_name_lbl.text = "\"%s\"" % str(c.get("name", "Unknown"))
	_show_popup()


func _show_popup() -> void:
	confirm_overlay.visible = true
	# Animate dialog in from slightly above
	var dialog := confirm_overlay.get_node("DialogPanel")
	dialog.modulate.a = 0.0
	dialog.position.y -= 12
	var t := create_tween()
	t.set_parallel(true)
	t.tween_property(dialog, "modulate:a",   1.0,  0.18)
	t.tween_property(dialog, "position:y",   dialog.position.y + 12, 0.18).set_ease(Tween.EASE_OUT)


func _close_popup() -> void:
	confirm_overlay.visible = false


func _on_confirm_delete() -> void:
	_close_popup()
	if _selected_idx < 0:
		return
	CharacterManager.delete_character(_selected_idx)
	_refresh_cards()
	_update_buttons()


func _on_choose() -> void:
	if _selected_idx < 0:
		return
	push_warning("CharactersScene: character chosen — index %d (game world not yet implemented)" % _selected_idx)


func _on_create() -> void:
	var t := create_tween()
	t.tween_property(self, "modulate:a", 0.0, 0.35)
	t.tween_callback(func() -> void:
		get_tree().change_scene_to_file("res://scenes/CharacterCreationScene.tscn")
	)
