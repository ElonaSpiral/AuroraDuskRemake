class_name RTSController
extends Node2D

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — RTS Controller
#  Godot 4.x  |  GDScript 2.0
#
#  Handles all RTS player input for the game world.
#  Sits as a Node2D child of WorldScene (above WorldRenderer,
#  below HUDLayer) so its world-space _draw() aligns with units.
#
#  Input scheme:
#    Left click          — select unit under cursor; deselect if empty
#    Left drag           — box-select all units inside rectangle
#    Right click         — order selected units to move to cursor
#    Shift + Left click  — add/remove unit from selection
#    Escape              — deselect all
#
#  Set via setup() after the map loads:
#    camera       — Camera2D reference for screen→world conversion
#    units_layer  — Node2D parent that holds all RTSUnit nodes
#    terrain_grid — Array[Array[String]] for movement legality
#    map_width/height — bounds
# ─────────────────────────────────────────────────────────────

signal selection_changed(count: int)

const TILE_PX          := 64   # must match WorldRenderer.TILE_PX
const DRAG_THRESHOLD   := 6.0     # pixels of drag before box-select mode
const MOVE_SPREAD_DIST := 18.0    # spread radius when ordering multiple units

# ── Refs set by setup() ───────────────────────────────────────
var camera       : Camera2D = null
var units_layer  : Node2D   = null
var terrain_grid : Array    = []
var map_width    : int      = 0
var map_height   : int      = 0

# ── Selection state ───────────────────────────────────────────
var _selected    : Array = []   # Array[RTSUnit]

# ── Drag-select state ─────────────────────────────────────────
var _drag_active  : bool    = false
var _drag_screen_start : Vector2   # screen-space drag start
var _drag_world_start  : Vector2   # world-space drag start
var _drag_world_end    : Vector2   # world-space drag end (live)

# Box-select rectangle colour
const C_BOX_FILL   := Color(0.20, 0.55, 1.00, 0.10)
const C_BOX_BORDER := Color(0.20, 0.55, 1.00, 0.80)

# Move order indicator
var _move_order_flash : float = 0.0   # countdown timer for move-order flash
var _move_order_pos   : Vector2


# ─────────────────────────────────────────────────────────────
func _ready() -> void:
	z_index = 3   # above units (z_index=2), below HUD


## Call after the map loads to inject dependencies.
func setup(cam: Camera2D, units: Node2D,
		   grid: Array, w: int, h: int) -> void:
	camera       = cam
	units_layer  = units
	terrain_grid = grid
	map_width    = w
	map_height   = h


# ─────────────────────────────────────────────────────────────
#  INPUT
# ─────────────────────────────────────────────────────────────

func _unhandled_input(event: InputEvent) -> void:
	if camera == null:
		return

	# ── Escape: deselect all ──────────────────────────────────
	if event is InputEventKey:
		var ke := event as InputEventKey
		if ke.pressed and ke.physical_keycode == KEY_ESCAPE:
			_deselect_all()
			get_viewport().set_input_as_handled()
			return

	if not event is InputEventMouseButton and not event is InputEventMouseMotion:
		return

	# ── Mouse button ──────────────────────────────────────────
	if event is InputEventMouseButton:
		var mb := event as InputEventMouseButton

		# Skip middle mouse and scroll — those belong to WorldScene camera pan/zoom
		if mb.button_index == MOUSE_BUTTON_MIDDLE:
			return
		if mb.button_index == MOUSE_BUTTON_WHEEL_UP or \
		   mb.button_index == MOUSE_BUTTON_WHEEL_DOWN:
			return

		# ── Left click / drag ─────────────────────────────────
		if mb.button_index == MOUSE_BUTTON_LEFT:
			if mb.pressed:
				_drag_screen_start = mb.position
				_drag_world_start  = _screen_to_world(mb.position)
				_drag_world_end    = _drag_world_start
				_drag_active       = false
			else:
				# Button released
				if _drag_active:
					# Finalize box-select
					_finish_box_select(mb.shift_pressed)
				else:
					# Point click
					_handle_click_select(_screen_to_world(mb.position),
									     mb.shift_pressed)
				_drag_active = false
				queue_redraw()
			get_viewport().set_input_as_handled()

		# ── Right click: move order ───────────────────────────
		elif mb.button_index == MOUSE_BUTTON_RIGHT and mb.pressed:
			if not _selected.is_empty():
				_issue_move_orders(_screen_to_world(mb.position))
				get_viewport().set_input_as_handled()

	# ── Mouse motion ──────────────────────────────────────────
	if event is InputEventMouseMotion:
		if Input.is_mouse_button_pressed(MOUSE_BUTTON_LEFT):
			var moved := (event as InputEventMouseMotion).position - _drag_screen_start
			if moved.length() > DRAG_THRESHOLD or _drag_active:
				_drag_active    = true
				_drag_world_end = _screen_to_world((event as InputEventMouseMotion).position)
				queue_redraw()


# ─────────────────────────────────────────────────────────────
#  SELECTION LOGIC
# ─────────────────────────────────────────────────────────────

func _handle_click_select(world_pos: Vector2, additive: bool) -> void:
	var hit := _unit_at(world_pos)
	if hit != null:
		if additive:
			if hit.selected:
				_remove_from_selection(hit)
			else:
				_add_to_selection(hit)
		else:
			_deselect_all()
			_add_to_selection(hit)
	else:
		if not additive:
			_deselect_all()
	_emit_selection()


func _finish_box_select(additive: bool) -> void:
	var box := _drag_rect_world()
	if not additive:
		_deselect_all_quiet()
	for u in _all_units():
		var unit := u as RTSUnit
		if box.has_point(unit.position):
			_add_to_selection_quiet(unit)
	_emit_selection()


func _add_to_selection(unit) -> void:
	if not _selected.has(unit):
		_selected.append(unit)
		unit.select()
	_emit_selection()


func _add_to_selection_quiet(unit) -> void:
	if not _selected.has(unit):
		_selected.append(unit)
		unit.select()


func _remove_from_selection(unit) -> void:
	_selected.erase(unit)
	unit.deselect()
	_emit_selection()


func _deselect_all() -> void:
	for u in _selected:
		(u as RTSUnit).deselect()
	_selected.clear()
	_emit_selection()


func _deselect_all_quiet() -> void:
	for u in _selected:
		(u as RTSUnit).deselect()
	_selected.clear()


func _emit_selection() -> void:
	selection_changed.emit(_selected.size())


# ─────────────────────────────────────────────────────────────
#  MOVE ORDERS
# ─────────────────────────────────────────────────────────────

func _issue_move_orders(world_target: Vector2) -> void:
	_move_order_pos   = world_target
	_move_order_flash = 0.55   # seconds the move indicator is visible
	queue_redraw()

	var count := _selected.size()
	if count == 0:
		return

	# Spread units in a circle so they don't all pile onto the same tile
	for i : int in count:
		var unit := _selected[i] as RTSUnit
		var offset := Vector2.ZERO
		if count > 1:
			var angle := (TAU / count) * i
			offset = Vector2(cos(angle), sin(angle)) * MOVE_SPREAD_DIST * \
					 (1.0 if count <= 4 else sqrt(float(i) / 4.0 + 1.0))
		unit.order_move(world_target + offset)


# ─────────────────────────────────────────────────────────────
#  DRAWING
# ─────────────────────────────────────────────────────────────

func _process(delta: float) -> void:
	if _move_order_flash > 0.0:
		_move_order_flash -= delta
		queue_redraw()


func _draw() -> void:
	# Drag-select rectangle
	if _drag_active:
		var box := _drag_rect_world()
		draw_rect(box, C_BOX_FILL)
		draw_rect(box, C_BOX_BORDER, false, 1.5)

	# Move-order ping
	if _move_order_flash > 0.0:
		var alpha := _move_order_flash / 0.55
		var radius := 12.0 + (1.0 - alpha) * 10.0
		draw_arc(_move_order_pos, radius, 0, TAU, 32,
			Color(0.95, 0.82, 0.18, alpha * 0.85), 2.0)
		draw_circle(_move_order_pos, 3.5,
			Color(0.95, 0.82, 0.18, alpha))


# ─────────────────────────────────────────────────────────────
#  HELPERS
# ─────────────────────────────────────────────────────────────

func _screen_to_world(screen_pos: Vector2) -> Vector2:
	# get_viewport().get_canvas_transform() is the correct combined transform
	# (camera position + zoom) for converting screen coords to world coords.
	# camera.get_screen_transform() only returns the canvas-layer transform
	# and ignores the camera's own position, causing a large offset mismatch.
	return get_viewport().get_canvas_transform().affine_inverse() * screen_pos


func _drag_rect_world() -> Rect2:
	var tl := Vector2(minf(_drag_world_start.x, _drag_world_end.x),
					  minf(_drag_world_start.y, _drag_world_end.y))
	var br := Vector2(maxf(_drag_world_start.x, _drag_world_end.x),
					  maxf(_drag_world_start.y, _drag_world_end.y))
	return Rect2(tl, br - tl)


func _unit_at(world_pos: Vector2) -> RTSUnit:
	for u in _all_units():
		var unit := u as RTSUnit
		if unit.is_hit_by(world_pos):
			return unit
	return null


func _all_units() -> Array:
	if units_layer == null:
		return []
	return units_layer.get_children()


## Returns a copy of the current selection (read-only).
func get_selected() -> Array:
	return _selected.duplicate()


## Spawns an RTSUnit at world_pos in the UnitsLayer.
## If entity_id is provided, the unit is bound to real entity data
## (stats, sprite) via RTSUnit.initialize().  Pass "" for a plain
## placeholder unit (useful for quick tests).
func spawn_unit(world_pos: Vector2, unit_faction: int = 0,
				entity_id: String = "") -> RTSUnit:
	var unit := RTSUnit.new()
	unit.position     = world_pos
	unit.faction      = unit_faction
	unit.terrain_grid = terrain_grid
	unit.map_width    = map_width
	unit.map_height   = map_height
	units_layer.add_child(unit)
	# initialize() called AFTER add_child so _ready() has run first
	if entity_id != "":
		unit.initialize(entity_id, unit_faction)
	return unit


## Programmatically select a unit (used by WorldScene for the debug spawn).
func select_unit_external(unit: RTSUnit) -> void:
	if not _selected.has(unit):
		_selected.append(unit)
	unit.select()
	_emit_selection()
