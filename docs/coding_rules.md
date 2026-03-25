# Aurora Dusk: Steam Age — Coding Rules & Conventions
> Godot 4.3+ / GDScript 2.0
> Paste this file at the start of every new session alongside the session summary.
> These rules are binding — do not violate them even if a shortcut seems harmless.

---

## 1. Autoload Singletons

### 1.1 Never declare `class_name` on an autoloaded script
Godot 4 registers autoloads as global singleton nodes. If the script also declares
`class_name` with the same name, the two definitions conflict and the engine errors
on startup: *"Class X hides an autoload singleton."*

```gdscript
# ✗ WRONG — will crash if this script is registered as autoload "AgesManager"
class_name AgesManager
extends Node

# ✓ CORRECT — no class_name on autoloads
extends Node
```

Non-autoloaded helper classes (RefCounted-based utilities) MAY use `class_name`.

### 1.2 Never shadow Node built-in method names
These method names exist on `Node` or `Object` and must never be redeclared as
functions in any script that extends Node:

| Forbidden name | Reason |
|---|---|
| `get_name` | Returns `StringName` — signature mismatch = error |
| `set_name` | Node property setter |
| `get_time` | Exists on Timer, conflicts in some contexts |
| `get_class` | Object built-in |
| `get_meta` / `set_meta` | Object built-in |
| `get_path` | Node built-in |
| `get_parent` | Node built-in |
| `get_owner` | Node built-in |

**Convention:** Prefix autoload API methods with the manager's domain to guarantee
no collision. Examples already established:
- `AgesManager` → `get_age_data()`, `get_age_no()`, `age_is_unlocked()`
- `EntityDataManager` → `get_entity()`, `get_entity_name()`, `get_sprite_type()`

### 1.3 Never call one autoload from another using the bare name
The GDScript type checker sees `AgesManager.method()` as a call on a *script class*
(static context), not on the singleton instance — even though it works at runtime in
simple cases. This causes *"Cannot call non-static function on class"* errors.

```gdscript
# ✗ WRONG — type-checker error on strict builds
if AgesManager.age_is_unlocked(eage, current_age):

# ✓ CORRECT — store a typed Node reference at _ready()
var _ages : Node = null

func _ready() -> void:
    _ages = get_node_or_null("/root/AgesManager")

func get_unlocked(...) -> Array:
    if _ages == null:
        return []
    if _ages.age_is_unlocked(eage, current_age):
        ...
```

---

## 2. Local Variable Names — Forbidden Identifiers

Never use these as local variable names in any script extending Node:

| Forbidden | Reason | Use instead |
|---|---|---|
| `var name` | Shadows `Node.name` property | `var display_name`, `var label`, `var map_label` |
| `var len` | Shadows built-in `len()` function | `var length`, `var seg_len`, `var count` |
| `var size` | Shadows `String.size()` / array method in some contexts | `var tile_size`, `var cell_size` |
| `var type` | Shadows `Object.get_class()` usage patterns | `var entity_type`, `var etype` |

---

## 3. Static Methods and Autoload Access

### 3.1 Never use `static func` in classes that call autoloads
`static func` in a `RefCounted`-based class cannot reliably call autoload singleton
instance methods. Remove `static` and use regular instance methods instead.
`RefCounted.new()` is cheap — there is no scene-tree overhead.

```gdscript
# ✗ WRONG — static func calling autoload
class_name BuildingSpriteHelper
extends RefCounted

static func completed_region(entity_id: String) -> Rect2:
    var w := EntityDataManager.get_width(entity_id)  # type-check error

# ✓ CORRECT — regular instance method
class_name BuildingSpriteHelper
extends RefCounted

func completed_region(entity_id: String) -> Rect2:
    var w := EntityDataManager.get_width(entity_id)  # fine
```

Callers use `BuildingSpriteHelper.new().completed_region(id)`.

---

## 4. JSON Loading — Defensive Filtering

**Every** JSON loader that iterates a top-level dictionary must apply this filter
before processing any entry. Violation causes crashes when JSON files contain
comment/meta keys or malformed entries.

```gdscript
var result : Variant = JSON.parse_string(f.get_as_text())
if not result is Dictionary:
    push_error("JSON parse failed: %s" % path)
    return

for key : String in (result as Dictionary).keys():
    # Rule: skip metadata keys
    if key.begins_with("_"):
        continue
    # Rule: skip non-dict values (malformed entries)
    if not (result as Dictionary)[key] is Dictionary:
        continue

    var def : Dictionary = (result as Dictionary)[key] as Dictionary
    # ... process def
```

**Established metadata keys** (always skipped):
- `_comment` — human-readable note
- `_sprite_system` — documents sprite sheet layout
- `_note` — miscellaneous annotation
- `_meta` — any future metadata block

**Known data files with missing `"id"` fields:**
`skills.json` — the majority of entries have no `"id"` key. The id is the dictionary
key itself. Always synthesise before sorting or appending to any id list:
```gdscript
if not entry.has("id"):
    entry["id"] = k
```
Do not access `entry["id"]` without this guard on any data file.

---

## 5. Scene Files (.tscn)

### 5.1 Each .tscn must have exactly one root node
A `.tscn` file must contain exactly one `[node]` entry with no `parent=` attribute.
All other nodes must have `parent=` set. Having two root nodes causes:
*"Invalid scene: node X does not specify its parent node"*

When writing `.tscn` files programmatically, always grep for duplicate root
declarations before saving.

### 5.2 `layout_mode` must use the integer value
In Godot 4.3 `.tscn` files, `layout_mode` is set as a raw integer:
- `layout_mode = 0` — position
- `layout_mode = 1` — anchors
- `layout_mode = 2` — container (let parent control)
- `layout_mode = 3` — full-rect preset

Do not use named constants in `.tscn` — they are not valid outside GDScript.

---

## 6. Sprite Sheet Conventions

Three sprite types exist in this project. Always identify the type before writing
any rendering code. **Never guess cell size** — measure the PNG first.

### 6.1 BUILDING_STRIP
Static buildings: towers, walls, barracks, resurrectTowers.
- Sheet: 2-frame horizontal strip
- Cell: `width × visualHeight` (from entity data, no multiplier)
- Frame 0 = orientation A (SE/right), Frame 1 = orientation B (SW/left)
- Handler: `BuildingSpriteHelper`

### 6.2 YARD_STRIP
Under-construction (prebuild) variants.
- Sheet: `(steps × 2)` frames wide, 2 rows tall
- Cell: `width × visualHeight`
- Row 0 = construction sprites, Row 1 = shadow sprites
- `frame_index = step * 2 + orientation`
- `steps = 0` → instant build, no yard PNG exists/needed
- Handler: `BuildingSpriteHelper`

### 6.3 UNIT_ANIMATED
All mobile entities: soldiers, monsters, active golems.
- Sheet: 3 cols × 4 rows
- Cell: `(width × 2) × (visualHeight × 2)` — data stores **collision** dims, sprite is 2×
- Cols: 0=idle, 1=walkA, 2=walkB
- Rows: 0=south (down/camera), 1=north (up), 2=west (left), 3=east (right)
- Handler: `UnitSpriteHelper`

### 6.4 Golems (buildingMonster type)
Dual-phase: YARD_STRIP while `is_active=false`, UNIT_ANIMATED when `is_active=true`.
Use `EntityDataManager.get_sprite_type(id, is_active)` to get the correct type.
The Yard PNG is named `<entityId>Yard.png`; the active PNG is `<entityId>.png`.

### 6.5 Asset path resolution
`EntityDataManager.get_sprite_path(id)` handles resolution automatically:
1. Checks `assets/characters/<category>/<filename>` (canonical — category = JSON filename)
2. Scans all subdirs of `assets/characters/` as fallback
3. Warns once with the expected path if not found; returns `""`

Never hardcode asset paths. Never call `load()` on a path without checking `!= ""` first.

---

## 7. Entity Data Conventions

### 7.1 Field semantics
| Field | Meaning |
|---|---|
| `width` | Collision width (world units). Sprite cell = width × 2 for units |
| `height` | Collision height. For units without `visualHeight`, sprite cell height = height × 2 |
| `visualHeight` | Explicit sprite height when taller than collision box (buildings, golems) |
| `steps` | Construction steps for Yard. 0 = instant |
| `speed` | Presence indicates a mobile entity |
| `type` | Entity category string — see 7.2 |
| `age` | Age id when this entity becomes available |

### 7.2 Entity type strings
| Type | Description |
|---|---|
| `defenseTower` | Static ranged tower |
| `barrack` | Unit-producing building |
| `resurrectTower` | Resurrection building |
| `wall` | Passive blocking structure (has NS/WE orientation variants) |
| `buildingMonster` | Golem — building during construction, unit when active |
| `prebuild` | Under-construction Yard variant |
| `monster` | Any mobile non-player entity (soldiers, summoned units, enemies) |
| `playable` | Player character |

### 7.3 `id` field
Some JSON entries do not include `"id"` as a field — the id is the dictionary key.
When code needs an id, synthesise it from the key rather than reading `def["id"]`.

### 7.4 Stat naming (from original AS3 source)
The original game uses specific field names — match them exactly to stay compatible
with imported data files:
- `health` (not `hp`, not `maxHealth`)
- `attack`, `attackTime`, `attackDY`, `range`
- `defense` (not `armor`)
- `resistance` — map of `{ damage_type: multiplier }` where 0=immune, 1=normal, 2=double
- `speed`
- `damage` — array of damage type strings e.g. `["magic", "fire"]`
- `missile` — projectile id string
- `healingScore`, `healingEffect`
- `flying`, `kamikaze` — boolean flags

---

## 8. Signals

Always use the typed emit syntax, never the string form:

```gdscript
# ✗ WRONG
emit_signal("unit_selected", unit)

# ✓ CORRECT
unit_selected.emit(unit)
```

---

## 9. Integer Division

GDScript 2.0 warns (treated as error in strict mode) on implicit integer division
where a float is expected. Always cast explicitly:

```gdscript
# ✗ WRONG
var spread = i / 4 + 1

# ✓ CORRECT
var spread := float(i) / 4.0 + 1.0
```

---

## 10. draw_colored_polygon

In Godot 4.3, `draw_colored_polygon()` takes a single `Color`, not a `PackedColorArray`:

```gdscript
# ✗ WRONG — Godot 4.2 signature
draw_colored_polygon(points, PackedColorArray([color]))

# ✓ CORRECT — Godot 4.3 signature
draw_colored_polygon(points, color)
```

---

## 11. File & Folder Structure

```
aurora_dusk/
├── assets/characters/<category>/   # PNGs; category matches JSON filename
├── data/
│   ├── characters/                 # Entity JSON files (auto-loaded by EntityDataManager)
│   └── *.json                      # Game-wide data (ages, maps, grounds, etc.)
├── docs/                           # This file and other documentation
├── scenes/                         # .tscn files
├── scripts/                        # .gd files
└── theme/                          # .tres theme resources
```

**Naming:**
- Scripts: `PascalCase.gd` matching the scene or class they serve
- Scenes: `PascalCase.tscn`
- Data files: `camelCase.json` matching original game data filenames
- Asset folders: `camelCase` matching the JSON category name

---

## 12. Known Godot 4.3 Pitfalls (hit in this project)

| Symptom | Cause | Fix |
|---|---|---|
| `"Class X hides an autoload singleton"` | `class_name` on autoloaded script | Remove `class_name` |
| `"get_name() overrides method from native class Node"` | Method named `get_name` in Node-extending script | Rename with domain prefix |
| `"Cannot call non-static function on class"` | Calling autoload instance method from another autoload using bare name | Use `get_node_or_null("/root/X")` ref |
| `"Invalid scene: node does not specify parent"` | Two root nodes in `.tscn` | Remove duplicate root definition |
| `"Parameter new_scene is null"` | `change_scene_to_packed()` on a broken/null packed scene | Fix the scene file first |
| `SHADOWED_GLOBAL_IDENTIFIER` warning-as-error | `var len`, `var type` etc. | Rename local variable |
| `SHADOWED_VARIABLE_BASE_CLASS` warning-as-error | `var name` in Node-extending script | Rename to `var display_name` etc. |
| `"Invalid access to property 'name' on base type 'String'"` | JSON loader iterates `dict.values()` which includes a `_comment` string entry; sort lambda calls `.name` on it | Apply Section 4 defensive filter — skip non-Dictionary values before building any list |
| Map/PNG loads blank until Godot reimport | `Image.load("res://...")` and `FileAccess.file_exists("res://...")` require a `.import` sidecar; fail silently for new/unimported PNGs | Always use `ProjectSettings.globalize_path(path)` to get the absolute filesystem path before calling `Image.load()` or `FileAccess.file_exists()` on any raw asset |
| Map preview shows null / blank world on first run | Same as above — `ResourceLoader.exists()` returns false for unimported PNGs | Never use `ResourceLoader.exists()` for PNG existence checks; use `FileAccess.file_exists(ProjectSettings.globalize_path(path))` |
| `camera.get_screen_transform()` gives wrong screen→world coords | Returns only the canvas-layer transform, ignoring camera position/zoom; causes large offset mismatch for click/drag input | Use `get_viewport().get_canvas_transform().affine_inverse() * screen_pos` for all screen→world conversions |
| `"Not a PNG file"` / `ERR_FILE_CORRUPT` on a PNG that exists | File was processed by Godot's importer and stored internally; `Image.load(abs_path)` reads raw bytes which are no longer plain PNG | Use a two-stage loader: try `Image.load(abs_path)` first (raw PNGs); on failure fall back to `ResourceLoader.load(res_path) as Texture2D` then `.get_image()`. Both cases must be handled for a project that mixes imported and unimported assets |

---

## 13. Map Discovery — Folder-Scan Architecture

Maps are discovered by scanning `assets/maps/` subfolders, not by reading a hardcoded list.
`maps.json` is enrichment only (names, spawn points, size overrides). **Never hardcode a map list.**

### Folder → mode rules (the only valid folder names)
| Folder | Factions | Modes |
|--------|----------|-------|
| `1`    | 1        | survival only |
| `2`–`8`| N        | skirmish + multiplayer |
| `10`   | 10       | skirmish + multiplayer |
| `test` | 2        | debug only |

Adventure mode is **not** handled here — it reads from a `missions/` folder (separate system, deferred).
Multiplayer shares the full skirmish map pool (folders 2–10), not just folder 10.

### random.png
`assets/maps/random.png` is a **meta-entry**, not a real playable map.
When present, `_register_random_entry()` adds a synthetic `"random"` map id to survival/skirmish/multiplayer pools.
`MapManager.is_random_map(id)` identifies it.
`MapManager.pick_random_map(faction_count, mode)` resolves it to a real map id at game start.
Resolution is by exact faction count match; falls back to any map in the mode pool if no match found.

Any other folder name (e.g. `{1,2,6,10}` created by accident) is silently skipped via `FOLDER_RULES` dict check.

### maps.json structure
Uses `"byFile"` dict keyed by PNG filename:
```json
{ "byFile": { "passRiver.png": { "name": "Pass River", "spawn_points": [...] } } }
```
Fields: `name` (string), `spawn_points` (array), `size` (array), `mode` (array override).
The old `"maps"` structure with `folder`/`file`/`id`/`factions` fields is obsolete — those are derived from scanning.

### Name prettification
`_prettify_name(raw)` converts camelCase/PascalCase filename stems to display names.
Inserts spaces at: lowercase→UPPER, digit→letter, letter→digit transitions.
Capitalises first letter of each word.  "3islands" → "3 Islands", "aBridgeTooFar" → "A Bridge Too Far".

---

## 14. Tile Size Convention

`TILE_PX = 64` — one PNG pixel on the map = one 64×64 world-unit terrain tile.

This constant must be **identical** in all three files that use it:
- `WorldRenderer.gd` — authoritative definition
- `RTSUnit.gd` — terrain speed lookup
- `RTSController.gd` — move spread calculation

`MinimapDrawer` does **not** use `TILE_PX` — it uses control-relative sizing and is unaffected by tile size changes.

When `TILE_PX` changes, all of these scale proportionally and nothing else needs touching:
- World size (128px map = 8192×8192 world units at 64px/tile)
- Camera clamp bounds (computed from `WorldRenderer.world_size()`)
- Spawn point world positions (use `WorldRenderer.TILE_PX` reference)
- Unit terrain grid lookup
