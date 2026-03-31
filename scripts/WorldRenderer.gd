# WorldRenderer.gd
extends Node2D

@onready var decoration_manager: DecorationManager

var _chunk_sprites: Dictionary = {}     # "x_y" -> Sprite2D
var _loaded_chunks: Dictionary = {}     # "x_y" -> bool

var _camera: Camera2D = null
var _map_width_tiles: int = 0
var _map_height_tiles: int = 0


func _ready() -> void:
	if not has_node("DecorationManager"):
		var dm = DecorationManager.new()
		dm.name = "DecorationManager"
		add_child(dm)
	
	decoration_manager = get_node("DecorationManager") as DecorationManager
	_camera = get_viewport().get_camera_2d()


func load_map(map_manager) -> void:
	clear_all()
	
	# Get map dimensions safely
	var width: int = 0
	var height: int = 0
	
	# Try direct properties first
	if MapManager.has_method("get_current_map_width"):
		width = MapManager.get_current_map_width()
	elif "current_map_width" in MapManager:
		width = MapManager.current_map_width
	
	if MapManager.has_method("get_current_map_height"):
		height = MapManager.get_current_map_height()
	elif "current_map_height" in MapManager:
		height = MapManager.current_map_height
	
	# Fallback: Use last parse result if available
	if width == 0 or height == 0:
		var last_result = MapManager.get("last_parse_result")
		if last_result is Dictionary:
			width = last_result.get("width", 0)
			height = last_result.get("height", 0)
	
	_map_width_tiles = width
	_map_height_tiles = height
	
	if _map_width_tiles == 0 or _map_height_tiles == 0:
		push_error("WorldRenderer: Map dimensions not available!")
		return
	
	# Load terrain grid into GroundsManager
	GroundsManager.set_terrain_grid(map_manager.get_terrain_grid())
	
	# Generate background chunks
	_generate_chunks()
	
	# Build decorations
	decoration_manager.initialize(GroundsManager, _map_width_tiles, _map_height_tiles)
	
	print("WorldRenderer: Map loaded - %d×%d tiles | Decorations initialized" % [_map_width_tiles, _map_height_tiles])

func clear_all() -> void:
	for sprite in _chunk_sprites.values():
		sprite.queue_free()
	_chunk_sprites.clear()
	_loaded_chunks.clear()
	
	if decoration_manager:
		decoration_manager.clear_all()


# ==================== CHUNK MANAGEMENT ====================
func _generate_chunks() -> void:
	var manifest = MapCacheManager.get_manifest()
	if manifest.is_empty():
		push_warning("WorldRenderer: No chunk manifest found.")
		return
	
	for chunk_key in manifest.get("chunks", []):
		var cx = chunk_key.get("x", 0)
		var cy = chunk_key.get("y", 0)
		_load_chunk(cx, cy)


func _load_chunk(chunk_x: int, chunk_y: int) -> void:
	var key = "%d_%d" % [chunk_x, chunk_y]
	if _loaded_chunks.has(key):
		return
	
	var texture_path = MapCacheManager.get_chunk_texture_path(chunk_x, chunk_y)
	if not FileAccess.file_exists(texture_path):
		return
	
	var sprite = Sprite2D.new()
	sprite.texture = load(texture_path)
	sprite.centered = false
	sprite.position = Vector2(chunk_x * 2048, chunk_y * 2048)   # 32*64 = 2048
	sprite.z_index = -10
	sprite.texture_filter = CanvasItem.TEXTURE_FILTER_NEAREST
	
	add_child(sprite)
	_chunk_sprites[key] = sprite
	_loaded_chunks[key] = true


# ==================== CULLING (Optional for now) ====================
func _process(_delta: float) -> void:
	if _camera:
		_update_visible_chunks()


func _update_visible_chunks() -> void:
	pass  # Add aggressive culling later if needed


# ==================== PUBLIC HELPERS ====================
func get_map_width_px() -> float:
	return _map_width_tiles * 64.0

func get_map_height_px() -> float:
	return _map_height_tiles * 64.0
