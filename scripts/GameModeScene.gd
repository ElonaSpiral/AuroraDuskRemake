extends Control

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Game Mode Selection Scene
#  Godot 4.x  |  GDScript 2.0
#
#  Layout (CharactersScene.tscn shell):
#    BgBase + BgImage (bg2.jpg) + BgVignette
#    TitleLabel      — "SELECT MODE"  (top)
#    DescArea        — always-visible mode descriptions (~40% from top)
#    ButtonsArea     — three mode buttons  (lower section)
#    BackPanel       — bottom-left
# ─────────────────────────────────────────────────────────────

const SCENE_MAIN       := "res://scenes/MainMenu.tscn"
const SCENE_MAP_SELECT := "res://scenes/MapSelectScene.tscn"

@onready var btn_adventure : Button  = $ButtonsArea/BtnCenter/BtnVBox/BtnAdventure
@onready var btn_survival  : Button  = $ButtonsArea/BtnCenter/BtnVBox/BtnSurvival
@onready var btn_skirmish  : Button  = $ButtonsArea/BtnCenter/BtnVBox/BtnSkirmish
@onready var btn_back      : Button  = $BackPanel/BtnBack
@onready var bg_layers     : Control = $BgLayers


# ─────────────────────────────────────────────────────────────
func _ready() -> void:
	ImageLayerManager.build_layers(bg_layers, "game_mode")

	btn_adventure.pressed.connect(func() -> void: _pick_mode("adventure"))
	btn_survival.pressed.connect( func() -> void: _pick_mode("survival"))
	btn_skirmish.pressed.connect( func() -> void: _pick_mode("skirmish"))
	btn_back.pressed.connect(_on_back)

	for btn : Button in [btn_adventure, btn_survival, btn_skirmish, btn_back]:
		UIEffects.apply_hover(btn)

	_run_intro()


func _run_intro() -> void:
	# Fade the whole scene in — no horizontal slide for VBox buttons
	# (slide looks wrong when centred; a simple staggered fade reads better)
	modulate.a = 0.0
	create_tween().tween_property(self, "modulate:a", 1.0, 0.50)

	var buttons : Array[Button] = [btn_adventure, btn_survival, btn_skirmish]
	await get_tree().process_frame

	var delay := 0.20
	for btn : Button in buttons:
		btn.modulate.a = 0.0
		var t := create_tween()
		t.tween_interval(delay)
		t.tween_property(btn, "modulate:a", 1.0, 0.28)
		delay += 0.10


# ─────────────────────────────────────────────────────────────

func _pick_mode(mode: String) -> void:
	GameState.selected_mode = mode
	var t := create_tween()
	t.tween_property(self, "modulate:a", 0.0, 0.38)
	t.tween_callback(func() -> void:
		get_tree().change_scene_to_file(SCENE_MAP_SELECT)
	)


func _on_back() -> void:
	GameState.reset()
	var t := create_tween()
	t.tween_property(self, "modulate:a", 0.0, 0.35)
	t.tween_callback(func() -> void:
		get_tree().change_scene_to_file(SCENE_MAIN)
	)
