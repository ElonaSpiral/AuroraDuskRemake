# WorldRenderer.gd
class_name WorldRenderer
extends Node2D

const TILE_PX := 64
const CHUNK_SIZE_PX := 2048   # 32×32 tiles

# ── State ─────────────────────────────────────────────────────
var terrain_grid : Array = []
var spawn_points : Array = []
var map_width    : int   = 0
var map_height   : int   = 0

var show_grid : bool = false
var decoration_density_multiplier := 1.0

# ─────────────────────────────────────────────────────────────
#  1. SETUP
# ─────────────────────────────────────────────────────────────
func setup(terrain_grid: Array, spawn_points: Array, map_width: int, map_height: int) -> void:
	for child in get_children():
		child.queue_free()

	var raw_id := GameState.selected_map_id
	var map_id := raw_id if raw_id != "" and raw_id != "test_map_auto" else "middleBridge"

	print("WorldRenderer: Attempting cached texture for map_id: '" + map_id + "'")

	# Try chunked loading
	if _load_chunked_background(map_id):
		print("WorldRenderer: ✓ SUCCESS - Loaded chunked background for " + map_id)
	else:
		print("WorldRenderer: Chunk loading failed. Trying single texture fallback.")
		var cached_tex = MapCacheManager.load_cached_texture(map_id)
		if cached_tex:
			var bg := Sprite2D.new()
			bg.texture = cached_tex
			bg.centered = false
			bg.position = Vector2.ZERO
			bg.z_index = -10
			add_child(bg)
			print("WorldRenderer: ✓ SUCCESS - Loaded full cached texture (fallback)")

	# Load terrain data
	var terrain_data = MapCacheManager.load_terrain_data(map_id)
	if terrain_data.has("grid"):
		self.terrain_grid = terrain_data.grid
		self.spawn_points = terrain_data.get("spawns", [])
		self.map_width = terrain_data.get("width", map_width)
		self.map_height = terrain_data.get("height", map_height)
	else:
		self.terrain_grid = terrain_grid
		self.spawn_points = spawn_points
		self.map_width = map_width
		self.map_height = map_height

	_sprinkle_decorations(self.map_width, self.map_height, self.terrain_grid)


# ─────────────────────────────────────────────────────────────
#  Chunk Loading
# ─────────────────────────────────────────────────────────────
func _load_chunked_background(map_id: String) -> bool:
	var chunk_info = MapCacheManager.get_chunk_info(map_id)
	if not chunk_info.has("chunks") or chunk_info.chunks.is_empty():
		return false

	var chunks = chunk_info.chunks as Array
	print("WorldRenderer: Loading ", chunks.size(), " chunks for ", map_id)

	for filename in chunks:
		var path = "user://cache/maps/" + filename
		var tex = null
		if ResourceLoader.exists(path):
			tex = load(path) as Texture2D
		else:
			var img = Image.load_from_file(path)
			if img:
				tex = ImageTexture.create_from_image(img)

		if tex == null:
			print("WorldRenderer: Failed to load chunk ", filename)
			continue

		# Extract chunk coordinates from filename (map_chunk_X_Y.png)
		var chunk_x := 0
		var chunk_y := 0
		var parts = filename.get_basename().split("_")
		if parts.size() >= 4:
			chunk_x = int(parts[parts.size()-2])
			chunk_y = int(parts[parts.size()-1])

		var sprite := Sprite2D.new()
		sprite.texture = tex
		sprite.centered = false
		sprite.position = Vector2(chunk_x * CHUNK_SIZE_PX, chunk_y * CHUNK_SIZE_PX)
		sprite.z_index = -10
		add_child(sprite)

	return true


# ─────────────────────────────────────────────────────────────
#  Decoration Sprinkling (unchanged - already working)
# ─────────────────────────────────────────────────────────────
func _sprinkle_decorations(map_width: int, map_height: int, terrain_grid: Array) -> void:
	for child in get_children():
		if child is Sprite2D and child.get_meta("is_decoration", false):
			child.queue_free()

	print("=== Decoration sprinkling START (rate-based) ===")

	var effective_grid : Array = terrain_grid
	if effective_grid.is_empty() or effective_grid.size() != map_height:
		var map_id := GameState.selected_map_id if GameState.selected_map_id != "" and GameState.selected_map_id != "test_map_auto" else "middleBridge"
		var parsed = MapManager.parse_map(map_id)
		if parsed.has("grid") and not parsed.grid.is_empty():
			effective_grid = parsed.grid

	var tile_size := 64.0
	var spawn_count := 0

	var terrain_tile_count := {}
	for y in map_height:
		for x in map_width:
			if y >= effective_grid.size() or x >= effective_grid[y].size():
				continue
			var tid : String = str(effective_grid[y][x])
			if tid.is_empty(): continue
			terrain_tile_count[tid] = terrain_tile_count.get(tid, 0) + 1

	for tid in terrain_tile_count.keys():
		var tile_count : int = terrain_tile_count[tid]
		var target_count : int = int(GroundsManager.get_decoration_target_count(tid, tile_count) * decoration_density_multiplier + 0.5)
		if target_count <= 0:
			continue

		var positions := []
		for y in map_height:
			for x in map_width:
				if y < effective_grid.size() and x < effective_grid[y].size():
					if str(effective_grid[y][x]) == tid:
						positions.append(Vector2i(x, y))

		positions.shuffle()

		for i in range(min(target_count, positions.size())):
			var pos: Vector2i = positions[i]
			var decoration_file := GroundsManager.pick_random_decoration(tid)
			if decoration_file.is_empty():
				continue

			var deco_path: String = "res://assets/grounds/" + decoration_file
			var texture = load(deco_path) as Texture2D
			if texture == null:
				continue

			var sprite := Sprite2D.new()
			sprite.texture = texture
			sprite.position = Vector2(pos.x * tile_size + tile_size * 0.5, pos.y * tile_size + tile_size * 0.5)
			sprite.z_index = 5
			sprite.set_meta("is_decoration", true)
			sprite.scale = Vector2.ONE * (0.9 + randf() * 0.4)
			sprite.rotation = randf_range(-0.3, 0.3)

			add_child(sprite)
			spawn_count += 1

	print("=== Decoration sprinkling FINISHED === Total spawned: ", spawn_count, " ===")


# ─────────────────────────────────────────────────────────────
#  Public API
# ─────────────────────────────────────────────────────────────
func world_size() -> Vector2:
	return Vector2(map_width * TILE_PX, map_height * TILE_PX)

func terrain_at_world(pos: Vector2) -> String:
	var tx := int(pos.x / TILE_PX)
	var ty := int(pos.y / TILE_PX)
	return MapManager.get_terrain_at(terrain_grid, tx, ty)
