# autoloads/SpriteManager.gd
extends Node

# ------------------------------------------------------------------
# SpriteManager - Central visual system for Aurora Dusk Remake
# Respects original: simulation sends data/events, visuals react.
# Uses Godot signals and resources for performance.
# ------------------------------------------------------------------

signal entity_visual_created(entity_id: int, visual_node: Node2D)
signal entity_visual_updated(entity_id: int, visual_node: Node2D)
signal entity_visual_removed(entity_id: int)

# Cache for loaded textures and visual resources
var _texture_cache: Dictionary = {}           # "filename" -> Texture2D
var _visual_resources: Dictionary = {}        # entity_type or id -> VisualResource

# Root node that holds all on-map visuals
var visual_root: Node2D = null

func _ready() -> void:
	# Register as autoload in project.godot or add via code
	process_mode = Node.PROCESS_MODE_ALWAYS

# ------------------------------------------------------------------
# Initialization - Call this from WorldScene or GameState after data is loaded
# ------------------------------------------------------------------
func initialize(root: Node2D) -> void:
	visual_root = root
	_load_all_visual_resources()
	print("SpriteManager initialized")

# ------------------------------------------------------------------
# Load visual definitions from your data/ JSONs (to be expanded)
# ------------------------------------------------------------------
func _load_all_visual_resources() -> void:
	# Example: Load from EntityDataManager or directly from JSON
	# For now, placeholder - we'll expand this with your item/entity JSONs
	pass

# ------------------------------------------------------------------
# Create a visual for any entity (safe version with proper fallbacks)
# ------------------------------------------------------------------
func create_entity_visual(entity_data: Dictionary) -> Node2D:
	if not visual_root:
		push_error("SpriteManager: visual_root not set!")
		return null

	var entity_id = entity_data.get("id", -1)
	if entity_id == -1:
		return null

	var visual_type = entity_data.get("type", "unit").to_lower()

	var visual_node: Node2D = null

	# Use proper visual classes when available, otherwise fallback to base EntityVisual
	match visual_type:
		"unit":
			visual_node = UnitVisual.new()
		"building":
			visual_node = BuildingVisual.new()
		"projectile":
			visual_node = EntityVisual.new()   # Use base for now
		_:
			visual_node = EntityVisual.new()

	# Final safety check
	if visual_node == null:
		visual_node = EntityVisual.new()

	# Now it's safe to call setup()
	visual_node.setup(entity_data)
	visual_root.add_child(visual_node)

	_visual_resources[entity_id] = visual_node
	entity_visual_created.emit(entity_id, visual_node)

	return visual_node

# ------------------------------------------------------------------
# Update visual when simulation sends new data (position, appearance, etc.)
# ------------------------------------------------------------------
func update_entity_visual(entity_id: int, update_data: Dictionary) -> void:
	var visual = _visual_resources.get(entity_id)
	if not visual:
		return

	visual.apply_update(update_data)
	entity_visual_updated.emit(entity_id, visual)

# ------------------------------------------------------------------
# Robust texture loader with smart colored placeholders
# This will be the final fallback behavior in the full game
# ------------------------------------------------------------------
func load_texture(filename: String) -> Texture2D:
	if filename.is_empty():
		filename = "missing.png"
	
	if _texture_cache.has(filename):
		return _texture_cache[filename]
	
	# Try multiple possible paths
	var possible_paths = [
		"res://assets/characters/" + filename,                    # direct filename
		"res://assets/characters/soldiers/" + filename,
		"res://assets/characters/monsters/" + filename,
		"res://assets/characters/playables/" + filename,
		"res://assets/sprites/" + filename                        # fallback folder
	]
	
	for path in possible_paths:
		if ResourceLoader.exists(path):
			var texture: Texture2D = load(path)
			if texture:
				_texture_cache[filename] = texture
				return texture
	
	# === FALLBACK: Colored gradient square based on type ===
	push_warning("SpriteManager: Missing texture '" + filename + "' → using colored placeholder")
	
	var placeholder = GradientTexture2D.new()
	var gradient = Gradient.new()
	
	# Determine color based on filename or entity type
	var lower_name = filename.to_lower()
	
	if lower_name.contains("unit") or lower_name.contains("perso") or lower_name.contains("combat"):
		# Red/Pink for units
		gradient.set_color(0, Color(1.0, 0.4, 0.4))
		gradient.set_color(1, Color(1.0, 0.7, 0.7))
	elif lower_name.contains("building") or lower_name.contains("atelier") or lower_name.contains("town"):
		# Blue/Cyan for buildings
		gradient.set_color(0, Color(0.4, 0.7, 1.0))
		gradient.set_color(1, Color(0.7, 0.9, 1.0))
	elif lower_name.contains("projectile") or lower_name.contains("missile"):
		# Orange for projectiles
		gradient.set_color(0, Color(1.0, 0.6, 0.2))
		gradient.set_color(1, Color(1.0, 0.8, 0.5))
	else:
		# Neutral gray for everything else
		gradient.set_color(0, Color(0.75, 0.75, 0.75))
		gradient.set_color(1, Color(0.55, 0.55, 0.55))
	
	placeholder.gradient = gradient
	placeholder.width = 64
	placeholder.height = 64
	placeholder.fill = GradientTexture2D.FILL_LINEAR
	
	_texture_cache[filename] = placeholder
	return placeholder

func load_atlas_texture(filename: String, region: Rect2) -> AtlasTexture:
	var base_texture = load_texture(filename)
	if not base_texture:
		return null

	var atlas = AtlasTexture.new()
	atlas.atlas = base_texture
	atlas.region = region
	return atlas

# ------------------------------------------------------------------
# Clear cache when changing scenes or for memory management
# ------------------------------------------------------------------
func clear_texture_cache() -> void:
	for tex in _texture_cache.values():
		if tex is Texture2D and tex.has_method("dispose"):
			tex.dispose()
	_texture_cache.clear()
	print("SpriteManager: Texture cache cleared")

# ------------------------------------------------------------------
# Remove a visual entity
# ------------------------------------------------------------------
func remove_entity_visual(entity_id: int) -> void:
	var visual = _visual_resources.get(entity_id)
	if visual and is_instance_valid(visual):
		visual.queue_free()

	_visual_resources.erase(entity_id)
	entity_visual_removed.emit(entity_id)

# ------------------------------------------------------------------
# Mass removal (useful when changing maps or resetting game)
# ------------------------------------------------------------------
func clear_all_visuals() -> void:
	if visual_root:
		for child in visual_root.get_children():
			child.queue_free()

	_visual_resources.clear()
	print("SpriteManager: All visuals cleared")

# ------------------------------------------------------------------
# Get visual node by entity ID (useful for debug or special effects)
# ------------------------------------------------------------------
func get_visual(entity_id: int) -> Node2D:
	return _visual_resources.get(entity_id) as Node2D

# ------------------------------------------------------------------
# Update all visuals (called from WorldScene _process if needed)
# Optional: can be used for smooth interpolation later
# ------------------------------------------------------------------
func update_all_visuals(delta: float) -> void:
	for visual in _visual_resources.values():
		if is_instance_valid(visual) and visual.has_method("update_visual"):
			visual.update_visual(delta)

# ------------------------------------------------------------------
# Debug helper - Print current visual count
# ------------------------------------------------------------------
func debug_print_status() -> void:
	print("SpriteManager Status:")
	print("  Active visuals: ", _visual_resources.size())
	print("  Cached textures: ", _texture_cache.size())

func _process(delta: float) -> void:
	update_all_visuals(delta)
