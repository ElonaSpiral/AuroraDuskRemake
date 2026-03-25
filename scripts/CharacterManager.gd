extends Node

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Character Manager  (Autoload)
#  Godot 4.x  |  GDScript 2.0
#
#  All game data (races, characteristics, skills, jobs, expertise)
#  is loaded from JSON files in res://data/ at startup — mirroring
#  the original game's data-driven .js file approach.
#
#  File structure:
#    res://data/
#      races.json          — race definitions + stat modifiers
#      characteristics.json — characteristic definitions (primary/secondary)
#      skills.json         — skill definitions with categories
#      jobs.json           — job definitions + skill modifiers
#      expertise.json      — expertise definitions + skill modifiers
#
#  Character save path:
#    user://characters.cfg
# ─────────────────────────────────────────────────────────────

const SAVE_PATH := "user://characters.cfg"

# ── Loaded data tables (populated in _ready) ─────────────────
var races           : Dictionary = {}   # id -> race Dictionary
var characteristics : Dictionary = {}   # id -> char Dictionary
var skills          : Dictionary = {}   # id -> skill Dictionary
var jobs            : Dictionary = {}   # id -> job Dictionary
var expertise_list  : Dictionary = {}   # id -> expertise Dictionary

# ── Ordered lists derived from loaded data ───────────────────
# Use these arrays when order matters (UI display, save slots)
var race_ids            : Array[String] = []
var characteristic_ids  : Array[String] = []
var skill_ids           : Array[String] = []   # sorted alphabetically
var job_ids             : Array[String] = []
var expertise_ids       : Array[String] = []

# ── Runtime character list ────────────────────────────────────
var characters : Array[Dictionary] = []


# ─────────────────────────────────────────────────────────────
func _ready() -> void:
	_load_data()
	load_all()


# ── Data loading ──────────────────────────────────────────────

func _load_data() -> void:
	races           = _load_json("res://data/races.json")
	characteristics = _load_json("res://data/characteristics.json")
	skills          = _load_json("res://data/skills.json")
	jobs            = _load_json("res://data/jobs.json")
	expertise_list  = _load_json("res://data/expertise.json")

	# Build ordered ID lists.
	# All loops skip "_"-prefixed keys (used for _comment / _meta entries).

	# Races: preserve insertion order from JSON
	for k : String in races.keys():
		if not k.begins_with("_") and races[k] is Dictionary:
			race_ids.append(k)

	# Characteristics: sort by "order" field
	var char_list : Array = []
	for k : String in characteristics.keys():
		if not k.begins_with("_") and characteristics[k] is Dictionary:
			var entry := characteristics[k] as Dictionary
			if not entry.has("id"):
				entry["id"] = k
			char_list.append(entry)
	char_list.sort_custom(func(a, b): return int(a.get("order", 0)) < int(b.get("order", 0)))
	for c in char_list:
		characteristic_ids.append(str(c.get("id", "")))

	# Skills: alphabetical by display name
	var skill_list : Array = []
	for k : String in skills.keys():
		if not k.begins_with("_") and skills[k] is Dictionary:
			var entry := skills[k] as Dictionary
			if not entry.has("id"):
				entry["id"] = k
			skill_list.append(entry)
	skill_list.sort_custom(func(a, b): \
		return str(a.get("name", "")).nocasecmp_to(str(b.get("name", ""))) < 0)
	for s in skill_list:
		skill_ids.append(str(s.get("id", "")))

	# Jobs / expertise: preserve insertion order
	for k : String in jobs.keys():
		if not k.begins_with("_") and jobs[k] is Dictionary:
			job_ids.append(k)
	for k : String in expertise_list.keys():
		if not k.begins_with("_") and expertise_list[k] is Dictionary:
			expertise_ids.append(k)


func _load_json(path: String) -> Dictionary:
	if not FileAccess.file_exists(path):
		push_error("CharacterManager: data file not found — %s" % path)
		return {}
	var f := FileAccess.open(path, FileAccess.READ)
	if f == null:
		push_error("CharacterManager: cannot open — %s" % path)
		return {}
	var text   := f.get_as_text()
	f.close()
	var result : Variant = JSON.parse_string(text)
	if result == null or not result is Dictionary:
		push_error("CharacterManager: JSON parse failed — %s" % path)
		return {}
	return result as Dictionary


# ── Public convenience helpers ────────────────────────────────

## Display name for a race id.
func race_name(race_id: String) -> String:
	return str(races.get(race_id, {}).get("name", race_id)).capitalize()

## Display name for a job id.
func job_name(job_id: String) -> String:
	return str(jobs.get(job_id, {}).get("name", job_id))

## Display name for an expertise id.
func expertise_name(exp_id: String) -> String:
	return str(expertise_list.get(exp_id, {}).get("name", exp_id))

## Display name for a characteristic id.
func char_display_name(char_id: String) -> String:
	var n : String = str(characteristics.get(char_id, {}).get("name", char_id))
	return n.capitalize()

## Display name for a skill id.
func skill_display_name(skill_id: String) -> String:
	var n : String = str(skills.get(skill_id, {}).get("name", skill_id))
	return n.capitalize()

## Description for a race.
func race_description(race_id: String) -> String:
	return str(races.get(race_id, {}).get("description", ""))

## Base stat value for a characteristic given a race (falls back to 100).
func base_stat(race_id: String, char_id: String) -> int:
	var race_data := races.get(race_id, {}) as Dictionary
	var char_data := race_data.get("characteristics", {}) as Dictionary
	return int(char_data.get(char_id, 100))


# ── Character creation ────────────────────────────────────────

## Build a new character Dictionary with stats and skill scores computed
## from race + job + expertise data.
func make_character(
		char_name : String,
		race_id   : String,
		gender    : String,
		job_id    : String,
		exp_id    : String
) -> Dictionary:
	var c := {
		"name":      char_name,
		"race":      race_id,
		"gender":    gender,
		"job":       job_id,
		"expertise": exp_id,
		"level":     1,
		"xp":        0,
		"characteristics": {},
		"skills":          {},
	}

	# Set characteristics from race data
	for char_id : String in characteristic_ids:
		c.characteristics[char_id] = base_stat(race_id, char_id)

	# Build skill scores: race mods + job mods + expertise mods
	var race_mods  : Dictionary = races.get(race_id, {}).get("skill_modifiers", {}) as Dictionary
	var job_mods   : Dictionary = jobs.get(job_id, {}).get("skill_modifiers", {}) as Dictionary
	var exp_mods   : Dictionary = expertise_list.get(exp_id, {}).get("skill_modifiers", {}) as Dictionary

	for skill_id : String in skill_ids:
		var score : int = 0
		score += int(race_mods.get(skill_id, 0))
		score += int(job_mods.get(skill_id,  0))
		score += int(exp_mods.get(skill_id,  0))
		c.skills[skill_id] = score

	return c


## Add a character and persist immediately.
func add_character(c: Dictionary) -> void:
	characters.append(c)
	save_all()


## Delete a character by index and persist.
func delete_character(idx: int) -> void:
	if idx >= 0 and idx < characters.size():
		characters.remove_at(idx)
		save_all()


# ── Persistence ───────────────────────────────────────────────

func save_all() -> void:
	var cfg := ConfigFile.new()
	cfg.set_value("meta", "count", characters.size())
	for i : int in characters.size():
		var c : Dictionary = characters[i]
		var sec := "char_%d" % i
		cfg.set_value(sec, "name",            c.name)
		cfg.set_value(sec, "race",            c.race)
		cfg.set_value(sec, "gender",          c.gender)
		cfg.set_value(sec, "job",             c.job)
		cfg.set_value(sec, "expertise",       c.expertise)
		cfg.set_value(sec, "level",           c.level)
		cfg.set_value(sec, "xp",              c.xp)
		cfg.set_value(sec, "characteristics", c.characteristics)
		cfg.set_value(sec, "skills",          c.skills)
	cfg.save(SAVE_PATH)


func load_all() -> void:
	characters.clear()
	var cfg := ConfigFile.new()
	if cfg.load(SAVE_PATH) != OK:
		return
	var count : int = cfg.get_value("meta", "count", 0)
	for i : int in count:
		var sec := "char_%d" % i
		var c := make_character(
			cfg.get_value(sec, "name",      "Unknown"),
			cfg.get_value(sec, "race",      race_ids[0] if not race_ids.is_empty() else "human"),
			cfg.get_value(sec, "gender",    "Male"),
			cfg.get_value(sec, "job",       "none"),
			cfg.get_value(sec, "expertise", "none"),
		)
		c.level           = cfg.get_value(sec, "level", 1)
		c.xp              = cfg.get_value(sec, "xp",    0)
		c.characteristics = cfg.get_value(sec, "characteristics", c.characteristics)
		c.skills          = cfg.get_value(sec, "skills",          c.skills)
		characters.append(c)
