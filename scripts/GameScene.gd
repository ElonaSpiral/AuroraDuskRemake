extends Control

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Game Scene Entry Point
#  Godot 4.x  |  GDScript 2.0
#
#  Immediately redirects to WorldScene (Phase 2 game world).
#  Kept as a thin wrapper so existing scene references don't
#  need changing — GameModeScene still targets GameScene.tscn.
# ─────────────────────────────────────────────────────────────

const SCENE_WORLD := "res://scenes/WorldScene.tscn"
const SCENE_MAIN  := "res://scenes/MainMenu.tscn"


func _ready() -> void:
	if ResourceLoader.exists(SCENE_WORLD):
		get_tree().change_scene_to_file(SCENE_WORLD)
	else:
		push_error("GameScene: WorldScene.tscn not found")
		get_tree().change_scene_to_file(SCENE_MAIN)
