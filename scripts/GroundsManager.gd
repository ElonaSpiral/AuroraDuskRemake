extends Node

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Grounds Manager  (Autoload)
#  Godot 4.x  |  GDScript 2.0
#
#  Loads terrain type definitions from res://data/grounds.json
#  (converted from the original game's data/grounds/*.js).
#
#  Asset paths (relative to res://assets/grounds/):
#    Tile textures : <id>.png           e.g. "grass.png"
#    Masks         : masks/<file>       e.g. "masks/mask.png"
#    Decorations   : random/<file>      e.g. "random/plants.png"
#
#  Data fields per ground type:
#    id              String   — unique key  (e.g. "grass")
#    order           int      — original sort index
#    texture         String   — tile image filename
#    mask            String   — edge-blend mask filename
#    color           String   — hex colour for minimap ("#298400")
#    color_int       int      — colour as integer (original game format)
#    speed           float    — unit movement multiplier (1.0 = normal)
#    buildable       bool     — whether structures may be placed here
#    level           float    — elevation tier
#                              -2 = deep water … 2 = mountains
#    translate_y     int      — vertical sprite offset (water animation)
#    effect          String?  — rendering effect name ("waterEffect" / null)
#    random_decorations Array — [{file, rate}] decoration spawn entries
#
#  Speed interpretation (from grounds.js):
#    0.25  deep water   — nearly impassable
#    0.40  rocks        — very slow
#    0.50  mid water    — slow
#    0.70  snow / swamp — hindered
#    0.75  shallow water
#    0.80  sand
#    1.00  plain/grass/soil — normal
#    1.20  road         — bonus speed
# ─────────────────────────────────────────────────────────────

const DATA_PATH     := "res://data/grounds.json"
const ASSETS_ROOT   := "res://assets/grounds/"

## All ground definitions keyed by id.
var grounds : Dictionary = {}

## Ground ids ordered by their original sort index.
var ground_ids : Array[String] = []

## Tile textures cached by id (loaded on first request).
var _texture_cache : Dictionary = {}


# ─────────────────────────────────────────────────────────────
func _ready() -> void:
	_load_data()


func _load_data() -> void:
	if not FileAccess.file_exists(DATA_PATH):
		push_error("GroundsManager: data file not found — %s" % DATA_PATH)
		return

	var f := FileAccess.open(DATA_PATH, FileAccess.READ)
	if f == null:
		push_error("GroundsManager: cannot open — %s" % DATA_PATH)
		return

	var result : Variant = JSON.parse_string(f.get_as_text())
	f.close()

	if not result is Dictionary:
		push_error("GroundsManager: JSON parse failed — %s" % DATA_PATH)
		return

	grounds = result as Dictionary

	# Build ordered id list sorted by the "order" field
	var entries := grounds.values()
	entries.sort_custom(func(a, b): return int(a.order) < int(b.order))
	for entry in entries:
		ground_ids.append(str(entry.id))


# ─────────────────────────────────────────────────────────────
#  PUBLIC API
# ─────────────────────────────────────────────────────────────

## Returns the full data dictionary for a ground id, or empty dict.
func get_ground(id: String) -> Dictionary:
	return grounds.get(id, {}) as Dictionary


## Returns the movement speed multiplier for a ground id.
## Falls back to 1.0 (normal speed) for unknown types.
func get_speed(id: String) -> float:
	return float(grounds.get(id, {}).get("speed", 1.0))


## Returns true if structures can be placed on this ground type.
func is_buildable(id: String) -> bool:
	return bool(grounds.get(id, {}).get("buildable", false))


## Returns the elevation level for a ground id.
## Negative = underwater, 0 = flat land, positive = elevated.
func get_level(id: String) -> float:
	return float(grounds.get(id, {}).get("level", 0.0))


## Returns the minimap colour (as Color) for a ground id.
func get_color(id: String) -> Color:
	var ci : int = int(grounds.get(id, {}).get("color_int", 0x808080))
	var r := ((ci >> 16) & 0xFF) / 255.0
	var g := ((ci >>  8) & 0xFF) / 255.0
	var b := ( ci        & 0xFF) / 255.0
	return Color(r, g, b, 1.0)


## Returns true if the ground has a water-type effect.
func is_water(id: String) -> bool:
	var g := get_ground(id)
	return str(g.get("effect", "")) == "waterEffect"


## Returns the ground id whose canonical color is nearest to the given RGB.
## This is the core terrain-identification function used when parsing map PNGs.
func nearest_terrain_id(r: int, g: int, b: int) -> String:
	var best_id   := "plain"
	var best_dist := INF
	for gid : String in grounds.keys():
		var entry := grounds[gid] as Dictionary
		var ci    : int = int(entry.get("color_int", 0))
		var rc := (ci >> 16) & 0xFF
		var gc := (ci >>  8) & 0xFF
		var bc :=  ci        & 0xFF
		var d  : float = ((r - rc) * (r - rc) + (g - gc) * (g - gc) + (b - bc) * (b - bc))
		if d < best_dist:
			best_dist = d
			best_id   = gid
	return best_id


## Returns the ground id AND distance for diagnostics / editor tools.
func nearest_terrain_with_dist(r: int, g: int, b: int) -> Dictionary:
	var best_id   := "plain"
	var best_dist := INF
	for gid : String in grounds.keys():
		var entry := grounds[gid] as Dictionary
		var ci    : int = int(entry.get("color_int", 0))
		var rc := (ci >> 16) & 0xFF
		var gc := (ci >>  8) & 0xFF
		var bc :=  ci        & 0xFF
		var d  : float = ((r - rc) * (r - rc) + (g - gc) * (g - gc) + (b - bc) * (b - bc))
		if d < best_dist:
			best_dist = d
			best_id   = gid
	return {"id": best_id, "dist": sqrt(best_dist)}


## Returns the Texture2D for a ground tile, loading and caching on first call.
## Returns null if the texture file does not exist.
func get_texture(id: String) -> Texture2D:
	if _texture_cache.has(id):
		return _texture_cache[id] as Texture2D
	var g := get_ground(id)
	if g.is_empty():
		return null
	var path := ASSETS_ROOT + str(g.get("texture", ""))
	if not ResourceLoader.exists(path):
		push_warning("GroundsManager: texture not found — %s" % path)
		return null
	var tex := load(path) as Texture2D
	_texture_cache[id] = tex
	return tex


## Returns the mask Texture2D for a ground tile (edge-blending mask).
func get_mask(id: String) -> Texture2D:
	var g := get_ground(id)
	if g.is_empty():
		return null
	var path := ASSETS_ROOT + "masks/" + str(g.get("mask", "mask.png"))
	if not ResourceLoader.exists(path):
		return null
	return load(path) as Texture2D


## Returns a list of random decoration spawn definitions for a ground id.
## Each entry is a Dictionary with "file" (String) and "rate" (float 0–1).
func get_decorations(id: String) -> Array:
	var g := get_ground(id)
	return Array(g.get("random_decorations", []))


## Chooses a random decoration file for a ground tile based on spawn rates.
## Returns "" if no decoration should spawn this tile (most tiles will return "").
func roll_decoration(id: String) -> String:
	for dec in get_decorations(id):
		var rate := float(dec.get("rate", 0.0))
		if randf() < rate:
			return str(dec.get("file", ""))
	return ""
