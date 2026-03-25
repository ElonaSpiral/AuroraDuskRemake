extends Node

# ─────────────────────────────────────────────────────────────
#  UIEffects — Autoload Singleton
#  Provides reusable UI animation helpers for all scenes.
# ─────────────────────────────────────────────────────────────

## Attach a subtle scale hover effect to any Button.
## Pivot is set dynamically inside mouse_entered so it works
## for both .tscn-defined and dynamically-created buttons.
func apply_hover(btn: Button) -> void:
	if not is_instance_valid(btn):
		return

	btn.mouse_entered.connect(func() -> void:
		btn.pivot_offset = btn.size / 2.0
		var t := btn.create_tween()
		t.set_ease(Tween.EASE_OUT)
		t.tween_property(btn, "scale", Vector2(1.045, 1.045), 0.10)
	)
	btn.mouse_exited.connect(func() -> void:
		var t := btn.create_tween()
		t.set_ease(Tween.EASE_OUT)
		t.tween_property(btn, "scale", Vector2(1.0, 1.0), 0.10)
	)


## Apply hover effect to every Button in a given container (recursive).
func apply_hover_all(root: Control) -> void:
	for child in root.get_children():
		if child is Button:
			apply_hover(child)
		if child is Control:
			apply_hover_all(child)
