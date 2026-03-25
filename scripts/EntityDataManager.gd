extends Node

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Entity Data Manager  (Autoload)
#  Godot 4.x  |  GDScript 2.0
#
#  No class_name — autoload name conflict restriction.
#  No static funcs — autoload calls require an instance reference.
#
#  ── TEXTURE LOADING (no .import needed) ──────────────────
#  load_texture(path) uses Image.load() → ImageTexture so assets
#  work whether or not Godot has generated a .import sidecar.
#  This makes the game mod-friendly: drop a PNG next to its
#  definition file and it will be picked up immediately.
#
#  ── MISSING SPRITE BEHAVIOUR ──────────────────────────────
#  If a sprite file is absent the entity still exists in the
#  game — it renders as a small magenta placeholder square so
#  it is visible and selectable.  One warning is issued per
#  missing asset (never repeated).  This mirrors the original
#  game's behaviour where modded entities appear even without
#  a matching image.
#
#  ── ASSET RESOLUTION ORDER ────────────────────────────────
#  get_sprite_path(id):
#    1. assets/characters/<category>/<file>  (canonical)
#    2. Scan every subdir of assets/characters/  (fallback)
#    3. "" + warn once  (missing)
#
#  ── SPRITE SHEET TYPES ────────────────────────────────────
#  BUILDING_STRIP  — 2 orientation frames, cell = w × visualH
#  YARD_STRIP      — steps×2 frames + shadow row, cell = w × visualH
#  UNIT_ANIMATED   — 3×4 directional grid, cell = (w*2) × (visualH*2)
# ─────────────────────────────────────────────────────────────

const DATA_ROOT  := "res://data/characters/"
const ASSET_ROOT := "res://assets/characters/"

# Size of the magenta placeholder square (pixels).
const PLACEHOLDER_SIZE := 32

enum SpriteType {
	UNKNOWN,
	BUILDING_STRIP,
	YARD_STRIP,
	UNIT_ANIMATED,
}

var entities    : Dictionary = {}
var by_type     : Dictionary = {}
var by_age      : Dictionary = {}
var _category   : Dictionary = {}
var _path_cache : Dictionary = {}   # entity_id → resolved path (or "")
var _tex_cache  : Dictionary = {}   # file_path  → ImageTexture
var _missing    : Dictionary = {}   # entity_id  → true (warn-once)

## Cached placeholder texture (magenta square, created on first use).
var _placeholder : ImageTexture = null

## Runtime reference to AgesManager singleton.
var _ages : Node = null


# ─────────────────────────────────────────────────────────────
func _ready() -> void:
	_ages = get_node_or_null("/root/AgesManager")
	_load_all()


# ─────────────────────────────────────────────────────────────
#  DATA LOADING
# ─────────────────────────────────────────────────────────────

func _load_all() -> void:
	var dir := DirAccess.open(DATA_ROOT)
	if dir == null:
		push_warning("EntityDataManager: %s not found" % DATA_ROOT)
		return
	dir.list_dir_begin()
	var fname := dir.get_next()
	while fname != "":
		if not dir.current_is_dir() and fname.ends_with(".json"):
			_load_file(DATA_ROOT + fname, fname.get_basename())
		fname = dir.get_next()
	dir.list_dir_end()
	print("EntityDataManager: %d entities loaded" % entities.size())


func _load_file(path: String, category: String) -> void:
	var f := FileAccess.open(path, FileAccess.READ)
	if f == null:
		push_error("EntityDataManager: cannot open %s" % path)
		return
	var result : Variant = JSON.parse_string(f.get_as_text())
	f.close()
	if not result is Dictionary:
		push_error("EntityDataManager: JSON parse error in %s" % path)
		return

	var loaded := 0
	for eid : String in (result as Dictionary).keys():
		if eid.begins_with("_"):
			continue
		var def : Dictionary = (result as Dictionary)[eid] as Dictionary
		entities[eid]  = def
		_category[eid] = category

		var etype : String = str(def.get("type", "unknown"))
		if not by_type.has(etype):
			by_type[etype] = []
		(by_type[etype] as Array).append(eid)

		var eage : String = str(def.get("age", ""))
		if eage != "":
			if not by_age.has(eage):
				by_age[eage] = []
			(by_age[eage] as Array).append(eid)

		loaded += 1

	if loaded > 0:
		print("EntityDataManager:   %s → %d entities" % [category, loaded])


# ─────────────────────────────────────────────────────────────
#  TEXTURE LOADING  (no .import required)
# ─────────────────────────────────────────────────────────────

## Loads a texture from an absolute path using Image.load().
## No Godot .import sidecar is required — works on raw PNG/JPG.
## Results are cached; repeated calls for the same path are free.
## Returns a magenta placeholder ImageTexture if the file is missing.
func load_texture(path: String) -> ImageTexture:
	# Return cached result immediately
	if _tex_cache.has(path):
		return _tex_cache[path] as ImageTexture

	if path != "" and FileAccess.file_exists(path):
		var img := Image.new()
		if img.load(path) == OK:
			var tex := ImageTexture.create_from_image(img)
			_tex_cache[path] = tex
			return tex
		else:
			push_warning("EntityDataManager: Image.load() failed for '%s'" % path)

	# File missing or load failed — return placeholder
	_tex_cache[path] = _get_placeholder()
	return _get_placeholder()


## Returns (creating if necessary) a small magenta square texture.
## Used as the visible stand-in for any entity whose sprite is absent.
## The entity is still present and functional — only the visual is missing.
func _get_placeholder() -> ImageTexture:
	if _placeholder != null:
		return _placeholder
	var img := Image.create(PLACEHOLDER_SIZE, PLACEHOLDER_SIZE, false, Image.FORMAT_RGBA8)
	img.fill(Color(1.0, 0.0, 1.0, 0.75))   # semi-transparent magenta
	# Draw a 1-px black border so it's obvious against any background
	for i : int in PLACEHOLDER_SIZE:
		img.set_pixel(i, 0,                    Color.BLACK)
		img.set_pixel(i, PLACEHOLDER_SIZE - 1, Color.BLACK)
		img.set_pixel(0, i,                    Color.BLACK)
		img.set_pixel(PLACEHOLDER_SIZE - 1, i, Color.BLACK)
	_placeholder = ImageTexture.create_from_image(img)
	return _placeholder


## Loads and returns the texture for an entity's sprite sheet.
## If the sprite file is absent, returns the placeholder and warns once.
func get_texture(id: String) -> ImageTexture:
	var path := get_sprite_path(id)
	if path == "":
		# Warn once that the sprite is missing
		if not _missing.has(id):
			_missing[id] = true
			var cat   : String = str(_category.get(id, "?"))
			var def   : Dictionary = get_entity(id)
			var pic   : Dictionary = def.get("picture", {}) as Dictionary
			var fname : String     = str(pic.get("file", "?.png"))
			push_warning(
				"EntityDataManager: no sprite for '%s' — " % id +
				"expected at %s%s/%s — " % [ASSET_ROOT, cat, fname] +
				"rendering as placeholder (entity still active)"
			)
		return _get_placeholder()
	return load_texture(path)


# ─────────────────────────────────────────────────────────────
#  ASSET PATH RESOLUTION
# ─────────────────────────────────────────────────────────────

## Returns the resolved path to an entity's PNG, or "" if absent.
## Uses FileAccess (not ResourceLoader) so .import is never required.
func get_sprite_path(id: String) -> String:
	if _path_cache.has(id):
		return _path_cache[id]

	var def   : Dictionary = get_entity(id)
	if def.is_empty():
		_path_cache[id] = ""
		return ""

	var pic   : Dictionary = def.get("picture", {}) as Dictionary
	var fname : String     = str(pic.get("file", ""))
	if fname.is_empty():
		_path_cache[id] = ""
		return ""

	# 1. Canonical location: assets/characters/<category>/<file>
	var cat       : String = str(_category.get(id, ""))
	var canonical : String = ASSET_ROOT + cat + "/" + fname
	if FileAccess.file_exists(canonical):
		_path_cache[id] = canonical
		return canonical

	# 2. Scan all subdirs of assets/characters/
	var found : String = _scan_subdirs(fname)
	if found != "":
		_path_cache[id] = found
		return found

	# Not found — cache the miss so scanning doesn't repeat every frame
	_path_cache[id] = ""
	return ""


func _scan_subdirs(fname: String) -> String:
	var dir := DirAccess.open(ASSET_ROOT)
	if dir == null:
		return ""
	dir.list_dir_begin()
	var entry := dir.get_next()
	while entry != "":
		if dir.current_is_dir():
			var candidate := ASSET_ROOT + entry + "/" + fname
			if FileAccess.file_exists(candidate):
				dir.list_dir_end()
				return candidate
		entry = dir.get_next()
	dir.list_dir_end()
	return ""


## True if the entity has a real sprite file on disk (not just data).
func has_sprite(id: String) -> bool:
	return get_sprite_path(id) != ""


# ─────────────────────────────────────────────────────────────
#  SPRITE TYPE DETECTION
# ─────────────────────────────────────────────────────────────

func get_sprite_type(id: String, is_active: bool = true) -> SpriteType:
	var etype : String = str(get_entity(id).get("type", ""))
	match etype:
		"prebuild":
			return SpriteType.YARD_STRIP
		"buildingMonster":
			return SpriteType.UNIT_ANIMATED if is_active else SpriteType.YARD_STRIP
		"monster", "soldier", "playable":
			return SpriteType.UNIT_ANIMATED
		"defenseTower", "barrack", "resurrectTower", "wall":
			return SpriteType.BUILDING_STRIP
		_:
			if get_entity(id).has("speed"):
				return SpriteType.UNIT_ANIMATED
			return SpriteType.BUILDING_STRIP


func is_mobile_unit(id: String) -> bool:
	return str(get_entity(id).get("type", "")) in ["monster", "soldier", "playable"]


func is_golem(id: String) -> bool:
	return str(get_entity(id).get("type", "")) == "buildingMonster"


# ─────────────────────────────────────────────────────────────
#  ENTITY DATA API
# ─────────────────────────────────────────────────────────────

func get_entity(id: String) -> Dictionary:
	return entities.get(id, {}) as Dictionary


func get_by_type(etype: String) -> Array:
	return Array(by_type.get(etype, []))


func get_by_age(age_id: String) -> Array:
	return Array(by_age.get(age_id, []))


func get_unlocked(etype: String, current_age: String) -> Array:
	var result : Array = []
	if _ages == null:
		push_warning("EntityDataManager.get_unlocked: AgesManager not ready")
		return get_by_type(etype)
	for eid : String in get_by_type(etype):
		var eage : String = str(get_entity(eid).get("age", ""))
		if eage != "" and _ages.age_is_unlocked(eage, current_age):
			result.append(eid)
	return result


func get_entity_name(id: String, lang: String = "EN") -> String:
	var def := get_entity(id)
	if def.is_empty(): return id
	var names := def.get("name", {}) as Dictionary
	return str(names.get(lang, names.get("EN", id)))


func get_entity_description(id: String, lang: String = "EN") -> String:
	var def := get_entity(id)
	if def.is_empty(): return ""
	var descs := def.get("description", {}) as Dictionary
	return str(descs.get(lang, descs.get("EN", "")))


func get_health(id: String) -> int:
	return int(get_entity(id).get("health", 0))


func get_defense(id: String) -> int:
	return int(get_entity(id).get("defense", 0))


func get_width(id: String) -> int:
	return int(get_entity(id).get("width", 32))


func get_height(id: String) -> int:
	return int(get_entity(id).get("height", 32))


func get_visual_height(id: String) -> int:
	var def := get_entity(id)
	if def.has("visualHeight"):
		return int(def["visualHeight"])
	return int(def.get("height", 32))


func get_resistances(id: String) -> Dictionary:
	return get_entity(id).get("resistance", {}) as Dictionary


func apply_resistance(id: String, damage_type: String, raw: float) -> float:
	return raw * float(get_resistances(id).get(damage_type, 1.0))


func get_build_cost_resources(id: String) -> Dictionary:
	var build := get_entity(id).get("build", {}) as Dictionary
	return build.get("costRessource", {}) as Dictionary


func get_prebuild_id(id: String) -> String:
	var build := get_entity(id).get("build", {}) as Dictionary
	if build.is_empty(): return ""
	var pb := build.get("prebuild", {}) as Dictionary
	return str(pb.get("id", ""))


func get_prebuild_time(id: String) -> float:
	var build := get_entity(id).get("build", {}) as Dictionary
	if build.is_empty(): return 0.0
	var pb := build.get("prebuild", {}) as Dictionary
	return float(pb.get("time", 0.0))


func is_prebuild(id: String) -> bool:
	return str(get_entity(id).get("type", "")) == "prebuild"


func can_attack(id: String) -> bool:
	var def := get_entity(id)
	return def.has("attack") or def.has("attacks")
