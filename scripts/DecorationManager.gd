# DecorationManager.gd
# High-performance decoration system using MultiMeshInstance2D
# Child of WorldRenderer (NOT autoload)

extends Node2D
class_name DecorationManager

@export var max_instances: int = 3000
@export var tile_size: float = 64.0

var _multimeshes: Dictionary = {}           # texture_path -> MultiMeshInstance2D
var _decoration_entries: Array[Dictionary] = []

var _grounds_manager: GroundsManager = null


func _ready() -> void:
	z_index = -9


func initialize(grounds_manager: GroundsManager, map_width_tiles: int, map_height_tiles: int) -> void:
	_grounds_manager = grounds_manager
	clear_all()
	
	if not _grounds_manager:
		push_error("DecorationManager: GroundsManager is null!")
		return
	
	print("DecorationManager: Generating decorations for %dx%d map..." % [map_width_tiles, map_height_tiles])
	
	_generate_all_decorations(map_width_tiles, map_height_tiles)
	_build_multimeshes()
	
	print("DecorationManager: Completed - %d decorations | %d MultiMesh instances" % [_decoration_entries.size(), _multimeshes.size()])


func clear_all() -> void:
	for mm_instance in _multimeshes.values():
		mm_instance.queue_free()
	_multimeshes.clear()
	_decoration_entries.clear()


# ================================================================
# GENERATION
# ================================================================

func _generate_all_decorations(map_w: int, map_h: int) -> void:
	for terrain_id in _grounds_manager.get_all_terrain_ids():
		var rate: float = _grounds_manager.get_decoration_rate(terrain_id)
		if rate <= 0.0:
			continue
			
		var target_count: int = _grounds_manager.get_decoration_target_count(terrain_id, map_w, map_h)
		if target_count <= 0:
			continue
			
		var matching_tiles: Array[Vector2i] = _grounds_manager.get_tiles_of_terrain(terrain_id)
		if matching_tiles.is_empty():
			continue
			
		for i in target_count:
			var tile: Vector2i = matching_tiles[randi() % matching_tiles.size()]
			
			var world_pos := Vector2(
				tile.x * tile_size + randf_range(-22, 22),
				tile.y * tile_size + randf_range(-22, 22)
			)
			
			var texture_path: String = _grounds_manager.pick_random_decoration(terrain_id)
			if texture_path.is_empty():
				continue
				
			_decoration_entries.append({
				"position": world_pos,
				"texture_path": texture_path,
				"rotation": randf_range(-0.28, 0.28),
				"scale": randf_range(0.88, 1.18)
			})


func _build_multimeshes() -> void:
	var groups: Dictionary = {}
	
	for deco in _decoration_entries:
		if not groups.has(deco.texture_path):
			groups[deco.texture_path] = []
		groups[deco.texture_path].append(deco)
	
	for tex_path in groups:
		var entries: Array = groups[tex_path]
		var mm_instance := MultiMeshInstance2D.new()
		var multimesh := MultiMesh.new()
		
		multimesh.transform_format = MultiMesh.TRANSFORM_2D
		multimesh.mesh = QuadMesh.new()
		multimesh.instance_count = entries.size()
		multimesh.visible_instance_count = entries.size()
		
		# === MATERIAL SETUP (fixed shadowing warning) ===
		var canvas_material := CanvasItemMaterial.new()
		canvas_material.blend_mode = CanvasItemMaterial.BLEND_MODE_MIX
		canvas_material.light_mode = CanvasItemMaterial.LIGHT_MODE_NORMAL
		
		multimesh.mesh.surface_set_material(0, canvas_material)
		
		# Set texture
		var texture = load(tex_path)
		if texture:
			multimesh.mesh.surface_set_texture(0, texture)
		
		mm_instance.multimesh = multimesh
		add_child(mm_instance)
		
		_multimeshes[tex_path] = mm_instance
		
		# Apply transforms
		for i in entries.size():
			var e: Dictionary = entries[i]
			var t := Transform2D(e.rotation, Vector2(e.scale, e.scale), 0.0, e.position)
			multimesh.set_instance_transform_2d(i, t)


# ================================================================
# PUBLIC API
# ================================================================

func regenerate(grounds_manager: GroundsManager, map_width_tiles: int, map_height_tiles: int) -> void:
	initialize(grounds_manager, map_width_tiles, map_height_tiles)


func get_total_count() -> int:
	return _decoration_entries.size()
