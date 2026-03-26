# visuals/UnitVisual.gd
# Enhanced UnitVisual with sprite sheet + basic paper-doll support

extends EntityVisual
class_name UnitVisual

var animated_sprite: AnimatedSprite2D = null
var paper_doll_layers: Dictionary = {}  # "hair", "armor", "weapon", "mount", etc.

func setup(data: Dictionary) -> void:
	super.setup(data)
	
	# Remove base sprite and use AnimatedSprite2D instead
	if current_sprite:
		current_sprite.queue_free()
		current_sprite = null
	
	animated_sprite = AnimatedSprite2D.new()
	animated_sprite.sprite_frames = SpriteFrames.new()
	animated_sprite.centered = true
	add_child(animated_sprite)
	
	# Load main body / unit sprite sheet
	var main_sheet = data.get("picture", {}).get("file", "")
	_load_main_sprite_sheet(main_sheet)
	
	# Load paper-doll layers (hair, equipment, etc.)
	_load_paper_doll_layers(data)

func _load_main_sprite_sheet(filename: String) -> void:
	if filename.is_empty():
		return
	
	var texture = SpriteManager.load_texture(filename)
	if not texture:
		return
	
	# Create a default animation from the sheet
	# TODO: Improve this with proper frame slicing based on your sheet layout (3 columns, multiple rows)
	animated_sprite.sprite_frames.add_animation("idle")
	animated_sprite.sprite_frames.add_frame("idle", texture)
	animated_sprite.play("idle")

func _load_paper_doll_layers(data: Dictionary) -> void:
	# Example layers - expand based on your actual data structure
	var layers_to_load = ["hair", "armor", "helmet", "weapon", "mount"]
	
	for layer_name in layers_to_load:
		var layer_data = data.get(layer_name)
		if layer_data and layer_data is Dictionary:
			var file = layer_data.get("file", "")
			if not file.is_empty():
				var layer_sprite = Sprite2D.new()
				layer_sprite.texture = SpriteManager.load_texture(file)
				layer_sprite.z_index = 10 + layers_to_load.find(layer_name)  # Higher layers on top
				add_child(layer_sprite)
				paper_doll_layers[layer_name] = layer_sprite

# Update orientation / facing
func refresh_appearance() -> void:
	var orientation = entity_data.get("orientation", 0)
	if animated_sprite:
		animated_sprite.flip_h = orientation > 180

func update_visual(_delta: float) -> void:
	update_position()
