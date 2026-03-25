extends Control

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Loading Scene
#  Godot 4.x  |  GDScript 2.0
#
#  First scene shown on startup (main_scene in project.godot).
#  Image is defined in data/ui_images.json under "loading".
#  ImageLayerManager reads the JSON and builds the TextureRect
#  at runtime — no path is hardcoded here or in the .tscn.
# ─────────────────────────────────────────────────────────────

const SCENE_MAIN := "res://scenes/MainMenu.tscn"

@onready var bg_layers : Control = $BgLayers


func _ready() -> void:
	ImageLayerManager.build_layers(bg_layers, "loading")

	modulate.a = 0.0
	var t := create_tween()
	t.tween_property(self, "modulate:a", 1.0,  0.8)
	t.tween_interval(1.2)
	t.tween_property(self, "modulate:a", 0.0,  0.6)
	t.tween_callback(func() -> void:
		get_tree().change_scene_to_file(SCENE_MAIN)
	)
