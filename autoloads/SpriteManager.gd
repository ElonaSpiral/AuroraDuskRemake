# autoloads/SpriteManager.gd
extends Node

# ------------------------------------------------------------------
# SpriteManager - Central visual system for Aurora Dusk Remake
# Respects original: simulation sends data/events, visuals react.
# Uses Godot signals and resources for performance.
# ------------------------------------------------------------------

signal entity_visual_created(entity_id: int, visual_node: Node2D)
signal entity_visual_updated(entity_id: int, visual_node: Node2D)
signal entity_visual_removed(entity_id: int)

# Cache for loaded textures and visual resources
var _texture_cache: Dictionary = {}           # "filename" -> Texture2D
var _visual_resources: Dictionary = {}        # entity_type or id -> VisualResource

# Root node that holds all on-map visuals
var visual_root: Node2D = null

func _ready() -> void:
    # Register as autoload in project.godot or add via code
    process_mode = Node.PROCESS_MODE_ALWAYS

    # ------------------------------------------------------------------
    # Initialization - Call this from WorldScene or GameState after data is loaded
    # ------------------------------------------------------------------
    func initialize(root: Node2D) -> void:
        visual_root = root
        _load_all_visual_resources()
        print("SpriteManager initialized")

        # ------------------------------------------------------------------
        # Load visual definitions from your data/ JSONs (to be expanded)
        # ------------------------------------------------------------------
        func _load_all_visual_resources() -> void:
            # Example: Load from EntityDataManager or directly from JSON
            # For now, placeholder - we'll expand this with your item/entity JSONs
            pass

        # ------------------------------------------------------------------
        # Create a visual for any entity (Perso / Vivant / etc.)
        # ------------------------------------------------------------------
        func create_entity_visual(entity_data: Dictionary) -> Node2D:
            if not visual_root:
                push_error("SpriteManager: visual_root not set!")
                return null

            var entity_id = entity_data.get("id", -1)
            if entity_id == -1:
                return null

            var visual_type = entity_data.get("type", "unit")  # "unit", "building", "projectile", etc.

            var visual_node: Node2D

            match visual_type:
                "unit":
                    visual_node = UnitVisual.new()
                    "building":
                        visual_node = BuildingVisual.new()
                        "projectile":
                            visual_node = ProjectileVisual.new()
                            _:
                                visual_node = EntityVisual.new()

                                visual_node.setup(entity_data)
                                visual_root.add_child(visual_node)

                                _visual_resources[entity_id] = visual_node
                                entity_visual_created.emit(entity_id, visual_node)

                                return visual_node

                            # ------------------------------------------------------------------
                            # Update visual when simulation sends new data (position, appearance, etc.)
                            # ------------------------------------------------------------------
                            func update_entity_visual(entity_id: int, update_data: Dictionary) -> void:
                                var visual = _visual_resources.get(entity_id)
                                if not visual:
                                    return

                                visual.apply_update(update_data)
                                entity_visual_updated.emit(entity_id, visual)
