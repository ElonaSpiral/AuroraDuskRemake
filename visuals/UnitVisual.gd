# visuals/UnitVisual.gd
# Visual representation for living/moving entities (units, artisans, combatants, player, etc.)
# Extends the base EntityVisual

extends EntityVisual
class_name UnitVisual

# Extra nodes specific to units
var shadow_sprite: Sprite2D = null
var mount_sprite: Sprite2D = null   # For mounts like Pegasus, horses, etc.

func setup(data: Dictionary) -> void:
    super.setup(data)  # Call base class setup first

    # Add shadow (simple circle or custom shadow texture)
    shadow_sprite = Sprite2D.new()
    shadow_sprite.texture = SpriteManager.load_texture("shadow.png")  # We'll create this later or use a simple one
    shadow_sprite.modulate = Color(0, 0, 0, 0.4)
    shadow_sprite.position = Vector2(0, 8)   # Slight offset below the unit
    shadow_sprite.z_index = -5
    add_child(shadow_sprite)

    # Check if this unit has a mount (Pegasus, horse, etc.)
    if data.has("mount") and data["mount"] != null:
        _setup_mount(data["mount"])

func _setup_mount(mount_data: Dictionary) -> void:
    mount_sprite = Sprite2D.new()
    var mount_filename = mount_data.get("picture", {}).get("file", "missing.png")
    mount_sprite.texture = SpriteManager.load_texture(mount_filename)
    mount_sprite.z_index = -1   # Behind the rider
    add_child(mount_sprite)

# Override appearance refresh for units (handles orientation, animation state, etc.)
func refresh_appearance() -> void:
    super.refresh_appearance()

    # Handle orientation / facing direction (original game used "orientation")
    var orientation = entity_data.get("orientation", 0)
    if current_sprite:
        # Simple flip for left/right facing (can be expanded to 8 directions later)
        current_sprite.flip_h = orientation > 180

    # TODO: Add AnimatedSprite2D support for walk/idle/attack animations
    # This will be expanded once we integrate with your animation assets

# Update position with smooth movement (optional interpolation)
func update_visual(delta: float) -> void:
    # You can add lerp/smoothing here later for nicer movement
    update_position()

# Special method for combat effects (damage flash, poison tint, etc.)
func apply_combat_effect(effect_type: String) -> void:
    if not current_sprite:
        return

    match effect_type:
        "damage":
            current_sprite.modulate = Color(1, 0.3, 0.3, 1)  # Red flash
            await get_tree().create_timer(0.15).timeout
            current_sprite.modulate = Color.WHITE
        "poison":
            current_sprite.modulate = Color(0.6, 1.0, 0.4, 1)  # Green tint
        "heal":
            current_sprite.modulate = Color(0.4, 1.0, 0.6, 1)
            await get_tree().create_timer(0.3).timeout
            current_sprite.modulate = Color.WHITE

# Called when the unit dies
func play_death_animation() -> void:
    if current_sprite:
        var tween = create_tween()
        tween.tween_property(current_sprite, "modulate:a", 0.0, 0.6)  # Fade out
        tween.tween_callback(queue_free)
