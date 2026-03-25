extends Node

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Game State  (Autoload)
#  Godot 4.x  |  GDScript 2.0
#
#  Session state persisting across scene changes.
#  Shift+F1 from any scene → instant restart to Main Menu.
# ─────────────────────────────────────────────────────────────

const SCENE_MAIN       := "res://scenes/MainMenu.tscn"
const SCENE_MAP_SELECT := "res://scenes/MapSelectScene.tscn"

## "adventure" | "survival" | "skirmish" | "debug" | ""
var selected_mode          : String = ""

## Index into CharacterManager.characters; -1 = none chosen.
var selected_character_idx : int    = -1

## Map id from maps.json; "" = not yet chosen.
var selected_map_id        : String = ""

## Faction id from factions.json; "" = default (aurora).
var selected_faction_id    : String = ""


## Returns the active character Dictionary, or {}.
func get_character() -> Dictionary:
	if selected_character_idx < 0:
		return {}
	if selected_character_idx >= CharacterManager.characters.size():
		return {}
	return CharacterManager.characters[selected_character_idx]


## Returns the effective faction — falls back to "aurora".
func get_faction() -> String:
	return selected_faction_id if selected_faction_id != "" else "aurora"


## Clear all session state (call when returning to Main Menu).
func reset() -> void:
	selected_mode          = ""
	selected_character_idx = -1
	selected_map_id        = ""
	selected_faction_id    = ""


# ─────────────────────────────────────────────────────────────
#  Global Shift+F1 restart — works from any scene.
# ─────────────────────────────────────────────────────────────

func _input(event: InputEvent) -> void:
	if event is InputEventKey:
		var ke := event as InputEventKey
		if ke.pressed and ke.shift_pressed and \
				ke.physical_keycode == KEY_F1 and not ke.echo:
			reset()
			get_viewport().set_input_as_handled()
			get_tree().change_scene_to_file(SCENE_MAIN)
