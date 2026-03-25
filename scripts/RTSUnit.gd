class_name RTSUnit
extends Node2D

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — RTS Unit
#  Godot 4.x  |  GDScript 2.0
#
#  A single controllable unit.
#
#  ── TWO MODES ────────────────────────────────────────────
#  Entity-backed (entity_id set via initialize()):
#    • Stats pulled from EntityDataManager (score/score_max,
#      speed_stat, defense_stat, resistances).
#    • Visual: AnimatedSprite2D built by UnitSpriteHelper.
#    • _draw() renders only overlays: selection ring, HP bar,
#      move-target marker.
#
#  Fallback (no entity_id):
#    • Stats use defaults (score_max = 100, speed_stat = 5).
#    • Visual: drawn circle body (original placeholder).
#    • _draw() renders everything.
#
#  ── STAT NAMING ──────────────────────────────────────────
#  HP is called "score" / "score_max" to match the original
#  game.swf naming convention.  The JSON field is "health"
#  but we store it as score internally for consistency with
#  the simulation spec.
#
#  ── SPEED FORMULA ────────────────────────────────────────
#  entity speed is a tier: 5 = fast, 3 = slow, etc.
#  actual px/sec = speed_stat * SPEED_UNIT * terrain_multiplier
#  SPEED_UNIT = 20.0 → speed-5 unit does 100 px/s on plain.
# ─────────────────────────────────────────────────────────────

const TILE_PX    := 64   # must match WorldRenderer.TILE_PX
const SPEED_UNIT := 20.0   # px/sec per 1 speed tier point
const ARRIVE_DIST := 3.0
const WALK_FPS   := 6.0

# Visual fallback constants (no sprite loaded)
const BODY_RADIUS   := 7.0
const SELECT_RADIUS := 11.0

const FACTION_COLORS : Array[Color] = [
	Color(0.20, 0.55, 1.00),
	Color(0.90, 0.20, 0.20),
	Color(0.20, 0.80, 0.30),
	Color(0.95, 0.70, 0.10),
]

const C_SELECT  := Color(0.95, 0.82, 0.18, 1.0)
const C_MOVE_X  := Color(0.95, 0.82, 0.18, 0.55)
const C_SHADOW  := Color(0.0,  0.0,  0.0,  0.30)
const C_HP_BG   := Color(0.15, 0.15, 0.15, 0.70)
const C_HP_FULL := Color(0.20, 0.85, 0.20, 0.90)

# ── Public identity & simulation state ───────────────────────
var entity_id    : String = ""
var faction      : int    = 0
var unit_name    : String = "Unit"
var selected     : bool   = false

# ── Stats (score = HP, matching original game.swf naming) ────
var score        : int        = 100
var score_max    : int        = 100
var speed_stat   : int        = 5
var defense_stat : int        = 100
var resistances  : Dictionary = {}
var hit_radius   : float      = SELECT_RADIUS

# ── Movement ─────────────────────────────────────────────────
var _target_pos  : Vector2
var _is_moving   : bool    = false
var _facing      : Vector2 = Vector2.DOWN

# ── Terrain ──────────────────────────────────────────────────
var terrain_grid : Array = []
var map_width    : int   = 0
var map_height   : int   = 0

# ── Sprite ───────────────────────────────────────────────────
var _anim_sprite   : AnimatedSprite2D = null
var _sprite_helper : UnitSpriteHelper = null
var _has_sprite    : bool  = false

# ── Move-order ping ───────────────────────────────────────────
var _move_order_flash : float   = 0.0
var _move_order_pos   : Vector2


# ─────────────────────────────────────────────────────────────
func _ready() -> void:
	_target_pos = position
	z_index     = 2


## Bind this unit to a real entity definition.
## Call immediately after add_child() on the units_layer.
func initialize(eid: String, faction_: int = 0) -> void:
	entity_id = eid
	faction   = faction_

	var def : Dictionary = EntityDataManager.get_entity(eid)
	if def.is_empty():
		push_warning("RTSUnit.initialize: unknown entity '%s'" % eid)
		return

	score_max    = EntityDataManager.get_health(eid)
	score        = score_max
	defense_stat = EntityDataManager.get_defense(eid)
	speed_stat   = int(def.get("speed", 5))
	resistances  = EntityDataManager.get_resistances(eid)
	unit_name    = EntityDataManager.get_entity_name(eid, "EN")
	hit_radius   = maxf(EntityDataManager.get_width(eid) * 0.45, 8.0)

	_try_build_sprite(eid)


func _try_build_sprite(eid: String) -> void:
	if not EntityDataManager.is_mobile_unit(eid) and \
			not EntityDataManager.is_golem(eid):
		return

	_sprite_helper = UnitSpriteHelper.new()
	var frames := _sprite_helper.build_sprite_frames(eid, WALK_FPS)

	_anim_sprite = AnimatedSprite2D.new()
	_anim_sprite.sprite_frames = frames

	# Offset up by half the sprite cell height so foot aligns with position
	var ch := _sprite_helper.cell_height(eid)
	_anim_sprite.offset = Vector2(0.0, -ch * 0.5)

	# Sprite cell is 2x collision size — scale back to 1:1 world space
	_anim_sprite.scale = Vector2(0.5, 0.5)

	add_child(_anim_sprite)
	_anim_sprite.play("idle_s")
	_has_sprite = true


# ─────────────────────────────────────────────────────────────
#  PROCESS
# ─────────────────────────────────────────────────────────────

func _process(delta: float) -> void:
	if _is_moving:
		_move_toward_target(delta)

	if _move_order_flash > 0.0:
		_move_order_flash -= delta

	if _has_sprite:
		_update_animation()

	queue_redraw()


func _move_toward_target(delta: float) -> void:
	var to_target := _target_pos - position
	if to_target.length() <= ARRIVE_DIST:
		position   = _target_pos
		_is_moving = false
		return

	var terrain_mult := _terrain_speed_at(position)
	var px_per_sec   := speed_stat * SPEED_UNIT * terrain_mult
	var step         := to_target.normalized() * px_per_sec * delta

	if step.length() > to_target.length():
		step = to_target

	position += step
	_facing   = to_target.normalized()


func _terrain_speed_at(world_pos: Vector2) -> float:
	if terrain_grid.is_empty():
		return 1.0
	var tx := clampi(int(world_pos.x / TILE_PX), 0, map_width  - 1)
	var ty := clampi(int(world_pos.y / TILE_PX), 0, map_height - 1)
	var tid : String = str((terrain_grid[ty] as Array)[tx])
	return GroundsManager.get_speed(tid)


func _update_animation() -> void:
	if _anim_sprite == null:
		return
	var anim : String = ("walk_" if _is_moving else "idle_") + _facing_to_tag()
	if _anim_sprite.animation != anim:
		_anim_sprite.play(anim)


func _facing_to_tag() -> String:
	if abs(_facing.x) >= abs(_facing.y):
		return "e" if _facing.x > 0.0 else "w"
	return "s" if _facing.y > 0.0 else "n"


# ─────────────────────────────────────────────────────────────
#  DRAWING  (overlays always; body only when no sprite loaded)
# ─────────────────────────────────────────────────────────────

func _draw() -> void:
	var body_color := FACTION_COLORS[clampi(faction, 0, FACTION_COLORS.size() - 1)]

	# Move-target dotted line + X
	if _is_moving:
		_draw_target_marker(_target_pos - position)

	# Fallback circle body (only when no sprite)
	if not _has_sprite:
		draw_circle(Vector2(1.5, 2.5), BODY_RADIUS * 0.85, C_SHADOW)
		draw_circle(Vector2.ZERO, BODY_RADIUS, body_color)
		draw_arc(Vector2.ZERO, BODY_RADIUS, 0, TAU, 24,
			body_color.darkened(0.4), 1.2)
		_draw_facing_arrow(body_color)

	# Selection ring — drawn over sprite
	if selected:
		var r := hit_radius + 4.0
		draw_arc(Vector2.ZERO, r, 0, TAU, 36, C_SELECT, 2.0)
		for i in 4:
			var angle  := i * PI * 0.5
			var tick_s := Vector2(cos(angle), sin(angle)) * (r - 2)
			var tick_e := Vector2(cos(angle), sin(angle)) * (r + 3)
			draw_line(tick_s, tick_e, C_SELECT, 2.0)

	# HP bar — always visible
	_draw_hp_bar()

	# Move-order ping
	if _move_order_flash > 0.0:
		var alpha  := _move_order_flash / 0.55
		var radius := 12.0 + (1.0 - alpha) * 10.0
		var rel    := _move_order_pos - position
		draw_arc(rel, radius, 0, TAU, 32,
			Color(0.95, 0.82, 0.18, alpha * 0.85), 2.0)
		draw_circle(rel, 3.5, Color(0.95, 0.82, 0.18, alpha))


func _draw_facing_arrow(body_color: Color) -> void:
	var f      := _facing if not _facing.is_zero_approx() else Vector2.DOWN
	var perp   := Vector2(-f.y, f.x)
	var tip    := f * (BODY_RADIUS + 3.0)
	var base_l := f * (BODY_RADIUS - 3.0) + perp * 3.0
	var base_r := f * (BODY_RADIUS - 3.0) - perp * 3.0
	draw_colored_polygon(PackedVector2Array([tip, base_l, base_r]),
		body_color.lightened(0.3))


func _draw_target_marker(rel: Vector2) -> void:
	var seg_len := rel.length()
	if seg_len < BODY_RADIUS * 2.5:
		return
	var dir   := rel.normalized()
	var step  := 8.0
	var drawn := 0.0
	while drawn + step < seg_len - BODY_RADIUS * 2:
		var s := dir * (drawn + BODY_RADIUS * 1.5)
		var e := dir * (drawn + BODY_RADIUS * 1.5 + step * 0.4)
		draw_line(s, e, C_MOVE_X, 1.0)
		drawn += step
	var sz := 4.0
	draw_line(rel + Vector2(-sz, -sz), rel + Vector2(sz,  sz), C_MOVE_X, 2.0)
	draw_line(rel + Vector2(-sz,  sz), rel + Vector2(sz, -sz), C_MOVE_X, 2.0)


func _draw_hp_bar() -> void:
	var bar_w  := maxf(hit_radius * 2.0, BODY_RADIUS * 2.2)
	var bar_h  := 2.5
	var bar_y  := -(hit_radius + 7.0)
	var bar_x  := -bar_w * 0.5
	var hp_pct := float(score) / float(maxi(score_max, 1))
	draw_rect(Rect2(bar_x, bar_y, bar_w, bar_h), C_HP_BG)
	if hp_pct > 0.0:
		var hp_color := C_HP_FULL.lerp(Color(0.85, 0.15, 0.10, 0.9), 1.0 - hp_pct)
		draw_rect(Rect2(bar_x, bar_y, bar_w * hp_pct, bar_h), hp_color)


# ─────────────────────────────────────────────────────────────
#  PUBLIC API
# ─────────────────────────────────────────────────────────────

func select() -> void:
	selected = true

func deselect() -> void:
	selected = false

func order_move(world_target: Vector2) -> void:
	_target_pos       = world_target
	_is_moving        = true
	_move_order_pos   = world_target
	_move_order_flash = 0.55
	var dir := world_target - position
	if dir.length() > 0.1:
		_facing = dir.normalized()

func is_hit_by(world_pos: Vector2) -> bool:
	return position.distance_to(world_pos) <= hit_radius

## Apply damage. Returns true if the unit died.
## damage_type matches resistance keys (e.g. "slashing", "fire").
func take_damage(amount: float, damage_type: String = "") -> bool:
	var mult      := float(resistances.get(damage_type, 1.0)) if damage_type != "" else 1.0
	var final_dmg := int(roundi(amount * mult))
	score = maxi(score - final_dmg, 0)
	return score <= 0

## Restore HP (capped at score_max).
func heal(amount: int) -> void:
	score = mini(score + amount, score_max)

func is_dead() -> bool:
	return score <= 0

func is_player_controlled() -> bool:
	return faction == 0
