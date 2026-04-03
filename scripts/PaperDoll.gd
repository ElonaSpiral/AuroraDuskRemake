# scripts/PaperDoll.gd
# Paper Doll system that follows original Aurora Dusk logic
# Layers are stacked in fixed order, gender-specific assets, reads playables.json

extends Node2D
class_name PaperDoll

# Layer order (bottom to top) - matches original game
const LAYER_ORDER := [
	"body",      # base naked body
	"legs",      # pants / lower clothing
	"feet",      # shoes / boots
	"torso",     # shirt / armor torso
	"arms",      # gloves / arm armor
	"head",      # face / head base
	"hair",      # hair / helmet
	"cape",      # cape / back accessory
	"weapon"     # held weapon (optional)
]

# Node references for each layer
var _layers: Dictionary = {}   # layer_name -> Sprite2D

# Current character data
var _gender: String = "male"   # "male" or "female"
var _race: String = "human"

# Path constants
const BASE_PATH := "res://assets/characters/playables/"
const JSON_PATH := "res://data/characters/playables.json"

var _playables_data: Dictionary = {}


func _ready() -> void:
	_load_playables_json()
	_create_layer_sprites()


func _load_playables_json() -> void:
	if not FileAccess.file_exists(JSON_PATH):
		push_error("PaperDoll: playables.json not found at " + JSON_PATH)
		return
	
	var file := FileAccess.open(JSON_PATH, FileAccess.READ)
	var json_text := file.get_as_text()
	file.close()
	
	var json := JSON.new()
	var error := json.parse(json_text)
	if error != OK:
		push_error("PaperDoll: Failed to parse playables.json")
		return
	
	_playables_data = json.data
	print("PaperDoll: Loaded playables.json with %d entries" % _playables_data.size())


func _create_layer_sprites() -> void:
	for layer_name in LAYER_ORDER:
		var sprite := Sprite2D.new()
		sprite.name = "Layer_" + layer_name.capitalize()
		sprite.centered = false
		sprite.texture_filter = CanvasItem.TEXTURE_FILTER_NEAREST
		add_child(sprite)
		_layers[layer_name] = sprite


# ================================================================
# Public API
# ================================================================

func set_character(race: String, gender: String) -> void:
	if gender != "male" and gender != "female":
		gender = "male"
	
	_gender = gender
	_race = race
	
	# Clear all layers
	for sprite in _layers.values():
		sprite.texture = null
	
	# Load base body first
	_load_layer("body", "body_" + _gender + "_01.png")  # default base
	
	print("PaperDoll: Character set to %s %s" % [_race, _gender])


func equip_layer(layer_name: String, filename: String) -> void:
	if not _layers.has(layer_name):
		push_warning("PaperDoll: Unknown layer " + layer_name)
		return
	
	if filename.is_empty():
		_layers[layer_name].texture = null
		return
	
	var full_path := BASE_PATH + _gender + "/" + filename
	
	if ResourceLoader.exists(full_path):
		var tex := load(full_path) as Texture2D
		if tex:
			_layers[layer_name].texture = tex
			return
	
	push_warning("PaperDoll: Failed to load layer %s -> %s" % [layer_name, full_path])


# Convenience methods for common slots
func equip_legs(filename: String) -> void:    equip_layer("legs", filename)
func equip_feet(filename: String) -> void:    equip_layer("feet", filename)
func equip_torso(filename: String) -> void:   equip_layer("torso", filename)
func equip_arms(filename: String) -> void:    equip_layer("arms", filename)
func equip_head(filename: String) -> void:    equip_layer("head", filename)
func equip_hair(filename: String) -> void:    equip_layer("hair", filename)
func equip_cape(filename: String) -> void:    equip_layer("cape", filename)
func equip_weapon(filename: String) -> void:  equip_layer("weapon", filename)


# Sync animation frame across all layers (original game behavior)
func set_animation_frame(frame: int) -> void:
	for sprite in _layers.values():
		if sprite.texture and sprite.texture is AtlasTexture:
			# If using atlas later, adjust region here
			pass
		# For simple Sprite2D with full images, you can use AnimatedSprite2D per layer later if needed
		# For now we assume all layers use the same frame via AnimationPlayer on the root or shader


func clear_all() -> void:
	for sprite in _layers.values():
		sprite.texture = null


# ================================================================
# Internal Helpers
# ================================================================

func _load_layer(layer_name: String, default_filename: String) -> void:
	if not _layers.has(layer_name):
		return
	
	var full_path := BASE_PATH + _gender + "/" + default_filename
	if ResourceLoader.exists(full_path):
		var tex := load(full_path) as Texture2D
		if tex:
			_layers[layer_name].texture = tex
