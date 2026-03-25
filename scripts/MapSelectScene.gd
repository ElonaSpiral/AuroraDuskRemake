extends Control

# ─────────────────────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Map Select Scene
#  Godot 4.x  |  GDScript 2.0
#
#  Shown after the player picks a game mode.
#  Displays all maps valid for that mode as selectable cards.
#  Each card shows the map name, faction count, and a live
#  minimap preview rendered from the terrain PNG.
#
#  Flow: GameModeScene → MapSelectScene → WorldScene
#
#  GameState consumed: selected_mode
#  GameState produced: selected_map_id
# ─────────────────────────────────────────────────────────────

const SCENE_WORLD     := "res://scenes/WorldScene.tscn"
const SCENE_GAME_MODE := "res://scenes/GameModeScene.tscn"
const SCENE_MAIN      := "res://scenes/MainMenu.tscn"

# Parchment palette (matches ElinTheme)
const C_PANEL     := Color(0.906, 0.851, 0.722, 1.0)
const C_BORDER    := Color(0.380, 0.259, 0.125, 1.0)
const C_HEADER    := Color(0.420, 0.243, 0.071, 1.0)
const C_TEXT      := Color(0.228, 0.145, 0.063, 1.0)
const C_MUTED     := Color(0.490, 0.390, 0.240, 1.0)
const C_SELECTED  := Color(0.72,  0.55,  0.22,  1.0)

# ── Node refs ─────────────────────────────────────────────────
@onready var bg_layers    : Control        = $BgLayers
@onready var title_label  : Label          = $TitleLabel
@onready var map_grid     : GridContainer  = $ContentArea/CardScroll/MapGrid
@onready var detail_panel : PanelContainer = $ContentArea/DetailPanel
@onready var detail_name  : Label          = $ContentArea/DetailPanel/DetailVBox/DetailMargin/DetailName
@onready var detail_info  : Label          = $ContentArea/DetailPanel/DetailVBox/DetailInfo
@onready var detail_map   : TextureRect    = $ContentArea/DetailPanel/DetailVBox/DetailMap
@onready var btn_start    : Button         = $ContentArea/DetailPanel/DetailVBox/BtnStart
@onready var btn_back     : Button         = $BtnBack

# ── State ──────────────────────────────────────────────────────
var _map_ids        : Array[String] = []
var _selected_idx   : int           = -1
var _card_buttons   : Array[Button] = []


# ─────────────────────────────────────────────────────────────
func _ready() -> void:
	ImageLayerManager.build_layers(bg_layers, "game_mode")

	_build_title()
	_build_map_cards()
	_update_detail(-1)

	btn_start.pressed.connect(_on_start)
	btn_back.pressed.connect(_on_back)
	UIEffects.apply_hover(btn_start)
	UIEffects.apply_hover(btn_back)

	modulate.a = 0.0
	create_tween().tween_property(self, "modulate:a", 1.0, 0.45)


# ─────────────────────────────────────────────────────────────
#  TITLE
# ─────────────────────────────────────────────────────────────

func _build_title() -> void:
	var mode := GameState.selected_mode
	var mode_label : String = mode.capitalize()
	title_label.text = "SELECT MAP  —  %s" % mode_label.to_upper()


# ─────────────────────────────────────────────────────────────
#  MAP CARDS
# ─────────────────────────────────────────────────────────────

func _build_map_cards() -> void:
	var mode := GameState.selected_mode
	_map_ids.assign(MapManager.get_maps_for_mode(mode))

	# Clear any existing cards
	for child in map_grid.get_children():
		child.queue_free()
	_card_buttons.clear()

	if _map_ids.is_empty():
		var lbl := Label.new()
		lbl.text = "No maps available for this mode."
		lbl.add_theme_color_override("font_color", C_MUTED)
		map_grid.add_child(lbl)
		btn_start.disabled = true
		return

	for i : int in _map_ids.size():
		var mid   : String = _map_ids[i]
		var mdata : Dictionary = MapManager.get_map_data(mid)
		var card  := _make_card(mid, mdata, i)
		map_grid.add_child(card)
		_card_buttons.append(card)

	# Auto-select first map
	_select_card(0)


func _make_card(mid: String, mdata: Dictionary, idx: int) -> Button:
	var card := Button.new()
	card.custom_minimum_size = Vector2(180, 60)
	card.add_theme_font_size_override("font_size", 16)
	card.add_theme_color_override("font_color", C_HEADER)

	if MapManager.is_random_map(mid):
		# Random map entry — special label, no faction badge
		card.text = "🎲  Random Map"
	else:
		card.text = str(mdata.get("name", mid))
		var fcount : int = int(mdata.get("factions", 1))
		if fcount > 1:
			card.text += "\n  ↕ %d factions" % fcount

	card.pressed.connect(func() -> void: _select_card(idx))
	UIEffects.apply_hover(card)
	return card


func _select_card(idx: int) -> void:
	_selected_idx = idx

	# Visual: de-highlight all, highlight selected
	for i : int in _card_buttons.size():
		var btn := _card_buttons[i]
		if i == idx:
			btn.add_theme_color_override("font_color", C_SELECTED)
		else:
			btn.add_theme_color_override("font_color", C_HEADER)

	_update_detail(idx)


# ─────────────────────────────────────────────────────────────
#  DETAIL PANEL
# ─────────────────────────────────────────────────────────────

func _update_detail(idx: int) -> void:
	if idx < 0 or idx >= _map_ids.size():
		detail_name.text = "Select a map"
		detail_info.text = ""
		detail_map.texture = null
		btn_start.disabled = true
		return

	var mid   : String     = _map_ids[idx]
	var mdata : Dictionary = MapManager.get_map_data(mid)

	if MapManager.is_random_map(mid):
		detail_name.text   = "Random Map"
		detail_info.text   = "A map will be selected at random\nfrom the available maps for this mode."
		detail_map.texture = _make_preview_texture(mid)  # shows random.png as preview
		btn_start.disabled = false
		return

	detail_name.text = str(mdata.get("name", mid))

	var fcount : int    = int(mdata.get("factions", 1))
	var size_v : Array  = Array(mdata.get("size", [128, 128]))
	var sx : int        = int(size_v[0]) if size_v.size() > 0 else 128
	var sy : int        = int(size_v[1]) if size_v.size() > 1 else 128
	detail_info.text    = "%d × %d tiles   •   up to %d factions" % [sx, sy, fcount]

	detail_map.texture = _make_preview_texture(mid)
	btn_start.disabled = false


func _make_preview_texture(map_id: String) -> ImageTexture:
	var path := MapManager.get_map_path(map_id)
	if path.is_empty():
		return null

	var img := _load_map_image(path)
	if img == null:
		return null

	# The map PNG uses near-black pixels for spawn markers — replace them
	# with their ground color so the preview looks clean.
	img.convert(Image.FORMAT_RGB8)
	var w := img.get_width()
	var h := img.get_height()
	for y : int in h:
		for x : int in w:
			var c  := img.get_pixel(x, y)
			var ri := int(c.r8); var gi := int(c.g8); var bi := int(c.b8)
			if ri + gi + bi < 60 and (gi > ri + bi or ri > gi + bi):
				if y > 0:
					img.set_pixel(x, y, img.get_pixel(x, y - 1))
				else:
					img.set_pixel(x, y, Color(0.55, 0.65, 0.35))

	return ImageTexture.create_from_image(img)


## Two-stage image loader for map PNGs.
##
## Some PNGs in the project are Godot-imported textures (the engine has
## processed them into an internal format while keeping the .png extension).
## Image.load() with an absolute path reads the raw file and will fail with
## "Not a PNG file" on these.  ResourceLoader.load() reads the imported
## version via res:// and succeeds.  We try both so the same code handles:
##   - Raw PNGs dropped in mid-session (no .import yet) → absolute path works
##   - Godot-imported PNGs already in the project     → res:// path works
func _load_map_image(res_path: String) -> Image:
	# Stage 1: raw file via absolute path (works for new/unimported PNGs)
	var abs_path := ProjectSettings.globalize_path(res_path)
	if FileAccess.file_exists(abs_path):
		var img := Image.new()
		if img.load(abs_path) == OK:
			return img

	# Stage 2: Godot importer via res:// path (works for already-imported PNGs)
	if ResourceLoader.exists(res_path):
		var tex := ResourceLoader.load(res_path) as Texture2D
		if tex != null:
			return tex.get_image()

	return null


# ─────────────────────────────────────────────────────────────
#  ACTIONS
# ─────────────────────────────────────────────────────────────

func _on_start() -> void:
	if _selected_idx < 0 or _selected_idx >= _map_ids.size():
		return

	var chosen_id : String = _map_ids[_selected_idx]

	# Resolve random map to a real map id before entering the world.
	# faction_count of 0 on the random entry means "match any" —
	# pick_random_map() selects from all maps valid for this mode.
	if MapManager.is_random_map(chosen_id):
		var mode := GameState.selected_mode
		# For random, faction count comes from game setup (default 2 for now).
		# TODO: use GameState.selected_faction_count when that system exists.
		var faction_count : int = 2
		chosen_id = MapManager.pick_random_map(faction_count, mode)
		if chosen_id.is_empty():
			push_warning("MapSelectScene: random map pick failed, no maps available")
			return

	GameState.selected_map_id = chosen_id

	var t := create_tween()
	t.tween_property(self, "modulate:a", 0.0, 0.35)
	t.tween_callback(func() -> void:
		get_tree().change_scene_to_file(SCENE_WORLD)
	)


func _on_back() -> void:
	var t := create_tween()
	t.tween_property(self, "modulate:a", 0.0, 0.30)
	t.tween_callback(func() -> void:
		get_tree().change_scene_to_file(SCENE_GAME_MODE)
	)
