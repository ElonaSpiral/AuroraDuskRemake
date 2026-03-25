# Aurora Dusk: Steam Age — Godot 4 Recreation

A community-driven recreation of *Aurora Dusk: Steam Age* using **Godot 4.3+**.

---

## 📁 Project Structure

```
aurora_dusk/
├── project.godot                  # Main project config
├── icon.svg
├── README.md
├── coding_rules.md
│
├── scenes/                        # All .tscn files
│   ├── MainMenu.tscn              # Entry point
│   ├── OptionsScene.tscn          # Tabbed settings
│   ├── LoadGameScene.tscn
│   ├── GameScene.tscn             # Current placeholder
│   ├── WorldScene.tscn
│   ├── LoadingScene.tscn
│   ├── CharacterCreationScene.tscn
│   ├── CharactersScene.tscn
│   ├── GameModeScene.tscn
│   ├── MapSelectScene.tscn
│   └── DebugScene.tscn
│
├── scripts/                       # All GDScript files (~29 files)
│   ├── MainMenu.gd
│   ├── OptionsScene.gd            # Dynamically builds tabs
│   ├── LoadGameScene.gd
│   ├── BackToMenu.gd
│   ├── SettingsManager.gd
│   ├── GameState.gd
│   ├── GameScene.gd
│   ├── WorldScene.gd
│   ├── RTSController.gd / RTSUnit.gd
│   ├── CharacterManager.gd
│   ├── EntityDataManager.gd
│   ├── MapManager.gd / GroundsManager.gd
│   ├── FactionsManager.gd / AgesManager.gd
│   ├── FPSOverlay.gd
│   ├── UIEffects.gd
│   ├── UnitSpriteHelper.gd / BuildingSpriteHelper.gd
│   ├── WorldRenderer.gd / ImageLayerManager.gd / MinimapDrawer.gd
│   ├── DebugScene.gd
│   └── ... (several more helpers)
│
├── theme/
│   ├── ElinTheme.tres             # Active parchment/Elin-style theme (warm paper tones)
│   └── SteampunkTheme.tres        # Old unused reference
│
├── data/                          # Currently mostly empty or minimal
├── docs/                          # Documentation & raw data
│   ├── aurora_dusk_swf_analysis.md
│   ├── aurora_full.md
│   ├── game_full.md
│   ├── raw_original_full.md       # Your repomix of original JS definitions
│   ├── coding_rules.md
│   └── (the two swf zips)
│
└── (no addons/, no resources/ yet)
```

---

## 🚀 Getting Started

1. **Godot 4.3+** required — [godotengine.org](https://godotengine.org)
2. **Import**: Godot → Import → select `aurora_dusk/project.godot`
3. **Play** (F5) → Main Menu opens automatically

---

## 🎨 Elin-Inspired Parchment Theme  (`ElinTheme.tres`)

Inspired by the UI of *Elin* (Noa / Lafrontier), the theme uses warm
paper tones for comfortable long-session readability.

| Role             | Hex       | Godot Color                      |
|------------------|-----------|----------------------------------|
| Parchment Light  | `#EEE2C4` | `Color(0.933, 0.886, 0.769)`    |
| Parchment Mid    | `#E7D9B8` | `Color(0.906, 0.851, 0.722)`    |
| Parchment Dark   | `#D0C090` | `Color(0.816, 0.753, 0.565)`    |
| Ink Brown (text) | `#3A2510` | `Color(0.228, 0.145, 0.063)`    |
| Header Brown     | `#6B3E12` | `Color(0.420, 0.243, 0.071)`    |
| Border / Accent  | `#614220` | `Color(0.380, 0.259, 0.125)`    |
| Tab Inactive     | `#C5B88A` | `Color(0.773, 0.722, 0.580)`    |

Styled controls: `Button`, `Panel`, `PanelContainer`, `TabContainer`,
`ScrollContainer`, `HSlider`, `CheckBox`, `OptionButton`, `PopupMenu`,
`LineEdit`, `ItemList`, `HSeparator`.

---

## ⚙️ Options Scene (`OptionsScene.tscn` + `OptionsScene.gd`)

The options screen uses a **TabContainer** with three tabs.
All settings widgets are built in GDScript (no hand-written `.tscn` rows),
making it easy to add/remove settings by editing the `_build_*_tab()` functions.

### General Tab
| Section       | Settings                                                            |
|---------------|---------------------------------------------------------------------|
| Audio         | Master Volume · Music · SFX · Ambience  *(slider, 0–100, step 5)* |
| Language      | English / 日本語 / 中文  *(OptionButton)*                           |
| User Interface| 9 checkboxes (last-tab, blur, auto-scale, tooltips, exit-confirm…) |

### Graphics Tab
| Section        | Settings                                                              |
|----------------|-----------------------------------------------------------------------|
| Display        | Resolution · Window Mode · V-Sync · Frame Rate Limit *(10–150, ×5)* |
| UI Appearance  | UI Scale · Brightness · Contrast · Scroll Sensitivity                |
| Rendering      | Anti-Aliasing · Shadows · Particles · Ambient Occlusion · Gamma      |

**Functional** settings (applied instantly without needing Apply):
- Resolution → `DisplayServer.window_set_size()`
- Window Mode → Windowed / Borderless / Fullscreen via `DisplayServer`
- Frame Rate → `Engine.max_fps`
- V-Sync → `DisplayServer.window_set_vsync_mode()`

### Input Tab
| Section             | Settings                                            |
|---------------------|-----------------------------------------------------|
| Mouse               | Sensitivity · Invert Y · Double-click · Tooltip     |
| Camera & Scrolling  | Edge scroll · Zoom · Drag-select · Middle-pan       |
| Keybinds            | Read-only placeholder table (full remapping: TBD)   |

### Per-tab Reset
"Reset [Tab] Config" button in the bottom bar resets only the current tab
to its default values.  Back / ✕ navigates to the Main Menu.

---

## 🖼️ Recommended Asset Library Addons

Search in Godot's built-in **AssetLib** tab:

| Search term        | Purpose                                       |
|--------------------|-----------------------------------------------|
| `fantasy ui`       | Styled panel borders matching the look        |
| `pixel font`       | Bitmap/pixel fonts for steampunk feel         |
| `GodotSteam`       | Steam API (achievements, cloud saves)         |
| `Dialogue Manager` | In-game NPC/story dialogue                    |
| `Scatter`          | Environment prop placement for game world     |
| `gear sprite`      | Assign to `GearLeft` / `GearRight` nodes      |

---

## 🗺️ Development Roadmap Estimate

Phase 1 – UI & Foundation (mostly done / 70-80% complete)

Main menu, options, load/save UI, theming, basic navigation
Settings persistence
Character creation / selection UI
Debug tools

Phase 2 – Core Simulation Framework (next 4–8 weeks of part-time work)

Set up autoload singletons (GameWorld, EntityManager, TerrainManager, EconomyManager, CombatManager, AIManager, MessageBus)
Implement Terrain grid + elevation/decalageY system (GroundsManager)
Basic entity system (Perso → Vivant → Mobile/Combattant/Artisan hierarchy)
Data loading pipeline from your unified JSON files (resources, ages, skills, items, etc.)
Save/Load system (entity states + resources)

Phase 3 – Gameplay Loop (2–4 months)

Map generation / loading
Entity spawning & movement (with terrain speed)
Basic production / Atelier system
Resource gathering & economy
Epoch / Age progression (AgesManager + BatimentCentreVille)
Simple AI and wave system

Phase 4 – Combat & Polish (2–3 months)

Full combat system (attacks, projectiles, poison, multi-hit)
RTS-style controls or hybrid input
Visual effects, minimap, world rendering
Sound & music integration

Phase 5 – Content & Expansion

Full item system (handheld/wearable/misc from your JSONs)
Buildings, workshops, resurrection, etc.
Multiplayer foundations (if desired)
Balancing, bestiary, campaign/missions

Overall Timeline Estimate (part-time, solo):

Playable prototype (walk around map, basic production & combat) → 3–5 months
Faithful remake with most original systems → 8–14 months
Polished, content-complete version → 12–18+ months

---

## 🔧 Notes

- `ElinTheme.tres` uses inline `StyleBoxFlat` sub-resources for all widget states.
- The `OptionsScene` `.tscn` is a minimal shell; all tab content is built in GDScript.
  To add a new setting: add one line in the appropriate `_build_*_tab()` function.
- Gear `TextureRect` nodes need actual gear textures assigned in the Editor
  (search "gear" in the Asset Library).
- `CPUParticles2D` is used (not GPU) for maximum platform compatibility.
- Slider label values update **live** as the handle is dragged.
- Resolution + Window Mode + Frame Rate + VSync apply **immediately** on change.
