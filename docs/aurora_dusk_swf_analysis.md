# Aurora Dusk: Steam Age — SWF Reverse Engineering Report

## File Summary

| File | Size | Role |
|---|---|---|
| aurora.swf | 1.3 MB (→ 2.8 MB) | Main UI shell — Flex/Starling renderer, all screens |
| game.swf | 118 KB (→ 275 KB) | **Game logic thread** — pure simulation, no rendering |

Both are ActionScript 3, SWF version 43, zlib-compressed.

---

## Architecture: Two-Thread Design

The game runs on **two separate threads**:

- **aurora.swf** (UI thread) — Starling 2D renderer, all menus, character screens, the game view. Written in French (`aurora.jeuVue.*`, `aurora.ecrans.*`). Sends *messages* to the game thread.
- **game.swf** (Worker thread) — Pure simulation. No rendering at all. Receives player actions, runs the simulation loop, sends back state updates via `ByteArray` message channels.

The `MainJeu` class in game.swf is the entry point. It uses Flash `Worker` + `MessageChannel` to communicate with aurora.swf.

---

## game.swf — The Simulation Engine (aurora.jeuModele.*)

### Core classes

| Class | Description |
|---|---|
| `Terrain` | Map grid. Stores per-cell: speed, buildable, decalageY (elevation offset), effects, collision lists |
| `Persos` | All entity manager. Holds lists: combattants, batiments, centresVille, tresors, montures, donjons |
| `Vagues` | Wave system. Directions: NORD/SUD/OUEST/EST. Tracks nbMonstres, noVague, temps |
| `Ville` | Faction/town state. Tracks epoques (ages), villageois, soldats counts |
| `FinPartie` | Win/lose conditions. Checks: player dead, wave count, etc. |
| `IA` | AI system. Has separate behaviours: gerer_mobile, gerer_combattant, gerer_guerisseur, gerer_serviteur, gerer_artisan, gerer_villageois |
| `Donnees` | Loaded game data (maps to our data/*.json files) |
| `Evenements` | Event/trigger system for adventure mode |

### Entity hierarchy

```
Perso (base)
├── Vivant           — has HP, defense, resistances, equipe (faction)
│   ├── Batiment     — buildings: constructionDuree, reparable, productionAuto
│   │   ├── BatimentCaserne       — spawns soldiers
│   │   ├── BatimentCentreVille   — town center, age advancement
│   │   ├── BatimentOffensif      — attacks automatically
│   │   ├── BatimentRotatif       — rotating turret
│   │   ├── BatimentResurrection  — resurrection tower
│   │   ├── BatimentDonjon        — spawns waves
│   │   └── BatimentMobile        — follows a master unit
│   └── Mobile       — has velocity, destination, orientation, inertia
│       ├── Combattant       — can fight: cible_proche, frapper, riposter
│       │   └── CombattantAvance  — multi-attack, supplementary attacks
│       └── Aventurier       — player-controlled: RPG stats, inventory, mounts
│           ├── Artisan      — can build, craft, repair, harvest
│           │   └── Serviteur   — AI worker unit
│           ├── Joueur       — the player: level, XP, bestiaire
│           ├── Guerisseur   — healer unit
│           └── Soldat       — military unit
├── Projectile       — ballistic, has lanceur, transperce (pierce), effetDeplacement
│   ├── ProjectileRetour    — returning projectile
│   └── ProjectileAutoguide — homing missile
├── Tresor           — loot/treasure
├── RessourceTerrain — resource node on the map
├── RessourceMobile  — moving resource carrier
├── Animal           — animals
├── Maison           — house (holds residents)
├── Intermediaire    — intermediate/relay unit
└── Fondations       — building under construction
```

### Combat system
- `Attaque` — has scoreBase, effetArme, delai, effetTueur, coutAttaque, attaquesMultiples, effetLigne
- `EffetArme` — weapon effect (projectile type, AoE, chain, etc.)
- `Penalite` types: **slowdown** (ralentissement), **blind** (eloui), **poison**
- `Poison` — DoT system, separate stack per unit
- Damage: `toucher`, `toucher2` (melee), `toucher3` (building), `toucher4` (chain), `toucher5`, `toucher_zone` (AoE)

### Resource & economy
- `Ressource` — quantity + quantiteMax + illimite flag
- `RessourceJoueur` — player-owned resource
- Resources stored per-unit in `ressources[]` array
- `Atelier` — workshop: etapes (production steps), quantite, productionAuto

### Age system (epoques)
- `Ville` tracks epoqueActuelle, epoqueDepart, epoqueFin, vitesseChangementEpoque
- Separate lists per epoch: soldatsEpoques, objetsEpoques, batimentsResurrectionEpoques, etc.
- `passer_epoque_suivante()` advances the age

### Player input messages (aurora.messages.joueur.*)
Every player action is a serialized message sent to the worker thread:

| Message | Meaning |
|---|---|
| `MessageJoueurDeplacer` | Move order |
| `MessageJoueurAllerPerso` | Go to unit |
| `MessageJoueurCible` | Set attack target |
| `MessageJoueurCreerPerso` | Spawn unit |
| `MessageJoueurCreerObjet` | Craft item |
| `MessageJoueurUtiliserObjet` | Use item |
| `MessageJoueurUtiliserRessource` | Use resource |
| `MessageJoueurDonnerOrdre` | Give order (SUIVRE/ATTAQUE/DEFENSE/PATROUILLE/ARRET) |
| `MessageJoueurVision` | Update fog of war |
| `MessageJoueurVerifierEmplacement` | Check if construction is valid |
| `MessageJoueurValiderEmplacement` | Confirm construction placement |
| `MessageJoueurRecupererCaracteristiquePrimaire` | Level up primary stat |
| `MessageJoueurDonnees` | General data request |

### Orders (ORDRE_*)
```
ORDRE_SUIVRE    — follow
ORDRE_ATTAQUE   — aggressive
ORDRE_DEFENSE   — defensive
ORDRE_PATROUILLE — patrol
ORDRE_ARRET     — stop
ORDRE_AGRESSIF  — full aggressive
ORDRE_DEFENSIF  — full defensive
```

### Terrain grid fields (per cell)
```
casesVitesse        — movement speed multiplier
casesConstructible  — can build here
casesDecalageY      — elevation/Y offset (isometric)
casesEffet          — terrain effect
casesNiveau         — terrain level
casesDenivele       — slope
casesPersosCollisions — collision lists per cell
```

### Multiplayer
- LAN via `ServerSocket` + `Socket`
- Online via RTMFP peer-to-peer: `rtmfp://rtmfp.aurora-dusk.com:1985`
- `Multijoueur` class handles both local and online
- `ClientOnline` handles RTMFP NetConnection/NetStream
- Actions are buffered in `ByteArray` per player and sent each frame

### AI personality parameters
```
iaAvidite            — greed
iaAgressivite        — aggression  
iaCourage            — courage
iaAssistanceMorts    — assist dying allies
iaAssistanceDefenses — assist defenses
iaBesoinRessources   — resource priority
iaConstruireBatiment — build priority
iaConstruireSoldat   — recruit priority
iaConstruireObjet    — craft priority
iaPersonnalisee      — custom AI (the IA editor system)
iaOrdresEpoques      — orders per age
```

---

## aurora.swf — UI Layer (aurora.jeuVue.* / aurora.ecrans.*)

Renders via **Starling** (GPU-accelerated 2D). Key screens:

| Class | Screen |
|---|---|
| `EcranAccueil` | Title/home screen |
| `EcranPrincipal` | Main menu |
| `ChoixPerso` | Character selection |
| `CreationPerso` | Character creation |
| `PersonnaliserPerso` | Character customization |
| `ChoisirTalentsPerso` | Talent/skill selection |
| `EcranChoixCarte` | Map selection |
| `EcranMissions` | Mission screen (adventure mode) |
| `EcranCampagnes` | Campaign screen |
| `EcranChargementMonde` | World loading |
| `EcranPartie` | In-game (links to EcranTerrain, EcranVille, IU) |
| `EcranVagues` | Wave UI overlay |
| `EcranOptions` | Options screen |
| `EcranMultijoueur` | Multiplayer lobby |
| `EditeurIA` | AI behaviour editor |
| `EcranStatistiques` | Statistics screen |
| `EcranCredits` | Credits |

### In-game HUD bars (aurora.jeuVue.iu.barres.*)
```
BarrePerso          — character bar
BarreConstruction   — building menu
  BarreBatiments      — buildings sub-bar
  BarreAteliers       — workshops sub-bar
  BarreMaisons        — houses sub-bar
  BarreCentresVille   — town centers sub-bar
  BarreFabricationObjet — item crafting
  BarreRessourcesTerrain — terrain resources
BarreEpoques        — age/epoch bar
BarreRaccourcis     — hotkey bar
BarreChoixPerso     — character selection bar
```

### RTS Selection
`aurora.jeuVue::RectangleSelection` — drag-select rectangle (already confirmed: we have this)

---

## Key insights for our Godot recreation

1. **Terrain grid uses per-cell elevation (decalageY)** — each cell can have a Y offset for isometric-style depth. We need to implement this for buildings to appear at the right visual depth.

2. **The simulation runs independently of rendering** — this is why the data files (JS/JSON) drive everything. The engine is deterministic and separate from the view.

3. **Multiplayer is action-message based** — each frame, player actions are serialised to ByteArrays and replayed. This means we should use a similar command-pattern architecture for our game loop.

4. **Terrain `casesDecalageY`** — confirms the terrain PNGs' pixel values map directly to this grid. The `casesVitesse` values match our `grounds.json` speed values exactly.

5. **Entity types map directly to our data files** — Batiment=buildings, Soldat=units from playables.js, Vagues=wave data, etc. Our JSON data files are correct.

6. **The AI editor (`EditeurIA`)** is a full node-based visual AI scripting system. Classes: EditeurIA, FenetreIA, LigneIA, ChoixObjetIA, EditerObjetIA, SauvegardeIA. This is a major feature we haven't started yet.

7. **Win/loss conditions in `FinPartie`**: `nePasVerifierGagne`, `perduSiJoueurMort` flags. Multiple check functions: `verifier_gagne`, `verifier_gagne2`, `verifier_perdu`, `verifier_perdu2`, `gagner_direct`.
