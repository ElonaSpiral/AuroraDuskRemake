extends Node2D

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — World Scene
#  Godot 4.x  |  GDScript 2.0
#
#  RTS Controls:
#    Left click           — select unit / deselect if empty
#    Shift + Left click   — add / remove from selection
#    Left drag            — box-select all units in rectangle
#    Right click          — order selected units to move
#    Escape               — deselect all
#
#  Camera Controls:
#    WASD / Arrow keys    — pan
#    Scroll wheel         — zoom
#    Middle mouse drag    — pan
#    G key                — toggle grid overlay
# ─────────────────────────────────────────────────────────────

const SCENE_MAIN     := "res://scenes/MainMenu.tscn"
const SCENE_GAMEMODE := "res://scenes/GameModeScene.tscn"
const SCENE_DEBUG    := "res://scenes/DebugScene.tscn"

const PAN_SPEED  := 400.0
const ZOOM_STEP  := 0.15
const ZOOM_MIN   := 0.25
const ZOOM_MAX   := 4.0

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

# ── State ──────────────────────────────────────────────────────
var _terrain_grid  : Array  = []
var _spawn_points  : Array  = []
var _map_width     : int    = 0
var _map_height    : int    = 0
var _map_id        : String = ""
var _dragging      : bool   = false   # middle-mouse pan drag
var _drag_start    : Vector2


# ─────────────────────────────────────────────────────────────
func _ready() -> void:
	_populate_map_picker()
	_setup_hud()
	_setup_camera()
	
	SpriteManager.initialize($VisualRoot)
	print("WorldScene ready - SpriteManager initialized")
	
	_create_test_units()   # <--- This spawns multiple moving units

	btn_back.pressed.connect(_on_back)
	btn_grid.pressed.connect(_on_toggle_grid)
	map_picker.item_selected.connect(_on_map_selected)

	var ctrl := rts_controller as RTSController
	ctrl.selection_changed.connect(_on_selection_changed)

	# Minimap click-to-pan
	var mm := minimap as MinimapDrawer
	mm.camera_move_requested.connect(_on_minimap_camera_move)

	# In debug mode show the map picker so devs can switch maps.
	# In all other modes the map was already chosen on MapSelectScene.
	var is_debug : bool = GameState.selected_mode == "debug"
	map_picker.visible = is_debug
	$HUDLayer/HUD/TopBar/TopMargin/TopHBox/LblMapLabel.visible = is_debug

	if is_debug:
		# Debug: load the stored map id if valid, otherwise load the first
		# entry in the picker. _populate_map_picker() guarantees at least
		# one entry (skirmish fallback) so item_count is always > 0 here.
		var stored_id := GameState.selected_map_id
		if stored_id != "" and MapManager.maps.has(stored_id):
			_load_map(stored_id)
		elif map_picker.item_count > 0:
			_load_map_by_idx(0)
		else:
			push_error("WorldScene: no maps available for debug mode")
	else:
		# Normal game: use map chosen on MapSelectScene
		var mid := GameState.selected_map_id
		if mid == "":
			push_warning("WorldScene: no map selected, defaulting to first available")
			var ids := MapManager.get_maps_for_mode(GameState.selected_mode)
			mid = ids[0] if not ids.is_empty() else "middleBridge"
		_load_map(mid)

	modulate.a = 0.0
	create_tween().tween_property(self, "modulate:a", 1.0, 0.40)



# ─────────────────────────────────────────────────────────────
#  MAP LOADING
# ─────────────────────────────────────────────────────────────

func _populate_map_picker() -> void:
	var mode := GameState.selected_mode
	var ids  := MapManager.get_maps_for_mode(mode)

	# Debug: if test folder is empty, fall back to all skirmish maps so
	# there is always something to load without requiring a test PNG.
	if ids.is_empty() and mode == "debug":
		ids = MapManager.get_maps_for_mode("skirmish")
		push_warning("WorldScene: no debug maps found, using skirmish maps as fallback")

	# Last resort: use every known map
	if ids.is_empty():
		ids = MapManager.maps.keys()

	for mid : String in ids:
		# Skip the random meta-entry — not a real map to load directly
		if MapManager.is_random_map(mid):
			continue
		var m         := MapManager.get_map_data(mid) as Dictionary
		var map_label : String = str(m.get("name", mid))
		map_picker.add_item(map_label)
		map_picker.set_item_metadata(map_picker.item_count - 1, mid)


func _load_map_by_idx(idx: int) -> void:
	var mid : String = str(map_picker.get_item_metadata(idx))
	_load_map(mid)


func _load_map(map_id: String) -> void:
	_map_id = map_id
	var m := MapManager.get_map_data(map_id) as Dictionary

	lbl_map.text = "Loading %s…" % str(m.get("name", map_id))

	# Clear any existing units
	for child in units_layer.get_children():
		child.queue_free()

	await get_tree().process_frame
	var result := MapManager.parse_map(map_id) as Dictionary

	_terrain_grid = result.get("grid",   []) as Array
	_spawn_points = result.get("spawns", []) as Array
	_map_width    = int(result.get("width",  128))
	_map_height   = int(result.get("height", 128))

	# Build terrain render
	var wr := renderer as WorldRenderer
	wr.setup(_terrain_grid, _spawn_points, _map_width, _map_height)

	# Wire RTS controller
	var ctrl := rts_controller as RTSController
	ctrl.setup(camera, units_layer, _terrain_grid, _map_width, _map_height)

	# Spawn test unit in debug mode
	if GameState.selected_mode == "debug":
		_spawn_debug_unit(ctrl)

	lbl_map.text = str(m.get("name", map_id))
	_update_minimap()
	_centre_camera()


# Debug entity ids — change these to test different units.
const DEBUG_PLAYER_UNIT := "militiaman"   # faction 0 (player)
const DEBUG_ENEMY_UNIT  := "goblin"        # faction 1 (enemy)

func _spawn_debug_unit(ctrl: RTSController) -> void:
	# ── Player unit at spawn point 0 (or map centre) ──────────
	var player_world := _spawn_world_pos(0)
	var player_unit  := ctrl.spawn_unit(player_world, 0, DEBUG_PLAYER_UNIT)
	ctrl.select_unit_external(player_unit)

	# ── Enemy unit at spawn point 1 (or offset from centre) ───
	# Gives you something to eventually target / fight.
	var enemy_world := _spawn_world_pos(1)
	ctrl.spawn_unit(enemy_world, 1, DEBUG_ENEMY_UNIT)


## Returns the world-space centre of spawn point [idx].
## Falls back gracefully if fewer spawn points exist.
func _spawn_world_pos(idx: int) -> Vector2:
	if idx < _spawn_points.size():
		var sp := _spawn_points[idx] as Dictionary
		return Vector2(
			(int(sp.get("x", 32)) + 0.5) * WorldRenderer.TILE_PX,
			(int(sp.get("y", 32)) + 0.5) * WorldRenderer.TILE_PX
		)
	# Fallback: map centre with small offset per index
	var centre := Vector2(
		_map_width  * WorldRenderer.TILE_PX * 0.5,
		_map_height * WorldRenderer.TILE_PX * 0.5
	)
	return centre + Vector2(idx * 40.0, 0.0)


# ─────────────────────────────────────────────────────────────
#  CAMERA
# ─────────────────────────────────────────────────────────────

func _setup_camera() -> void:
	camera.zoom    = Vector2(1.5, 1.5)
	camera.enabled = true


func _centre_camera() -> void:
	var wr := renderer as WorldRenderer
	camera.position = wr.world_size() * 0.5


func _process(delta: float) -> void:
	_handle_keyboard_pan(delta)
	_update_terrain_label()
	_update_minimap_viewport()


func _handle_keyboard_pan(delta: float) -> void:
	var dir := Vector2.ZERO
	if Input.is_action_pressed("move_camera_up")    or Input.is_key_pressed(KEY_UP):    dir.y -= 1
	if Input.is_action_pressed("move_camera_down")  or Input.is_key_pressed(KEY_DOWN):  dir.y += 1
	if Input.is_action_pressed("move_camera_left")  or Input.is_key_pressed(KEY_LEFT):  dir.x -= 1
	if Input.is_action_pressed("move_camera_right") or Input.is_key_pressed(KEY_RIGHT): dir.x += 1
	if dir != Vector2.ZERO:
		camera.position += dir.normalized() * PAN_SPEED * delta / camera.zoom.x
	_clamp_camera()


func _clamp_camera() -> void:
	if _map_width == 0:
		return
	var wr   := renderer as WorldRenderer
	var ws    := wr.world_size()
	var half  := get_viewport_rect().size * 0.5 / camera.zoom
	camera.position.x = clampf(camera.position.x, half.x, maxf(ws.x - half.x, half.x))
	camera.position.y = clampf(camera.position.y, half.y, maxf(ws.y - half.y, half.y))


## Updates the minimap viewport rectangle each frame.
func _update_minimap_viewport() -> void:
	if _map_width == 0:
		return
	var mm := minimap as MinimapDrawer
	var wr := renderer as WorldRenderer
	mm.update_viewport(camera, wr.world_size())


## Minimap click handler — converts 0–1 fraction to world position.
func _on_minimap_camera_move(fraction: Vector2) -> void:
	if _map_width == 0:
		return
	var wr := renderer as WorldRenderer
	var ws := wr.world_size()
	camera.position = Vector2(fraction.x * ws.x, fraction.y * ws.y)
	_clamp_camera()


## WorldScene only handles: middle-mouse pan, scroll zoom, G grid toggle.
## Left / right click → RTSController._unhandled_input (runs first, consumes event).
func _unhandled_input(event: InputEvent) -> void:
	if event is InputEventMouseButton:
		var mb := event as InputEventMouseButton
		if mb.button_index == MOUSE_BUTTON_WHEEL_UP and mb.pressed:
			_zoom_by(ZOOM_STEP)
		elif mb.button_index == MOUSE_BUTTON_WHEEL_DOWN and mb.pressed:
			_zoom_by(-ZOOM_STEP)
		elif mb.button_index == MOUSE_BUTTON_MIDDLE:
			_dragging  = mb.pressed
			_drag_start = mb.position

	if event is InputEventMouseMotion and _dragging:
		var mm    := event as InputEventMouseMotion
		var delta := (mm.position - _drag_start) / camera.zoom.x
		camera.position -= delta
		_drag_start = mm.position
		_clamp_camera()

	if event is InputEventKey:
		var ke := event as InputEventKey
		if ke.pressed and ke.physical_keycode == KEY_G:
			_on_toggle_grid()


func _zoom_by(delta: float) -> void:
	var new_z := clampf(camera.zoom.x + delta, ZOOM_MIN, ZOOM_MAX)
	camera.zoom = Vector2(new_z, new_z)
	_clamp_camera()


# ─────────────────────────────────────────────────────────────
#  HUD
# ─────────────────────────────────────────────────────────────

func _setup_hud() -> void:
	var mode_names := {
		"adventure": "Adventure", "survival": "Survival",
		"skirmish": "Skirmish",   "multiplayer": "Multiplayer",
		"debug": "DEBUG"
	}
	lbl_mode.text = mode_names.get(GameState.selected_mode, "Game")

	var c := GameState.get_character()
	if c.is_empty():
		lbl_char.text = "No character"
	else:
		lbl_char.text = "%s  Lv.%d  %s" % [
			str(c.get("name",  "?")),
			int(c.get("level",  1)),
			CharacterManager.race_name(str(c.get("race", "human")))
		]

	lbl_terrain.text   = ""
	lbl_coords.text    = ""
	lbl_selection.text = ""


func _update_terrain_label() -> void:
	if _terrain_grid.is_empty():
		return
	var mp := get_viewport().get_mouse_position()
	var wp := get_viewport().get_canvas_transform().affine_inverse() * mp
	var tx := int(wp.x / WorldRenderer.TILE_PX)
	var ty := int(wp.y / WorldRenderer.TILE_PX)
	if tx >= 0 and tx < _map_width and ty >= 0 and ty < _map_height:
		var tid : String = MapManager.get_terrain_at(_terrain_grid, tx, ty)
		lbl_terrain.text = "%s  ×%.2f%s" % [
			tid.capitalize(),
			GroundsManager.get_speed(tid),
			"  🏗" if GroundsManager.is_buildable(tid) else ""
		]
		lbl_coords.text = "(%d, %d)" % [tx, ty]
	else:
		lbl_terrain.text = ""
		lbl_coords.text  = ""


func _update_minimap() -> void:
	var mm := minimap as MinimapDrawer
	mm.setup(_terrain_grid, _spawn_points, _map_width, _map_height)


func _on_selection_changed(count: int) -> void:
	if count == 0:
		lbl_selection.text = ""
	elif count == 1:
		lbl_selection.text = "1 unit selected"
	else:
		lbl_selection.text = "%d units selected" % count


# ─────────────────────────────────────────────────────────────
#  BUTTON HANDLERS
# ─────────────────────────────────────────────────────────────

func _on_back() -> void:
	var target := SCENE_DEBUG if GameState.selected_mode == "debug" else SCENE_GAMEMODE
	var t := create_tween()
	t.tween_property(self, "modulate:a", 0.0, 0.35)
	t.tween_callback(func() -> void:
		get_tree().change_scene_to_file(target)
	)


func _on_toggle_grid() -> void:
	var wr := renderer as WorldRenderer
	wr.show_grid = not wr.show_grid
	btn_grid.text = "Grid: ON" if wr.show_grid else "Grid: OFF"
	wr.queue_redraw()


func _on_map_selected(idx: int) -> void:
	_load_map_by_idx(idx)



# ==================== IMPROVED MULTI-UNIT TEST ====================
# Add this at the bottom of WorldScene.gd

func _create_test_units() -> void:
	# Test 1: Infantry moving right/left (horizontal)
	_spawn_test_unit(1001, "soldiers/infantryman.png", Vector2(2800, 3800), "horizontal")
	
	# Test 2: Black Bear moving up/down (vertical)
	_spawn_test_unit(1002, "monsters/blackBear.png", Vector2(3400, 4200), "vertical")
	
	# Test 3: Another soldier for variety
	_spawn_test_unit(1003, "soldiers/lightHorseman.png", Vector2(3000, 4500), "horizontal")

# Helper to spawn and auto-move a unit
func _spawn_test_unit(id: int, sprite_file: String, start_pos: Vector2, move_type: String = "horizontal") -> void:
	var test_unit = {
		"id": id,
		"type": "unit",
		"x": start_pos.x,
		"y": start_pos.y,
		"picture": { "file": sprite_file },
		"orientation": 0
	}
	
	var visual = SpriteManager.create_entity_visual(test_unit)
	if not visual:
		return
	
	var tween = create_tween()
	tween.set_loops()
	
	if move_type == "horizontal":
		tween.tween_property(visual, "position:x", start_pos.x + 600, 8.0)
		tween.tween_property(visual, "position:x", start_pos.x, 8.0)
	else:
		tween.tween_property(visual, "position:y", start_pos.y + 400, 8.0)
		tween.tween_property(visual, "position:y", start_pos.y, 8.0)
