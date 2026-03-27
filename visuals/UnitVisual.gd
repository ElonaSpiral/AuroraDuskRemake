# visuals/UnitVisual.gd
extends EntityVisual
class_name UnitVisual

var animated_sprite: AnimatedSprite2D = null
var last_position: Vector2 = Vector2.ZERO
var last_facing: String = "down"   # Remember the last direction we were moving

func setup(data: Dictionary) -> void:
	super.setup(data)
	
	if current_sprite:
		current_sprite.queue_free()
	
	animated_sprite = AnimatedSprite2D.new()
	animated_sprite.name = "AnimatedSprite2D"
	animated_sprite.centered = true
	animated_sprite.speed_scale = 8.0
	add_child(animated_sprite)
	
	var main_sheet = data.get("picture", {}).get("file", "")
	_load_main_sprite_sheet(main_sheet)
	
	last_position = position

func _load_main_sprite_sheet(filename: String) -> void:
	if filename.is_empty():
		return
	
	var texture = SpriteManager.load_texture(filename)
	if not texture:
		return
	
	var sprite_frames = SpriteSheetLoader.create_sprite_frames(texture)
	if sprite_frames and animated_sprite:
		animated_sprite.sprite_frames = sprite_frames
		animated_sprite.play("idle_down")
		print("SUCCESS: Loaded sprite sheet: " + filename)

func update_visual(_delta: float) -> void:
	update_position()
	
	if not animated_sprite or not animated_sprite.sprite_frames:
		return
	
	var moved = position.distance_to(last_position) > 5.0
	var movement_vector = position - last_position
	last_position = position
	
	var target_anim = _get_direction_anim(movement_vector, moved)
	
	if animated_sprite.animation != target_anim:
		print("Changing animation to: ", target_anim, " | Moved = ", moved)
		animated_sprite.play(target_anim)

# Determine correct animation based on movement or last facing
func _get_direction_anim(movement: Vector2, is_moving: bool) -> String:
	if is_moving:
		# Update last facing while moving
		if abs(movement.x) > abs(movement.y):
			last_facing = "right" if movement.x > 0 else "left"
		else:
			last_facing = "down" if movement.y > 0 else "up"
		
		return "walk_" + last_facing
	else:
		# When stopped, use last facing direction for idle
		return "idle_" + last_facing
