extends Control

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Options Scene
#  Godot 4.x  |  GDScript 2.0
#
#  Settings are loaded from SettingsManager on _ready, stored
#  in UI controls while the menu is open, then written back to
#  SettingsManager (and saved to disk) when Back is pressed.
#
#  Display settings (resolution / window mode / vsync / fps)
#  are only APPLIED to the OS when the "Apply Display" button
#  is clicked in the Graphics tab — preventing mid-session glitches.
#
#  Keybind listening: clicking a keybind button sets
#  _awaiting_keybind; _input() then captures the next key press
#  (Escape cancels). All input is blocked while listening.
# ─────────────────────────────────────────────────────────────

# ── Elin parchment colours ────────────────────────────────────
const C_INK    := Color(0.228, 0.145, 0.063, 1.0)
const C_HEADER := Color(0.420, 0.243, 0.071, 1.0)
const C_MUTED  := Color(0.490, 0.390, 0.240, 0.85)
const C_PARCH  := Color(0.816, 0.753, 0.565, 1.0)
const C_BORDER := Color(0.380, 0.259, 0.125, 0.75)

# ── @onready — paths match OptionsScene.tscn ─────────────────
@onready var tab_container : TabContainer = $MainPanel/VBox/TabContainer
@onready var btn_reset     : Button       = $MainPanel/VBox/BottomBar/BottomMargin/InnerHBox/BtnReset
@onready var btn_apply     : Button       = $MainPanel/VBox/BottomBar/BottomMargin/InnerHBox/BtnApply
@onready var btn_close     : Button       = $MainPanel/VBox/TitleBar/TitleHBox/BtnClose
@onready var btn_back      : Button       = $BackPanel/BtnBack

# ── Control dictionaries: key → widget ───────────────────────
var _ctrl := {
	"general":  {} as Dictionary,
	"graphics": {} as Dictionary,
	"input":    {} as Dictionary,
}

# ── Keybind state ─────────────────────────────────────────────
var _awaiting_keybind := ""
var _keybind_btns     := {} as Dictionary   # action_name -> Button


# ─────────────────────────────────────────────────────────────
#  LIFECYCLE
# ─────────────────────────────────────────────────────────────

func _ready() -> void:
	_style_titlebar()
	_build_general_tab()
	_build_graphics_tab()
	_build_input_tab()

	btn_reset.pressed.connect(_on_reset_pressed)
	btn_apply.pressed.connect(_on_apply_display_pressed)
	btn_close.pressed.connect(_on_back_pressed)
	btn_back.pressed.connect(_on_back_pressed)
	tab_container.tab_changed.connect(_on_tab_changed)

	_load_from_manager()
	_on_tab_changed(0)

	# Hover scale on all named buttons
	for btn : Button in [btn_reset, btn_apply, btn_close, btn_back]:
		UIEffects.apply_hover(btn)

	modulate.a = 0.0
	create_tween().tween_property(self, "modulate:a", 1.0, 0.40)


# Block all input while waiting for a keybind key press
func _input(event: InputEvent) -> void:
	if _awaiting_keybind.is_empty():
		return
	# Consume everything while listening
	get_viewport().set_input_as_handled()

	if event is InputEventKey and (event as InputEventKey).pressed \
			and not (event as InputEventKey).echo:
		var keycode := (event as InputEventKey).physical_keycode
		if keycode == KEY_ESCAPE:
			_cancel_keybind()
		else:
			_confirm_keybind(keycode)


# ─────────────────────────────────────────────────────────────
#  TAB BUILDERS
# ─────────────────────────────────────────────────────────────

func _build_general_tab() -> void:
	var vb := _tab("General")

	_section(vb, "Audio")
	_ctrl.general["master_volume"]     = _slider(vb, "Master Volume",  0, 100, 5, 100, "%d%%")
	_ctrl.general["music_volume"]      = _slider(vb, "Music",          0, 100, 5,  75, "%d%%")
	_ctrl.general["sfx_volume"]        = _slider(vb, "SFX",            0, 100, 5, 100, "%d%%")
	_ctrl.general["ambience_volume"]   = _slider(vb, "Ambience",       0, 100, 5, 100, "%d%%")
	_gap(vb, 10)

	_section(vb, "Language")
	_ctrl.general["language"] = _option(
		vb, "Interface Language",
		["English (English)", "日本語 (Japanese)", "中文 (Chinese)"],
		0
	)
	_gap(vb, 10)

	_section(vb, "User Interface")
	var ui_checks := _check_cols(vb, [
		["open_last_tab",         "Open last selected tab",                    true ],
		["right_click_close",     "Right click to close window",               true ],
		["bg_blur",               "Background blur effect",                    false],
		["auto_scale_ui",         "Auto scale UI",                             true ],
		["secure_min_width",      "Secure minimum screen width",               true ],
		["always_show_float_btn", "Always show floating buttons in containers",false],
		["show_balloon_bg",       "Show balloon background image",             true ],
		["show_tooltips",         "Show tooltips",                             true ],
		["confirm_on_exit",       "Confirm before exiting game",               true ],
	])
	_ctrl.general.merge(ui_checks)
	_gap(vb, 20)


func _build_graphics_tab() -> void:
	var vb := _tab("Graphics")

	_section(vb, "Display  —  click Apply Display after changing these")
	_ctrl.graphics["resolution_idx"] = _option(vb, "Resolution",   _res_labels(), 3)
	_ctrl.graphics["window_mode"]    = _option(vb, "Window Mode",
		["Windowed", "Borderless Window", "Fullscreen"], 0)
	_ctrl.graphics["vsync"]          = _check( vb, "V-Sync",                        true)
	_ctrl.graphics["frame_limit"]    = _slider(vb, "Frame Rate Limit", 10, 150, 5, 60, "%d fps")
	_ctrl.graphics["show_fps"]       = _check( vb, "Show FPS indicator",             false)
	_gap(vb, 10)

	_section(vb, "UI Appearance")
	_ctrl.graphics["ui_scale"]           = _slider(vb, "UI Scale",                  50, 200, 5, 100, "%d%%")
	_ctrl.graphics["ui_brightness"]      = _slider(vb, "UI Brightness",             50, 150, 5, 100, "%d%%")
	_ctrl.graphics["ui_contrast"]        = _slider(vb, "UI Contrast",               50, 150, 5, 100, "%d%%")
	_ctrl.graphics["scroll_sensitivity"] = _slider(vb, "Wheel Scroll Sensitivity",  10, 100, 5,  70,  "%d")
	_gap(vb, 10)

	_section(vb, "Rendering")
	var render_checks := _check_cols(vb, [
		["anti_aliasing",     "Anti-Aliasing",       true ],
		["shadows",           "Shadows",             true ],
		["particle_effects",  "Particle Effects",    true ],
		["ambient_occlusion", "Ambient Occlusion",   false],
		["screen_shake",      "Screen Shake Effects",true ],
	])
	_ctrl.graphics.merge(render_checks)
	_ctrl.graphics["gamma"] = _slider(vb, "Gamma", 50, 150, 5, 100, "%d%%")
	_gap(vb, 20)


func _build_input_tab() -> void:
	var vb := _tab("Input")

	_section(vb, "Mouse")
	_ctrl.input["mouse_sensitivity"]  = _slider(vb, "Mouse Sensitivity",  10, 100, 5, 50, "%d")
	_ctrl.input["invert_mouse_y"]     = _check( vb, "Invert Mouse Y-Axis",              false)
	_ctrl.input["double_click_speed"] = _slider(vb, "Double-Click Speed", 10, 100, 5, 50, "%d")
	_ctrl.input["tooltip_delay"]      = _slider(vb, "Tooltip Delay",       0, 100, 5, 30, "%d")
	_gap(vb, 10)

	_section(vb, "Camera & Scrolling")
	var cam_checks := _check_cols(vb, [
		["edge_scroll",      "Edge Scrolling",      true],
		["scroll_zoom",      "Scroll Wheel Zoom",   true],
		["drag_select",      "Drag-to-Select",      true],
		["middle_click_pan", "Middle Click to Pan", true],
	])
	_ctrl.input.merge(cam_checks)
	_ctrl.input["edge_scroll_speed"] = _slider(vb, "Edge Scroll Speed", 10, 100, 5, 50, "%d")
	_ctrl.input["zoom_speed"]        = _slider(vb, "Zoom Speed",        10, 100, 5, 50, "%d")
	_gap(vb, 14)

	_section(vb, "Keybindings")
	_keybind_hint(vb)
	_gap(vb, 6)
	_keybind_header(vb)
	_gap(vb, 4)
	for action : String in SettingsManager.ACTION_LABELS.keys():
		_keybind_row(vb, action, SettingsManager.ACTION_LABELS[action])
	_gap(vb, 20)


# ─────────────────────────────────────────────────────────────
#  WIDGET FACTORY
# ─────────────────────────────────────────────────────────────

func _tab(name: String) -> VBoxContainer:
	var scroll := ScrollContainer.new()
	scroll.name = name
	scroll.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	scroll.size_flags_vertical   = Control.SIZE_FILL | Control.SIZE_EXPAND
	scroll.horizontal_scroll_mode = ScrollContainer.SCROLL_MODE_DISABLED
	tab_container.add_child(scroll)

	var margin := MarginContainer.new()
	margin.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	margin.add_theme_constant_override("margin_left",   22)
	margin.add_theme_constant_override("margin_top",    14)
	margin.add_theme_constant_override("margin_right",  22)
	margin.add_theme_constant_override("margin_bottom", 14)
	scroll.add_child(margin)

	var vb := VBoxContainer.new()
	vb.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	vb.add_theme_constant_override("separation", 3)
	margin.add_child(vb)
	return vb


func _section(parent: VBoxContainer, title: String) -> void:
	var sep := HSeparator.new()
	parent.add_child(sep)
	var lbl := Label.new()
	lbl.text = title
	lbl.add_theme_font_size_override("font_size", 21)
	lbl.add_theme_color_override("font_color", C_HEADER)
	parent.add_child(lbl)
	_gap(parent, 4)


func _slider(parent: VBoxContainer, label: String,
		min_v: float, max_v: float, step: float,
		default: float, fmt: String) -> HSlider:
	var row := HBoxContainer.new()
	row.add_theme_constant_override("separation", 14)
	parent.add_child(row)

	var lbl := Label.new()
	lbl.text = label + "  (%s)" % (fmt % default)
	lbl.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	lbl.add_theme_color_override("font_color", C_INK)
	lbl.add_theme_font_size_override("font_size", 20)
	row.add_child(lbl)

	var s := HSlider.new()
	s.custom_minimum_size = Vector2(280, 30)
	s.min_value = min_v
	s.max_value = max_v
	s.step      = step
	s.value     = default
	row.add_child(s)

	s.value_changed.connect(func(v: float) -> void:
		lbl.text = label + "  (%s)" % (fmt % v)
	)
	return s


func _check(parent: Control, label: String, default: bool) -> CheckBox:
	var cb := CheckBox.new()
	# No "  " prefix — leading spaces only affect line 1 when text wraps,
	# making wrapped lines appear offset to the left.
	cb.text              = label
	cb.button_pressed    = default
	# Fill the column so sizing is correct on the very first layout pass.
	# A fixed min-height keeps the row consistent; autowrap handles long labels.
	cb.custom_minimum_size       = Vector2(0, 34)
	cb.size_flags_horizontal     = Control.SIZE_FILL | Control.SIZE_EXPAND
	cb.autowrap_mode             = TextServer.AUTOWRAP_WORD_SMART
	cb.add_theme_color_override("font_color", C_INK)
	cb.add_theme_font_size_override("font_size", 20)
	parent.add_child(cb)
	return cb


## Place a list of checkboxes in a 2-column layout.
## items: Array of [ctrl_key: String, label: String, default: bool]
## Returns Dictionary of ctrl_key -> CheckBox, ready to merge into _ctrl.*
func _check_cols(parent: VBoxContainer, items: Array) -> Dictionary:
	var hbox := HBoxContainer.new()
	hbox.add_theme_constant_override("separation", 16)
	parent.add_child(hbox)

	var col_l := VBoxContainer.new()
	var col_r := VBoxContainer.new()
	col_l.add_theme_constant_override("separation", 4)
	col_r.add_theme_constant_override("separation", 4)
	# Each column fills half the available width evenly
	col_l.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	col_r.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	hbox.add_child(col_l)
	hbox.add_child(col_r)

	# First ceil(n/2) items go left, the rest go right
	var split : int = ceili(items.size() / 2.0)
	var result := {}
	for i : int in items.size():
		var item : Array = items[i]
		var col  : VBoxContainer = col_l if i < split else col_r
		result[item[0]] = _check(col, item[1], item[2])
	return result


func _option(parent: VBoxContainer, label: String,
		items: Array, default: int) -> OptionButton:
	var row := HBoxContainer.new()
	row.add_theme_constant_override("separation", 14)
	parent.add_child(row)

	var lbl := Label.new()
	lbl.text = label
	lbl.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	lbl.add_theme_color_override("font_color", C_INK)
	lbl.add_theme_font_size_override("font_size", 20)
	row.add_child(lbl)

	var opt := OptionButton.new()
	opt.custom_minimum_size = Vector2(280, 36)
	for item : String in items:
		opt.add_item(item)
	opt.select(default)
	row.add_child(opt)
	return opt


func _gap(parent: VBoxContainer, height: float = 8.0) -> void:
	var s := Control.new()
	s.custom_minimum_size = Vector2(0, height)
	parent.add_child(s)


# ── Keybind-specific widgets ──────────────────────────────────

func _keybind_hint(parent: VBoxContainer) -> void:
	var lbl := Label.new()
	lbl.text = "    Click a binding to change it.  Press Escape to cancel."
	lbl.add_theme_color_override("font_color", C_MUTED)
	lbl.add_theme_font_size_override("font_size", 18)
	lbl.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
	parent.add_child(lbl)


func _keybind_header(parent: VBoxContainer) -> void:
	var sep := HSeparator.new()
	parent.add_child(sep)

	var row := HBoxContainer.new()
	row.add_theme_constant_override("separation", 8)
	parent.add_child(row)

	var lbl_action := Label.new()
	lbl_action.text = "    Action"
	lbl_action.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	lbl_action.add_theme_color_override("font_color", C_HEADER)
	lbl_action.add_theme_font_size_override("font_size", 19)
	row.add_child(lbl_action)

	var lbl_key := Label.new()
	lbl_key.text = "Primary Binding"
	lbl_key.custom_minimum_size = Vector2(220, 0)
	lbl_key.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	lbl_key.add_theme_color_override("font_color", C_HEADER)
	lbl_key.add_theme_font_size_override("font_size", 19)
	row.add_child(lbl_key)

	var sep2 := HSeparator.new()
	parent.add_child(sep2)


func _keybind_row(parent: VBoxContainer, action: String, display_name: String) -> void:
	var row := HBoxContainer.new()
	row.add_theme_constant_override("separation", 8)
	parent.add_child(row)

	var lbl := Label.new()
	lbl.text = "    " + display_name
	lbl.size_flags_horizontal = Control.SIZE_FILL | Control.SIZE_EXPAND
	lbl.add_theme_color_override("font_color", C_INK)
	lbl.add_theme_font_size_override("font_size", 20)
	row.add_child(lbl)

	var btn := Button.new()
	btn.custom_minimum_size = Vector2(220, 36)
	btn.add_theme_font_size_override("font_size", 18)
	# Initial text set after manager loads
	btn.text = _key_name(SettingsManager.keybinds.get(action,
		int(SettingsManager.DEFAULT_BINDINGS.get(action, KEY_NONE))))
	row.add_child(btn)
	_keybind_btns[action] = btn

	btn.pressed.connect(func() -> void:
		if not _awaiting_keybind.is_empty():
			_cancel_keybind()
		_awaiting_keybind = action
		btn.text = "[ Press any key... ]"
	)
	UIEffects.apply_hover(btn)


# ─────────────────────────────────────────────────────────────
#  KEYBIND LOGIC
# ─────────────────────────────────────────────────────────────

func _cancel_keybind() -> void:
	if _awaiting_keybind.is_empty():
		return
	var keycode : int = SettingsManager.keybinds.get(_awaiting_keybind,
		int(SettingsManager.DEFAULT_BINDINGS.get(_awaiting_keybind, KEY_NONE)))
	_keybind_btns[_awaiting_keybind].text = _key_name(keycode)
	_awaiting_keybind = ""


func _confirm_keybind(physical_keycode: int) -> void:
	var action := _awaiting_keybind
	_awaiting_keybind = ""
	SettingsManager.set_keybind(action, physical_keycode)
	_keybind_btns[action].text = _key_name(physical_keycode)


func _key_name(physical_keycode: int) -> String:
	if physical_keycode == 0 or physical_keycode == KEY_NONE:
		return "—"
	var keycode := DisplayServer.keyboard_get_keycode_from_physical(physical_keycode)
	if keycode == KEY_NONE or keycode == 0:
		keycode = physical_keycode
	return OS.get_keycode_string(keycode)


# ─────────────────────────────────────────────────────────────
#  LOAD / SAVE
# ─────────────────────────────────────────────────────────────

func _load_from_manager() -> void:
	_apply_dict_to_ctrl(_ctrl.general,  SettingsManager.general)
	_apply_dict_to_ctrl(_ctrl.graphics, SettingsManager.graphics)
	_apply_dict_to_ctrl(_ctrl.input,    SettingsManager.input)
	# Keybind buttons are initialised per-action in _keybind_row


func _apply_dict_to_ctrl(ctrl_dict: Dictionary, values: Dictionary) -> void:
	for key : String in ctrl_dict.keys():
		if not values.has(key):
			continue
		_set_ctrl(ctrl_dict[key], values[key])


func _set_ctrl(ctrl: Control, value: Variant) -> void:
	if   ctrl is HSlider:      ctrl.value          = float(value)
	elif ctrl is CheckBox:     ctrl.button_pressed  = bool(value)
	elif ctrl is OptionButton: ctrl.select(int(value))


func _read_ctrl(ctrl: Control) -> Variant:
	if   ctrl is HSlider:      return ctrl.value
	elif ctrl is CheckBox:     return ctrl.button_pressed
	elif ctrl is OptionButton: return ctrl.selected
	return null


func _push_to_manager() -> void:
	for key : String in _ctrl.general.keys():
		SettingsManager.general[key] = _read_ctrl(_ctrl.general[key])
	for key : String in _ctrl.graphics.keys():
		SettingsManager.graphics[key] = _read_ctrl(_ctrl.graphics[key])
	for key : String in _ctrl.input.keys():
		SettingsManager.input[key] = _read_ctrl(_ctrl.input[key])
	# Keybinds are already live in SettingsManager via set_keybind()
	SettingsManager.save_all()


# ─────────────────────────────────────────────────────────────
#  BUTTON HANDLERS
# ─────────────────────────────────────────────────────────────

func _on_apply_display_pressed() -> void:
	# Save current graphics controls to manager then apply to OS
	for key : String in _ctrl.graphics.keys():
		SettingsManager.graphics[key] = _read_ctrl(_ctrl.graphics[key])
	SettingsManager.save_graphics()
	SettingsManager.apply_graphics_display()


func _on_reset_pressed() -> void:
	match tab_container.current_tab:
		0: _reset_tab(_ctrl.general,  SettingsManager.DEFAULTS_GENERAL)
		1: _reset_tab(_ctrl.graphics, SettingsManager.DEFAULTS_GRAPHICS)
		2: _reset_input_tab()


func _reset_tab(ctrl_dict: Dictionary, defaults: Dictionary) -> void:
	for key : String in defaults.keys():
		if ctrl_dict.has(key):
			_set_ctrl(ctrl_dict[key], defaults[key])


func _reset_input_tab() -> void:
	_reset_tab(_ctrl.input, SettingsManager.DEFAULTS_INPUT)
	for action : String in _keybind_btns.keys():
		var default_key := int(SettingsManager.DEFAULT_BINDINGS.get(action, KEY_NONE))
		SettingsManager.set_keybind(action, default_key)
		_keybind_btns[action].text = _key_name(default_key)


func _on_tab_changed(idx: int) -> void:
	var names : Array[String] = ["General", "Graphics", "Input"]
	var tab_name : String = names[idx] if idx < names.size() else "Tab"
	btn_reset.text    = "⟳  Reset %s Config" % tab_name
	btn_apply.visible = (idx == 1)


func _on_back_pressed() -> void:
	if not _awaiting_keybind.is_empty():
		_cancel_keybind()
		return
	_push_to_manager()
	FPSOverlay.refresh()
	var t := create_tween()
	t.tween_property(self, "modulate:a", 0.0, 0.35)
	t.tween_callback(func() -> void:
		get_tree().change_scene_to_file("res://scenes/MainMenu.tscn")
	)


# ─────────────────────────────────────────────────────────────
#  HELPERS
# ─────────────────────────────────────────────────────────────

func _style_titlebar() -> void:
	var sty := StyleBoxFlat.new()
	sty.bg_color              = C_PARCH
	sty.border_width_bottom   = 2
	sty.border_color          = C_BORDER
	sty.content_margin_left   = 12
	sty.content_margin_right  = 12
	sty.content_margin_top    = 6
	sty.content_margin_bottom = 6
	($MainPanel/VBox/TitleBar as PanelContainer).add_theme_stylebox_override("panel", sty)


func _res_labels() -> Array:
	var out : Array = []
	for r : Vector2i in SettingsManager.RESOLUTIONS:
		out.append("%d × %d" % [r.x, r.y])
	return out
