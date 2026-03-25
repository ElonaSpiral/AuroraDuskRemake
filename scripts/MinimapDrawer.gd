class_name MinimapDrawer
extends Control

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Minimap Drawer
#  Godot 4.x  |  GDScript 2.0
#
#  Draws a thumbnail terrain overview in the HUD corner.
#  Clicking or dragging on the minimap pans the camera to
#  the corresponding world position.
#
#  ── SIGNALS ──────────────────────────────────────────────
#  camera_move_requested(world_pos: Vector2)
#    Emitted when the player clicks or drags the minimap.
#    WorldScene connects this to camera repositioning.
#
#  ── VIEWPORT RECTANGLE ───────────────────────────────────
#  Call update_viewport(camera, map_world_size) each frame
#  to draw a rectangle showing the current visible area.
# ─────────────────────────────────────────────────────────────

signal camera_move_requested(world_pos: Vector2)

var terrain_grid : Array   = []
var spawn_points : Array   = []
var map_w        : int     = 0
var map_h        : int     = 0

# Viewport rect drawn on the minimap (updated from WorldScene)
var _viewport_rect : Rect2 = Rect2()   # in minimap-local pixels
var _dragging      : bool  = false


func setup(grid: Array, spawns: Array, w: int, h: int) -> void:
	terrain_grid = grid
	spawn_points = spawns
	map_w = w
	map_h = h
	queue_redraw()


## Call every frame from WorldScene to keep the viewport rect in sync.
## camera       — the Camera2D node
## world_size   — total world size in pixels (WorldRenderer.world_size())
func update_viewport(camera: Camera2D, world_size: Vector2) -> void:
	if map_w == 0 or map_h == 0 or world_size.x == 0:
		return

	var cw := size.x
	var ch := size.y

	# Viewport size in world units
	var vp_world := camera.get_viewport_rect().size / camera.zoom

	# Convert world rect (centred on camera) to minimap pixel space
	var cam_world := camera.position
	var tl_world  := cam_world - vp_world * 0.5
	var br_world  := cam_world + vp_world * 0.5

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
	if terrain_grid.is_empty():
		return

	if event is InputEventMouseButton:
		var mb := event as InputEventMouseButton
		if mb.button_index == MOUSE_BUTTON_LEFT:
			_dragging = mb.pressed
			if mb.pressed:
				_emit_camera_move(mb.position)

	elif event is InputEventMouseMotion:
		if _dragging:
			_emit_camera_move((event as InputEventMouseMotion).position)


func _emit_camera_move(minimap_pos: Vector2) -> void:
	if map_w == 0 or map_h == 0:
		return
	# Convert minimap pixel position to world position
	var fx       := clampf(minimap_pos.x / size.x, 0.0, 1.0)
	var fy       := clampf(minimap_pos.y / size.y, 0.0, 1.0)
	# World size = map dimensions × TILE_PX, but MinimapDrawer
	# doesn't import WorldRenderer. Use map_w/h × tile size via signal.
	# We emit a 0–1 fraction; WorldScene multiplies by world_size.
	camera_move_requested.emit(Vector2(fx, fy))


# ─────────────────────────────────────────────────────────────
#  DRAWING
# ─────────────────────────────────────────────────────────────

func _draw() -> void:
	if terrain_grid.is_empty():
		return

	var cw := size.x
	var ch := size.y
	var tw := cw / float(map_w)
	var th := ch / float(map_h)

	# Terrain tiles
	for y : int in map_h:
		for x : int in map_w:
			var tid := str((terrain_grid[y] as Array)[x])
			var col := GroundsManager.get_color(tid)
			draw_rect(Rect2(x * tw, y * th, maxf(tw, 1.0), maxf(th, 1.0)), col)

	# Spawn point dots
	for sp in spawn_points:
		var d  := sp as Dictionary
		var sx := (float(d.get("x", 0)) + 0.5) * tw
		var sy := (float(d.get("y", 0)) + 0.5) * th
		draw_circle(Vector2(sx, sy), maxf(tw * 2.5, 3.0), Color(1, 0.9, 0.1, 0.95))
		draw_circle(Vector2(sx, sy), maxf(tw * 1.0, 1.5), Color(1, 1, 1, 0.95))

	# Viewport rectangle
	if _viewport_rect.size.x > 0:
		# Semi-transparent fill
		draw_rect(_viewport_rect, Color(1, 1, 1, 0.12))
		# White border
		draw_rect(_viewport_rect, Color(1, 1, 1, 0.85), false, 1.5)
		# Corner ticks for clarity
		var r    := _viewport_rect
		var tick := 4.0
		for corner in [r.position,
				Vector2(r.position.x + r.size.x, r.position.y),
				Vector2(r.position.x, r.position.y + r.size.y),
				r.position + r.size]:
			draw_line(corner, corner + Vector2(tick, 0),  Color(1,1,1,0.9), 1.5)
			draw_line(corner, corner + Vector2(-tick, 0), Color(1,1,1,0.9), 1.5)
			draw_line(corner, corner + Vector2(0, tick),  Color(1,1,1,0.9), 1.5)
			draw_line(corner, corner + Vector2(0, -tick), Color(1,1,1,0.9), 1.5)

	# Border
	draw_rect(Rect2(0, 0, cw, ch), Color(0.380, 0.259, 0.125, 0.75), false, 1.5)
