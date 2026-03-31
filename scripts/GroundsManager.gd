# GroundsManager.gd
# Autoload - Manages terrain data, movement costs, buildability, water, and decorations

extends Node

# ==================== DATA ====================
var _grounds_data: Dictionary = {}     # terrain_id -> terrain properties
var _terrain_grid: Array = []          # 2D array of terrain_id strings
var _terrain_tile_cache: Dictionary = {}  # terrain_id -> Array[Vector2i]

var _loaded: bool = false

# ==================== PUBLIC API ====================

func load_grounds_json() -> void:
	var file_path = "res://data/grounds.json"
	if not FileAccess.file_exists(file_path):
		push_error("GroundsManager: grounds.json not found!")
		return
	
	var file = FileAccess.open(file_path, FileAccess.READ)
	var json_text = file.get_as_text()
	file.close()
	
	var json = JSON.new()
	var error = json.parse(json_text)
	if error != OK:
		push_error("GroundsManager: JSON parse error!")
		return
	
	_grounds_data = json.data
	print("GroundsManager: Loaded %d terrain types" % _grounds_data.size())
	_loaded = true


func set_terrain_grid(grid: Array) -> void:
	_terrain_grid = grid
	_build_terrain_cache()


func get_terrain_grid() -> Array:
	return _terrain_grid


func get_terrain_at(x: int, y: int) -> String:
	if y < 0 or y >= _terrain_grid.size() or x < 0 or x >= _terrain_grid[y].size():
		return "plain"  # fallback
	return _terrain_grid[y][x]


# ==================== DECORATION METHODS ====================

func get_decoration_rate(terrain_id: String) -> float:
	if not _grounds_data.has(terrain_id):
		return 0.0
	
	var list = _grounds_data[terrain_id].get("random_decorations", [])
	if list.is_empty():
		return 0.0
	
	# Sum all rates in the array (your JSON uses per-decoration rates)
	var total_rate: float = 0.0
	for entry in list:
		total_rate += entry.get("rate", 0.0)
	return total_rate


func get_decoration_target_count(terrain_id: String, _map_width: int, _map_height: int) -> int:
	var rate = get_decoration_rate(terrain_id)
	if rate <= 0.0:
		return 0
	
	var tile_count = get_tiles_of_terrain(terrain_id).size()
	return int(tile_count * rate)


func pick_random_decoration(terrain_id: String) -> String:
	if not _grounds_data.has(terrain_id):
		return ""
	
	var list: Array = _grounds_data[terrain_id].get("random_decorations", [])
	if list.is_empty():
		return ""
	
	# Weighted random selection
	var total_rate: float = 0.0
	for entry in list:
		total_rate += entry.get("rate", 0.0)
	
	if total_rate <= 0.0:
		return ""
	
	var roll: float = randf() * total_rate
	var current: float = 0.0
	
	for entry in list:
		current += entry.get("rate", 0.0)
		if roll <= current:
			var file: String = entry.get("file", "")   # ← This is the correct key
			if not file.is_empty():
				# Build full path: assets/grounds/random/...
				var full_path = "res://assets/grounds/" + file
				return full_path
			break  # safety
	
	return ""


func get_tiles_of_terrain(terrain_id: String) -> Array[Vector2i]:
	if _terrain_tile_cache.has(terrain_id):
		# Godot 4.3 parser quirk workaround: build a fresh typed array
		var raw: Array = _terrain_tile_cache[terrain_id]
		var typed: Array[Vector2i] = []
		typed.append_array(raw)
		return typed
	
	return [] as Array[Vector2i]


func get_all_terrain_ids() -> Array:
	return _grounds_data.keys()


# ==================== INTERNAL ====================

func _build_terrain_cache() -> void:
	_terrain_tile_cache.clear()
	for y in _terrain_grid.size():
		for x in _terrain_grid[y].size():
			var tid = _terrain_grid[y][x]
			if not _terrain_tile_cache.has(tid):
				_terrain_tile_cache[tid] = []
			_terrain_tile_cache[tid].append(Vector2i(x, y))
	
	print("GroundsManager: Built terrain cache for %d terrain types" % _terrain_tile_cache.size())


# ==================== OTHER TERRAIN HELPERS ====================

func get_movement_speed(terrain_id: String) -> float:
	if not _grounds_data.has(terrain_id):
		return 1.0
	return _grounds_data[terrain_id].get("movement_speed", 1.0)


func is_buildable(terrain_id: String) -> bool:
	if not _grounds_data.has(terrain_id):
		return false
	return _grounds_data[terrain_id].get("buildable", false)


func is_water(terrain_id: String) -> bool:
	if not _grounds_data.has(terrain_id):
		return false
	return _grounds_data[terrain_id].get("is_water", false)


# Add more helpers as needed (color tint, etc.)

## Returns the closest terrain_id based on RGB color.
## Used by MapManager when parsing color-coded PNG maps.
func nearest_terrain_id(r: int, g: int, b: int) -> String:
	if not _loaded:
		load_grounds_json()
	
	var best_id := "plain"
	var best_dist := 999999.0
	
	for tid in _grounds_data.keys():
		var data = _grounds_data[tid]
		if not data.has("color"):
			continue
		
		var c = data["color"] as Color
		var dr = r - int(c.r8)
		var dg = g - int(c.g8)
		var db = b - int(c.b8)
		var dist = dr*dr + dg*dg + db*db
		
		if dist < best_dist:
			best_dist = dist
			best_id = tid
	
	return best_id

func get_speed(terrain_id: String) -> float:
	if not _grounds_data.has(terrain_id):
		return 1.0
	return _grounds_data[terrain_id].get("movement_speed", 1.0)


func get_texture(terrain_id: String) -> Texture2D:
	if not _grounds_data.has(terrain_id):
		push_warning("GroundsManager: No data for terrain '" + terrain_id + "'")
		return null
	
	var filename = _grounds_data[terrain_id].get("texture", "")
	if filename.is_empty():
		push_warning("GroundsManager: No 'texture' field for '" + terrain_id + "'")
		return null
	
	var full_path = "res://assets/grounds/" + filename
	
	if not ResourceLoader.exists(full_path):
		push_warning("GroundsManager: Texture not found: " + full_path)
		return null
	
	var tex = load(full_path) as Texture2D
	if tex == null:
		push_warning("GroundsManager: Failed to load texture: " + full_path)
	return tex
	
func _ready() -> void:
	load_grounds_json()
