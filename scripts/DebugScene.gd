extends Control

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Debug Scene
#  Godot 4.x  |  GDScript 2.0
#
#  Reached from the Debug button on the main menu.
#  Provides quick shortcuts to test game systems without
#  going through the normal flow.
#
#  Add more test buttons here as new systems are developed.
# ─────────────────────────────────────────────────────────────

const SCENE_MAIN  := "res://scenes/MainMenu.tscn"
const SCENE_GAME  := "res://scenes/GameScene.tscn"

@onready var btn_test_map : Button  = $ContentArea/ContentCenter/BtnVBox/BtnTestMap
@onready var btn_back     : Button  = $BackPanel/BtnBack
@onready var bg_layers    : Control = $BgLayers


func _ready() -> void:
	ImageLayerManager.build_layers(bg_layers, "main_menu")

	btn_test_map.pressed.connect(_on_test_map)
	btn_back.pressed.connect(_on_back)

	UIEffects.apply_hover(btn_test_map)
	UIEffects.apply_hover(btn_back)

	modulate.a = 0.0
	create_tween().tween_property(self, "modulate:a", 1.0, 0.35)


func _on_test_map() -> void:
	# Set debug mode — WorldScene will populate the picker with debug maps
	GameState.selected_mode = "debug"
	var t := create_tween()
	t.tween_property(self, "modulate:a", 0.0, 0.35)
	t.tween_callback(func() -> void:
		get_tree().change_scene_to_file(SCENE_GAME)
	)


func _on_back() -> void:
	var t := create_tween()
	t.tween_property(self, "modulate:a", 0.0, 0.30)
	t.tween_callback(func() -> void:
		get_tree().change_scene_to_file(SCENE_MAIN)
	)
