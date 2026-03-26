# visuals/BuildingVisual.gd
# Visual representation for buildings, ateliers, town centers, walls, etc.
# Extends the base EntityVisual

extends EntityVisual
class_name BuildingVisual

# Buildings often have different visual states (normal, damaged, under construction)
var construction_sprite: Sprite2D = null

func setup(data: Dictionary) -> void:
	super.setup(data)
	
	# Buildings are usually larger and centered differently
	if current_sprite:
		current_sprite.centered = true
		current_sprite.z_index = 5   # Below units usually
	
	# Check if it's under construction
	if data.get("is_construction", false):
		_setup_construction_visual()

func _setup_construction_visual() -> void:
	construction_sprite = Sprite2D.new()
	construction_sprite.texture = SpriteManager.load_texture("construction.png")  # placeholder for now
	construction_sprite.modulate = Color(1.0, 1.0, 1.0, 0.7)
	construction_sprite.z_index = 6
	add_child(construction_sprite)

# Override for buildings - they usually don't move
func update_position() -> void:
	if not entity_data.has("x") or not entity_data.has("y"):
		return
	
	var world_x = entity_data.get("x", 0)
	var world_y = entity_data.get("y", 0)
	var decalage_y = entity_data.get("decalageY", 0)
	
	position = Vector2(world_x, world_y + decalage_y)

# Buildings can have damage states or upgrade visuals
func refresh_appearance() -> void:
	super.refresh_appearance()
	
	# Future: change texture based on health percentage or construction progress
	var health_percent = entity_data.get("health_percent", 1.0)
	if current_sprite:
		if health_percent < 0.3:
			current_sprite.modulate = Color(1.0, 0.4, 0.4, 1.0)  # damaged look
		else:
			current_sprite.modulate = Color.WHITE

func apply_combat_effect(effect_type: String) -> void:
	if not current_sprite:
		return
	
	if effect_type == "damage":
		var tween = create_tween()
		tween.tween_property(current_sprite, "modulate", Color(1.0, 0.3, 0.3), 0.1)
		tween.tween_property(current_sprite, "modulate", Color.WHITE, 0.2)
