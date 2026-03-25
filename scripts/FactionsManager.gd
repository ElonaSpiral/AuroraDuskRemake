extends Node

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Factions Manager  (Autoload)
#  Godot 4.x  |  GDScript 2.0
#
#  Loads data/factions.json and exposes the faction API.
#  Registered as autoload "FactionsManager".
#
#  No class_name: autoload scripts must not declare class_name
#  matching their registration name (Godot 4 restriction).
#
#  Faction summary:
#    aurora      (0) — default player faction (humans, elves, dwarves…)
#    crepusculum (1) — enemy wave faction (monsters)
#    darkElves   (2) — player faction (skirmish / multiplayer)
#    astalans    (3) — player faction
#    beastFaction(4) — enemy faction
#    undeadFaction(5)— enemy faction
#    elves       (6) — player faction
#    dwarfs      (7) — player faction
# ─────────────────────────────────────────────────────────────

const DATA_PATH := "res://data/factions.json"

## All faction definitions keyed by faction id.
var factions : Dictionary = {}

## Faction ids sorted by 'no'.
var faction_ids_ordered : Array[String] = []

## Faction ids where player_faction == true.
var player_factions : Array[String] = []

## Faction ids where enemy_faction == true.
var enemy_factions : Array[String] = []


func _ready() -> void:
	_load_data()


func _load_data() -> void:
	if not FileAccess.file_exists(DATA_PATH):
		push_error("FactionsManager: %s not found" % DATA_PATH)
		return
	var f := FileAccess.open(DATA_PATH, FileAccess.READ)
	if f == null:
		push_error("FactionsManager: cannot open %s" % DATA_PATH)
		return
	var result : Variant = JSON.parse_string(f.get_as_text())
	f.close()
	if not result is Dictionary:
		push_error("FactionsManager: JSON parse failed")
		return

	for key : String in (result as Dictionary).keys():
		if not key.begins_with("_"):
			factions[key] = (result as Dictionary)[key]

	# Sort by no
	var entries : Array = []
	for fid : String in factions.keys():
		entries.append({"id": fid, "no": int((factions[fid] as Dictionary).get("no", 99))})
	entries.sort_custom(func(a: Dictionary, b: Dictionary) -> bool:
		return int(a["no"]) < int(b["no"])
	)
	faction_ids_ordered.clear()
	player_factions.clear()
	enemy_factions.clear()
	for e in entries:
		var fid : String = str(e["id"])
		faction_ids_ordered.append(fid)
		var def := factions[fid] as Dictionary
		if def.get("player_faction", false):
			player_factions.append(fid)
		if def.get("enemy_faction", false):
			enemy_factions.append(fid)

	print("FactionsManager: %d factions loaded (%d player, %d enemy)" % [
		factions.size(), player_factions.size(), enemy_factions.size()
	])


# ─────────────────────────────────────────────────────────────
#  PUBLIC API
# ─────────────────────────────────────────────────────────────

## Returns the full definition Dictionary for a faction id.
func get_faction_data(id: String) -> Dictionary:
	return factions.get(id, {}) as Dictionary


## Returns the display name of a faction.
func get_faction_display_name(id: String, lang: String = "EN") -> String:
	var def := get_faction_data(id)
	if def.is_empty(): return id
	var names := def.get("name", {}) as Dictionary
	return str(names.get(lang, names.get("EN", id)))


## Returns the description of a faction.
func get_faction_description(id: String, lang: String = "EN") -> String:
	var def := get_faction_data(id)
	if def.is_empty(): return ""
	var descs := def.get("description", {}) as Dictionary
	return str(descs.get(lang, descs.get("EN", "")))


## Returns true if the player can choose this faction.
func is_player_faction(id: String) -> bool:
	return bool((factions.get(id, {}) as Dictionary).get("player_faction", false))


## Returns true if this faction appears as wave / dungeon enemies.
func is_enemy_faction(id: String) -> bool:
	return bool((factions.get(id, {}) as Dictionary).get("enemy_faction", false))


## Returns the race id list for a faction, or [].
func get_faction_races(id: String) -> Array:
	return Array((factions.get(id, {}) as Dictionary).get("races", []))
