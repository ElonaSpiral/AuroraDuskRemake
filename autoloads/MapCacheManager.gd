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
# MAIN CACHE GENERATION
# ================================================================

#func generate_cache_for_map(map_id: String, image: Image) -> bool:
	#if image == null:
		#push_error("MapCacheManager: No image provided for " + map_id)
		#return false
	#
	#var map_w: int = image.get_width()
	#var map_h: int = image.get_height()
	#
	#var chunks: Array = []
	#var chunk_w: int = CHUNK_SIZE_TILES
	#var chunk_h: int = CHUNK_SIZE_TILES
	#
	#var num_chunks_x: int = int(ceil(map_w / float(chunk_w)))
	#var num_chunks_y: int = int(ceil(map_h / float(chunk_h)))
	#
	#print("MapCacheManager: Generating ", num_chunks_x * num_chunks_y, " chunks for ", map_id)
#
	#for cy in num_chunks_y:
		#for cx in num_chunks_x:
			#var chunk_x_start: int = cx * chunk_w
			#var chunk_y_start: int = cy * chunk_h
			#
			#var cw: int = mini(chunk_w, map_w - chunk_x_start)
			#var ch: int = mini(chunk_h, map_h - chunk_y_start)
			#
			#var chunk_img: Image = Image.create(cw * TILE_SIZE, ch * TILE_SIZE, false, Image.FORMAT_RGBA8)
			#
			#for y in ch:
				#for x in cw:
					#var gx: int = chunk_x_start + x
					#var gy: int = chunk_y_start + y
					#
					#var col = image.get_pixel(gx, gy)
					#var terrain_id: String = GroundsManager.nearest_terrain_id(
						#int(col.r * 255), int(col.g * 255), int(col.b * 255))
					#
					#var tile_tex = GroundsManager.get_texture(terrain_id)
					#if tile_tex:
						#var tile_img: Image = tile_tex.get_image()
						#if tile_img.get_format() != Image.FORMAT_RGBA8:
							#tile_img.convert(Image.FORMAT_RGBA8)
						#chunk_img.blit_rect(tile_img, Rect2(0, 0, TILE_SIZE, TILE_SIZE),
										   #Vector2i(x * TILE_SIZE, y * TILE_SIZE))
			#
			#var chunk_filename: String = map_id.to_lower() + "_chunk_" + str(cx) + "_" + str(cy) + ".png"
			#var chunk_path: String = CACHE_DIR + chunk_filename
			#var err = chunk_img.save_png(chunk_path)
			#if err != OK:
				#push_error("Failed to save chunk " + chunk_filename)
				#return false
			#
			#chunks.append({"x": cx, "y": cy, "file": chunk_filename})
	#
	#_save_manifest(map_id, chunks)
	#_generate_terrain_data(map_id, image)
	#
	#print("MapCacheManager: Successfully generated cache for ", map_id)
	#return true
func generate_cache_for_map(map_id: String, image: Image) -> bool:
	if image == null:
		push_error("MapCacheManager: No image for " + map_id)
		return false
	
	var map_w = image.get_width()
	var map_h = image.get_height()
	
	var chunks = []
	var chunk_size = CHUNK_SIZE_TILES
	var num_x = int(ceil(map_w / float(chunk_size)))
	var num_y = int(ceil(map_h / float(chunk_size)))
	
	print("MapCacheManager: Generating ", num_x * num_y, " chunks for ", map_id)

	for cy in num_y:
		for cx in num_x:
			var start_x = cx * chunk_size
			var start_y = cy * chunk_size
			var cw = mini(chunk_size, map_w - start_x)
			var ch = mini(chunk_size, map_h - start_y)
			
			var chunk_img = Image.create(cw * TILE_SIZE, ch * TILE_SIZE, false, Image.FORMAT_RGBA8)
			
			var tiles_placed = 0
			
			for y in ch:
				for x in cw:
					var gx = start_x + x
					var gy = start_y + y
					
					var col = image.get_pixel(gx, gy)
					var terrain_id = GroundsManager.nearest_terrain_id(
						int(col.r * 255), int(col.g * 255), int(col.b * 255))
					
					var tile_tex = GroundsManager.get_texture(terrain_id)
					if tile_tex:
						var tile_img = tile_tex.get_image()
						if tile_img:
							if tile_img.get_format() != Image.FORMAT_RGBA8:
								tile_img.convert(Image.FORMAT_RGBA8)
							chunk_img.blit_rect(tile_img, Rect2(0, 0, TILE_SIZE, TILE_SIZE),
											   Vector2i(x * TILE_SIZE, y * TILE_SIZE))
							tiles_placed += 1
					else:
						# Fallback color if texture missing
						chunk_img.fill_rect(Rect2i(x*TILE_SIZE, y*TILE_SIZE, TILE_SIZE, TILE_SIZE), Color(0.3, 0.3, 0.3))
			
			var filename = map_id.to_lower() + "_chunk_" + str(cx) + "_" + str(cy) + ".png"
			var path = CACHE_DIR + filename
			chunk_img.save_png(path)
			chunks.append({"x": cx, "y": cy, "file": filename})
			
			if tiles_placed == 0:
				print("  Warning: No tiles placed in chunk ", cx, ",", cy, " - check GroundsManager.get_texture()")
	
	_save_manifest(map_id, chunks)
	print("MapCacheManager: Successfully generated cache for ", map_id)
	return true


# ================================================================
# FULL REGENERATION
# ================================================================

func generate_all_caches() -> void:
	print("MapCacheManager: Starting full cache regeneration...")
	
	var map_ids = MapManager.get_maps_for_mode("skirmish") + MapManager.get_maps_for_mode("survival") + MapManager.get_maps_for_mode("debug")
	
	var unique_ids = []
	for id in map_ids:
		if not unique_ids.has(id) and id != "random":
			unique_ids.append(id)
	
	for map_id in unique_ids:
		print("MapCacheManager: Generating cache for ", map_id)
		var result = MapManager.parse_map(map_id)
		if result.get("grid", []).is_empty():
			print("  Skipped - failed to parse")
			continue
		
		var img_path = MapManager.get_map_path(map_id)
		var img = _load_map_image(img_path)
		if img:
			generate_cache_for_map(map_id, img)
		else:
			print("  Skipped - could not load image")
	
	print("MapCacheManager: Full cache regeneration completed!")


# ================================================================
# INTERNAL HELPERS
# ================================================================

func _load_map_image(res_path: String) -> Image:
	if res_path.is_empty():
		return null
	var abs_path = ProjectSettings.globalize_path(res_path)
	var img := Image.new()
	if img.load(abs_path) == OK:
		return img
	# Fallback for imported textures
	var tex = load(res_path) as Texture2D
	if tex:
		return tex.get_image()
	return null


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


# In MapCacheManager.gd

func get_manifest(map_id: String = "") -> Dictionary:
	if map_id.is_empty():
		# Return the latest one if no id given
		var files = DirAccess.get_files_at(CACHE_DIR)
		for f in files:
			if f.ends_with("_manifest.json"):
				var path = CACHE_DIR + f
				var file = FileAccess.open(path, FileAccess.READ)
				if file:
					var data = JSON.parse_string(file.get_as_text())
					file.close()
					if data is Dictionary:
						return data
		return {}
	
	var path = CACHE_DIR + map_id.to_lower() + "_manifest.json"
	if FileAccess.file_exists(path):
		var file = FileAccess.open(path, FileAccess.READ)
		if file:
			var data = JSON.parse_string(file.get_as_text())
			file.close()
			return data if data is Dictionary else {}
	return {}


func get_chunk_texture_path(map_id: String, chunk_x: int, chunk_y: int) -> String:
	return CACHE_DIR + map_id.to_lower() + "_chunk_" + str(chunk_x) + "_" + str(chunk_y) + ".png"
