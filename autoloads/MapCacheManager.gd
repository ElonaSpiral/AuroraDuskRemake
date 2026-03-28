# autoloads/MapCacheManager.gd
extends Node

const CACHE_DIR := "user://cache/maps/"
const MANIFEST_PATH := "user://cache/maps/cache_manifest.json"
const MAPS_ROOT := "res://assets/maps/"
const TILE_SIZE := 64
const MAX_SAFE_DIMENSION := 8192

var _manifest: Dictionary = {}   # Key = official map_id (e.g. "AuroraFields"), Value = filename on disk (e.g. "aurorafields.png")

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
			var json_text = file.get_as_text()
			var parsed = JSON.parse_string(json_text)
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
	else:
		push_error("MapCacheManager: Failed to save manifest!")

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
		var map_id = file.get_basename()          # Official map_id (e.g. "AuroraFields")
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
		push_warning("MapCacheManager: Map " + map_id + " (" + str(baked_w) + "x" + str(baked_h) + ") too large. Skipping.")
		return false

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

	var safe_filename = map_id.to_lower() + ".png"
	var cache_path = CACHE_DIR + safe_filename

	var err = baked.save_png(cache_path)
	if err != OK:
		push_error("MapCacheManager: Failed to save " + map_id + " (err " + str(err) + ")")
		return false

	_manifest[map_id] = safe_filename
	print("MapCacheManager: ✓ Cached " + map_id + " as " + safe_filename + " (" + str(map_w) + "×" + str(map_h) + ")")

	# Small delay to help filesystem settle
	OS.delay_msec(50)
	return true

func load_cached_texture(map_id: String) -> Texture2D:
	if map_id.is_empty():
		return null

	# Force reload manifest
	_load_manifest()

	var filename := ""
	if _manifest.has(map_id):
		filename = _manifest[map_id]
	else:
		filename = map_id.to_lower() + ".png"

	var full_path = CACHE_DIR + filename

	# Force directory refresh
	DirAccess.open(CACHE_DIR)

	# Method 1: Try direct Image load (most reliable for user://)
	var img := Image.load_from_file(full_path)
	if img:
		print("MapCacheManager: ✓ Loaded via Image.load_from_file: " + filename)
		var tex := ImageTexture.create_from_image(img)
		return tex

	# Method 2: Fallback to ResourceLoader
	if ResourceLoader.exists(full_path):
		var tex = load(full_path) as Texture2D
		if tex:
			print("MapCacheManager: ✓ Loaded via ResourceLoader: " + filename)
			return tex

	print("MapCacheManager: Failed to load cache for '" + map_id + "' (file " + filename + " exists but could not be loaded)")
	return null
