# visuals/EntityVisual.gd
# Base class for all visual representations of entities (units, buildings, projectiles, effects)
# This respects the original intent: visuals only react to data from simulation.

extends Node2D
class_name EntityVisual

# Reference to the logical entity data (we only read from it, never modify)
var entity_data: Dictionary = {}

# Current visual state
var current_sprite: Sprite2D = null
var current_anim: AnimatedSprite2D = null

# Called when the visual is first created by SpriteManager
func setup(data: Dictionary) -> void:
	entity_data = data.duplicate()  # Make a safe copy

	# Create base Sprite2D
	current_sprite = Sprite2D.new()
	add_child(current_sprite)

	# Apply initial data
	apply_initial_appearance()
	update_position()

# Virtual method - override in child classes (UnitVisual, BuildingVisual, etc.)
func apply_initial_appearance() -> void:
	if not current_sprite:
		return

	var picture = entity_data.get("picture", {})
	var filename = picture.get("file", "missing.png")

	current_sprite.texture = SpriteManager.load_texture(filename)

	# Basic positioning
	current_sprite.centered = true
	current_sprite.z_index = 10  # Default layer, can be overridden

# Update position + decalageY (elevation offset from original game)
func update_position() -> void:
	if not entity_data.has("x") or not entity_data.has("y"):
		return

	var world_x = entity_data.get("x", 0)
	var world_y = entity_data.get("y", 0)
	var decalage_y = entity_data.get("decalageY", 0)  # Original game's elevation offset

	position = Vector2(world_x, world_y + decalage_y)

# Called by SpriteManager when simulation sends updates (movement, appearance change, damage, etc.)
func apply_update(update_data: Dictionary) -> void:
	for key in update_data.keys():
		entity_data[key] = update_data[key]

	if update_data.has("x") or update_data.has("y"):
		update_position()

	if update_data.has("appearance") or update_data.has("picture"):
		refresh_appearance()

# Virtual method - override in children for special behavior
func refresh_appearance() -> void:
	# Default: just reload texture
	apply_initial_appearance()

# Optional: smooth update per frame (for interpolation later)
func update_visual(delta: float) -> void:
	pass

# Cleanup when entity is removed
func _exit_tree() -> void:
	if current_sprite and is_instance_valid(current_sprite):
		current_sprite.queue_free()
	current_sprite = null
