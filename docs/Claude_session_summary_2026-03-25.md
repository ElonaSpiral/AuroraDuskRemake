# Aurora Dusk: Steam Age — Godot 4 Recreation — Session Summary

**Project root:** `aurora_dusk/` — Godot 4.3+, GDScript 2.0, steampunk medieval top-down RTS/RPG.
**Goal:** Faithful framework recreation of the original Adobe AIR game in Godot 4. Asset-agnostic — drop real sprites/maps/sounds into folder structure, systems handle them automatically, zero code changes needed.

---

## Reference Documents (paste at session start)
- `docs/coding_rules.md` — binding conventions, pitfalls, patterns
- `docs/session_summary.md` — this file
- `aurora_dusk_swf_analysis.md` — full SWF reverse engineering report

---

## Autoload Singletons (project.godot)
`SettingsManager, UIEffects, CharacterManager, FPSOverlay, GroundsManager, MapManager, GameState, ImageLayerManager, AgesManager, EntityDataManager, FactionsManager`

**Rules:**
- No `class_name` matching autoload name (Godot 4 conflict)
- No method names shadowing Node built-ins: `get_name`, `set_name`, `get_time`, `get_class`, `get_meta`, `get_path`, `get_parent`, `get_owner`
- Cross-autoload calls use `get_node_or_null("/root/AutoloadName")` stored at `_ready()`, never bare `AutoloadName.method()`

---

## Scene Flow
`LoadingScene → MainMenu → GameModeScene → [CharactersScene / CharacterCreationScene] → MapSelectScene → GameScene → WorldScene`
`DebugScene` → `WorldScene` directly (bypasses character/map selection)

---

## Sprite System — Three Types

**BUILDING_STRIP** — towers, walls, barracks, resurrectTowers
- Sheet: 2-frame horizontal strip. Cell: `width × visualHeight`
- Frame 0 = SE, Frame 1 = SW. Handler: `BuildingSpriteHelper`

**YARD_STRIP** — prebuild/under-construction variants
- Sheet: `(steps×2)` frames wide, 2 rows tall. Cell: `width × visualHeight`
- Row 0 = sprites, Row 1 = shadows. `frame_index = step*2 + orientation`. Handler: `BuildingSpriteHelper`

**UNIT_ANIMATED** — soldiers, monsters, active golems
- Sheet: 3 cols × 4 rows. Cell: `(width×2) × (visualHeight×2)` — data stores collision dims, sprite is 2×
- Col: 0=idle, 1=walkA, 2=walkB. Row: 0=south, 1=north, 2=west, 3=east. Handler: `UnitSpriteHelper`

**Golems (buildingMonster):** YARD_STRIP during construction → UNIT_ANIMATED when active. `EntityDataManager.get_sprite_type(id, is_active)` handles the switch.

**Asset resolution** (`EntityDataManager.get_sprite_path`): searches `assets/characters/<category>/` first, then all subdirs, warns once if missing.

---

## Tile Size
`TILE_PX = 64` — 1 PNG pixel = 1 terrain tile = 64×64 world units.
128×128 map = 8192×8192 world units.
Must be identical in: `WorldRenderer.gd`, `RTSUnit.gd`, `RTSController.gd`.
`MinimapDrawer` uses control-relative sizing — unaffected by TILE_PX.

---

## Data Files — `data/characters/` (auto-loaded by EntityDataManager)

| File | Status | Notes |
|---|---|---|
| `defenseTowers.json` | ✅ loaded | towers, walls, golems, barracks, resurrectTowers across 6 ages |
| `soldiers.json` | ✅ loaded | archer, militiaman, infantryman, cuirassier, pyromage, healer, etc. |
| `monsters.json` | ✅ loaded | enemy wave units |
| `playables.json` | ✅ loaded | player characters |
| `houses.json` | ✅ loaded | — |
| `workshops.json` | ✅ loaded | — |
| `townCenters.json` | ✅ loaded | — |
| `dungeons.json` | ✅ loaded | — |
| `landResources.json` | ✅ loaded | 15 spawnable resources (rate>0) |
| `missiles.json` | ✅ loaded | — |
| `items.json` | ❌ pending | not yet added |

EntityDataManager skips keys starting with `_`.

---

## Stat Naming (matches original game.swf)
- HP = `score` / `score_max` (NOT `hp`, NOT `health` — field in JSON is `health` but stored as `score`)
- `defense` (not `armor`)
- `speed` (tier 1–10, multiplied by `SPEED_UNIT=20.0` for px/sec)
- `resistance` — dict of `{damage_type: multiplier}` where 1.0=normal, 0=immune
- `attack`, `attackTime`, `range`, `damage[]`, `missile`

---

## Ages System (`data/ages.json`, AgesManager autoload)
6 ages: `woodenAge(0) → stoneAge(1) → ironAge(2) → etherAge(3) → goldenAge(4) → steamAge(5)`
All AgesManager methods prefixed `age_` or `get_age_` to avoid Node conflicts.

---

## Map System (MapManager autoload)

### Folder → Mode Rules
| Folder | Factions | Modes |
|---|---|---|
| `1` | 1 | survival only |
| `2`–`8` | N | skirmish + multiplayer |
| `10` | 10 | skirmish + multiplayer |
| `test` | 2 | debug only |

- Adventure mode reads from `missions/` folder — NOT handled here (deferred system)
- Maps discovered by folder scan — `maps.json` is enrichment only (`byFile` keyed by filename)
- `random.png` at `assets/maps/` root → synthetic "Random Map" entry in survival/skirmish/multiplayer
- `MapManager.is_random_map(id)` identifies it; `pick_random_map(faction_count, mode)` resolves it
- Folder `{1,2,6,10}` (accidental shell expansion artifact) is silently skipped
- Name prettification: `_prettify_name()` converts camelCase stems → display names

### Image Loading (two-stage, used everywhere)
```gdscript
# Stage 1: raw PNG via absolute path (new/unimported)
var abs = ProjectSettings.globalize_path(res_path)
if FileAccess.file_exists(abs):
    img.load(abs)  # works without .import sidecar
# Stage 2: Godot importer via res:// (already-imported PNGs)
ResourceLoader.load(res_path) as Texture2D
```
Never use `ResourceLoader.exists()` for PNG existence checks.

---

## Terrain System (GroundsManager + WorldRenderer)

### 10 Terrain Types
| Terrain | Speed | Buildable | Level | Notes |
|---|---|---|---|---|
| `deepWater` | 0.25 | ✗ | -2 | waterEffect, translateY=16 |
| `middleWater` | 0.50 | ✗ | -2 | translateY=8 |
| `swallowWater` | 0.75 | ✗ | -2 | translateY=4 |
| `sand` | 0.80 | ✓ | -1 | — |
| `plain` | 1.00 | ✓ | 0 | — |
| `grass` | 1.00 | ✓ | 0 | — |
| `soil` | 1.00 | ✓ | 0 | — |
| `road` | 1.20 | ✓ | 0.5 | speed bonus |
| `snow` | 0.70 | ✓ | 1 | — |
| `rocks` | 0.40 | ✗ | 2 | — |

### WorldRenderer
- Two-pass drawing: Pass 1 tiles sorted by level (low→high), Pass 2 edge shadows
- Edge shadow: darkened strip on neighbour tile where current tile has higher level → bank/height illusion
- Texture loading: two-stage loader, falls back to flat colour rect
- Per-tile brightness variation: deterministic hash of (x,y) → ±6%
- Water shimmer: time-based sin modulation of blue channel
- Masks (`mask.png`, `mask2.png`) are all-black placeholder assets — blending deferred

### Land Resource Placement (NOT YET IMPLEMENTED)
- Terrain restriction = `GroundsManager.is_buildable()` (no separate filter)
- 15 resources with `rate > 0` spawn at map start
- Rate is a density weight, not per-tile probability

---

## RTSUnit
- `initialize(eid, faction)` — call AFTER `add_child()`. Reads stats from EntityDataManager.
- `score` / `score_max` — HP (original naming)
- `speed_stat` × `SPEED_UNIT` × terrain_multiplier = actual px/sec
- `take_damage(amount, damage_type)` — applies resistance, returns true if dead
- `_try_build_sprite()` — builds AnimatedSprite2D via UnitSpriteHelper, sprite cell 2× then scaled 0.5
- Facing: `_facing_to_tag()` → `s/n/w/e` for animation selection
- Flying units bypass terrain speed (TODO: add `flying` flag check in Layer 2)

---

## RTSController
- `spawn_unit(world_pos, faction, entity_id)` — entity_id="" for placeholder
- `initialize()` called AFTER `add_child()` so `_ready()` fires first
- Box-select: drag threshold 6px, shift-additive, world-space rect
- Move orders: circular spread for multi-unit, 0.55s ping flash
- Screen→world: `get_viewport().get_canvas_transform().affine_inverse() * screen_pos`
  (NOT `camera.get_screen_transform()` — that ignores camera position/zoom)

---

## MinimapDrawer
- `update_viewport(camera, world_size)` — call each frame, draws viewport rect
- `camera_move_requested(fraction: Vector2)` signal — WorldScene multiplies by world_size
- Drag supported (hold and drag on minimap)
- Uses control-relative sizing, independent of TILE_PX

---

## Debug Mode (WorldScene)
- `DEBUG_PLAYER_UNIT = "militiaman"` (faction 0)
- `DEBUG_ENEMY_UNIT = "goblin"` (faction 1)
- Spawns at spawn_points[0] and spawn_points[1]
- If test folder empty → falls back to skirmish maps with warning
- `_spawn_world_pos(idx)` helper handles graceful fallback

---

## SWF Architecture (Original Game — Specification Reference)

### Two-Thread Design
- `aurora.swf` — UI/render thread (Starling, French class names)
- `game.swf` — Pure simulation Worker (no rendering), communicates via ByteArray MessageChannels

### Entity Hierarchy
```
Perso (base)
├── Vivant — HP, defense, resistances, faction
│   ├── Batiment — buildings
│   │   ├── BatimentCaserne, BatimentCentreVille, BatimentOffensif
│   │   ├── BatimentRotatif, BatimentResurrection, BatimentDonjon, BatimentMobile
│   └── Mobile — velocity, destination, orientation, inertia
│       ├── Combattant — cible_proche, frapper, riposter
│       │   └── CombattantAvance — multi-attack
│       └── Aventurier — RPG stats, inventory, mounts
│           ├── Artisan → Serviteur
│           ├── Joueur, Guerisseur, Soldat
├── Projectile — transperce (pierce), retour, autoguide (homing)
├── Tresor, RessourceTerrain, RessourceMobile, Animal, Maison, Fondations
```

### Combat System
- HP = `score` / `score_max` (not "vie")
- Hit types: `toucher`, `toucher2`/`toucher2Prime` (melee/parry), `toucher3` (building), `toucher4` (chain), `toucher5`, `toucher_zone` (AoE), `toucher_chaine`
- Damage formula: `calcul_defense` + `convertir_degats` + `alea_degats` (random component)
- XP: `gagner_xp_attaque`, `gagner_xp_defense` separately
- Status effects: `TYPE_RALENTISSEMENT` (slow), `TYPE_ELOUI` (blind), `TYPE_POISON` (DoT stack)
- Resistances: `resistance{}` dict, multiplier 0=immune, 1=normal, 2=double

### Player Orders (7 types)
`ORDRE_SUIVRE, ORDRE_ATTAQUE, ORDRE_DEFENSE, ORDRE_PATROUILLE, ORDRE_ARRET, ORDRE_AGRESSIF, ORDRE_DEFENSIF`

### Player Input Messages
`MessageJoueurDeplacer, MessageJoueurAllerPerso, MessageJoueurCible, MessageJoueurCreerPerso, MessageJoueurCreerObjet, MessageJoueurUtiliserObjet, MessageJoueurUtiliserRessource, MessageJoueurDonnerOrdre, MessageJoueurVision, MessageJoueurVerifierEmplacement, MessageJoueurValiderEmplacement, MessageJoueurRecupererCaracteristiquePrimaire, MessageJoueurDonnees`

### Terrain Grid Fields (per cell, in original)
`casesVitesse[], casesNiveau[], casesDenivele[], casesDecalageY[], casesEffet[], casesPersosCollisions[]`
No `casesConstructible[]` — buildable computed via method at runtime.

### AI Parameters
`iaAvidite, iaAgressivite, iaCourage, iaAssistanceMorts, iaAssistanceDefenses, iaBesoinRessources, iaConstruireBatiment, iaConstruireSoldat, iaConstruireObjet, iaEquipementAuMax, iaMemoireCible, iaArmesContactPreferees, iaArmesDistancesPreferees, iaOrdresEpoques`

---

## Build Layer Status

| Layer | System | Status |
|---|---|---|
| 1 | Entity foundation — RTSUnit → entity data binding | ✅ Done |
| 2 | Combat — score, resistances, toucher variants, penalites, poison | ⬜ Next |
| 3 | Wave system — VaguesManager, directions, monstresEnAttente | ⬜ |
| 4 | Economy & buildings — resources, construction, productionAuto, repair | ⬜ |
| 5 | Town & Ages — Ville, epoques, unlocks per age | ⬜ |
| 6 | RPG layer — CaracteristiquePrimaire/Secondaire, XP, level-up | ⬜ |
| 7 | Win/Lose — FinPartie, verifier_gagne/perdu | ⬜ |
| 8 | AI — gerer_combattant through gerer_ia_personnalisee | ⬜ |
| 9 | EditeurIA — node-graph AI editor | ⬜ Last |

---

## Pending Fixes (from last session — NOT yet applied)

### Code Errors
- `MinimapDrawer.gd:58` — `br_world` declared but never used → rename to `_br_world`
- `WorldRenderer.gd:244` — integer division warning → cast to float

### Bug Fixes Needed
- **Random map in Survival** — `pick_random_map()` warns "no maps found for 2 factions in mode 'survival'". Survival maps are in folder `1` (factions=1), but random tries to match faction_count=2. Fix: survival random should match factions=1, or pick_random_map should fall back to any map in pool.
- **Random map disappears** after choosing it and exiting — `maps_by_mode` entry for "random" gets cleared on map reload cycle.
- **Debug test map blank** — test folder has a PNG but WorldScene still shows blank. Differs from Survival/Skirmish because debug mode uses `map_picker` population path, which calls `get_maps_for_mode("debug")` — scanner may not be seeing the new PNG due to import timing. Two-stage loader should handle this but path through picker differs from direct `_load_map()` path.
- **Map preview info** — size shown as 0×0 when map PNG exists but `size` not in enrichment. Should read actual PNG dimensions.
- **Map preview padding** — detail panel preview TextureRect needs padding.

### Layout Changes (Skirmish/Survival pre-game screens)
See `Layout_changes.txt` — full redesign of MapSelectScene and mode setup screens.
Deferred to next session.

---

## Key Files Modified This Project
```
scripts/
  WorldRenderer.gd     — terrain texture rendering, level-sorted, edge shadows
  WorldScene.gd        — main world, minimap wiring, debug spawn, map loading
  RTSUnit.gd           — entity binding, stats, sprite, movement, take_damage
  RTSController.gd     — selection, box-select, move orders, spawn_unit
  MinimapDrawer.gd     — click-to-pan, viewport rect, signal
  MapManager.gd        — folder-scan discovery, random map, two-stage loader
  MapSelectScene.gd    — map cards, random handling, two-stage preview loader
  CharacterManager.gd  — defensive JSON filtering fix
  EntityDataManager.gd — sprite helpers, two-stage texture loader
  BuildingSpriteHelper.gd
  UnitSpriteHelper.gd
  AgesManager.gd
  FactionsManager.gd
  GameState.gd
  DebugScene.gd

data/
  maps.json            — byFile enrichment only (folder-scan is source of truth)
  grounds.json         — 10 terrain types with speed/buildable/level/decorations

docs/
  coding_rules.md      — binding conventions (paste at session start)
  session_summary.md   — this file
```
