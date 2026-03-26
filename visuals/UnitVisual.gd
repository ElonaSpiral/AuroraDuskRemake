# visuals/UnitVisual.gd
# Simplified + aggressive animation version

extends EntityVisual
class_name UnitVisual

var animated_sprite: AnimatedSprite2D = null

func setup(data: Dictionary) -> void:
	super.setup(data)
	
	if current_sprite:
		current_sprite.queue_free()
	
	animated_sprite = AnimatedSprite2D.new()
	animated_sprite.centered = true
	animated_sprite.speed_scale = 8.0
	add_child(animated_sprite)
	
	var main_sheet = data.get("picture", {}).get("file", "")
	_load_main_sprite_sheet(main_sheet)

func _load_main_sprite_sheet(filename: String) -> void:
	if filename.is_empty():
		return
	
	var texture = SpriteManager.load_texture(filename)
	if not texture:
		print("Failed to load texture: " + filename)
		return
	
	var sprite_frames = SpriteSheetLoader.create_sprite_frames(texture)
	if sprite_frames and animated_sprite:
		animated_sprite.sprite_frames = sprite_frames
		animated_sprite.play("idle_down")
		print("SUCCESS: Loaded and sliced: " + filename)
	else:
		print("FAILED: Could not create frames for: " + filename)

func update_visual(_delta: float) -> void:
	update_position()
	
	if not animated_sprite or not animated_sprite.sprite_frames:
		return
	
	var moved = position.distance_to(last_position) > 4.0
	last_position = position
	
	var target_anim = "walk_down" if moved else "idle_down"
	
	# Only change animation if needed (prevents flickering)
	if animated_sprite.animation != target_anim:
		print("Changing animation to: ", target_anim, " | Moved = ", moved)
		animated_sprite.play(target_anim)

var last_position: Vector2 = Vector2.ZERO
