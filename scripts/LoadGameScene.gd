extends Control

# ─────────────────────────────────────────────
#  Aurora Dusk: Steam Age — Load Game Script
#  Godot 4.x  |  GDScript 2.0
# ─────────────────────────────────────────────

const SAVE_DIR := "user://saves/"

@onready var save_list    : ItemList = $PanelContainer/MarginContainer/VBoxContainer/SaveList
@onready var btn_load     : Button   = $PanelContainer/MarginContainer/VBoxContainer/ButtonRow/BtnLoad
@onready var btn_delete   : Button   = $PanelContainer/MarginContainer/VBoxContainer/ButtonRow/BtnDelete
@onready var btn_back     : Button   = $BackPanel/BtnBack
@onready var preview_label : Label   = $PanelContainer/MarginContainer/VBoxContainer/PreviewLabel

var _selected_save : String = ""


func _ready() -> void:
	_scan_saves()
	btn_load.pressed.connect(_on_load_pressed)
	btn_delete.pressed.connect(_on_delete_pressed)
	btn_back.pressed.connect(_on_back_pressed)
	save_list.item_selected.connect(_on_save_selected)
	btn_load.disabled   = true
	btn_delete.disabled = true

	# Hover scale on all action buttons
	for btn : Button in [btn_load, btn_delete, btn_back]:
		UIEffects.apply_hover(btn)

	# Fade in
	modulate.a = 0.0
	create_tween().tween_property(self, "modulate:a", 1.0, 0.40)


func _scan_saves() -> void:
	save_list.clear()
	DirAccess.make_dir_absolute(SAVE_DIR)
	var dir := DirAccess.open(SAVE_DIR)
	if dir == null:
		return
	dir.list_dir_begin()
	var fname := dir.get_next()
	while fname != "":
		if fname.ends_with(".save"):
			save_list.add_item(fname.get_basename())
		fname = dir.get_next()
	dir.list_dir_end()

	if save_list.item_count == 0:
		save_list.add_item("— No save files found —")
		save_list.set_item_disabled(0, true)


func _on_save_selected(index: int) -> void:
	_selected_save = save_list.get_item_text(index)
	btn_load.disabled   = false
	btn_delete.disabled = false
	preview_label.text  = "Selected: %s" % _selected_save
	_load_preview(_selected_save)


func _load_preview(save_name: String) -> void:
	var path := SAVE_DIR + save_name + ".save"
	if not FileAccess.file_exists(path):
		return
	var f := FileAccess.open(path, FileAccess.READ)
	if f == null:
		return
	var data : Variant = JSON.parse_string(f.get_as_text())
	f.close()
	if data is Dictionary:
		preview_label.text = (
			"Save: %s\nAge: %s\nPlayed: %s" % [
				save_name,
				data.get("age", "Unknown"),
				data.get("playtime", "0h")
			]
		)


func _on_load_pressed() -> void:
	if _selected_save.is_empty():
		return
	# Store the chosen save slot globally, then switch to game
	# (Replace with your actual SaveManager singleton call)
	get_tree().change_scene_to_file("res://scenes/GameScene.tscn")


func _on_delete_pressed() -> void:
	if _selected_save.is_empty():
		return
	var path := SAVE_DIR + _selected_save + ".save"
	DirAccess.remove_absolute(path)
	_selected_save = ""
	btn_load.disabled   = true
	btn_delete.disabled = true
	preview_label.text  = ""
	_scan_saves()


func _on_back_pressed() -> void:
	var tween := create_tween()
	tween.tween_property(self, "modulate:a", 0.0, 0.4)
	tween.tween_callback(func():
		get_tree().change_scene_to_file("res://scenes/MainMenu.tscn")
	)
