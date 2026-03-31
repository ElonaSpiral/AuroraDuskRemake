# MapCacheManager.gd
# Handles chunked caching of map visuals and terrain data

extends Node

const CACHE_DIR := "user://map_cache/"
const CHUNK_SIZE_TILES := 32
const TILE_SIZE := 64

var _manifest: Dictionary = {}


func _ready() -> void:
	ensure_cache_dir()


func ensure_cache_dir() -> void:
	if not DirAccess.dir_exists_absolute(CACHE_DIR):
		DirAccess.make_dir_recursive_absolute(CACHE_DIR)


# ================================================================
# MAIN ENTRY POINT
# ================================================================

func generate_cache_for_map(map_id: String, image: Image) -> bool:
	if image == null:
		push_error("MapCacheManager: No image provided for " + map_id)
		return false
	
	var map_w: int = image.get_width()
	var map_h: int = image.get_height()
	
	# === Chunked Visual Cache Generation ===
	var chunks: Array = []
	var chunk_w: int = CHUNK_SIZE_TILES
	var chunk_h: int = CHUNK_SIZE_TILES
	
	var num_chunks_x: int = int(ceil(map_w / float(chunk_w)))
	var num_chunks_y: int = int(ceil(map_h / float(chunk_h)))
	
	print("MapCacheManager: Generating ", num_chunks_x * num_chunks_y, " chunks for ", map_id)

	for cy in num_chunks_y:
		for cx in num_chunks_x:
			var chunk_x_start: int = cx * chunk_w
			var chunk_y_start: int = cy * chunk_h
			
			var cw: int = mini(chunk_w, map_w - chunk_x_start)
			var ch: int = mini(chunk_h, map_h - chunk_y_start)
			
			var chunk_img: Image = Image.create(cw * TILE_SIZE, ch * TILE_SIZE, false, Image.FORMAT_RGBA8)
			
			for y in ch:
				for x in cw:
					var gx: int = chunk_x_start + x
					var gy: int = chunk_y_start + y
					
					var col = image.get_pixel(gx, gy)
					var terrain_id: String = GroundsManager.nearest_terrain_id(
						int(col.r * 255), int(col.g * 255), int(col.b * 255))
					
					var tile_tex = GroundsManager.get_texture(terrain_id)
					if tile_tex:
						var tile_img: Image = tile_tex.get_image()
						if tile_img.get_format() != Image.FORMAT_RGBA8:
							tile_img.convert(Image.FORMAT_RGBA8)
						
						chunk_img.blit_rect(tile_img, Rect2(0, 0, TILE_SIZE, TILE_SIZE),
										   Vector2i(x * TILE_SIZE, y * TILE_SIZE))
			
			# Save chunk
			var chunk_filename: String = map_id.to_lower() + "_chunk_" + str(cx) + "_" + str(cy) + ".png"
			var chunk_path: String = CACHE_DIR + chunk_filename
			var err = chunk_img.save_png(chunk_path)
			if err != OK:
				push_error("Failed to save chunk " + chunk_filename)
				return false
			
			chunks.append({"x": cx, "y": cy, "file": chunk_filename})
	
	# Save manifest and terrain data
	_save_manifest(map_id, chunks)
	_generate_terrain_data(map_id, image)
	
	print("MapCacheManager: Successfully generated cache for ", map_id)
	return true


# ================================================================
# INTERNAL FUNCTIONS
# ================================================================

func _save_manifest(map_id: String, chunks: Array) -> void:
	var manifest = {
		"map_id": map_id,
		"chunk_size": CHUNK_SIZE_TILES,
		"chunks": chunks,
		"generated_at": Time.get_datetime_string_from_system()
	}
	
	var path = CACHE_DIR + map_id.to_lower() + "_manifest.json"
	var file = FileAccess.open(path, FileAccess.WRITE)
	if file:
		file.store_string(JSON.stringify(manifest, "  ", true))
		file.close()


func _generate_terrain_data(map_id: String, image: Image) -> void:
	# This should create the _terrain.json sidecar with the full terrain grid
	var grid: Array = []
	var w: int = image.get_width()
	var h: int = image.get_height()
	
	for y in h:
		var row: Array = []
		for x in w:
			var col = image.get_pixel(x, y)
			var tid = GroundsManager.nearest_terrain_id(int(col.r*255), int(col.g*255), int(col.b*255))
			row.append(tid)
		grid.append(row)
	
	var data = {
		"map_id": map_id,
		"width": w,
		"height": h,
		"terrain_grid": grid
	}
	
	var path = CACHE_DIR + map_id.to_lower() + "_terrain.json"
	var file = FileAccess.open(path, FileAccess.WRITE)
	if file:
		file.store_string(JSON.stringify(data, "  ", true))
		file.close()


func get_manifest() -> Dictionary:
	# TODO: Load from disk if needed - for now return cached
	return _manifest


func get_chunk_texture_path(chunk_x: int, chunk_y: int) -> String:
	# Implement based on your naming scheme
	return CACHE_DIR + "current_map_chunk_" + str(chunk_x) + "_" + str(chunk_y) + ".png"


# Stub for other functions you might call
func load_cached_texture(_map_id: String, _chunk_x: int, _chunk_y: int) -> Texture2D:
	return null
