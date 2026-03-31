# DecorationManager.gd
# Stable decoration system using Sprite2D (reliable in Godot 4.3)
# Child of WorldRenderer

extends Node2D
class_name DecorationManager

@export var tile_size: float = 64.0

var _sprites: Array[Sprite2D] = []
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
	
	print("DecorationManager: Completed - %d decorations created" % _sprites.size())


func clear_all() -> void:
	for sprite in _sprites:
		sprite.queue_free()
	_sprites.clear()


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
				
			var sprite = Sprite2D.new()
			sprite.texture = load(texture_path) as Texture2D
			if sprite.texture == null:
				continue
				
			sprite.position = world_pos
			sprite.rotation = randf_range(-0.28, 0.28)
			sprite.scale = Vector2(randf_range(0.88, 1.18), randf_range(0.88, 1.18))
			sprite.z_index = 0                    # Must be >= 0 to stay visible above ground
			sprite.texture_filter = CanvasItem.TEXTURE_FILTER_NEAREST
			sprite.centered = true
			
			add_child(sprite)
			_sprites.append(sprite)


func regenerate(grounds_manager: GroundsManager, map_width_tiles: int, map_height_tiles: int) -> void:
	initialize(grounds_manager, map_width_tiles, map_height_tiles)


func get_total_count() -> int:
	return _sprites.size()
