# scenes/CharacterCustomizeScene.gd
extends Control

@onready var title_label: Label = $TitleLabel
@onready var category_tabs: TabContainer = $Content/LeftPanel/LeftMargin/VBox/CategoryTabs
@onready var looks_grid: GridContainer = $Content/LeftPanel/LeftMargin/VBox/LooksScroll/LooksGrid
@onready var color_grid: GridContainer = $Content/LeftPanel/LeftMargin/VBox/ColorGrid
@onready var paper_doll: PaperDoll = $Content/PreviewPanel/PreviewMargin/PaperDoll
@onready var back_button: Button = $BottomBar/BackButton
@onready var confirm_button: Button = $BottomBar/ConfirmButton

var _current_gender: String = "male"
var _current_race: String = "human"
var _current_category_index: int = 0

const CATEGORIES := ["Body", "Face", "Shoes", "Clothes", "Belts", "Hair"]


func _ready() -> void:
	ImageLayerManager.build_layers($BgBase, "character_customise")

	title_label.text = "CUSTOMISE CHARACTER"

	_setup_tabs()
	_setup_color_palette()
	_setup_buttons()

	paper_doll.set_character(_current_race, _current_gender)
	_refresh_looks_grid()


# ... (the rest of the functions remain exactly the same as my previous message)

func _setup_tabs() -> void:
	category_tabs.clear_tabs()
	for cat in CATEGORIES:
		category_tabs.add_tab(cat)
	category_tabs.tab_changed.connect(_on_tab_changed)


func _setup_color_palette() -> void:
	var colors := [Color.WHITE, Color(0.6,0.8,1), Color(0.2,0.4,0.8), Color.LIGHT_GRAY, Color.GRAY,
	               Color.YELLOW, Color.BROWN, Color.BLACK, Color.RED, Color.PINK, Color.GREEN, Color.PURPLE]
	for c in colors:
		var btn := ColorRect.new()
		btn.color = c
		btn.custom_minimum_size = Vector2(48, 48)
		btn.gui_input.connect(func(e): if e is InputEventMouseButton and e.pressed: _apply_color(c))
		color_grid.add_child(btn)


func _setup_buttons() -> void:
	UIEffects.apply_hover(back_button)
	UIEffects.apply_hover(confirm_button)
	back_button.pressed.connect(_on_back)
	confirm_button.pressed.connect(_on_confirm)


# Keep the rest of the functions (_on_tab_changed, _refresh_looks_grid, _on_item_selected, _apply_color, _on_back, _on_confirm) exactly as in my previous message.
