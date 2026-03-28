# autoloads/MapCacheManager.gd
extends Node

const CACHE_DIR := "user://cache/maps/"
const MAPS_DIR := "res://assets/maps/"

var _cache_ready := false

func _ready() -> void:
	ensure_cache_dir()
	# Optional: auto-generate on first run, or call manually from debug HUD

func ensure_cache_dir() -> void:
	var dir = DirAccess.open("user://")
	if not dir.dir_exists("cache/maps"):
		dir.make_dir_recursive("cache/maps")

# Generate cache for all maps (call from debug button or startup)
func generate_all_caches() -> void:
	var dir = DirAccess.open(MAPS_DIR)
	if not dir:
		push_error("MapCacheManager: Cannot open maps folder")
		return
	
	for file in dir.get_files():
		if file.ends_with(".png"):
			var map_id = file.get_basename()
			generate_cache_for_map(map_id)

# Main baking function
func generate_cache_for_map(map_id: String) -> bool:
	var png_path = MAPS_DIR + map_id + ".png"
	if not ResourceLoader.exists(png_path):
		push_error("MapCacheManager: Map PNG not found: " + png_path)
		return false
	
	var image = Image.load_from_file(png_path)
	if not image:
		push_error("MapCacheManager: Failed to load image: " + png_path)
		return false
	
	var width = image.get_width()
	var height = image.get_height()
	
	# Create output image for baked terrain
	var baked = Image.create(width * WorldRenderer.TILE_PX, height * WorldRenderer.TILE_PX, false, Image.FORMAT_RGBA8)
	
	# TODO: For better "blot" effect, we can add slight noise or edge blending here later
	
	for y in height:
		for x in width:
			var color = image.get_pixel(x, y)
			var r = int(color.r * 255)
			var g = int(color.g * 255)
			var b = int(color.b * 255)
			
			var terrain_id = GroundsManager.nearest_terrain_id(r, g, b)
			var tile_tex = GroundsManager.get_texture(terrain_id)
			
			if tile_tex:
				var tile_img = tile_tex.get_image()
				if tile_img:
					baked.blit_rect(tile_img, Rect2(0, 0, WorldRenderer.TILE_PX, WorldRenderer.TILE_PX),
									Vector2i(x * WorldRenderer.TILE_PX, y * WorldRenderer.TILE_PX))
	
	# Save baked texture
	var cache_path = CACHE_DIR + map_id + ".png"
	baked.save_png(cache_path)
	
	# Save terrain data JSON (for water, buildable, etc.)
	var terrain_data = _extract_terrain_data(image, width, height)
	var json_path = CACHE_DIR + map_id + ".json"
	var file = FileAccess.open(json_path, FileAccess.WRITE)
	file.store_string(JSON.stringify(terrain_data))
	file.close()
	
	print("MapCacheManager: Cached map " + map_id)
	return true

# Extract basic terrain info (water mask, etc.)
func _extract_terrain_data(image: Image, width: int, height: int) -> Dictionary:
	var data = {
		"width": width,
		"height": height,
		"water_tiles": [],
		"spawn_points": []
	}
	
	for y in height:
		for x in width:
			var color = image.get_pixel(x, y)
			var r = int(color.r * 255)
			var g = int(color.g * 255)
			var b = int(color.b * 255)
			var terrain_id = GroundsManager.nearest_terrain_id(r, g, b)
			
			if GroundsManager.is_water(terrain_id):
				data.water_tiles.append({"x": x, "y": y})
	
	# TODO: Detect black dots as spawn points if needed
	return data

# Load cached texture (fast path)
func load_cached_texture(map_id: String) -> Texture2D:
	var path = CACHE_DIR + map_id + ".png"
	if ResourceLoader.exists(path):
		return load(path) as Texture2D
	return null

# Check if cache is valid (simple timestamp check for now)
func is_cache_valid(map_id: String) -> bool:
	var cache_path = CACHE_DIR + map_id + ".png"
	var source_path = MAPS_DIR + map_id + ".png"
	
	if not FileAccess.file_exists(cache_path) or not FileAccess.file_exists(source_path):
		return false
	
	var cache_time = FileAccess.get_modified_time(cache_path)
	var source_time = FileAccess.get_modified_time(source_path)
	return cache_time > source_time
