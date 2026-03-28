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
@onready var btn_regenerate_cache: Button = $ContentArea/ContentCenter/BtnVBox/BtnRegenerateMapCache  # adjust path to match your DebugScene layout


func _ready() -> void:
	ImageLayerManager.build_layers(bg_layers, "main_menu")

	btn_test_map.pressed.connect(_on_test_map)
	btn_back.pressed.connect(_on_back)

	UIEffects.apply_hover(btn_test_map)
	UIEffects.apply_hover(btn_back)
	
	if btn_regenerate_cache:
		btn_regenerate_cache.pressed.connect(_on_regenerate_cache)

	modulate.a = 0.0
	create_tween().tween_property(self, "modulate:a", 1.0, 0.35)


func _on_test_map() -> void:
	GameState.selected_mode = "debug"
	
	# Tell WorldScene to load the first test map and run our test cases
	GameState.selected_map_id = "test_map_auto"  # Special flag we'll handle in WorldScene
	
	var t := create_tween()
	t.tween_property(self, "modulate:a", 0.0, 0.35)
	t.tween_callback(func() -> void:
		get_tree().change_scene_to_file("res://scenes/WorldScene.tscn")
	)


func _on_back() -> void:
	var t := create_tween()
	t.tween_property(self, "modulate:a", 0.0, 0.30)
	t.tween_callback(func() -> void:
		get_tree().change_scene_to_file(SCENE_MAIN)
	)

func _on_test_map_pressed() -> void:
	get_tree().change_scene_to_file("res://scenes/WorldScene.tscn")

func _on_regenerate_cache() -> void:
	print("Regenerating all map caches...")
	MapCacheManager.generate_all_caches()
	# Optional: show a short message or progress
	# You can add a Label or use print for now
