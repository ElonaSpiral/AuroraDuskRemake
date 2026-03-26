# visuals/SpriteSheetLoader.gd
extends Node
class_name SpriteSheetLoader

const FRAME_W = 32
const FRAME_H = 48

static func create_sprite_frames(texture: Texture2D) -> SpriteFrames:
	if not texture:
		return null
	
	var sf = SpriteFrames.new()
	var dirs = ["down", "up", "left", "right"]
	
	for row in 4:
		var dir = dirs[row]
		
		# Idle (Column 0)
		var idle_name = "idle_" + dir
		sf.add_animation(idle_name)
		sf.add_frame(idle_name, _extract_frame(texture, 0, row))
		
		# Walk (Columns 1 and 2)
		var walk_name = "walk_" + dir
		sf.add_animation(walk_name)
		sf.add_frame(walk_name, _extract_frame(texture, 1, row))
		sf.add_frame(walk_name, _extract_frame(texture, 2, row))
	
	return sf

static func _extract_frame(texture: Texture2D, col: int, row: int) -> AtlasTexture:
	var atlas = AtlasTexture.new()
	atlas.atlas = texture
	atlas.region = Rect2(col * FRAME_W, row * FRAME_H, FRAME_W, FRAME_H)
	return atlas
