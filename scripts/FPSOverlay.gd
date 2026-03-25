extends CanvasLayer

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — FPS Overlay  (Autoload)
#  Godot 4.x  |  GDScript 2.0
#
#  Renders a lime-green FPS counter in the top-right corner,
#  identical in spirit to Steam's in-game FPS counter.
#  Visibility is driven by SettingsManager.graphics["show_fps"].
# ─────────────────────────────────────────────────────────────

const C_FPS := Color(0.20, 1.00, 0.10, 1.0)   # Steam-style lime green

var _label : Label


func _ready() -> void:
	# Render above everything else
	layer = 128

	_label = Label.new()
	_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_RIGHT
	_label.vertical_alignment   = VERTICAL_ALIGNMENT_TOP
	_label.add_theme_font_size_override("font_size", 18)
	_label.add_theme_color_override("font_color", C_FPS)
	# Subtle black shadow for readability on any background
	_label.add_theme_color_override("font_shadow_color", Color(0, 0, 0, 0.85))
	_label.add_theme_constant_override("shadow_offset_x", 1)
	_label.add_theme_constant_override("shadow_offset_y", 1)

	# Anchor to top-right corner of the viewport
	_label.set_anchors_preset(Control.PRESET_TOP_RIGHT)
	_label.offset_left   = -120.0
	_label.offset_top    =   6.0
	_label.offset_right  =  -8.0
	_label.offset_bottom =  30.0

	add_child(_label)
	_apply_visibility()


func _process(_delta: float) -> void:
	if not _label.visible:
		return
	_label.text = "%d FPS" % Engine.get_frames_per_second()


## Called by SettingsManager / OptionsScene whenever the setting changes.
func refresh() -> void:
	_apply_visibility()


func _apply_visibility() -> void:
	var _fps_visible : bool = bool(SettingsManager.graphics.get("show_fps", false))
	_label.visible = _fps_visible
