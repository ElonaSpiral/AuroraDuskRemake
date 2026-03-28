# WorldRenderer.gd
class_name WorldRenderer
extends Node2D

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — World Renderer (Cleaned)
#  Primary path: cached background PNG + decorations
#  Fallback: old tile-based rendering (kept minimal)
# ─────────────────────────────────────────────────────────────

const TILE_PX := 64

# ── State ─────────────────────────────────────────────────────
var terrain_grid : Array = []
var spawn_points : Array = []
var map_width    : int   = 0
var map_height   : int   = 0

var show_grid : bool = false

# ─────────────────────────────────────────────────────────────
#  1. SETUP — Main Entry Point
# ─────────────────────────────────────────────────────────────
func setup(terrain_grid: Array, spawn_points: Array, map_width: int, map_height: int) -> void:
	# Clear previous children (old background + old decorations)
	for child in get_children():
		child.queue_free()

	var raw_id := GameState.selected_map_id
	var map_id := raw_id if raw_id != "" and raw_id != "test_map_auto" else "middleBridge"

	print("WorldRenderer: Attempting cached texture for map_id: '" + map_id + "'")

	# Try cached path first
	var cached_tex = MapCacheManager.load_cached_texture(map_id)
	if cached_tex:
		print("WorldRenderer: ✓ SUCCESS - Loaded cached texture for " + map_id)

		var bg := Sprite2D.new()
		bg.texture = cached_tex
		bg.centered = false
		bg.position = Vector2.ZERO
		bg.z_index = -10
		add_child(bg)

		# Load terrain data from cache (this is the key missing piece)
		var terrain_data = MapCacheManager.load_terrain_data(map_id)
		if terrain_data.has("grid"):
			self.terrain_grid = terrain_data.grid
			self.spawn_points = terrain_data.get("spawns", [])
			self.map_width = terrain_data.get("width", map_width)
			self.map_height = terrain_data.get("height", map_height)
		else:
			# Fallback if terrain data missing
			self.terrain_grid = terrain_grid
			self.spawn_points = spawn_points
			self.map_width = map_width
			self.map_height = map_height

		# Now sprinkle decorations using real terrain data
		_sprinkle_decorations(self.map_width, self.map_height, self.terrain_grid)
		return

	# Fallback if no cache
	push_warning("WorldRenderer: No cached texture found for '" + map_id + "'. Falling back to tile rendering.")
	self.terrain_grid = terrain_grid
	self.spawn_points = spawn_points
	self.map_width = map_width
	self.map_height = map_height
#	_build_tile_based_map(terrain_grid, map_width, map_height)

# ─────────────────────────────────────────────────────────────
#  2. DECORATION SPRINKLING (on cached background)
# ─────────────────────────────────────────────────────────────
func _sprinkle_decorations(map_width: int, map_height: int, terrain_grid: Array) -> void:
	# Clear old decorations
	for child in get_children():
		if child is Sprite2D and child.get_meta("is_decoration", false):
			child.queue_free()

	var tile_size := 64.0
	var density := 0.16   # Adjust this (0.12 = sparse, 0.20 = denser)

	for y in map_height:
		for x in map_width:
			if randf() > density:
				continue

			var tid := ""
			if y < terrain_grid.size() and x < terrain_grid[y].size():
				tid = str(terrain_grid[y][x])

			if tid.is_empty():
				continue

			var decoration_file := GroundsManager.roll_decoration(tid)
			if decoration_file.is_empty():
				continue

			var deco_path := "res://assets/grounds/random/" + decoration_file
			if not ResourceLoader.exists(deco_path):
				continue

			var sprite := Sprite2D.new()
			sprite.texture = load(deco_path) as Texture2D
			sprite.position = Vector2(
				x * tile_size + tile_size * 0.5,
				y * tile_size + tile_size * 0.5
			)
			sprite.z_index = 5
			sprite.set_meta("is_decoration", true)
			sprite.scale = Vector2.ONE * (0.9 + randf() * 0.3)
			sprite.rotation = randf_range(-0.25, 0.25)

			add_child(sprite)

# ─────────────────────────────────────────────────────────────
#  3. FALLBACK: Tile-based rendering (minimal)
# ─────────────────────────────────────────────────────────────
#func _build_tile_based_map(terrain_grid: Array, map_width: int, map_height: int) -> void:
	# TODO: If you still need the old per-tile drawing, put it here.
	# For now we keep it minimal so the game doesn't break if cache fails.
#	print("WorldRenderer: Using fallback tile rendering (cache unavailable)")
	# You can re-add your old _draw_terrain_pass1 etc. if needed later.

# ─────────────────────────────────────────────────────────────
#  4. PUBLIC API
# ─────────────────────────────────────────────────────────────
func world_size() -> Vector2:
	return Vector2(map_width * TILE_PX, map_height * TILE_PX)

func terrain_at_world(pos: Vector2) -> String:
	var tx := int(pos.x / TILE_PX)
	var ty := int(pos.y / TILE_PX)
	return MapManager.get_terrain_at(terrain_grid, tx, ty)

# Optional: toggle grid if you still use it
func toggle_grid() -> void:
	show_grid = not show_grid
	queue_redraw()
