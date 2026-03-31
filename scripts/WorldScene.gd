# scenes/WorldScene.gd
extends Node2D
class_name WorldScene

const SCENE_MAIN     := "res://scenes/MainMenu.tscn"
const SCENE_GAMEMODE := "res://scenes/GameModeScene.tscn"
const SCENE_DEBUG    := "res://scenes/DebugScene.tscn"

const PAN_SPEED := 800.0
const ZOOM_STEP := 0.15
const ZOOM_MIN  := 0.25
const ZOOM_MAX  := 4.0

# ── Node refs ─────────────────────────────────────────────────
@onready var camera         : Camera2D     = $WorldCamera
@onready var renderer       : Node2D       = $WorldRenderer
@onready var units_layer    : Node2D       = $UnitsLayer
@onready var rts_controller : Node2D       = $RTSController
@onready var hud_layer      : CanvasLayer  = $HUDLayer

@onready var lbl_mode       : Label        = $HUDLayer/HUD/TopBar/TopMargin/TopHBox/LblMode
@onready var lbl_map        : Label        = $HUDLayer/HUD/TopBar/TopMargin/TopHBox/LblMap
@onready var lbl_char       : Label        = $HUDLayer/HUD/TopBar/TopMargin/TopHBox/LblChar
@onready var lbl_terrain    : Label        = $HUDLayer/HUD/BottomBar/BottomMargin/BottomHBox/LblTerrain
@onready var lbl_selection  : Label        = $HUDLayer/HUD/BottomBar/BottomMargin/BottomHBox/LblSelection
@onready var lbl_coords     : Label        = $HUDLayer/HUD/BottomBar/BottomMargin/BottomHBox/LblCoords
@onready var minimap        : Control      = $HUDLayer/HUD/Minimap
@onready var btn_back       : Button       = $HUDLayer/HUD/BtnBack
@onready var btn_grid       : Button       = $HUDLayer/HUD/BtnGrid
@onready var map_picker     : OptionButton = $HUDLayer/HUD/TopBar/TopMargin/TopHBox/MapPicker

# Debug panel
@onready var debug_panel    : Control      = $HUDLayer/HUD/DebugPanel

# ── State ─────────────────────────────────────────────────────
var _terrain_grid : Array = []
var _spawn_points : Array = []
var _map_width    : int   = 0
var _map_height   : int   = 0
var _map_id       : String = ""
var _dragging     : bool  = false
var _drag_start   : Vector2

var world_size_px : Vector2 = Vector2.ZERO


func _ready() -> void:
	_populate_map_picker()
	_setup_hud()
	_setup_camera()

	SpriteManager.initialize($VisualRoot if has_node("VisualRoot") else null)
	print("WorldScene ready - SpriteManager initialized")

	# Connect minimap signals
	if has_node("HUDLayer/HUD/Minimap"):
		var minimap_node = $HUDLayer/HUD/Minimap
		if minimap_node.has_signal("camera_move_requested"):
			minimap_node.camera_move_requested.connect(_on_minimap_camera_move_requested)

	var is_debug_test := (GameState.selected_mode == "debug" and GameState.selected_map_id == "test_map_auto")

	if is_debug_test:
		_load_first_test_map()
		if debug_panel:
			debug_panel.visible = true
		if DebugManager:
			DebugManager.world_scene = self
			DebugManager.respawn_all_tests()
	else:
		var mid := GameState.selected_map_id
		if mid == "" or mid == "test_map_auto":
			var ids := MapManager.get_maps_for_mode(GameState.selected_mode)
			mid = ids[0] if not ids.is_empty() else "middleBridge"
		_load_map(mid)

	modulate.a = 0.0
	create_tween().tween_property(self, "modulate:a", 1.0, 0.40)


# ================================================================
# MAP LOADING
# ================================================================

func _populate_map_picker() -> void:
	var mode := GameState.selected_mode
	var ids := MapManager.get_maps_for_mode(mode)
	if ids.is_empty() and mode == "debug":
		ids = MapManager.get_maps_for_mode("skirmish")
	if ids.is_empty():
		ids = MapManager.maps.keys()

	map_picker.clear()
	for mid in ids:
		if MapManager.is_random_map(mid):
			continue
		var mdata := MapManager.get_map_data(mid) as Dictionary
		var label := str(mdata.get("name", mid))
		map_picker.add_item(label)
		map_picker.set_item_metadata(map_picker.item_count - 1, mid)


func _load_map(map_id: String) -> void:
	_map_id = map_id
	var mdata := MapManager.get_map_data(map_id) as Dictionary
	lbl_map.text = "Loading %s…" % str(mdata.get("name", map_id))

	# Clear old units
	for child in units_layer.get_children():
		child.queue_free()

	await get_tree().process_frame

	var result := MapManager.parse_map(map_id) as Dictionary
	if result.grid.is_empty():
		push_error("WorldScene: Failed to parse map " + map_id)
		return

	_terrain_grid = result.grid
	_spawn_points = result.spawns
	_map_width    = result.width
	_map_height   = result.height

	# Pass map to WorldRenderer (chunks + decorations)
	renderer.load_map(result)

	# Calculate world size
	world_size_px = Vector2(_map_width * 64.0, _map_height * 64.0)

	# Setup minimap with original PNG (preserves aspect ratio)
	var folder = mdata.get("folder", "1")
	var original_png_path = "res://assets/maps/" + folder + "/" + map_id + ".png"
	
	if has_node("HUDLayer/HUD/Minimap"):
		var minimap_node = $HUDLayer/HUD/Minimap
		if minimap_node.has_method("setup"):
			minimap_node.setup(original_png_path, _map_width, _map_height)

	# Setup RTS controller
	var ctrl := rts_controller as RTSController
	if ctrl:
		ctrl.setup(camera, units_layer, _terrain_grid, _map_width, _map_height)

	lbl_map.text = str(mdata.get("name", map_id))
	_centre_camera_on_load()

	print("WorldScene: Loaded map '" + map_id + "' | Decorations & Minimap initialized")


func _load_first_test_map() -> void:
	var dir = DirAccess.open("res://assets/maps/test/")
	if not dir:
		_load_map("middleBridge")
		return

	var files = dir.get_files()
	for file in files:
		if file.ends_with(".png"):
			var mid = file.get_basename()
			GameState.selected_map_id = mid
			_load_map(mid)
			return

	_load_map("middleBridge")


# ================================================================
# CAMERA & INPUT
# ================================================================

func _setup_camera() -> void:
	camera.zoom = Vector2(1.0, 1.0)


func _centre_camera_on_load() -> void:
	if world_size_px.x == 0:
		return
		
	var _viewport_size = get_viewport_rect().size
	
	# Center the map — especially important for thin/corridor maps
	camera.position = world_size_px * 0.5
	
	# Clamp immediately so thin maps don't sit off-screen
	_clamp_camera()


func _process(delta: float) -> void:
	_handle_keyboard_pan(delta)
	_update_terrain_label()
	
	# Update minimap viewport
	if has_node("HUDLayer/HUD/Minimap"):
		var minimap_node = $HUDLayer/HUD/Minimap
		if minimap_node.has_method("update_viewport"):
			minimap_node.update_viewport(camera, world_size_px)


func _handle_keyboard_pan(delta: float) -> void:
	var dir := Vector2.ZERO
	if Input.is_action_pressed("move_camera_up") or Input.is_key_pressed(KEY_W) or Input.is_key_pressed(KEY_UP): dir.y -= 1
	if Input.is_action_pressed("move_camera_down") or Input.is_key_pressed(KEY_S) or Input.is_key_pressed(KEY_DOWN): dir.y += 1
	if Input.is_action_pressed("move_camera_left") or Input.is_key_pressed(KEY_A) or Input.is_key_pressed(KEY_LEFT): dir.x -= 1
	if Input.is_action_pressed("move_camera_right") or Input.is_key_pressed(KEY_D) or Input.is_key_pressed(KEY_RIGHT): dir.x += 1

	if dir != Vector2.ZERO:
		camera.position += dir.normalized() * PAN_SPEED * delta / camera.zoom.x
		_clamp_camera()


func _clamp_camera() -> void:
	if world_size_px.x == 0: 
		return
		
	var half := get_viewport_rect().size * 0.5 / camera.zoom
	camera.position.x = clampf(camera.position.x, half.x, maxf(world_size_px.x - half.x, half.x))
	camera.position.y = clampf(camera.position.y, half.y, maxf(world_size_px.y - half.y, half.y))


func _unhandled_input(event: InputEvent) -> void:
	if event is InputEventMouseButton:
		var mb := event as InputEventMouseButton
		if mb.button_index == MOUSE_BUTTON_WHEEL_UP and mb.pressed:
			_zoom_by(ZOOM_STEP)
		elif mb.button_index == MOUSE_BUTTON_WHEEL_DOWN and mb.pressed:
			_zoom_by(-ZOOM_STEP)
		elif mb.button_index == MOUSE_BUTTON_MIDDLE:
			_dragging = mb.pressed
			_drag_start = mb.position

	if event is InputEventMouseMotion and _dragging:
		var delta: Vector2 = (event.position - _drag_start) / camera.zoom.x
		camera.position -= delta
		_drag_start = event.position
		_clamp_camera()

	if event is InputEventKey and event.pressed and event.physical_keycode == KEY_G:
		_on_toggle_grid()


func _zoom_by(delta: float) -> void:
	var new_z := clampf(camera.zoom.x + delta, ZOOM_MIN, ZOOM_MAX)
	camera.zoom = Vector2(new_z, new_z)
	_clamp_camera()


func _on_minimap_camera_move_requested(world_pos: Vector2) -> void:
	camera.position = world_pos
	_clamp_camera()


# ================================================================
# HUD & OTHER
# ================================================================

func _setup_hud() -> void:
	var mode_names := {"adventure": "Adventure", "survival": "Survival", "skirmish": "Skirmish", "multiplayer": "Multiplayer", "debug": "DEBUG"}
	lbl_mode.text = mode_names.get(GameState.selected_mode, "Game")

	var c := GameState.get_character()
	lbl_char.text = "No character" if c.is_empty() else "%s Lv.%d %s" % [str(c.get("name", "?")), int(c.get("level", 1)), str(c.get("race", "human"))]

	btn_back.pressed.connect(_on_back)
	btn_grid.pressed.connect(_on_toggle_grid)
	map_picker.item_selected.connect(_on_map_selected)


func _update_terrain_label() -> void:
	if _terrain_grid.is_empty(): 
		return
		
	var mp := get_viewport().get_mouse_position()
	var wp := get_viewport().get_canvas_transform().affine_inverse() * mp
	var tx := int(wp.x / 64)
	var ty := int(wp.y / 64)
	
	if tx >= 0 and tx < _map_width and ty >= 0 and ty < _map_height:
		var tid := MapManager.get_terrain_at(_terrain_grid, tx, ty)
		lbl_terrain.text = "%s ×%.2f%s" % [tid.capitalize(), GroundsManager.get_speed(tid), " 🏗" if GroundsManager.is_buildable(tid) else ""]
		lbl_coords.text = "(%d, %d)" % [tx, ty]


func _on_selection_changed(count: int) -> void:
	lbl_selection.text = "" if count == 0 else "%d unit%s selected" % [count, "s" if count > 1 else ""]


func _on_back() -> void:
	var target := SCENE_DEBUG if GameState.selected_mode == "debug" else SCENE_GAMEMODE
	var t := create_tween()
	t.tween_property(self, "modulate:a", 0.0, 0.35)
	t.tween_callback(func(): get_tree().change_scene_to_file(target))


func _on_toggle_grid() -> void:
	if renderer.has_method("toggle_grid"):
		renderer.toggle_grid()
	btn_grid.text = "Grid: ON" if renderer.get("show_grid") else "Grid: OFF"


func _on_map_selected(idx: int) -> void:
	var mid := str(map_picker.get_item_metadata(idx))
	_load_map(mid)
