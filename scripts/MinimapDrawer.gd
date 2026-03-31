# MinimapDrawer.gd
# Optimized minimap that uses the original map PNG for background

extends Control

signal camera_move_requested(world_pos: Vector2)

var _minimap_texture: Texture2D = null
var _viewport_rect: Rect2 = Rect2()
var _dragging: bool = false

var map_w: int = 0
var map_h: int = 0


func setup(original_map_png_path: String, w: int, h: int) -> void:
	map_w = w
	map_h = h
	
	# Load the original map PNG (much lighter than chunks)
	if FileAccess.file_exists(original_map_png_path):
		_minimap_texture = load(original_map_png_path)
		print("MinimapDrawer: Loaded original map PNG for minimap")
	else:
		push_warning("MinimapDrawer: Original map PNG not found at " + original_map_png_path)
	
	queue_redraw()


## Call this every frame from WorldScene
func update_viewport(camera: Camera2D, world_size: Vector2) -> void:
	if map_w == 0 or map_h == 0 or world_size.x == 0 or not _minimap_texture:
		return

	var cw := size.x
	var ch := size.y

	var vp_world := camera.get_viewport_rect().size / camera.zoom
	var cam_world := camera.position
	var tl_world := cam_world - vp_world * 0.5

	var scale_x := cw / world_size.x
	var scale_y := ch / world_size.y

	_viewport_rect = Rect2(
		tl_world.x * scale_x,
		tl_world.y * scale_y,
		vp_world.x * scale_x,
		vp_world.y * scale_y
	)
	queue_redraw()


# ─────────────────────────────────────────────────────────────
#  INPUT
# ─────────────────────────────────────────────────────────────

func _gui_input(event: InputEvent) -> void:
	if map_w == 0 or map_h == 0:
		return

	if event is InputEventMouseButton:
		var mb := event as InputEventMouseButton
		if mb.button_index == MOUSE_BUTTON_LEFT:
			_dragging = mb.pressed
			if mb.pressed:
				_emit_camera_move(mb.position)

	elif event is InputEventMouseMotion and _dragging:
		_emit_camera_move((event as InputEventMouseMotion).position)


func _emit_camera_move(minimap_pos: Vector2) -> void:
	var fx := clampf(minimap_pos.x / size.x, 0.0, 1.0)
	var fy := clampf(minimap_pos.y / size.y, 0.0, 1.0)
	camera_move_requested.emit(Vector2(fx, fy))


# ─────────────────────────────────────────────────────────────
#  DRAWING - Now very cheap
# ─────────────────────────────────────────────────────────────

func _draw() -> void:
	if not _minimap_texture:
		return

	# Draw the full minimap texture (single draw call)
	draw_texture_rect(_minimap_texture, Rect2(0, 0, size.x, size.y), false)

	# Draw viewport rectangle
	if _viewport_rect.size.x > 0:
		# Semi-transparent fill
		draw_rect(_viewport_rect, Color(1, 1, 1, 0.12))
		# White border
		draw_rect(_viewport_rect, Color(1, 1, 1, 0.85), false, 1.5)

	# Outer border
	draw_rect(Rect2(0, 0, size.x, size.y), Color(0.38, 0.26, 0.125, 0.75), false, 1.5)


# Optional: Clear when changing maps
func clear() -> void:
	_minimap_texture = null
	_viewport_rect = Rect2()
	queue_redraw()
