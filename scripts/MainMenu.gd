extends Control

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Main Menu Script
#  Godot 4.x  |  GDScript 2.0
# ─────────────────────────────────────────────────────────────

const SCENE_GAME       := "res://scenes/GameScene.tscn"
const SCENE_GAMEMODE   := "res://scenes/GameModeScene.tscn"
const SCENE_LOAD       := "res://scenes/LoadGameScene.tscn"
const SCENE_CHARACTERS := "res://scenes/CharactersScene.tscn"
const SCENE_OPTIONS    := "res://scenes/OptionsScene.tscn"
const SCENE_CREDITS    := "res://scenes/CreditsScene.tscn"
const SCENE_DEBUG      := "res://scenes/DebugScene.tscn"

const GRID_PATH := "ButtonsArea/ButtonsCenter/ButtonGrid/"

@onready var btn_start      : Button = $ButtonsArea/ButtonsCenter/ButtonGrid/BtnStart
@onready var btn_load       : Button = $ButtonsArea/ButtonsCenter/ButtonGrid/BtnLoad
@onready var btn_characters : Button = $ButtonsArea/ButtonsCenter/ButtonGrid/BtnCharacters
@onready var btn_options    : Button = $ButtonsArea/ButtonsCenter/ButtonGrid/BtnOptions
@onready var btn_credits    : Button = $ButtonsArea/ButtonsCenter/ButtonGrid/BtnCredits
@onready var btn_exit       : Button = $ButtonsArea/ButtonsCenter/ButtonGrid/BtnExit
@onready var btn_debug      : Button = $BtnDebug
@onready var gear_left      : TextureRect = $Gears/GearLeft
@onready var gear_right     : TextureRect = $Gears/GearRight
@onready var bg_layers      : Control     = $BgLayers


# ─────────────────────────────────────────────────────────────
func _ready() -> void:
	# Build background layers from data/ui_images.json → "main_menu"
	# (bg2.jpg + home.png with ADD blend + vignette, all keep_aspect_covered)
	ImageLayerManager.build_layers(bg_layers, "main_menu")

	_connect_buttons()
	_apply_hover_effects()
	_run_intro()


func _process(delta: float) -> void:
	if is_instance_valid(gear_left):  gear_left.rotation  += delta * 0.28
	if is_instance_valid(gear_right): gear_right.rotation -= delta * 0.18


# ── Connections ───────────────────────────────────────────────

func _connect_buttons() -> void:
	btn_start.pressed.connect(func() -> void: _go_to(SCENE_GAMEMODE))
	btn_load.pressed.connect( func() -> void: _go_to(SCENE_LOAD))
	btn_characters.pressed.connect(func() -> void: _go_to(SCENE_CHARACTERS))
	btn_options.pressed.connect(func() -> void: _go_to(SCENE_OPTIONS))
	btn_credits.pressed.connect(func() -> void: _go_to(SCENE_CREDITS))
	btn_debug.pressed.connect(func() -> void: _go_to(SCENE_DEBUG))
	btn_exit.pressed.connect(_on_exit_pressed)
	# Clear any leftover session state when the player returns to the menu
	GameState.reset()


# ── Hover scale ───────────────────────────────────────────────

func _apply_hover_effects() -> void:
	for btn : Button in [btn_start, btn_load, btn_characters,
						  btn_options, btn_credits, btn_exit, btn_debug]:
		UIEffects.apply_hover(btn)


# ── Navigation ────────────────────────────────────────────────

func _go_to(scene_path: String) -> void:
	if not ResourceLoader.exists(scene_path):
		push_warning("MainMenu: scene not found — %s" % scene_path)
		return
	var t := create_tween()
	t.tween_property(self, "modulate:a", 0.0, 0.42)
	t.tween_callback(func() -> void:
		get_tree().change_scene_to_file(scene_path)
	)


func _on_exit_pressed() -> void:
	var t := create_tween()
	t.tween_property(self, "modulate:a", 0.0, 0.55)
	t.tween_callback(get_tree().quit)


# ── Intro animation ───────────────────────────────────────────
# Buttons in a GridContainer can't reliably have position.x tweened
# before the container has run its first layout pass.
# Strategy: fade the whole scene in, then slide each button in from
# the left using a one-frame delay so positions are already settled.

func _run_intro() -> void:
	modulate.a = 0.0
	create_tween().tween_property(self, "modulate:a", 1.0, 1.0)

	var buttons : Array[Button] = [
		btn_start, btn_load,
		btn_characters, btn_options,
		btn_credits, btn_exit,
	]

	# Wait one frame for the GridContainer to settle positions, then animate
	await get_tree().process_frame

	var delay := 0.15
	for btn : Button in buttons:
		if not is_instance_valid(btn):
			continue
		var orig_x := btn.position.x
		btn.position.x -= 80
		btn.modulate.a  = 0.0
		var t := create_tween()
		t.tween_interval(delay)
		t.tween_property(btn, "modulate:a",   1.0, 0.22)
		t.parallel().tween_property(btn, "position:x", orig_x, 0.26).set_ease(Tween.EASE_OUT)
		delay += 0.07
