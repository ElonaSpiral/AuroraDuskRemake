extends Node

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Map Manager  (Autoload)
#  Godot 4.x  |  GDScript 2.0
#
#  Map discovery is FOLDER-SCAN driven.  maps.json is enrichment
#  only — it is never the sole source of which maps exist.
#
#  ── FOLDER → MODE RULES ──────────────────────────────────
#  Folder name determines faction count and available modes:
#    "1"    → factions=1  → adventure + survival
#    "2"–"8"→ factions=N  → skirmish
#    "10"   → factions=10 → multiplayer
#    "test" → factions=2  → debug
#  Any other folder name is silently skipped.
#
#  ── MAP DISCOVERY ────────────────────────────────────────
#  At startup, MapManager scans assets/maps/<folder>/*.png.
#  Each PNG becomes one map entry:
#    id      = filename stem (e.g. "passRiver" from "passRiver.png")
#    name    = from maps.json byFile enrichment, or auto-prettified
#    mode    = from folder rules, overridden by byFile "mode" field
#    spawns  = from byFile enrichment, or auto-detected from PNG pixels
#
#  ── TERRAIN GRID ─────────────────────────────────────────
#  A 2-D Array[Array[String]] where each cell is a ground id.
#  Pixel colors are matched to grounds.json via nearest-distance.
#  Spawn-marker pixels (near-black with a dominant channel) are
#  replaced with surrounding terrain.
# ─────────────────────────────────────────────────────────────

const DATA_PATH   := "res://data/maps.json"
const ASSETS_ROOT := "res://assets/maps/"

const SPAWN_BRIGHTNESS_MAX := 60

# Folder name → { factions, mode[] }
# Any folder NOT in this dict is ignored during scanning.
#
# Skirmish and multiplayer share the same map pool (folders 2–10).
# Survival uses folder 1 only.
# Adventure mode reads from a separate missions/ folder — not handled here.
# The special "random.png" at assets/maps/ root is registered separately.
const FOLDER_RULES : Dictionary = {
	"1":    {"factions": 1,  "mode": ["survival"]},
	"2":    {"factions": 2,  "mode": ["skirmish", "multiplayer"]},
	"3":    {"factions": 3,  "mode": ["skirmish", "multiplayer"]},
	"4":    {"factions": 4,  "mode": ["skirmish", "multiplayer"]},
	"6":    {"factions": 6,  "mode": ["skirmish", "multiplayer"]},
	"8":    {"factions": 8,  "mode": ["skirmish", "multiplayer"]},
	"10":   {"factions": 10, "mode": ["skirmish", "multiplayer"]},
	"test": {"factions": 2,  "mode": ["debug"]},
}

# Filename in assets/maps/ root treated as the "pick a random map" option.
# Not a real map — handled separately in _register_random_entry().
const RANDOM_PNG := "random.png"

## All discovered map definitions, keyed by map id.
var maps : Dictionary = {}

## Map ids grouped by game mode.
## "adventure" is always empty here — it is handled by the missions system.
## "random" holds a single synthetic entry available to survival/skirmish/multiplayer.
var maps_by_mode : Dictionary = {
	"adventure":   [],
	"survival":    [],
	"skirmish":    [],
	"multiplayer": [],
	"debug":       [],
}


# ─────────────────────────────────────────────────────────────
func _ready() -> void:
	_load_metadata()


func _load_metadata() -> void:
	# Phase 1: load enrichment from maps.json (optional — warns if absent)
	var enrichment := _load_enrichment()

	# Phase 2: scan folders and build map entries
	_scan_map_folders(enrichment)

	# Phase 3: register the random-map meta-entry if random.png exists
	_register_random_entry()

	# Summary
	var total : int = maps.size()
	print("MapManager: %d maps discovered" % total)
	for mode in maps_by_mode.keys():
		var ids : Array = maps_by_mode[mode] as Array
		if not ids.is_empty():
			print("  %s: %s" % [mode, ", ".join(ids)])


# ─────────────────────────────────────────────────────────────
#  ENRICHMENT LOADING  (maps.json byFile section)
# ─────────────────────────────────────────────────────────────

## Returns a Dictionary keyed by PNG filename → enrichment dict.
## e.g. { "passRiver.png": { "name": "Pass River", "spawn_points": [...] } }
func _load_enrichment() -> Dictionary:
	if not FileAccess.file_exists(DATA_PATH):
		push_warning("MapManager: maps.json not found — using auto-generated names only")
		return {}
	var f := FileAccess.open(DATA_PATH, FileAccess.READ)
	if f == null:
		push_warning("MapManager: cannot open maps.json")
		return {}
	var result : Variant = JSON.parse_string(f.get_as_text())
	f.close()
	if not result is Dictionary:
		push_warning("MapManager: maps.json parse failed")
		return {}
	var by_file : Variant = (result as Dictionary).get("byFile", {})
	if not by_file is Dictionary:
		return {}
	return by_file as Dictionary


# ─────────────────────────────────────────────────────────────
#  FOLDER SCANNING
# ─────────────────────────────────────────────────────────────

func _scan_map_folders(enrichment: Dictionary) -> void:
	# Reset mode lists
	for mode_key in maps_by_mode.keys():
		maps_by_mode[mode_key] = []

	var root_dir := DirAccess.open(ASSETS_ROOT)
	if root_dir == null:
		push_error("MapManager: assets/maps/ not found — %s" % ASSETS_ROOT)
		return

	root_dir.list_dir_begin()
	var folder_name := root_dir.get_next()
	while folder_name != "":
		if root_dir.current_is_dir() and FOLDER_RULES.has(folder_name):
			_scan_folder(folder_name, FOLDER_RULES[folder_name] as Dictionary, enrichment)
		folder_name = root_dir.get_next()
	root_dir.list_dir_end()


func _scan_folder(folder: String, rules: Dictionary,
		enrichment: Dictionary) -> void:
	var folder_path := ASSETS_ROOT + folder + "/"
	var dir := DirAccess.open(folder_path)
	if dir == null:
		return

	var default_factions : int   = int(rules.get("factions", 1))
	var default_modes    : Array = Array(rules.get("mode", []))

	dir.list_dir_begin()
	var entry := dir.get_next()
	while entry != "":
		if not dir.current_is_dir() and entry.to_lower().ends_with(".png"):
			_register_map(folder, entry, default_factions, default_modes, enrichment)
		entry = dir.get_next()
	dir.list_dir_end()


func _register_map(folder: String, filename: String,
		default_factions: int, default_modes: Array,
		enrichment: Dictionary) -> void:
	# Map id = filename without extension
	var map_id : String = filename.get_basename()

	# Enrichment for this file (optional)
	var enrich : Dictionary = {}
	if enrichment.has(filename):
		enrich = enrichment[filename] as Dictionary

	# Display name: enrichment → auto-prettify
	var display_name : String = str(enrich.get("name", _prettify_name(map_id)))

	# Mode: enrichment override → folder default
	var modes : Array = []
	if enrich.has("mode"):
		modes = Array(enrich["mode"])
	else:
		modes = default_modes.duplicate()

	# Size: enrichment override → [0,0] (resolved on parse)
	var size : Array = Array(enrich.get("size", [0, 0]))

	# Spawn points: enrichment override → empty (auto-detected on parse)
	var spawn_pts : Array = Array(enrich.get("spawn_points", []))

	var entry : Dictionary = {
		"id":           map_id,
		"name":         display_name,
		"folder":       folder,
		"file":         filename,
		"factions":     default_factions,
		"mode":         modes,
		"size":         size,
		"spawn_points": spawn_pts,
	}

	maps[map_id] = entry

	# Register in mode lookup
	for mode : String in modes:
		if maps_by_mode.has(mode):
			(maps_by_mode[mode] as Array).append(map_id)


# ─────────────────────────────────────────────────────────────
#  RANDOM MAP META-ENTRY
# ─────────────────────────────────────────────────────────────

## Registers a synthetic "random" map entry if assets/maps/random.png exists.
## This is not a real playable map — it is a UI option that tells the game
## to pick a random map matching the current faction count.
## Available in: survival, skirmish, multiplayer.
## The map id is always "random".
func _register_random_entry() -> void:
	var path := ASSETS_ROOT + RANDOM_PNG
	if not _file_exists(path):
		return

	var entry : Dictionary = {
		"id":           "random",
		"name":         "Random Map",
		"folder":       "",
		"file":         RANDOM_PNG,
		"factions":     0,   # 0 = matches any faction count
		"mode":         ["survival", "skirmish", "multiplayer"],
		"size":         [0, 0],
		"spawn_points": [],
		"is_random":    true,
	}
	maps["random"] = entry
	for mode : String in ["survival", "skirmish", "multiplayer"]:
		if maps_by_mode.has(mode):
			(maps_by_mode[mode] as Array).append("random")


## Returns true if the given map id is the random-select meta-entry.
func is_random_map(map_id: String) -> bool:
	return map_id == "random"


## Returns a random map id from the pool that matches faction_count.
## Called by the game when the player confirms "Random Map".
## faction_count: the number of factions configured for the session.
## mode: restrict to maps valid for this mode (e.g. "skirmish").
func pick_random_map(faction_count: int, mode: String) -> String:
	var pool : Array = []
	for mid : String in get_maps_for_mode(mode):
		if mid == "random":
			continue
		var m := get_map_data(mid)
		if int(m.get("factions", 0)) == faction_count:
			pool.append(mid)
	if pool.is_empty():
		push_warning("MapManager: no maps found for %d factions in mode '%s'" % [faction_count, mode])
		# Fall back to any map in the mode
		var fallback := get_maps_for_mode(mode)
		fallback.erase("random")
		return fallback[0] if not fallback.is_empty() else ""
	pool.shuffle()
	return pool[0]


# ─────────────────────────────────────────────────────────────
#  NAME PRETTIFIER
# ─────────────────────────────────────────────────────────────

## Converts a camelCase or PascalCase filename stem to a display name.
## "passRiver"    → "Pass River"
## "aBridgeTooFar"→ "A Bridge Too Far"
## "3islands"     → "3 Islands"
## "triangleFor3" → "Triangle For 3"
func _prettify_name(raw: String) -> String:
	if raw.is_empty():
		return raw
	var result := ""
	for i : int in raw.length():
		var c    : String = raw[i]
		if i > 0:
			var prev       : String = raw[i - 1]
			var is_upper   : bool = c >= "A" and c <= "Z"
			var is_alpha   : bool = (c >= "a" and c <= "z") or is_upper
			var is_digit   : bool = c >= "0" and c <= "9"
			var prev_lower : bool = prev >= "a" and prev <= "z"
			var prev_alpha : bool = (prev >= "a" and prev <= "z") or (prev >= "A" and prev <= "Z")
			var prev_digit : bool = prev >= "0" and prev <= "9"
			# Insert space at: lowercase→UPPER, digit→letter, letter→digit
			if (is_upper and prev_lower) or \
					(is_alpha and prev_digit) or \
					(is_digit and prev_alpha):
				result += " "
		result += c
	# Capitalise first letter of every word
	var words := result.split(" ")
	var out   : PackedStringArray = []
	for w : String in words:
		if not w.is_empty():
			out.append(w[0].to_upper() + w.substr(1))
		else:
			out.append(w)
	return " ".join(out)


# ─────────────────────────────────────────────────────────────
#  PUBLIC API  (unchanged from before)
# ─────────────────────────────────────────────────────────────

## Returns the metadata Dictionary for a map id.
func get_map_data(map_id: String) -> Dictionary:
	return maps.get(map_id, {}) as Dictionary


## Returns all map ids available for a given mode string.
func get_maps_for_mode(mode: String) -> Array:
	return Array(maps_by_mode.get(mode, []))


## Returns the filesystem path to a map's PNG.
## Resolution order:
##   1. The exact file listed in the map entry
##   2. Any .png found in the same folder (catches renamed test maps)
## Always returns a res:// path; use _load_map_image() to load it.
func get_map_path(map_id: String) -> String:
	var m := get_map_data(map_id)
	if m.is_empty():
		return ""
	var primary := ASSETS_ROOT + str(m.get("folder", "1")) + "/" + str(m.get("file", ""))
	if _file_exists(primary):
		return primary

	# Scan folder for any PNG (handles test maps with unknown filename)
	var scan_path := ASSETS_ROOT + str(m.get("folder", "1")) + "/"
	var dir := DirAccess.open(scan_path)
	if dir != null:
		dir.list_dir_begin()
		var entry := dir.get_next()
		while entry != "":
			if not dir.current_is_dir() and entry.to_lower().ends_with(".png"):
				dir.list_dir_end()
				push_warning("MapManager: '%s' exact file missing, using '%s'" % [map_id, entry])
				return scan_path + entry
			entry = dir.get_next()
		dir.list_dir_end()

	return primary   # let parse_map report the error with the expected path


## Parse a map PNG into a terrain grid and return it along with spawn points.
## Returns { "grid": Array[Array[String]], "spawns": Array[Dictionary],
##           "width": int, "height": int }
## Spawn points from enrichment override auto-detected pixels.
## This is expensive — call once per map load and cache the result.
func parse_map(map_id: String) -> Dictionary:
	var m := get_map_data(map_id)
	if m.is_empty():
		push_error("MapManager: unknown map id — %s" % map_id)
		return {"grid": [], "spawns": [], "width": 0, "height": 0}

	var path := get_map_path(map_id)
	if not _file_exists(path):
		push_error("MapManager: PNG not found — %s" % path)
		return {"grid": [], "spawns": [], "width": 0, "height": 0}

	var img := _load_map_image(path)
	if img == null:
		push_error("MapManager: failed to load image — %s" % path)
		return {"grid": [], "spawns": [], "width": 0, "height": 0}

	img.convert(Image.FORMAT_RGB8)
	var w : int = img.get_width()
	var h : int = img.get_height()

	var grid   : Array = []
	var spawns : Array = []

	for y : int in h:
		var row : Array = []
		for x : int in w:
			var c  := img.get_pixel(x, y)
			var ri := int(c.r8)
			var gi := int(c.g8)
			var bi := int(c.b8)
			if _is_spawn_pixel(ri, gi, bi):
				spawns.append({"x": x, "y": y})
				# Replace spawn pixel with terrain from pixel above
				if y > 0:
					var above := img.get_pixel(x, y - 1)
					row.append(GroundsManager.nearest_terrain_id(
						int(above.r8), int(above.g8), int(above.b8)))
				else:
					row.append("plain")
			else:
				row.append(GroundsManager.nearest_terrain_id(ri, gi, bi))
		grid.append(row)

	# Enrichment spawn points override auto-detected ones
	var meta_spawns : Array = Array(m.get("spawn_points", []))
	var final_spawns : Array = meta_spawns if not meta_spawns.is_empty() else spawns
	
	var result = {"grid": grid, "spawns": final_spawns, "width": w, "height": h}
	
	current_map_width = w
	current_map_height = h
	last_parse_result = result
	
	return result


## Returns the terrain id at a given pixel coordinate on a parsed grid.
func get_terrain_at(grid: Array, x: int, y: int) -> String:
	if y < 0 or y >= grid.size():
		return "plain"
	var row : Array = grid[y] as Array
	if x < 0 or x >= row.size():
		return "plain"
	return str(row[x])


## Returns the movement speed multiplier for terrain at (x,y).
func get_speed_at(grid: Array, x: int, y: int) -> float:
	return GroundsManager.get_speed(get_terrain_at(grid, x, y))


## Returns true if (x,y) is buildable terrain.
func is_buildable_at(grid: Array, x: int, y: int) -> bool:
	return GroundsManager.is_buildable(get_terrain_at(grid, x, y))


# ─────────────────────────────────────────────────────────────
#  IMAGE LOADING
# ─────────────────────────────────────────────────────────────

## Two-stage image loader for map PNGs.
## Stage 1: absolute path via globalize — works for raw/unimported PNGs.
## Stage 2: ResourceLoader via res:// — works for Godot-imported PNGs.
## Both cases are needed: newly-dropped PNGs have no .import sidecar;
## PNGs already processed by Godot have an internal format that
## Image.load(abs_path) cannot read.
func _load_map_image(res_path: String) -> Image:
	var abs_path := ProjectSettings.globalize_path(res_path)
	if FileAccess.file_exists(abs_path):
		var img := Image.new()
		if img.load(abs_path) == OK:
			return img
	if ResourceLoader.exists(res_path):
		var tex := ResourceLoader.load(res_path) as Texture2D
		if tex != null:
			return tex.get_image()
	return null


func _file_exists(path: String) -> bool:
	return FileAccess.file_exists(ProjectSettings.globalize_path(path))


# ─────────────────────────────────────────────────────────────
#  SPAWN PIXEL DETECTION
# ─────────────────────────────────────────────────────────────

## dark-green rgb(0,~48,0): g > r+b
## dark-red   rgb(~28,0,0): r > g+b
func _is_spawn_pixel(r: int, g: int, b: int) -> bool:
	if r + g + b >= SPAWN_BRIGHTNESS_MAX:
		return false
	if g > r + b:
		return true
	if r > g + b:
		return true
	return false

# Add these at the bottom of MapManager.gd

var current_map_width: int = 0
var current_map_height: int = 0
var last_parse_result: Dictionary = {}

# Add at the bottom of MapManager.gd

func get_current_map_width() -> int:
	return current_map_width


func get_current_map_height() -> int:
	return current_map_height
