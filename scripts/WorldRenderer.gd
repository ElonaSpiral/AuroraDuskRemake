# WorldRenderer.gd
extends Node2D

@onready var decoration_manager: DecorationManager

const CHUNK_SIZE_PX := 4096        # 64 tiles × 64 px = Super Chunk

var _chunk_sprites: Dictionary = {}     # "x_y" -> Sprite2D
var _loaded_chunks: Dictionary = {}     # "x_y" -> bool

var _camera: Camera2D = null
var _map_width_tiles: int = 0
var _map_height_tiles: int = 0


func _ready() -> void:
	if not has_node("DecorationManager"):
		var dm := DecorationManager.new()
		dm.name = "DecorationManager"
		add_child(dm)
		print("WorldRenderer: Created DecorationManager child node")
	
	decoration_manager = get_node("DecorationManager") as DecorationManager
	_camera = get_viewport().get_camera_2d()


func load_map(parsed_data: Dictionary) -> void:
	clear_all()
	
	var width: int = parsed_data.get("width", 0)
	var height: int = parsed_data.get("height", 0)
	
	if width == 0 or height == 0:
		push_error("WorldRenderer: Map dimensions not available!")
		return
	
	_map_width_tiles = width
	_map_height_tiles = height
	
	var grid = parsed_data.get("grid", [])
	GroundsManager.set_terrain_grid(grid)
	
	_generate_chunks()
	decoration_manager.initialize(GroundsManager, _map_width_tiles, _map_height_tiles)
	
	print("WorldRenderer: Map loaded - %d×%d tiles | Decorations initialized" % [width, height])


func clear_all() -> void:
	for sprite in _chunk_sprites.values():
		sprite.queue_free()
	_chunk_sprites.clear()
	_loaded_chunks.clear()
	
	if decoration_manager:
		decoration_manager.clear_all()


# ================================================================
func _generate_chunks() -> void:
	var map_id: String = ""
	
	if "current_map_id" in MapManager:
		map_id = MapManager.current_map_id
	elif MapManager.has_method("get_current_map_id"):
		map_id = MapManager.get_current_map_id()
	
	if map_id.is_empty():
		map_id = "unknown"
	
	var manifest := MapCacheManager.get_manifest(map_id)
	
	if manifest.is_empty() or not manifest.has("chunks"):
		push_warning("WorldRenderer: No chunk manifest found for map '" + map_id + "'")
		return
	
	print("WorldRenderer: Loading ", manifest.chunks.size(), " Super Chunks from manifest for ", map_id)
	
	for chunk_data in manifest.get("chunks", []):
		var cx: int = chunk_data.get("x", 0)
		var cy: int = chunk_data.get("y", 0)
		_load_chunk(map_id, cx, cy)


func _load_chunk(map_id: String, chunk_x: int, chunk_y: int) -> void:
	var key := "%d_%d" % [chunk_x, chunk_y]
	if _loaded_chunks.has(key):
		return
	
	var texture_path := MapCacheManager.get_chunk_texture_path(map_id, chunk_x, chunk_y)
	
	if not FileAccess.file_exists(texture_path):
		push_warning("WorldRenderer: Super Chunk texture not found: " + texture_path)
		return
	
	var img := Image.load_from_file(texture_path)
	if img:
		var sprite := Sprite2D.new()
		sprite.texture = ImageTexture.create_from_image(img)
		sprite.centered = false
		sprite.position = Vector2(chunk_x * CHUNK_SIZE_PX, chunk_y * CHUNK_SIZE_PX)
		sprite.z_index = -10
		sprite.texture_filter = CanvasItem.TEXTURE_FILTER_NEAREST
		
		add_child(sprite)
		_chunk_sprites[key] = sprite
		_loaded_chunks[key] = true
	else:
		push_warning("WorldRenderer: Failed to load Super Chunk from " + texture_path)


func _process(_delta: float) -> void:
	pass  # No culling — all Super Chunks stay loaded (buttery smooth)


func get_map_width_px() -> float:
	return _map_width_tiles * 64.0

func get_map_height_px() -> float:
	return _map_height_tiles * 64.0
