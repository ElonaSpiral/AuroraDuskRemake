extends Node

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Settings Manager  (Autoload Singleton)
#  Godot 4.x  |  GDScript 2.0
#
#  Handles:
#    · Loading / saving all settings to user://aurora_dusk.cfg
#    · InputMap registration and keybind persistence
#    · Applying display settings (resolution / window mode / vsync / fps)
#    · Applying audio bus volumes
# ─────────────────────────────────────────────────────────────

const SAVE_PATH := "user://aurora_dusk.cfg"

# ── Default keybindings (physical keycodes) ───────────────────
const DEFAULT_BINDINGS : Dictionary = {
	"move_camera_up":    KEY_W,
	"move_camera_down":  KEY_S,
	"move_camera_left":  KEY_A,
	"move_camera_right": KEY_D,
	"pause_game":        KEY_SPACE,
	"open_build_menu":   KEY_B,
	"quick_save":        KEY_F5,
	"quick_load":        KEY_F9,
	"toggle_minimap":    KEY_M,
}

const ACTION_LABELS : Dictionary = {
	"move_camera_up":    "Move Camera Up",
	"move_camera_down":  "Move Camera Down",
	"move_camera_left":  "Move Camera Left",
	"move_camera_right": "Move Camera Right",
	"pause_game":        "Pause Game",
	"open_build_menu":   "Open Build Menu",
	"quick_save":        "Quick Save",
	"quick_load":        "Quick Load",
	"toggle_minimap":    "Toggle Minimap",
}

# ── Default settings ──────────────────────────────────────────
const DEFAULTS_GENERAL : Dictionary = {
	"master_volume":         100,
	"music_volume":           75,
	"sfx_volume":            100,
	"ambience_volume":       100,
	"language":                0,
	"open_last_tab":         true,
	"right_click_close":     true,
	"bg_blur":               false,
	"auto_scale_ui":         true,
	"secure_min_width":      true,
	"always_show_float_btn": false,
	"show_balloon_bg":       true,
	"show_tooltips":         true,
	"confirm_on_exit":       true,
}

const DEFAULTS_GRAPHICS : Dictionary = {
	"resolution_idx":       3,
	"window_mode":          0,
	"vsync":                true,
	"frame_limit":          60,
	"ui_scale":             100,
	"ui_brightness":        100,
	"ui_contrast":          100,
	"scroll_sensitivity":    70,
	"anti_aliasing":        true,
	"shadows":              true,
	"particle_effects":     true,
	"ambient_occlusion":    false,
	"screen_shake":         true,
	"gamma":                100,
	"show_fps":             false,
}

const DEFAULTS_INPUT : Dictionary = {
	"mouse_sensitivity":    50,
	"invert_mouse_y":       false,
	"double_click_speed":   50,
	"tooltip_delay":        30,
	"edge_scroll":          true,
	"edge_scroll_speed":    50,
	"scroll_zoom":          true,
	"zoom_speed":           50,
	"drag_select":          true,
	"middle_click_pan":     true,
}

const RESOLUTIONS : Array = [
	Vector2i(1280,  720),
	Vector2i(1366,  768),
	Vector2i(1600,  900),
	Vector2i(1920, 1080),
	Vector2i(2560, 1440),
	Vector2i(3840, 2160),
]

# ── Live dictionaries ─────────────────────────────────────────
var general  : Dictionary = {}
var graphics : Dictionary = {}
var input    : Dictionary = {}
var keybinds : Dictionary = {}   # action_name -> physical keycode (int)

var _cfg := ConfigFile.new()


# ─────────────────────────────────────────────────────────────
func _ready() -> void:
	_register_actions()
	load_all()


func _register_actions() -> void:
	for action : String in DEFAULT_BINDINGS.keys():
		if not InputMap.has_action(action):
			InputMap.add_action(action, 0.2)


# ─────────────────────────────────────────────────────────────
#  LOAD
# ─────────────────────────────────────────────────────────────

func load_all() -> void:
	_cfg.load(SAVE_PATH)   # errors are fine — file may not exist yet

	# General — load then clamp/validate
	general = {}
	for key : String in DEFAULTS_GENERAL.keys():
		var raw : Variant = _cfg.get_value("general", key, DEFAULTS_GENERAL[key])
		general[key] = _validated(key, raw, DEFAULTS_GENERAL)

	# Graphics — load then validate
	graphics = {}
	for key : String in DEFAULTS_GRAPHICS.keys():
		var raw : Variant = _cfg.get_value("graphics", key, DEFAULTS_GRAPHICS[key])
		graphics[key] = _validated(key, raw, DEFAULTS_GRAPHICS)

	# Input — load then validate
	input = {}
	for key : String in DEFAULTS_INPUT.keys():
		var raw : Variant = _cfg.get_value("input", key, DEFAULTS_INPUT[key])
		input[key] = _validated(key, raw, DEFAULTS_INPUT)

	# Keybinds
	keybinds = {}
	for action : String in DEFAULT_BINDINGS.keys():
		keybinds[action] = _cfg.get_value("keybinds", action, int(DEFAULT_BINDINGS[action]))

	_apply_keybinds_to_inputmap()
	_apply_audio()
	# Apply display settings (including Engine.max_fps) on every startup
	apply_graphics_display()


## Validates a loaded value against the expected default type and known ranges.
## Returns the clamped/corrected value, or the default if the type is wrong.
func _validated(key: String, value: Variant, defaults: Dictionary) -> Variant:
	var default : Variant = defaults[key]

	# Type mismatch → reset to default
	if typeof(value) != typeof(default):
		return default

	# Numeric range guards
	match key:
		"frame_limit":         return clampi(int(value),   10,  150)
		"ui_scale":            return clampi(int(value),   50,  200)
		"ui_brightness":       return clampi(int(value),   50,  150)
		"ui_contrast":         return clampi(int(value),   50,  150)
		"gamma":               return clampi(int(value),   50,  150)
		"scroll_sensitivity":  return clampi(int(value),   10,  100)
		"resolution_idx":      return clampi(int(value),    0,    5)
		"window_mode":         return clampi(int(value),    0,    2)
		"language":            return clampi(int(value),    0,    2)
		"mouse_sensitivity":   return clampi(int(value),   10,  100)
		"double_click_speed":  return clampi(int(value),   10,  100)
		"tooltip_delay":       return clampi(int(value),    0,  100)
		"edge_scroll_speed":   return clampi(int(value),   10,  100)
		"zoom_speed":          return clampi(int(value),   10,  100)
		"master_volume",\
		"music_volume",\
		"sfx_volume",\
		"ambience_volume":     return clampi(int(value),    0,  100)

	return value


# ─────────────────────────────────────────────────────────────
#  SAVE
# ─────────────────────────────────────────────────────────────

func save_general() -> void:
	for key : String in general.keys():
		_cfg.set_value("general", key, general[key])
	_cfg.save(SAVE_PATH)
	_apply_audio()


func save_graphics() -> void:
	for key : String in graphics.keys():
		_cfg.set_value("graphics", key, graphics[key])
	_cfg.save(SAVE_PATH)


func save_input() -> void:
	for key : String in input.keys():
		_cfg.set_value("input", key, input[key])
	_cfg.save(SAVE_PATH)


func save_keybinds() -> void:
	for action : String in keybinds.keys():
		_cfg.set_value("keybinds", action, keybinds[action])
	_cfg.save(SAVE_PATH)


func save_all() -> void:
	save_general()
	save_graphics()
	save_input()
	save_keybinds()


# ─────────────────────────────────────────────────────────────
#  APPLY DISPLAY SETTINGS  (called explicitly via Apply button)
# ─────────────────────────────────────────────────────────────

func apply_graphics_display() -> void:
	var mode     := graphics.get("window_mode",   0) as int
	var res_idx  := graphics.get("resolution_idx", 3) as int
	var do_vsync := graphics.get("vsync",          true) as bool
	var fps      := graphics.get("frame_limit",    60) as int

	match mode:
		0: # Windowed
			DisplayServer.window_set_flag(DisplayServer.WINDOW_FLAG_BORDERLESS, false)
			DisplayServer.window_set_mode(DisplayServer.WINDOW_MODE_WINDOWED)
			if res_idx >= 0 and res_idx < RESOLUTIONS.size():
				DisplayServer.window_set_size(RESOLUTIONS[res_idx])
		1: # Borderless
			DisplayServer.window_set_mode(DisplayServer.WINDOW_MODE_WINDOWED)
			DisplayServer.window_set_flag(DisplayServer.WINDOW_FLAG_BORDERLESS, true)
			DisplayServer.window_set_size(DisplayServer.screen_get_size())
			DisplayServer.window_set_position(Vector2i.ZERO)
		2: # Fullscreen
			DisplayServer.window_set_flag(DisplayServer.WINDOW_FLAG_BORDERLESS, false)
			DisplayServer.window_set_mode(DisplayServer.WINDOW_MODE_FULLSCREEN)

	DisplayServer.window_set_vsync_mode(
		DisplayServer.VSYNC_ENABLED if do_vsync else DisplayServer.VSYNC_DISABLED
	)
	Engine.max_fps = fps


# ─────────────────────────────────────────────────────────────
#  KEYBINDS
# ─────────────────────────────────────────────────────────────

## Updates a single keybind in memory and immediately applies to InputMap.
## Call save_keybinds() to persist to disk.
func set_keybind(action: String, physical_keycode: int) -> void:
	keybinds[action] = physical_keycode
	if not InputMap.has_action(action):
		InputMap.add_action(action, 0.2)
	InputMap.action_erase_events(action)
	var ev := InputEventKey.new()
	ev.physical_keycode = physical_keycode as Key
	InputMap.action_add_event(action, ev)


func _apply_keybinds_to_inputmap() -> void:
	for action : String in keybinds.keys():
		set_keybind(action, keybinds[action])


# ─────────────────────────────────────────────────────────────
#  AUDIO
# ─────────────────────────────────────────────────────────────

func _apply_audio() -> void:
	var bus_map := {
		"master_volume":   "Master",
		"music_volume":    "Music",
		"sfx_volume":      "SFX",
		"ambience_volume": "Ambience",
	}
	for key : String in bus_map.keys():
		var bus_name : String = bus_map[key]
		var idx := AudioServer.get_bus_index(bus_name)
		if idx < 0:
			continue
		var vol := general.get(key, 100) as float
		AudioServer.set_bus_volume_db(idx, _vol_to_db(vol))


static func _vol_to_db(vol_pct: float) -> float:
	if vol_pct <= 0.0:
		return -80.0
	return linear_to_db(vol_pct / 100.0)
