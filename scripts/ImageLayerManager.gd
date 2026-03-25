extends Node

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Image Layer Manager  (Autoload)
#  Godot 4.x  |  GDScript 2.0
#
#  Reads res://data/ui_images.json at startup and provides
#  build_layers(parent, screen_name) which constructs TextureRect
#  and ColorRect nodes for any screen at runtime.
#
#  This means no image paths are hardcoded in .tscn files.
#  A player can swap any image by editing ui_images.json or
#  replacing the file it points to in assets/images/.
#
#  JSON structure:
#    image_root   — base path prefix for all image files
#    screens      — Dictionary keyed by screen name
#      layers[]   — ordered list, drawn bottom to top:
#        id        : String     node name suffix
#        file      : String|null  image filename (null = color-only layer)
#        stretch   : String     "keep_aspect_covered" | "keep_aspect_centered"
#                               | "stretch" | "keep" | "keep_centered"
#        blend     : String     "normal" | "add"
#        opacity   : float      0.0–1.0
#        color     : [r,g,b,a]  only used when file is null (ColorRect vignette)
#
#  Stretch mode mapping (Godot 4 TextureRect.StretchMode enum):
#    keep_aspect_covered  → 6  STRETCH_KEEP_ASPECT_COVERED
#    keep_aspect_centered → 5  STRETCH_KEEP_ASPECT_CENTERED
#    stretch              → 0  STRETCH_SCALE
#    keep                 → 2  STRETCH_KEEP
#    keep_centered        → 3  STRETCH_KEEP_CENTERED
# ─────────────────────────────────────────────────────────────

const CONFIG_PATH := "res://data/ui_images.json"

# Stretch mode string → Godot enum int
const STRETCH_MODES : Dictionary = {
	"keep_aspect_covered":  6,
	"keep_aspect_centered": 5,
	"stretch":              0,
	"keep":                 2,
	"keep_centered":        3,
}

var _config    : Dictionary = {}
var _image_root : String    = "res://assets/images/"
var _tex_cache : Dictionary = {}   # path → Texture2D


# ─────────────────────────────────────────────────────────────
func _ready() -> void:
	_load_config()


func _load_config() -> void:
	if not FileAccess.file_exists(CONFIG_PATH):
		push_error("ImageLayerManager: config not found — %s" % CONFIG_PATH)
		return
	var f := FileAccess.open(CONFIG_PATH, FileAccess.READ)
	if f == null:
		push_error("ImageLayerManager: cannot open — %s" % CONFIG_PATH)
		return
	var result : Variant = JSON.parse_string(f.get_as_text())
	f.close()
	if not result is Dictionary:
		push_error("ImageLayerManager: JSON parse failed")
		return
	_config     = result as Dictionary
	_image_root = str(_config.get("image_root", "res://assets/images/"))


# ─────────────────────────────────────────────────────────────
#  PUBLIC API
# ─────────────────────────────────────────────────────────────

## Build all image layers for a named screen inside parent_node.
## Removes any previously built layers first (safe to call multiple times).
## parent_node should be a full-viewport Control anchored 0→1 on both axes.
func build_layers(parent_node: Control, screen_name: String) -> void:
	if _config.is_empty():
		push_warning("ImageLayerManager: config not loaded, skipping build for '%s'" % screen_name)
		return

	# Remove previously built layers
	_clear_layers(parent_node)

	var screens := _config.get("screens", {}) as Dictionary
	if not screens.has(screen_name):
		push_warning("ImageLayerManager: unknown screen '%s'" % screen_name)
		return

	var screen_def := screens[screen_name] as Dictionary
	var layers     := Array(screen_def.get("layers", []))

	for layer_def in layers:
		var def := layer_def as Dictionary
		var file : Variant = def.get("file", null)

		if file == null or str(file).is_empty():
			# Color-only layer (e.g. vignette)
			_build_color_layer(parent_node, def)
		else:
			_build_image_layer(parent_node, def)


# ─────────────────────────────────────────────────────────────
#  LAYER BUILDERS
# ─────────────────────────────────────────────────────────────

func _build_image_layer(parent: Control, def: Dictionary) -> void:
	var layer_id  : String  = str(def.get("id", "layer"))
	var file_name : String  = str(def.get("file", ""))
	var stretch   : String  = str(def.get("stretch", "keep_aspect_covered"))
	var blend     : String  = str(def.get("blend",   "normal"))
	var opacity   : float   = float(def.get("opacity", 1.0))

	var path := _image_root + file_name
	var tex  := _load_texture(path)
	if tex == null:
		push_warning("ImageLayerManager: texture not found — %s" % path)
		return

	var rect := TextureRect.new()
	rect.name         = "_img_layer_" + layer_id
	rect.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
	rect.texture      = tex
	rect.stretch_mode = STRETCH_MODES.get(stretch, 6) as TextureRect.StretchMode
	rect.mouse_filter = Control.MOUSE_FILTER_IGNORE
	rect.modulate.a   = clampf(opacity, 0.0, 1.0)

	if blend == "add":
		var mat := CanvasItemMaterial.new()
		mat.blend_mode = CanvasItemMaterial.BLEND_MODE_ADD
		rect.material  = mat

	parent.add_child(rect)


func _build_color_layer(parent: Control, def: Dictionary) -> void:
	var layer_id  : String = str(def.get("id", "layer"))
	var color_arr : Array  = Array(def.get("color", [0.0, 0.0, 0.0, 0.4]))

	var c := ColorRect.new()
	c.name        = "_img_layer_" + layer_id
	c.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
	c.color       = Color(
		float(color_arr[0]) if color_arr.size() > 0 else 0.0,
		float(color_arr[1]) if color_arr.size() > 1 else 0.0,
		float(color_arr[2]) if color_arr.size() > 2 else 0.0,
		float(color_arr[3]) if color_arr.size() > 3 else 0.4
	)
	c.mouse_filter = Control.MOUSE_FILTER_IGNORE

	parent.add_child(c)


# ─────────────────────────────────────────────────────────────
#  HELPERS
# ─────────────────────────────────────────────────────────────

func _clear_layers(parent: Control) -> void:
	for child in parent.get_children():
		if child.name.begins_with("_img_layer_"):
			child.queue_free()


func _load_texture(path: String) -> Texture2D:
	if _tex_cache.has(path):
		return _tex_cache[path] as Texture2D

	# First try ResourceLoader — works for files already imported by the editor
	if ResourceLoader.exists(path):
		var tex := ResourceLoader.load(path, "Texture2D",
				ResourceLoader.CACHE_MODE_REUSE) as Texture2D
		if tex != null:
			_tex_cache[path] = tex
			return tex

	# Fallback: load raw image bytes — works on first run before Godot imports
	# (covers .png, .jpg on disk even without a .import sidecar file)
	var img := Image.new()
	if img.load(path) == OK:
		var tex := ImageTexture.create_from_image(img)
		_tex_cache[path] = tex
		push_warning("ImageLayerManager: loaded as raw image (not yet imported) — %s" % path)
		return tex

	push_warning("ImageLayerManager: texture not found — %s" % path)
	return null


## Reload config from disk (useful if the player edits ui_images.json at runtime).
func reload() -> void:
	_tex_cache.clear()
	_load_config()
