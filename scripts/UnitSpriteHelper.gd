class_name UnitSpriteHelper
extends RefCounted

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Unit Sprite Helper
#  Godot 4.x  |  GDScript 2.0
#
#  Handles the 3 × 4 animated sprite grid used by ALL mobile
#  entities: soldiers, summoned units, and building-monsters
#  (golems) once their construction is complete.
#
#  ── SPRITE SHEET LAYOUT ───────────────────────────────────
#
#       col 0     col 1     col 2
#       IDLE      WALK_A    WALK_B
#  ┌─────────┬─────────┬─────────┐
#  │ row 0   │         │         │  SOUTH (facing down / camera)
#  │ SOUTH   │  walk   │  walk   │
#  ├─────────┼─────────┼─────────┤
#  │ row 1   │         │         │  NORTH (facing up / away)
#  │ NORTH   │  walk   │  walk   │
#  ├─────────┼─────────┼─────────┤
#  │ row 2   │         │         │  WEST  (facing left)
#  │ WEST    │  walk   │  walk   │
#  ├─────────┼─────────┼─────────┤
#  │ row 3   │         │         │  EAST  (facing right)
#  │ EAST    │  walk   │  walk   │
#  └─────────┴─────────┴─────────┘
#
#  ── CELL SIZE FORMULA ────────────────────────────────────
#  Unit data stores COLLISION dimensions.
#  Sprite cell is always 2× the collision size:
#    cell_w = entity.width        * 2
#    cell_h = entity.visualHeight * 2   (or entity.height * 2 if absent)
#
#  Example: archer (width=32, height=48)
#    cell = 64 × 96 → sheet = 192 × 384 ✓
#
#  Example: crystal golem (width=64, visualHeight=96) in active phase
#    cell = 128 × 192 → sheet = 384 × 768 ✓
#
#  ── GOLEM PHASE SWITCH ───────────────────────────────────
#  Golems (buildingMonster type) use BuildingSpriteHelper for
#  their Yard (construction) phase. Once construction completes,
#  EntityDataManager.get_sprite_type(id, true) returns
#  UNIT_ANIMATED and UnitSpriteHelper takes over.
# ─────────────────────────────────────────────────────────────

# ── Direction constants ───────────────────────────────────────
const SOUTH := 0  ## Row 0 — facing down toward camera
const NORTH := 1  ## Row 1 — facing up, away from camera
const WEST  := 2  ## Row 2 — facing left
const EAST  := 3  ## Row 3 — facing right

# ── Animation column constants ────────────────────────────────
const IDLE   := 0  ## Col 0 — standing still
const WALK_A := 1  ## Col 1 — walk cycle frame A
const WALK_B := 2  ## Col 2 — walk cycle frame B

const COLS := 3
const ROWS := 4


# ─────────────────────────────────────────────────────────────
#  CELL DIMENSIONS
# ─────────────────────────────────────────────────────────────

## Sprite cell width for a unit: entity.width × 2
func cell_width(entity_id: String) -> int:
	return EntityDataManager.get_width(entity_id) * 2


## Sprite cell height for a unit: entity.visualHeight × 2
## (visualHeight falls back to entity.height if not defined)
func cell_height(entity_id: String) -> int:
	return EntityDataManager.get_visual_height(entity_id) * 2


# ─────────────────────────────────────────────────────────────
#  FRAME REGION QUERIES
# ─────────────────────────────────────────────────────────────

## Returns the Rect2 for one specific frame.
func frame_region(entity_id: String,
						  direction: int = SOUTH,
						  col: int = IDLE) -> Rect2:
	var cw  : int = cell_width(entity_id)
	var ch  : int = cell_height(entity_id)
	var dir : int = clampi(direction, 0, ROWS - 1)
	var c   : int = clampi(col,       0, COLS - 1)
	return Rect2(c * cw, dir * ch, cw, ch)


## Idle frame for a given direction.
func idle_region(entity_id: String, direction: int = SOUTH) -> Rect2:
	return frame_region(entity_id, direction, IDLE)


## Returns [WALK_A_region, WALK_B_region] for looping animation.
func walk_regions(entity_id: String, direction: int = SOUTH) -> Array[Rect2]:
	var regions : Array[Rect2] = []
	regions.append(frame_region(entity_id, direction, WALK_A))
	regions.append(frame_region(entity_id, direction, WALK_B))
	return regions


## Returns all 3 frames [IDLE, WALK_A, WALK_B] for a direction.
func all_regions(entity_id: String, direction: int = SOUTH) -> Array[Rect2]:
	var regions : Array[Rect2] = []
	regions.append(frame_region(entity_id, direction, IDLE))
	regions.append(frame_region(entity_id, direction, WALK_A))
	regions.append(frame_region(entity_id, direction, WALK_B))
	return regions


# ─────────────────────────────────────────────────────────────
#  DIRECTION HELPERS
# ─────────────────────────────────────────────────────────────

## Returns the best direction constant for a 2D movement vector.
## Returns SOUTH for Vector2.ZERO (idle / no movement).
func direction_for_vector(vel: Vector2) -> int:
	if vel.is_zero_approx():
		return SOUTH
	if abs(vel.x) >= abs(vel.y):
		return EAST if vel.x > 0.0 else WEST
	return SOUTH if vel.y > 0.0 else NORTH


## Returns the correct animation column given a velocity.
## Uses idle when speed is near zero, alternates walk frames via time.
func col_for_velocity(vel: Vector2, time: float,
							  walk_fps: float = 6.0) -> int:
	if vel.is_zero_approx():
		return IDLE
	# Alternate WALK_A / WALK_B at walk_fps
	return WALK_A if int(time * walk_fps) % 2 == 0 else WALK_B


# ─────────────────────────────────────────────────────────────
#  ATLAS / SPRITE FACTORIES
# ─────────────────────────────────────────────────────────────

## Creates an AtlasTexture for a single frame from a pre-loaded sheet.
func make_frame_atlas(sheet: Texture2D,
							  entity_id: String,
							  direction: int,
							  col: int) -> AtlasTexture:
	var a    := AtlasTexture.new()
	a.atlas  = sheet
	a.region = frame_region(entity_id, direction, col)
	return a


## Creates a Sprite2D showing the idle-south frame, anchored at ground centre.
## If the sprite file is absent, renders as a magenta placeholder —
## the entity is still fully functional in the simulation.
func make_sprite(entity_id: String, direction: int = SOUTH) -> Sprite2D:
	var tex    := EntityDataManager.get_texture(entity_id)
	var region := idle_region(entity_id, direction)
	var s      := Sprite2D.new()
	s.texture        = tex
	s.region_enabled = true
	s.region_rect    = region
	s.offset         = Vector2(0.0, -region.size.y * 0.5)
	return s


## Populates a SpriteFrames resource with all walk/idle animations
## for the given entity, ready to use with AnimatedSprite2D.
## If the sprite file is absent, all frames use the placeholder texture.
##
## Animations created: "idle_s", "idle_n", "idle_w", "idle_e",
##                     "walk_s", "walk_n", "walk_w", "walk_e"
func build_sprite_frames(entity_id: String,
								 walk_fps: float = 6.0) -> SpriteFrames:
	var sheet : ImageTexture = EntityDataManager.get_texture(entity_id)
	var sf    := SpriteFrames.new()

	var dirs : Array = [SOUTH, NORTH, WEST, EAST]
	var tags : Array = ["s",   "n",   "w",  "e"]

	for i : int in dirs.size():
		var dir      : int    = dirs[i]
		var tag      : String = tags[i]
		var idle_anim : String = "idle_" + tag
		var walk_anim : String = "walk_" + tag

		sf.add_animation(idle_anim)
		sf.set_animation_loop(idle_anim, true)
		sf.set_animation_speed(idle_anim, 1.0)
		sf.add_frame(idle_anim, make_frame_atlas(sheet, entity_id, dir, IDLE))

		sf.add_animation(walk_anim)
		sf.set_animation_loop(walk_anim, true)
		sf.set_animation_speed(walk_anim, walk_fps)
		sf.add_frame(walk_anim, make_frame_atlas(sheet, entity_id, dir, WALK_A))
		sf.add_frame(walk_anim, make_frame_atlas(sheet, entity_id, dir, WALK_B))

	if sf.has_animation("default"):
		sf.remove_animation("default")

	return sf
