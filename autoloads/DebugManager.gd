# autoloads/DebugManager.gd
extends Node

# ── Debug Test Controls ─────────────────────────────────────
var lap_square_size: float = 900.0
var stop_square_size: float = 600.0
var lap_center: Vector2 = Vector2(3000, 4000)
var stop_center: Vector2 = Vector2(5000, 4000)

# Reference to WorldScene for spawning (set in WorldScene _ready)
var world_scene: Node = null

func _ready() -> void:
	# If you make this an autoload, it can access other autoloads
	pass

# ── Test Spawning Functions ─────────────────────────────────
func spawn_square_lap_test() -> void:
	if not world_scene: return
	# Your existing _spawn_square_lap_test logic here, adapted to use world_scene
	# Example placeholder - replace with your actual code
	print("DebugManager: Spawning continuous lap square test (size ", lap_square_size, ")")
	# ... call world_scene functions or directly spawn via SpriteManager

func spawn_square_stop_test() -> void:
	if not world_scene: return
	print("DebugManager: Spawning stop-at-corner square test (size ", stop_square_size, ")")
	# ... your stop test logic

func respawn_all_tests() -> void:
	if not world_scene: return
	SpriteManager.clear_all_visuals()
	spawn_square_lap_test()
	spawn_square_stop_test()
	print("DebugManager: Respawned all test units")

# ── Debug HUD Helpers (if you want to keep sliders live) ─────
func update_lap_size(new_size: float) -> void:
	lap_square_size = new_size
	respawn_all_tests()

# Add more setters as needed...
