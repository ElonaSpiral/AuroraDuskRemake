class_name BuildingSpriteHelper
extends RefCounted

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Building Sprite Helper
#  Godot 4.x  |  GDScript 2.0
#
#  Handles sprite regions for STATIC buildings (BUILDING_STRIP)
#  and their YARD (under-construction) variants (YARD_STRIP).
#
#  ── BUILDING STRIP ───────────────────────────────────────
#  Horizontal strip of exactly 2 frames (2 orientations).
#  Cell size:  width × visualHeight
#  Frame 0 = orientation A (south-east / facing right)
#  Frame 1 = orientation B (south-west / facing left)
#  Frame X = orientation * width
#
#  ── YARD STRIP ───────────────────────────────────────────
#  Horizontal strip of (steps × 2) frames, two rows tall.
#  Cell size:  width × visualHeight
#  Row 0 = sprite frames  (frame_y = 0)
#  Row 1 = shadow frames  (frame_y = visualHeight)
#  Frame index = step * 2 + orientation
#  Frame X     = frame_index * width
#  steps = 0   → instant build, no yard sprite needed
#
#  ── GOLEMS ───────────────────────────────────────────────
#  Golems use YARD_STRIP while constructing (xxxYard.png).
#  Once complete they switch to UnitSpriteHelper (UNIT_ANIMATED).
#  See EntityDataManager.is_golem() and get_sprite_type().
# ─────────────────────────────────────────────────────────────

const ORIENT_A := 0  ## South-east / facing right
const ORIENT_B := 1  ## South-west / facing left


# ─────────────────────────────────────────────────────────────
#  BUILDING STRIP  (completed buildings)
# ─────────────────────────────────────────────────────────────

## Returns the Rect2 for a completed building at the given orientation.
func completed_region(entity_id: String, orientation: int = ORIENT_A) -> Rect2:
	var w  : int = EntityDataManager.get_width(entity_id)
	var h  : int = EntityDataManager.get_visual_height(entity_id)
	var ori : int = clampi(orientation, 0, 1)
	return Rect2(ori * w, 0, w, h)


# ─────────────────────────────────────────────────────────────
#  YARD STRIP  (under-construction)
# ─────────────────────────────────────────────────────────────

## Returns the Rect2 for a yard frame.
## step:   current construction step (0 = just started, steps-1 = nearly done)
## shadow: if true, return the shadow row rect instead of the sprite row
func yard_region(yard_id: String,
						 step: int,
						 orientation: int = ORIENT_A,
						 shadow: bool = false) -> Rect2:
	var w     : int = EntityDataManager.get_width(yard_id)
	var h     : int = EntityDataManager.get_visual_height(yard_id)
	var steps : int = int(EntityDataManager.get_entity(yard_id).get("steps", 0))
	if steps == 0:
		# Instant build — yard is not shown; return a safe zero rect
		return Rect2(0, 0, w, h)
	var s     : int = clampi(step, 0, steps - 1)
	var ori   : int = clampi(orientation, 0, 1)
	var idx   : int = s * 2 + ori
	var row_y : int = h if shadow else 0
	return Rect2(idx * w, row_y, w, h)


## Returns the number of construction steps for a yard entity.
func get_steps(yard_id: String) -> int:
	return int(EntityDataManager.get_entity(yard_id).get("steps", 0))


## Converts a 0.0–1.0 progress fraction to a step index.
func progress_to_step(yard_id: String, progress: float) -> int:
	var steps := get_steps(yard_id)
	if steps <= 0:
		return 0
	return clampi(int(progress * steps), 0, steps - 1)


# ─────────────────────────────────────────────────────────────
#  ATLAS / SPRITE FACTORIES
# ─────────────────────────────────────────────────────────────

## Creates an AtlasTexture sliced from a pre-loaded sheet.
func make_atlas(sheet: Texture2D, region: Rect2) -> AtlasTexture:
	var a    := AtlasTexture.new()
	a.atlas  = sheet
	a.region = region
	return a


## Creates a Sprite2D for a completed building, anchored at ground centre.
## If the sprite file is absent, renders as a magenta placeholder —
## the entity is still fully functional in the simulation.
func make_building_sprite(entity_id: String,
								  orientation: int = ORIENT_A) -> Sprite2D:
	var tex    := EntityDataManager.get_texture(entity_id)
	var region := completed_region(entity_id, orientation)
	var s      := Sprite2D.new()
	s.texture        = tex
	s.region_enabled = true
	s.region_rect    = region
	s.offset         = Vector2(0.0, -region.size.y * 0.5)
	return s


## Creates a Sprite2D for a yard frame, anchored at ground centre.
## Missing sprite → magenta placeholder, entity still active.
func make_yard_sprite(yard_id: String,
							  step: int = 0,
							  orientation: int = ORIENT_A) -> Sprite2D:
	var tex    := EntityDataManager.get_texture(yard_id)
	var region := yard_region(yard_id, step, orientation)
	var s      := Sprite2D.new()
	s.texture        = tex
	s.region_enabled = true
	s.region_rect    = region
	s.offset         = Vector2(0.0, -region.size.y * 0.5)
	return s
