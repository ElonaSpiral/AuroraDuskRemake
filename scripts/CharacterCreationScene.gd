extends Control

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Character Creation Scene
#  Godot 4.x  |  GDScript 2.0
# ─────────────────────────────────────────────────────────────

const SCENE_CHARS := "res://scenes/CharactersScene.tscn"

const C_INK    := Color(0.228, 0.145, 0.063, 1.0)
const C_HEADER := Color(0.420, 0.243, 0.071, 1.0)
const C_MUTED  := Color(0.490, 0.390, 0.240, 0.85)


# ── Stick figure drawn inside the appearance panel ────────────
class StickFigure extends Control:
	var fig_color := Color(0.228, 0.145, 0.063, 0.80)

	func _draw() -> void:
		var cx  := size.x * 0.5
		var top := size.y * 0.06
		var s   := minf(size.x, size.y) * 0.40
		var lw  := maxf(2.0, s * 0.07)

		var head_r    := s * 0.28
		draw_arc(Vector2(cx, top + head_r), head_r, 0.0, TAU, 40, fig_color, lw)

		var neck_top  := top + head_r * 2.0
		var torso_bot := neck_top + s * 0.55
		draw_line(Vector2(cx, neck_top), Vector2(cx, torso_bot), fig_color, lw)

		var shoulder_y := neck_top + s * 0.12
		var arm_len    := s * 0.44
		draw_line(Vector2(cx - arm_len, shoulder_y + s * 0.25), Vector2(cx, shoulder_y), fig_color, lw)
		draw_line(Vector2(cx, shoulder_y), Vector2(cx + arm_len, shoulder_y + s * 0.25), fig_color, lw)

		draw_line(Vector2(cx, torso_bot), Vector2(cx - s * 0.32, torso_bot + s * 0.55), fig_color, lw)
		draw_line(Vector2(cx, torso_bot), Vector2(cx + s * 0.32, torso_bot + s * 0.55), fig_color, lw)


# ── Node refs ──────────────────────────────────────────────────
@onready var txt_name      : LineEdit     = $MainHBox/LeftCol/FormPanel/FormMargin/FormVBox/NameRow/TxtName
@onready var opt_race      : OptionButton = $MainHBox/LeftCol/FormPanel/FormMargin/FormVBox/RaceRow/OptRace
@onready var opt_gender    : OptionButton = $MainHBox/LeftCol/FormPanel/FormMargin/FormVBox/GenderRow/OptGender
@onready var opt_job       : OptionButton = $MainHBox/LeftCol/FormPanel/FormMargin/FormVBox/JobRow/OptJob
@onready var opt_expertise : OptionButton = $MainHBox/LeftCol/FormPanel/FormMargin/FormVBox/ExpertiseRow/OptExpertise
@onready var lbl_lore      : Label        = $MainHBox/LeftCol/LorePanel/LoreMargin/LoreScroll/LoreLbl
@onready var stat_vbox     : VBoxContainer= $MainHBox/MidCol/StatPanel/StatMargin/StatScroll/StatVBox
@onready var appearance_box: Control      = $MainHBox/RightCol/RightPanel/RightMargin/RightVBox/AppearanceSection/AppearanceBox
@onready var lbl_error     : Label        = $BottomBar/LblError
@onready var btn_confirm   : Button       = $BottomBar/BtnConfirm
@onready var btn_back      : Button       = $BackPanel/BtnBack


# ─────────────────────────────────────────────────────────────
func _ready() -> void:
	_populate_dropdowns()
	_build_stick_figure()
	_refresh_info()

	opt_race.item_selected.connect(     func(_i: int) -> void: _refresh_info())
	opt_job.item_selected.connect(      func(_i: int) -> void: _refresh_info())
	opt_expertise.item_selected.connect(func(_i: int) -> void: _refresh_info())
	btn_confirm.pressed.connect(_on_confirm)
	btn_back.pressed.connect(_on_back)
	UIEffects.apply_hover(btn_confirm)
	UIEffects.apply_hover(btn_back)

	modulate.a = 0.0
	create_tween().tween_property(self, "modulate:a", 1.0, 0.40)


func _populate_dropdowns() -> void:
	for r_id : String in CharacterManager.race_ids:
		opt_race.add_item(CharacterManager.race_name(r_id))
	for g : String in ["Male", "Female", "Other"]:
		opt_gender.add_item(g)
	for j_id : String in CharacterManager.job_ids:
		opt_job.add_item(CharacterManager.job_name(j_id))
	for e_id : String in CharacterManager.expertise_ids:
		opt_expertise.add_item(CharacterManager.expertise_name(e_id))


func _build_stick_figure() -> void:
	var fig := StickFigure.new()
	fig.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	fig.size_flags_vertical   = Control.SIZE_FILL | Control.SIZE_EXPAND
	appearance_box.add_child(fig)


func _current_race_id() -> String:
	var idx := opt_race.selected
	return CharacterManager.race_ids[idx] if idx >= 0 and idx < CharacterManager.race_ids.size() else "human"

func _current_job_id() -> String:
	var idx := opt_job.selected
	return CharacterManager.job_ids[idx] if idx >= 0 and idx < CharacterManager.job_ids.size() else "none"

func _current_expertise_id() -> String:
	var idx := opt_expertise.selected
	return CharacterManager.expertise_ids[idx] if idx >= 0 and idx < CharacterManager.expertise_ids.size() else "none"


func _refresh_info() -> void:
	var race_id := _current_race_id()
	lbl_lore.text = CharacterManager.race_description(race_id)

	for c in stat_vbox.get_children():
		c.queue_free()

	_stat_header("Starting characteristics:")

	# Build a preview character to show combined modifiers
	var preview := CharacterManager.make_character(
		"preview", race_id, "Male", _current_job_id(), _current_expertise_id()
	)

	for char_id : String in CharacterManager.characteristic_ids:
		var val : int = int(preview.characteristics.get(char_id, 100))
		_stat_row(CharacterManager.char_display_name(char_id), str(val))


func _stat_header(title: String) -> void:
	var lbl := Label.new()
	lbl.text = title
	lbl.add_theme_font_size_override("font_size", 19)
	lbl.add_theme_color_override("font_color", C_HEADER)
	stat_vbox.add_child(lbl)
	stat_vbox.add_child(HSeparator.new())


func _stat_row(key: String, value: String) -> void:
	var row := HBoxContainer.new()
	stat_vbox.add_child(row)

	var k := Label.new()
	k.text = key + " :"
	k.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	k.add_theme_font_size_override("font_size", 18)
	k.add_theme_color_override("font_color", C_INK)
	row.add_child(k)

	var v := Label.new()
	v.text = value
	v.custom_minimum_size = Vector2(48, 0)
	v.horizontal_alignment = HORIZONTAL_ALIGNMENT_RIGHT
	v.add_theme_font_size_override("font_size", 18)
	v.add_theme_color_override("font_color", C_MUTED)
	row.add_child(v)


func _on_confirm() -> void:
	var name_val : String = txt_name.text.strip_edges()
	if name_val.is_empty():
		lbl_error.text = "Please enter a name for your character."
		return
	if name_val.length() < 2:
		lbl_error.text = "Name must be at least 2 characters."
		return
	lbl_error.text = ""

	var c := CharacterManager.make_character(
		name_val,
		_current_race_id(),
		opt_gender.get_item_text(opt_gender.selected),
		_current_job_id(),
		_current_expertise_id(),
	)
	CharacterManager.add_character(c)

	var t := create_tween()
	t.tween_property(self, "modulate:a", 0.0, 0.35)
	t.tween_callback(func() -> void:
		get_tree().change_scene_to_file(SCENE_CHARS)
	)


func _on_back() -> void:
	var t := create_tween()
	t.tween_property(self, "modulate:a", 0.0, 0.35)
	t.tween_callback(func() -> void:
		get_tree().change_scene_to_file(SCENE_CHARS)
	)
