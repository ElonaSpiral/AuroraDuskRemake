# MinimapDrawer.gd
# Optimized minimap using original map PNG + click/drag panning + correct aspect ratio

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
	_minimap_texture = null
	
	if FileAccess.file_exists(original_map_png_path):
		var loaded = load(original_map_png_path)
		if loaded is Texture2D:
			_minimap_texture = loaded
		elif loaded is Image:
			_minimap_texture = ImageTexture.create_from_image(loaded)
	
	# Force correct aspect ratio for the control itself
	if map_w > 0 and map_h > 0:
		var ratio = float(map_w) / float(map_h)
		custom_minimum_size = Vector2(240, 240 / ratio)   # tall for corridor, wide for square maps
	
	queue_redraw()


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


func _gui_input(event: InputEvent) -> void:
	if not _minimap_texture:
		return

	if event is InputEventMouseButton and event.button_index == MOUSE_BUTTON_LEFT:
		if event.pressed:
			_dragging = true
			_handle_minimap_click(event.position)
		else:
			_dragging = false

	elif event is InputEventMouseMotion and _dragging:
		_handle_minimap_click(event.position)


func _handle_minimap_click(local_pos: Vector2) -> void:
	if map_w == 0 or map_h == 0:
		return
	
	var world_pos := Vector2(
		(local_pos.x / size.x) * (map_w * 64.0),
		(local_pos.y / size.y) * (map_h * 64.0)
	)
	
	camera_move_requested.emit(world_pos)


func _draw() -> void:
	if not _minimap_texture:
		return

	# Draw texture while preserving aspect ratio (no stretching)
	draw_texture_rect(_minimap_texture, Rect2(0, 0, size.x, size.y), false)

	# Viewport rectangle
	if _viewport_rect.size.x > 0:
		draw_rect(_viewport_rect, Color(1, 1, 1, 0.12))
		draw_rect(_viewport_rect, Color(1, 1, 1, 0.85), false, 1.5)

	# Border
	draw_rect(Rect2(0, 0, size.x, size.y), Color(0.38, 0.26, 0.125, 0.75), false, 1.5)


func clear() -> void:
	_minimap_texture = null
	_viewport_rect = Rect2()
	queue_redraw()
