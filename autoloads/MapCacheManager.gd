# autoloads/MapCacheManager.gd
extends Node

const CACHE_DIR := "user://cache/maps/"
const MANIFEST_PATH := "user://cache/maps/cache_manifest.json"
const MAPS_ROOT := "res://assets/maps/"

const TILE_SIZE := 64
const CHUNK_SIZE_TILES := 32          # 32×32 tiles per chunk
const CHUNK_SIZE_PX := CHUNK_SIZE_TILES * TILE_SIZE   # 2048

var _manifest: Dictionary = {}   # map_id → { "chunks": [...], "terrain": "...", "width": int, "height": int }

func _ready() -> void:
	ensure_cache_dir()
	_load_manifest()

func ensure_cache_dir() -> void:
	var dir = DirAccess.open("user://")
	if dir:
		dir.make_dir_recursive("cache/maps")

func _load_manifest() -> void:
	if ResourceLoader.exists(MANIFEST_PATH):
		var file = FileAccess.open(MANIFEST_PATH, FileAccess.READ)
		if file:
			var parsed = JSON.parse_string(file.get_as_text())
			if parsed is Dictionary:
				_manifest = parsed
				print("MapCacheManager: Loaded manifest with " + str(_manifest.size()) + " entries")
			file.close()

func _save_manifest() -> void:
	var file = FileAccess.open(MANIFEST_PATH, FileAccess.WRITE)
	if file:
		file.store_string(JSON.stringify(_manifest, "  ", true))
		file.close()
		print("MapCacheManager: Manifest saved (" + str(_manifest.size()) + " entries)")

# ------------------------------------------------------------------
#  GENERATE CACHE WITH CHUNKING
# ------------------------------------------------------------------
func generate_all_caches() -> void:
	print("=== MapCacheManager: Starting full cache regeneration (chunked) ===")
	_manifest.clear()
	var processed := 0
	_scan_directory(MAPS_ROOT, processed)
	_save_manifest()
	print("=== MapCacheManager: Finished. Processed ", processed, " maps. ===")

func _scan_directory(path: String, processed: int) -> void:
	var dir = DirAccess.open(path)
	if not dir: return

	for file in dir.get_files():
		if not file.ends_with(".png"): continue
		if file == "random.png" or file.begins_with("icon") or "preview" in file: continue
		var map_id = file.get_basename()
		if generate_cache_for_map(map_id, path + file):
			processed += 1

	for subdir in dir.get_directories():
		_scan_directory(path + subdir + "/", processed)

func generate_cache_for_map(map_id: String, full_png_path: String) -> bool:
	var image = load(full_png_path) as Image
	if not image:
		image = Image.load_from_file(full_png_path)
	if not image:
		push_warning("MapCacheManager: Failed to load " + full_png_path)
		return false

	var map_w := image.get_width()
	var map_h := image.get_height()

	# Generate terrain data first (we always need this)
	var terrain_data = _generate_terrain_data(image, map_w, map_h)
	var terrain_filename = map_id.to_lower() + "_terrain.json"
	var terrain_path = CACHE_DIR + terrain_filename

	var terrain_file = FileAccess.open(terrain_path, FileAccess.WRITE)
	if terrain_file:
		terrain_file.store_string(JSON.stringify(terrain_data, "  ", true))
		terrain_file.close()

	# === Chunked Visual Cache ===
	var chunks := []
	var chunk_w := CHUNK_SIZE_TILES
	var chunk_h := CHUNK_SIZE_TILES
	var num_chunks_x := (map_w + chunk_w - 1) / chunk_w
	var num_chunks_y := (map_h + chunk_h - 1) / chunk_h

	print("MapCacheManager: Generating ", num_chunks_x * num_chunks_y, " chunks for ", map_id)

	for cy in num_chunks_y:
		for cx in num_chunks_x:
			var chunk_x := cx * chunk_w
			var chunk_y := cy * chunk_h
			var cw := mini(chunk_w, map_w - chunk_x)
			var ch := mini(chunk_h, map_h - chunk_y)

			var chunk_img := Image.create(cw * TILE_SIZE, ch * TILE_SIZE, false, Image.FORMAT_RGBA8)

			for y in ch:
				for x in cw:
					var gx := chunk_x + x
					var gy := chunk_y + y
					var col = image.get_pixel(gx, gy)
					var terrain_id = GroundsManager.nearest_terrain_id(int(col.r*255), int(col.g*255), int(col.b*255))
					var tile_tex = GroundsManager.get_texture(terrain_id)
					if tile_tex:
						var tile_img = tile_tex.get_image()
						if tile_img:
							if tile_img.get_format() != Image.FORMAT_RGBA8:
								tile_img.convert(Image.FORMAT_RGBA8)
							chunk_img.blit_rect(tile_img, Rect2(0, 0, TILE_SIZE, TILE_SIZE),
												Vector2i(x * TILE_SIZE, y * TILE_SIZE))

			var chunk_filename = map_id.to_lower() + "_chunk_" + str(cx) + "_" + str(cy) + ".png"
			var chunk_path = CACHE_DIR + chunk_filename
			var err = chunk_img.save_png(chunk_path)
			if err != OK:
				push_error("Failed to save chunk " + chunk_filename)
				return false

			chunks.append(chunk_filename)

	# Update manifest
	_manifest[map_id] = {
		"chunks": chunks,
		"chunk_size_tiles": CHUNK_SIZE_TILES,
		"terrain": terrain_filename,
		"width": map_w,
		"height": map_h
	}

	print("MapCacheManager: ✓ Cached " + map_id + " (" + str(chunks.size()) + " chunks + terrain)")
	return true

func _generate_terrain_data(image: Image, map_w: int, map_h: int) -> Dictionary:
	image.convert(Image.FORMAT_RGB8)
	var grid := []
	var spawns := []

	for y in map_h:
		var row := []
		for x in map_w:
			var c = image.get_pixel(x, y)
			var r = int(c.r * 255)
			var g = int(c.g * 255)
			var b = int(c.b * 255)

			if r + g + b < 60 and (g > r + b or r > g + b):
				spawns.append({"x": x, "y": y})
				if y > 0:
					var above = image.get_pixel(x, y-1)
					row.append(GroundsManager.nearest_terrain_id(int(above.r*255), int(above.g*255), int(above.b*255)))
				else:
					row.append("plain")
			else:
				row.append(GroundsManager.nearest_terrain_id(r, g, b))
		grid.append(row)

	return {
		"grid": grid,
		"spawns": spawns,
		"width": map_w,
		"height": map_h
	}

# ------------------------------------------------------------------
#  LOAD CACHED MAP (with chunk stitching + fallback)
# ------------------------------------------------------------------
func load_cached_texture(map_id: String) -> Texture2D:
	# For now we return null — we will stitch chunks in WorldRenderer instead
	# This keeps the old single-texture API if you ever want to fall back
	return null

func load_terrain_data(map_id: String) -> Dictionary:
	if not _manifest.has(map_id):
		_load_manifest()
	if not _manifest.has(map_id):
		return {}

	var entry = _manifest[map_id]
	var path = CACHE_DIR + entry.get("terrain", "")
	if not ResourceLoader.exists(path):
		return {}

	var file = FileAccess.open(path, FileAccess.READ)
	if file:
		var data = JSON.parse_string(file.get_as_text())
		file.close()
		return data if data is Dictionary else {}
	return {}

# New: Returns list of chunk filenames + metadata
func get_chunk_info(map_id: String) -> Dictionary:
	if not _manifest.has(map_id):
		_load_manifest()
	if not _manifest.has(map_id):
		return {}

	return _manifest[map_id]
