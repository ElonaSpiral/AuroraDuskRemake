# visuals/SpriteSheetLoader.gd
# Dynamic sprite sheet slicer - automatically detects size and divides into 3 columns × 4 rows

extends Node
class_name SpriteSheetLoader

# Creates SpriteFrames by dividing the texture into 3 columns and 4 rows
static func create_sprite_frames(texture: Texture2D) -> SpriteFrames:
	if not texture:
		return null
	
	var total_width = texture.get_width()
	var total_height = texture.get_height()
	
	# Calculate frame size dynamically
	var frame_w = total_width / 3.0
	var frame_h = total_height / 4.0
	
	print("SpriteSheetLoader: Detected size ", total_width, "x", total_height, " → frame size ", frame_w, "x", frame_h)
	
	var sf = SpriteFrames.new()
	var directions = ["down", "up", "left", "right"]
	
	for row in 4:
		var dir = directions[row]
		
		# Idle animation (Column 0)
		var idle_name = "idle_" + dir
		sf.add_animation(idle_name)
		sf.add_frame(idle_name, _extract_frame(texture, 0, row, frame_w, frame_h))
		
		# Walk animation (Columns 1 and 2)
		var walk_name = "walk_" + dir
		sf.add_animation(walk_name)
		sf.add_frame(walk_name, _extract_frame(texture, 1, row, frame_w, frame_h))
		sf.add_frame(walk_name, _extract_frame(texture, 2, row, frame_w, frame_h))
	
	return sf

static func _extract_frame(texture: Texture2D, col: int, row: int, frame_w: float, frame_h: float) -> AtlasTexture:
	var atlas = AtlasTexture.new()
	atlas.atlas = texture
	atlas.region = Rect2(
		col * frame_w,
		row * frame_h,
		frame_w,
		frame_h
	)
	return atlas
