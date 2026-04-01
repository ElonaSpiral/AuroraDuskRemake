# MapCacheManager.gd
# Handles chunked + Super Chunk caching of map visuals

extends Node

const CACHE_DIR := "user://map_cache/"
const SMALL_CHUNK_SIZE_TILES := 32	# old size
const SUPER_CHUNK_SIZE_TILES := 64	# new Super Chunk size
const TILE_SIZE := 64

func _ready() -> void:
	ensure_cache_dir()


func ensure_cache_dir() -> void:
	if not DirAccess.dir_exists_absolute(CACHE_DIR):
		DirAccess.make_dir_recursive_absolute(CACHE_DIR)


# ================================================================
# SUPER CHUNK GENERATION (replaces old small chunks)
# ================================================================

func generate_cache_for_map(map_id: String, image: Image) -> bool:
	if image == null:
		push_error("MapCacheManager: No image for " + map_id)
		return false

	var map_w := image.get_width()
	var map_h := image.get_height()

	var super_w := int(ceil(map_w / float(SUPER_CHUNK_SIZE_TILES)))
	var super_h := int(ceil(map_h / float(SUPER_CHUNK_SIZE_TILES)))

	print("MapCacheManager: Generating ", super_w * super_h, " Super Chunks for ", map_id)

	var chunks := []

	for sy in super_h:
		for sx in super_w:
			var start_x := sx * SUPER_CHUNK_SIZE_TILES
			var start_y := sy * SUPER_CHUNK_SIZE_TILES
			var cw := mini(SUPER_CHUNK_SIZE_TILES, map_w - start_x)
			var ch := mini(SUPER_CHUNK_SIZE_TILES, map_h - start_y)

			var chunk_img := Image.create(cw * TILE_SIZE, ch * TILE_SIZE, false, Image.FORMAT_RGBA8)

			for y in ch:
				for x in cw:
					var gx := start_x + x
					var gy := start_y + y
					var col := image.get_pixel(gx, gy)
					var terrain_id := GroundsManager.nearest_terrain_id(
						int(col.r * 255), int(col.g * 255), int(col.b * 255))

					var tile_tex := GroundsManager.get_texture(terrain_id)
					if tile_tex:
						var tile_img := tile_tex.get_image()
						if tile_img:
							if tile_img.get_format() != Image.FORMAT_RGBA8:
								tile_img.convert(Image.FORMAT_RGBA8)
							chunk_img.blit_rect(tile_img, Rect2(0, 0, TILE_SIZE, TILE_SIZE),
											   Vector2i(x * TILE_SIZE, y * TILE_SIZE))

			var filename := map_id.to_lower() + "_superchunk_" + str(sx) + "_" + str(sy) + ".png"
			var path := CACHE_DIR + filename
			chunk_img.save_png(path)

			chunks.append({"x": sx, "y": sy, "file": filename, "size": SUPER_CHUNK_SIZE_TILES})

	_save_manifest(map_id, chunks)
	print("MapCacheManager: Super Chunks generated for ", map_id)
	return true


# ================================================================
# FULL REGENERATION
# ================================================================

func generate_all_caches() -> void:
	print("MapCacheManager: Starting full Super Chunk regeneration...")

	var map_ids := MapManager.get_maps_for_mode("skirmish") + MapManager.get_maps_for_mode("survival") + MapManager.get_maps_for_mode("debug")
	var unique_ids: Array[String] = []
	for id in map_ids:
		if not unique_ids.has(id) and id != "random":
			unique_ids.append(id)

	for map_id in unique_ids:
		print("MapCacheManager: Generating Super Chunks for ", map_id)
		var result := MapManager.parse_map(map_id)
		if result.get("grid", []).is_empty():
			print("  Skipped - failed to parse")
			continue

		var img_path := MapManager.get_map_path(map_id)
		var img := _load_map_image(img_path)
		if img:
			generate_cache_for_map(map_id, img)
		else:
			print("  Skipped - could not load image")

	print("MapCacheManager: Full Super Chunk regeneration completed!")


# ================================================================
# HELPERS
# ================================================================

func _load_map_image(res_path: String) -> Image:
	var path: String = ""
	if res_path.is_empty():
		return null

	path = ProjectSettings.globalize_path(res_path)
	var img := Image.new()
	if img.load(path) == OK:
		return img

	# Fallback for imported textures
	var tex := load(res_path) as Texture2D
	if tex:
		return tex.get_image()
	return null


func _save_manifest(map_id: String, chunks: Array) -> void:
	var manifest := {
		"map_id": map_id,
		"chunk_size": SUPER_CHUNK_SIZE_TILES,
		"chunks": chunks,
		"generated_at": Time.get_datetime_string_from_system()
	}
	var path := CACHE_DIR + map_id.to_lower() + "_manifest.json"
	var file := FileAccess.open(path, FileAccess.WRITE)
	if file:
		file.store_string(JSON.stringify(manifest, "  ", true))
		file.close()


func get_manifest(map_id: String = "") -> Dictionary:
	if map_id.is_empty():
		return {}
	
	var path := CACHE_DIR + map_id.to_lower() + "_manifest.json"
	if not FileAccess.file_exists(path):
		return {}
	
	var file := FileAccess.open(path, FileAccess.READ)
	if not file:
		return {}
	
	var json_text := file.get_as_text()
	file.close()
	
	# Explicitly typed to avoid Variant inference warning
	var parsed = JSON.parse_string(json_text)
	if parsed is Dictionary:
		return parsed
	
	return {}


func get_chunk_texture_path(map_id: String, chunk_x: int, chunk_y: int) -> String:
	return CACHE_DIR + map_id.to_lower() + "_superchunk_" + str(chunk_x) + "_" + str(chunk_y) + ".png"
