# autoloads/DebugManager.gd
extends Node

# ── Configurable Test Parameters ─────────────────────────────
var lap_square_size: float = 900.0
var stop_square_size: float = 900.0
var lap_center: Vector2 = Vector2(3000, 4000)
var stop_center: Vector2 = Vector2(5000, 4000)

var world_scene: Node = null  # Set by WorldScene in _ready()

func respawn_all_tests() -> void:
	if not world_scene:
		push_warning("DebugManager: world_scene reference not set")
		return
	
	SpriteManager.clear_all_visuals()
	_spawn_square_lap_test(lap_square_size)
	_spawn_square_stop_test(stop_square_size)
	print("DebugManager: Respawned all test units")

# ── Test 1: Continuous anti-clockwise laps ─────────────────────
func _spawn_square_lap_test(square_size: float = 900.0) -> void:
	var center := lap_center
	var half := square_size / 2.0
	var corners = [
		center + Vector2(-half, -half),
		center + Vector2(-half,  half),
		center + Vector2( half,  half),
		center + Vector2( half, -half)
	]
	var sprite_file := "monsters/blackDragon.png"
	
	for i in 4:
		var start_pos = corners[i]
		var visual = _create_test_visual(i + 1001, sprite_file, start_pos)
		if visual:
			_start_anti_clockwise_lap(visual, corners, i)

func _start_anti_clockwise_lap(visual: Node2D, corners: Array, start_index: int) -> void:
	var tween = create_tween().set_loops()
	var current = start_index
	for _loop in range(30):
		var next_idx = (current + 1) % 4
		tween.tween_property(visual, "position", corners[next_idx], 4.0)
		current = next_idx

# ── Test 2: Corner-to-corner with 1s stop ──────────────────────
func _spawn_square_stop_test(square_size: float = 900.0) -> void:
	var center := stop_center
	var half := square_size / 2.0
	var corners = [
		center + Vector2(-half, -half),
		center + Vector2(-half,  half),
		center + Vector2( half,  half),
		center + Vector2( half, -half)
	]
	var sprite_file := "monsters/blackDragon.png"
	
	for i in 4:
		var start_pos = corners[i]
		var visual = _create_test_visual(i + 2001, sprite_file, start_pos)
		if visual:
			_start_corner_to_corner_with_stop(visual, corners, i)

func _start_corner_to_corner_with_stop(visual: Node2D, corners: Array, start_index: int) -> void:
	var tween = create_tween().set_loops()
	var current = start_index
	for _loop in range(30):
		var next_idx = (current + 1) % 4
		tween.tween_property(visual, "position", corners[next_idx], 4.0)
		tween.tween_interval(1.0)   # 1 second stop at each corner
		current = next_idx

# ── Helper to create test unit visual ──────────────────────────
func _create_test_visual(id: int, sprite_file: String, start_pos: Vector2) -> Node2D:
	var test_unit = {
		"id": id,
		"type": "unit",
		"x": start_pos.x,
		"y": start_pos.y,
		"picture": { "file": sprite_file },
		"orientation": 0,
		"test_unit": true
	}
	var visual = SpriteManager.create_entity_visual(test_unit)
	if visual:
		visual.position = start_pos
	return visual

# ── Live slider helpers (call from Debug panel) ────────────────
func update_lap_size(new_size: float) -> void:
	lap_square_size = new_size
	respawn_all_tests()

func update_stop_size(new_size: float) -> void:
	stop_square_size = new_size
	respawn_all_tests()

func update_lap_center(new_center: Vector2) -> void:
	lap_center = new_center
	respawn_all_tests()

func update_stop_center(new_center: Vector2) -> void:
	stop_center = new_center
	respawn_all_tests()
