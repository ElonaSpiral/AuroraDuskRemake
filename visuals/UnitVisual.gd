# visuals/UnitVisual.gd
extends EntityVisual
class_name UnitVisual

var animated_sprite: AnimatedSprite2D = null
var last_position: Vector2 = Vector2.ZERO

func setup(data: Dictionary) -> void:
	super.setup(data)
	
	if current_sprite:
		current_sprite.queue_free()
	
	animated_sprite = AnimatedSprite2D.new()
	animated_sprite.centered = true
	animated_sprite.speed_scale = 10.0
	add_child(animated_sprite)
	
	var main_sheet = data.get("picture", {}).get("file", "")
	_load_main_sprite_sheet(main_sheet)
	
	last_position = position

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
		print("Loaded sprite sheet: " + filename)
	else:
		print("Failed to create frames for: " + filename)

func update_visual(_delta: float) -> void:
	update_position()
	
	# Simple movement detection
	var moved = position.distance_to(last_position) > 3.0
	last_position = position
	
	if animated_sprite and animated_sprite.sprite_frames:
		var dir = "down"  # default
		
		# Very basic direction (can be improved later)
		if abs(position.x - last_position.x) > abs(position.y - last_position.y):
			if position.x > last_position.x:
				dir = "right"
			else:
				dir = "left"
		else:
			if position.y > last_position.y:
				dir = "down"
			else:
				dir = "up"
		
		var target_anim = "walk_" + dir if moved else "idle_" + dir
		if animated_sprite.animation != target_anim:
			animated_sprite.play(target_anim)

func refresh_appearance() -> void:
	if animated_sprite and animated_sprite.sprite_frames:
		animated_sprite.play("idle_down")
