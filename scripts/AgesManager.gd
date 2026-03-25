extends Node

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Ages Manager  (Autoload)
#  Godot 4.x  |  GDScript 2.0
#
#  Loads data/ages.json and provides the full ages (epoch) API.
#  Registered as autoload "AgesManager" — call via AgesManager.*
#
#  No class_name: autoload scripts must not declare class_name
#  matching their autoload registration name (Godot 4 restriction).
# ─────────────────────────────────────────────────────────────

const DATA_PATH := "res://data/ages.json"

## All age definitions keyed by age id.
var ages : Dictionary = {}

## Age ids in progression order (sorted by 'no').
var age_ids_ordered : Array[String] = []


func _ready() -> void:
	_load_data()


func _load_data() -> void:
	if not FileAccess.file_exists(DATA_PATH):
		push_error("AgesManager: ages.json not found at %s" % DATA_PATH)
		return
	var f := FileAccess.open(DATA_PATH, FileAccess.READ)
	if f == null:
		push_error("AgesManager: cannot open %s" % DATA_PATH)
		return
	var result : Variant = JSON.parse_string(f.get_as_text())
	f.close()
	if not result is Dictionary:
		push_error("AgesManager: JSON parse failed")
		return

	for key : String in (result as Dictionary).keys():
		if not key.begins_with("_"):
			ages[key] = (result as Dictionary)[key]

	# Sort by 'no' field
	var entries : Array = []
	for age_id : String in ages.keys():
		entries.append({ "id": age_id, "no": float((ages[age_id] as Dictionary).get("no", 0)) })
	entries.sort_custom(func(a: Dictionary, b: Dictionary) -> bool:
		return float(a["no"]) < float(b["no"])
	)
	age_ids_ordered.clear()
	for e in entries:
		age_ids_ordered.append(str(e["id"]))

	print("AgesManager: loaded %d ages — %s" % [ages.size(), age_ids_ordered])


# ─────────────────────────────────────────────────────────────
#  PUBLIC API  (all names chosen to avoid Node built-in conflicts)
# ─────────────────────────────────────────────────────────────

## Returns the full data Dictionary for an age id.
func get_age_data(id: String) -> Dictionary:
	return ages.get(id, {}) as Dictionary


## Returns the display name for an age (language code e.g. "EN").
func get_age_display_name(id: String, lang: String = "EN") -> String:
	var a := get_age_data(id)
	if a.is_empty(): return id
	var names := a.get("name", {}) as Dictionary
	return str(names.get(lang, names.get("EN", id)))


## Returns the Roman numeral label (I … VI) for an age.
func get_age_label(id: String) -> String:
	return str(get_age_data(id).get("label", "?"))


## Returns the sort index for an age (0 = woodenAge … 5 = steamAge).
func get_age_no(id: String) -> int:
	return int(get_age_data(id).get("no", 0))


## Returns the advancement timer threshold for an age.
func get_age_time(id: String) -> int:
	return int(get_age_data(id).get("time", 0))


## Returns the message shown on reaching this age, or "" if none.
func get_age_message(id: String, lang: String = "EN") -> String:
	var a := get_age_data(id)
	if a.is_empty(): return ""
	var msgs := a.get("message", {}) as Dictionary
	if msgs.is_empty(): return ""
	return str(msgs.get(lang, msgs.get("EN", "")))


## Returns the age id at progression index (0 = woodenAge).
func get_age_at_index(index: int) -> String:
	if index < 0 or index >= age_ids_ordered.size(): return ""
	return age_ids_ordered[index]


## Returns the id of the next age after the given one, or "" if at max.
func get_next_age(id: String) -> String:
	var idx := age_ids_ordered.find(id)
	if idx < 0 or idx >= age_ids_ordered.size() - 1: return ""
	return age_ids_ordered[idx + 1]


## Returns the first (starting) age id.
func starting_age() -> String:
	return age_ids_ordered[0] if not age_ids_ordered.is_empty() else ""


## Returns the final age id.
func final_age() -> String:
	return age_ids_ordered[-1] if not age_ids_ordered.is_empty() else ""


## Returns true if age_id has a lower or equal 'no' than current_age.
## Used to determine if an entity is buildable at the player's current age.
func age_is_unlocked(age_id: String, current_age: String) -> bool:
	return get_age_no(age_id) <= get_age_no(current_age)


## Returns true if id_a comes before id_b in progression.
func age_is_before(id_a: String, id_b: String) -> bool:
	return get_age_no(id_a) < get_age_no(id_b)
