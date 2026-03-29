# autoloads/MapCacheManager.gd
extends Node

const CACHE_DIR := "user://cache/maps/"
const MANIFEST_PATH := "user://cache/maps/cache_manifest.json"
const MAPS_ROOT := "res://assets/maps/"
const TILE_SIZE := 64
const MAX_SAFE_DIMENSION := 8192

var _manifest: Dictionary = {}   # map_id → { "visual": "...png", "terrain": "...json" }

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
#  GENERATE CACHE + TERRAIN DATA
# ------------------------------------------------------------------
func generate_all_caches() -> void:
	print("=== MapCacheManager: Starting full cache regeneration ===")
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
	var baked_w := map_w * TILE_SIZE
	var baked_h := map_h * TILE_SIZE

	if baked_w > MAX_SAFE_DIMENSION or baked_h > MAX_SAFE_DIMENSION:
		push_warning("MapCacheManager: Map " + map_id + " too large (" + str(baked_w) + "x" + str(baked_h) + "). Skipping.")
		return false

	# 1. Create visual cache
	var baked := Image.create(baked_w, baked_h, false, Image.FORMAT_RGBA8)
	for y in map_h:
		for x in map_w:
			var col = image.get_pixel(x, y)
			var terrain_id = GroundsManager.nearest_terrain_id(int(col.r*255), int(col.g*255), int(col.b*255))
			var tile_tex = GroundsManager.get_texture(terrain_id)
			if tile_tex:
				var tile_img = tile_tex.get_image()
				if tile_img:
					if tile_img.get_format() != Image.FORMAT_RGBA8:
						tile_img.convert(Image.FORMAT_RGBA8)
					baked.blit_rect(tile_img, Rect2(0, 0, TILE_SIZE, TILE_SIZE),
									Vector2i(x * TILE_SIZE, y * TILE_SIZE))

	var visual_filename = map_id.to_lower() + ".png"
	var visual_path = CACHE_DIR + visual_filename
	var err = baked.save_png(visual_path)
	if err != OK:
		push_error("MapCacheManager: Failed to save visual for " + map_id)
		return false

	# 2. Create terrain data
	var terrain_data = _generate_terrain_data(image, map_w, map_h)
	var terrain_filename = map_id.to_lower() + "_terrain.json"
	var terrain_path = CACHE_DIR + terrain_filename

	var terrain_file = FileAccess.open(terrain_path, FileAccess.WRITE)
	if terrain_file:
		terrain_file.store_string(JSON.stringify(terrain_data, "  ", true))
		terrain_file.close()

	# 3. Update manifest
	_manifest[map_id] = {
		"visual": visual_filename,
		"terrain": terrain_filename,
		"width": map_w,
		"height": map_h
	}

	print("MapCacheManager: ✓ Cached " + map_id + " (visual + terrain)")
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

			if r + g + b < 60 and (g > r + b or r > g + b):  # spawn pixel
				spawns.append({"x": x, "y": y})
				# Use terrain from pixel above or default
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
#  LOAD CACHED MAP
# ------------------------------------------------------------------
func load_cached_texture(map_id: String) -> Texture2D:
	if not _manifest.has(map_id):
		_load_manifest()
	if not _manifest.has(map_id):
		return null

	var entry = _manifest[map_id]
	var path = CACHE_DIR + entry.get("visual", "")
	if ResourceLoader.exists(path):
		return load(path) as Texture2D

	# Fallback direct load
	var img = Image.load_from_file(path)
	if img:
		return ImageTexture.create_from_image(img)
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
