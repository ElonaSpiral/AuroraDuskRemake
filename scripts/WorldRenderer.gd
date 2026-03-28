class_name WorldRenderer
extends Node2D

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — World Renderer
#  Godot 4.x  |  GDScript 2.0
#
#  1 PNG pixel = 1 tile = 64×64 world units.
#  128×128 map = 8192×8192 world units.
#
#  ── RENDERING LAYERS ─────────────────────────────────────
#  Pass 1 — Tiles in level order (low first, high on top)
#            Higher-level tiles naturally overhang lower ones.
#  Pass 2 — Edge shadows: darkened strip drawn on any edge
#            where the neighbour has LOWER level, simulating
#            a raised bank / height difference.
#  Pass 3 — Spawn markers
#  Pass 4 — Grid overlay (on demand)
#
#  ── HEIGHT / EDGE ILLUSION ───────────────────────────────
#  The original game draws tiles sorted by level and uses a
#  192×192 mask (3×tile) to alpha-blend an overhang strip.
#  Our mask files are currently all-black (placeholder).
#  We replicate the visual with a procedural drop-shadow:
#  for each tile, if a neighbour has strictly lower level,
#  we draw a thin darkened gradient along that shared edge.
#  This produces the "raised bank" look at grass-water
#  and snow-plain borders.
#
#  ── TEXTURE LOADING ──────────────────────────────────────
#  Two-stage: Image.load(abs) first, ResourceLoader fallback.
#  Falls back to flat colour rect if both fail.
#
#  ── COLOUR VARIATION ─────────────────────────────────────
#  Deterministic hash of (x,y) → ±VARIATION_AMP brightness.
#  No per-frame randomness; same result every redraw.
# ─────────────────────────────────────────────────────────────

const TILE_PX       := 64
const SPAWN_RADIUS  := 24.0
const VARIATION_AMP := 0.06   # ±6% brightness per tile
const SHADOW_DEPTH  := 10     # px width of edge shadow strip
const SHADOW_ALPHA  := 0.38   # opacity of edge shadow

var terrain_grid : Array = []
var spawn_points : Array = []
var map_width    : int   = 0
var map_height   : int   = 0

var _water_offset  : float     = 0.0
var _tex_cache     : Dictionary = {}   # terrain_id → Texture2D or null
var _level_cache   : Dictionary = {}   # terrain_id → float
# Tiles sorted into draw buckets by level for pass-1 ordering
var _level_buckets : Array      = []   # Array of Arrays: [[tid,x,y], ...]
var _bucket_levels : Array      = []   # sorted unique level values

const C_SPAWN_FRIENDLY := Color(0.20, 0.90, 0.30, 0.90)
const C_SPAWN_ENEMY    := Color(0.90, 0.20, 0.20, 0.90)
const C_SPAWN_NEUTRAL  := Color(0.95, 0.85, 0.20, 0.90)
const C_GRID_LINE      := Color(0.0,  0.0,  0.0,  0.10)

var show_grid : bool = false


# ─────────────────────────────────────────────────────────────
#  WorldRenderer.gd - Updated with MapCacheManager integration
# ─────────────────────────────────────────────────────────────
func setup(terrain_grid: Array, spawn_points: Array, map_width: int, map_height: int) -> void:
	var raw_id := GameState.selected_map_id
	print("WorldRenderer: Raw selected_map_id = '" + raw_id + "'")
	
	var map_id := raw_id
	if map_id == "" or map_id == "test_map_auto":
		map_id = "middleBridge"
	
	print("WorldRenderer: Attempting cached texture for final map_id: '" + map_id + "'")

	var cached_tex = MapCacheManager.load_cached_texture(map_id)
	if cached_tex:
		print("WorldRenderer: ✓ SUCCESS - Loaded cached texture for " + map_id)
		var bg := Sprite2D.new()
		bg.texture = cached_tex
		bg.centered = false
		bg.position = Vector2.ZERO
		bg.z_index = -10
		add_child(bg)
		# TODO: _sprinkle_decorations(map_width, map_height, terrain_grid)
		return
	
	push_warning("WorldRenderer: No cached texture found for '" + map_id + "'. Falling back to tile rendering.")
	_build_tile_based_map(terrain_grid, map_width, map_height)

# Simple decoration sprinkling (random static sprites)
func _sprinkle_decorations(map_width: int, map_height: int, terrain_grid: Array) -> void:
	for y in map_height:
		for x in map_width:
			var tid := ""
			if terrain_grid.size() > y and terrain_grid[y].size() > x:
				tid = str(terrain_grid[y][x])
			
			if tid == "":
				continue
			
			var decoration_file = GroundsManager.roll_decoration(tid)
			if decoration_file != "":
				var deco_path = "res://assets/grounds/random/" + decoration_file
				if ResourceLoader.exists(deco_path):
					var sprite = Sprite2D.new()
					sprite.texture = load(deco_path) as Texture2D
					sprite.position = Vector2(
						x * TILE_PX + TILE_PX * 0.5,
						y * TILE_PX + TILE_PX * 0.5
					)
					sprite.z_index = 5  # above base terrain but below units
					add_child(sprite)

# Fallback tile-by-tile builder (your original code can go here)
func _build_tile_based_map(terrain_grid: Array, map_width: int, map_height: int) -> void:
	# Put your existing tile rendering code here if you want a fallback
	# For now, you can leave it empty or copy your old implementation
	pass


# ─────────────────────────────────────────────────────────────
#  SETUP HELPERS
# ─────────────────────────────────────────────────────────────

func _preload_textures() -> void:
	var seen : Dictionary = {}
	for row in terrain_grid:
		for tid in (row as Array):
			var s := str(tid)
			if not seen.has(s):
				seen[s] = true
				_load_terrain_texture(s)
				_level_cache[s] = GroundsManager.get_level(s)


func _load_terrain_texture(tid: String) -> void:
	if _tex_cache.has(tid):
		return
	var ground := GroundsManager.get_ground(tid)
	if ground.is_empty():
		_tex_cache[tid] = null
		return
	var fname    : String = str(ground.get("texture", tid + ".png"))
	var res_path : String = "res://assets/grounds/" + fname
	var abs_path : String = ProjectSettings.globalize_path(res_path)
	if FileAccess.file_exists(abs_path):
		var img := Image.new()
		if img.load(abs_path) == OK:
			_tex_cache[tid] = ImageTexture.create_from_image(img)
			return
	if ResourceLoader.exists(res_path):
		var tex := ResourceLoader.load(res_path) as Texture2D
		if tex != null:
			_tex_cache[tid] = tex
			return
	push_warning("WorldRenderer: no texture for '%s' — fallback colour" % tid)
	_tex_cache[tid] = null


## Group all tiles into buckets by terrain level for sorted drawing.
## Lower-level tiles are drawn first so higher-level tiles paint on top.
func _build_level_buckets() -> void:
	# Collect unique levels in sorted order
	var levels_set : Dictionary = {}
	for tid in _level_cache.keys():
		levels_set[_level_cache[tid]] = true
	_bucket_levels = levels_set.keys()
	_bucket_levels.sort()

	# One bucket per unique level
	var level_to_bucket : Dictionary = {}
	for i : int in _bucket_levels.size():
		_level_buckets.append([])
		level_to_bucket[_bucket_levels[i]] = i

	# Fill buckets
	for y : int in map_height:
		for x : int in map_width:
			var tid : String = str((terrain_grid[y] as Array)[x])
			var lv  : float  = float(_level_cache.get(tid, 0.0))
			var idx : int    = int(level_to_bucket.get(lv, 0))
			(_level_buckets[idx] as Array).append([tid, x, y])


# ─────────────────────────────────────────────────────────────
#  PROCESS
# ─────────────────────────────────────────────────────────────

func _process(delta: float) -> void:
	_water_offset += delta * 0.4
	if _water_offset > 1.0:
		_water_offset -= 1.0
		queue_redraw()


# ─────────────────────────────────────────────────────────────
#  DRAWING
# ─────────────────────────────────────────────────────────────

func _draw() -> void:
	if terrain_grid.is_empty():
		return
	_draw_terrain_pass1()
	_draw_terrain_pass2_edges()
	_draw_spawn_markers()
	if show_grid:
		_draw_grid()


## Pass 1: draw all tiles sorted by level (low → high).
func _draw_terrain_pass1() -> void:
	for bucket in _level_buckets:
		for entry in (bucket as Array):
			var tid : String = str((entry as Array)[0])
			var x   : int    = int((entry as Array)[1])
			var y   : int    = int((entry as Array)[2])
			_draw_tile(tid, x, y)


func _draw_tile(tid: String, x: int, y: int) -> void:
	var rect := Rect2(x * TILE_PX, y * TILE_PX, TILE_PX, TILE_PX)
	var tex  : Texture2D = _tex_cache.get(tid, null) as Texture2D

	if tex != null:
		var mod := _tile_modulate(tid, x, y)
		draw_texture_rect(tex, rect, false, mod)
	else:
		var col := GroundsManager.get_color(tid)
		col = _apply_variation(col, x, y)
		if GroundsManager.is_water(tid):
			var shimmer := sin((x + y) * 0.4 + _water_offset * TAU) * 0.04
			col = col.lightened(shimmer)
		draw_rect(rect, col)


## Pass 2: for each tile, check all 4 neighbours.
## If this tile has HIGHER level than a neighbour, draw a shadow
## strip along the shared edge on the NEIGHBOUR's side — this
## makes the current tile appear raised above the neighbour.
func _draw_terrain_pass2_edges() -> void:
	# Neighbour offsets: [dx, dy, edge_side]
	# edge_side: 0=top, 1=right, 2=bottom, 3=left of the NEIGHBOUR
	var neighbours : Array = [
		[0, -1, 2],   # above   → shadow on neighbour's bottom edge
		[1,  0, 3],   # right   → shadow on neighbour's left edge
		[0,  1, 0],   # below   → shadow on neighbour's top edge
		[-1, 0, 1],   # left    → shadow on neighbour's right edge
	]

	for y : int in map_height:
		for x : int in map_width:
			var tid : String = str((terrain_grid[y] as Array)[x])
			var my_level : float = float(_level_cache.get(tid, 0.0))

			for nb in neighbours:
				var nx : int = x + int((nb as Array)[0])
				var ny : int = y + int((nb as Array)[1])
				if nx < 0 or nx >= map_width or ny < 0 or ny >= map_height:
					continue
				var ntid     : String = str((terrain_grid[ny] as Array)[nx])
				var nb_level : float  = float(_level_cache.get(ntid, 0.0))

				# Only draw shadow if THIS tile is higher than neighbour
				if my_level <= nb_level:
					continue

				# Draw shadow on the neighbour tile, along the edge facing us
				var side : int = int((nb as Array)[2])
				_draw_edge_shadow(nx, ny, side)


## Draws a gradient shadow strip along one edge of tile (tx, ty).
## side: 0=top, 1=right, 2=bottom, 3=left
func _draw_edge_shadow(tx: int, ty: int, side: int) -> void:
	var bx := tx * TILE_PX
	var by := ty * TILE_PX
	var sd := SHADOW_DEPTH

	# Draw strips of decreasing opacity from the edge inward
	var steps := 4
	for i : int in steps:
		var t     := float(i) / float(steps)
		var alpha := SHADOW_ALPHA * (1.0 - t) * (1.0 - t)  # quadratic falloff
		var col   := Color(0.0, 0.0, 0.0, alpha)
		var strip_w := sd / steps

		var r : Rect2
		match side:
			0:  # top edge
				r = Rect2(bx, by + i * strip_w, TILE_PX, strip_w)
			1:  # right edge
				r = Rect2(bx + TILE_PX - (i + 1) * strip_w, by, strip_w, TILE_PX)
			2:  # bottom edge
				r = Rect2(bx, by + TILE_PX - (i + 1) * strip_w, TILE_PX, strip_w)
			3:  # left edge
				r = Rect2(bx + i * strip_w, by, strip_w, TILE_PX)
		draw_rect(r, col)


# ─────────────────────────────────────────────────────────────
#  TILE MODULATION
# ─────────────────────────────────────────────────────────────

func _tile_modulate(tid: String, x: int, y: int) -> Color:
	var variation := _position_variation(x, y)
	if GroundsManager.is_water(tid):
		var shimmer := sin((x + y) * 0.4 + _water_offset * TAU) * 0.04
		var v       := 1.0 + variation + shimmer
		return Color(v, v, v + 0.03, 1.0)
	else:
		var v := 1.0 + variation
		return Color(v, v, v, 1.0)


func _position_variation(x: int, y: int) -> float:
	var h : int = (x * 1619 + y * 31337) & 0xFFFF
	h = ((h ^ (h >> 7)) * 0xA3B5) & 0xFFFF
	return (float(h & 0xFF) / 255.0 - 0.5) * 2.0 * VARIATION_AMP


func _apply_variation(col: Color, x: int, y: int) -> Color:
	var v := _position_variation(x, y)
	return col.lightened(v) if v >= 0.0 else col.darkened(-v)


# ─────────────────────────────────────────────────────────────
#  SPAWN MARKERS & GRID
# ─────────────────────────────────────────────────────────────

func _draw_spawn_markers() -> void:
	for i : int in spawn_points.size():
		var sp := spawn_points[i] as Dictionary
		var cx := (int(sp.get("x", 0)) + 0.5) * TILE_PX
		var cy := (int(sp.get("y", 0)) + 0.5) * TILE_PX
		var col := C_SPAWN_NEUTRAL
		if i == 0:
			col = C_SPAWN_FRIENDLY
		elif spawn_points.size() == 2:
			col = C_SPAWN_ENEMY if i == 1 else C_SPAWN_NEUTRAL
		draw_circle(Vector2(cx, cy), SPAWN_RADIUS, col)
		draw_circle(Vector2(cx, cy), SPAWN_RADIUS * 0.45, Color(1, 1, 1, 0.85))
		draw_arc(Vector2(cx, cy), SPAWN_RADIUS, 0, TAU, 24, Color(0, 0, 0, 0.6), 2.0)


func _draw_grid() -> void:
	for y : int in map_height + 1:
		draw_line(Vector2(0, y * TILE_PX),
			Vector2(map_width * TILE_PX, y * TILE_PX), C_GRID_LINE, 0.5)
	for x : int in map_width + 1:
		draw_line(Vector2(x * TILE_PX, 0),
			Vector2(x * TILE_PX, map_height * TILE_PX), C_GRID_LINE, 0.5)


# ─────────────────────────────────────────────────────────────
#  PUBLIC API
# ─────────────────────────────────────────────────────────────

func world_size() -> Vector2:
	return Vector2(map_width * TILE_PX, map_height * TILE_PX)


func terrain_at_world(pos: Vector2) -> String:
	var tx := int(pos.x / TILE_PX)
	var ty := int(pos.y / TILE_PX)
	return MapManager.get_terrain_at(terrain_grid, tx, ty)
