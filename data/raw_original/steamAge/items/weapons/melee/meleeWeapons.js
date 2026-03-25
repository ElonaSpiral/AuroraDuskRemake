{
	"bardiche":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"bardiche.atf"},
		"name":{"EN":"bardiche",
				"FR":"bardiche",
				"JP":"バルディッシュ"},
		"description":{"EN":"The bardiche is a powerful two-handed hast melee weapon made from wood and steel.",
					   "FR":"La bardiche est une puissante arme d'hast à deux mains fabriquée avec du bois et de l'acier.",
					   "JP":"強力な両手持ちの長柄武器。金床で木材と鋼鉄から製造できます。"},
		"bonus":{"attack":{"polearms":5.67}},
		"damage":["closeCombat", "slashing"],
		"attackTime":2, "range":24,
		"anim":"slash", "scale":1.25,
		"effect":"axe",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"polearms":1}
		},
		"equip":true,
		"produce":[{
				"workshop":"anvil",
				"no":23,
				"time":15,
				"gainItem":{"bardiche":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":24, "steel":6},
				"costPrimaryCharacteristic":{"stamina":30},
				"xpSecondaryCharacteristic":{"strength":30},
				"xpSkill":{"weaponsForging":30},
				"quantity":-10
		}]
	},
	"bastardSword":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"bastardSword.atf"},
		"name":{"EN":"bastard sword",
				"FR":"épée batarde",
				"JP":"片手半剣"},
		"description":{"EN":"The bastard sword is a miedeval melee and one handed weapon manufactured from cast iron.",
					   "FR":"L'épée batarde est une arme médiévale de contact, à une main et fabriquée avec des lingots de fonte.",
					   "JP":"中世的な片手持ちの刀剣。金床で鋳鉄から製造できます。"},
		"bonus":{"attack":{"edgedWeapons":1}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1,
		"anim":"slash",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"edgedWeapons":0.5}
		},
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"anvil",
				"time":6,
				"gainItem":{"steelSword":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":4},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"strength":12},
				"xpSkill":{"weaponsForging":12},
				"quantity":-4
			},{
				"workshop":"arsenal",
				"time":10.5,
				"gainItem":{"gunblade":1},
				"bonusTimeSkill":"firearmsForging",
				"costRessource":{"steel":7},
				"costPrimaryCharacteristic":{"stamina":21},
				"xpSecondaryCharacteristic":{"strength":21},
				"xpSkill":{"firearmsForging":21},
				"quantity":-7
			}]
	},
	"battleAxe":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"battleAxe.atf"},
		"name":{"EN":"battle axe",
				"FR":"hache de bataille",
				"JP":"バトルアックス"},
		"description":{"EN":"The battle axe is a medieval one-handed melee weapon made from cast iron and wood.",
					   "FR":"La hache de bataille est une arme de contact médiévale à une main fabriquée en fonte et en bois.",
					   "JP":"中世的な片手持ちの斧。伐採補助道具としても利用可能です。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"axes":0.875},
				 "woodcutting":{"axes":0.125}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1.25,
		"anim":"slash",
		"effect":"axe",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"axes":0.5}
		},
		"xpSkill":{
			"woodcutting":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"axes":0.25}
				}
		},
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"anvil",
				"time":3,
				"gainItem":{"warAxe":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"castIron":1},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"strength":6},
				"xpSkill":{"weaponsForging":6},
				"quantity":-2
			},{
				"workshop":"anvil",
				"time":10.5,
				"gainItem":{"twoHandedAxe":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"castIron":7},
				"costPrimaryCharacteristic":{"stamina":21},
				"xpSecondaryCharacteristic":{"strength":21},
				"xpSkill":{"weaponsForging":21},
				"quantity":-7
			},{
				"workshop":"anvil",
				"time":7.5,
				"gainItem":{"steelAxe":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":5},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"weaponsForging":15},
				"quantity":-5
			}]
	},
	"broadSword":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"broadSword.atf"},
		"name":{"EN":"broad sword",
				"FR":"espadon",
				"JP":"ブロードソード"},
		"description":{"EN":"The broad sword is a medieval two-handed melee weapon made from cast iron.",
					   "FR":"L'espadon est une arme de contact médiévale à deux mains fabriquée avec des lingots de fonte.",
					   "JP":"中世的な両手持ちの刀剣。金床で鋳鉄から製造できます。"},
		"bonus":{"attack":{"edgedWeapons":2}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1,
		"anim":"slash", "scale":1.25,
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"edgedWeapons":1}
		},
		"equip":true,
		"upgrade":[{
				"workshop":"anvil",
				"time":13.5,
				"gainItem":{"busterSword":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":9},
				"costPrimaryCharacteristic":{"stamina":27},
				"xpSecondaryCharacteristic":{"strength":27},
				"xpSkill":{"weaponsForging":27},
				"quantity":-9
			}]
	},
	"busterSword":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"busterSword.atf"},
		"name":{"EN":"buster sword",
				"FR":"épée broyeuse",
				"JP":"バスターソード"},
		"description":{"EN":"The buster sword is a two-handed melee weapon made from steel.",
					   "FR":"L'épée broyeuse est une arme de contact à deux mains fabriquée en acier.",
					   "JP":"両手持ちの刀剣。金床で鋼鉄から製造できます。"},
		"bonus":{"attack":{"edgedWeapons":2.28}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1,
		"anim":"slash", "scale":1.5,
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":1},
			"xpSkill":{"edgedWeapons":1}
		},
		"equip":true,
		"produce":[{
				"workshop":"anvil",
				"no":21.5,
				"time":15,
				"gainItem":{"busterSword":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":10},
				"costPrimaryCharacteristic":{"stamina":30},
				"xpSecondaryCharacteristic":{"strength":30},
				"xpSkill":{"weaponsForging":30},
				"quantity":-10
		}]
	},
	"club":{
		"type":"item",
		"age":"woodenAge",
		"category":"weapon",
		"picture":{"file":"club.atf"},
		"name":{"EN":"club",
				"FR":"gourdin",
				"JP":"クラブ"},
		"description":{"EN":"The club is a primitive one-handed melee weapon made from wood.",
					   "FR":"Le gourdin est une arme de contact primitive à une main fabriquée en bois.",
					   "JP":"原始的な片手持ちの鈍器。野営地で木材から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":0.55}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"equip":true,
		"oneHand":true,
		"enhance":[{
			"skill":"weaponsForging",
			"workshop":"huntingCamp",
			"time":2.5,
			"gainItem":{"club":1},
			"bonusTimeSkill":"woodcutting",
			"costRessource":{"wood":5},
			"costPrimaryCharacteristic":{"stamina":5},
			"xpSecondaryCharacteristic":{"strength":5},
			"xpSkill":{"woodcutting":5},
			"quantity":-5
		}],
		"upgrade":[{
				"workshop":"quarrierWorkshop",
				"time":2,
				"gainItem":{"stoneAxe":1},
				"bonusTimeSkill":"stonecutting",
				"costRessource":{"freeStone":2, "wood":3},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"strength":4},
				"xpSkill":{"stonecutting":4},
				"quantity":-2
			},{
				"workshop":"quarrierWorkshop",
				"time":2.5,
				"gainItem":{"stoneHammer":1},
				"bonusTimeSkill":"stonecutting",
				"costRessource":{"freeStone":3, "wood":3},
				"costPrimaryCharacteristic":{"stamina":5},
				"xpSecondaryCharacteristic":{"strength":5},
				"xpSkill":{"stonecutting":5},
				"quantity":-2
			},{
				"workshop":"ironworksWorkshop",
				"time":0.5,
				"gainItem":{"rollingPin":1},
				"bonusTimeSkill":"woodcutting",
				"costRessource":{"wood":1},
				"costPrimaryCharacteristic":{"stamina":1},
				"xpSecondaryCharacteristic":{"strength":1},
				"xpSkill":{"woodcutting":1},
				"quantity":-1
			},{
				"workshop":"ironworksWorkshop",
				"time":4,
				"gainItem":{"pickaxe":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":1, "castIron":2},
				"costPrimaryCharacteristic":{"stamina":7},
				"xpSecondaryCharacteristic":{"strength":7},
				"xpSkill":{"weaponsForging":7},
				"quantity":-2
			},{
				"workshop":"ironworksWorkshop",
				"time":4,
				"gainItem":{"chopper":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"castIron":3},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"strength":6},
				"xpSkill":{"weaponsForging":6},
				"quantity":-2
			},{
				"workshop":"anvil",
				"time":3.5,
				"gainItem":{"battleAxe":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":7, "castIron":1},
				"costPrimaryCharacteristic":{"stamina":7},
				"xpSecondaryCharacteristic":{"strength":7},
				"xpSkill":{"weaponsForging":7},
				"quantity":-2
			},{
				"workshop":"anvil",
				"time":3.5,
				"gainItem":{"mace":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":1, "castIron":2},
				"costPrimaryCharacteristic":{"stamina":7},
				"xpSecondaryCharacteristic":{"strength":7},
				"xpSkill":{"weaponsForging":7},
				"quantity":-2
			},{
				"workshop":"shamanicAltar",
				"time":3,
				"gainItem":{"lightningScepter":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"castIron":2},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"intelligence":6},
				"xpSkill":{"enchantment":6},
				"quantity":-6
			},{
				"workshop":"shamanicAltar",
				"time":4,
				"gainItem":{"iceScepter":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"crystals":2},
				"costPrimaryCharacteristic":{"stamina":8},
				"xpSecondaryCharacteristic":{"intelligence":8},
				"xpSkill":{"enchantment":8},
				"quantity":-8
			},{
				"workshop":"anvil",
				"time":5,
				"gainItem":{"warAxe":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":7, "castIron":2},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"strength":10},
				"xpSkill":{"weaponsForging":10},
				"quantity":-3
			},{
				"workshop":"anvil",
				"time":5,
				"gainItem":{"warHammer":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":1, "castIron":3},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"strength":10},
				"xpSkill":{"weaponsForging":10},
				"quantity":-3
			},{
				"workshop":"anvil",
				"time":11,
				"gainItem":{"twoHandedHammer":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":7, "castIron":6},
				"costPrimaryCharacteristic":{"stamina":22},
				"xpSecondaryCharacteristic":{"strength":22},
				"xpSkill":{"weaponsForging":22},
				"quantity":-7
			},{
				"workshop":"pyrotechnicAltar",
				"time":3,
				"gainItem":{"fireScepter":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":1, "parchment":6},
				"costPrimaryCharacteristic":{"stamina":7},
				"xpSecondaryCharacteristic":{"intelligence":7},
				"xpSkill":{"enchantment":7},
				"quantity":-3
			},{
				"workshop":"redemptiveAltar",
				"time":2.5,
				"gainItem":{"lightScepter":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"parchment":5},
				"costPrimaryCharacteristic":{"stamina":5},
				"xpSecondaryCharacteristic":{"intelligence":5},
				"xpSkill":{"enchantment":5},
				"quantity":-2
			},{
				"workshop":"anvil",
				"time":6.5,
				"gainItem":{"flail":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":1, "castIron":4},
				"costPrimaryCharacteristic":{"stamina":13},
				"xpSecondaryCharacteristic":{"strength":13},
				"xpSkill":{"weaponsForging":13},
				"quantity":-4
			},{
				"workshop":"anvil",
				"time":14,
				"gainItem":{"twoHandedAxe":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":7, "castIron":8},
				"costPrimaryCharacteristic":{"stamina":28},
				"xpSecondaryCharacteristic":{"strength":28},
				"xpSkill":{"weaponsForging":28},
				"quantity":-9
			},{
				"workshop":"anvil",
				"time":8,
				"gainItem":{"twoMorningStarsFlail":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":1, "steel":3},
				"costPrimaryCharacteristic":{"stamina":16},
				"xpSecondaryCharacteristic":{"strength":16},
				"xpSkill":{"weaponsForging":16},
				"quantity":-5
			},{
				"workshop":"anvil",
				"time":3.5,
				"gainItem":{"anvilHammer":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":7},
				"costPrimaryCharacteristic":{"stamina":7},
				"xpSecondaryCharacteristic":{"strength":7},
				"xpSkill":{"weaponsForging":7},
				"quantity":-100
			},{
				"workshop":"anvil",
				"time":9,
				"gainItem":{"steelAxe":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":1, "steel":6},
				"costPrimaryCharacteristic":{"stamina":18},
				"xpSecondaryCharacteristic":{"strength":18},
				"xpSkill":{"weaponsForging":18},
				"quantity":-6
			},{
				"workshop":"shamanicAltar",
				"time":11,
				"gainItem":{"thunderHammer":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":4, "castIron":5},
				"costPrimaryCharacteristic":{"stamina":22},
				"xpSecondaryCharacteristic":{"strength":22},
				"xpSkill":{"weaponsForging":22},
				"quantity":-11
			},{
				"workshop":"pyrotechnicAltar",
				"time":5.5,
				"gainItem":{"multipleFireScepter":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":3, "paper":4},
				"costPrimaryCharacteristic":{"stamina":11},
				"xpSecondaryCharacteristic":{"intelligence":11},
				"xpSkill":{"enchantment":11},
				"quantity":-5
		}]
	},
	"cutlass":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"cutlass.atf"},
		"name":{"EN":"cutlass",
				"FR":"poignard",
				"JP":"カットラス"},
		"description":{"EN":"The cutlass is a medieval one-handed melee weapon made from cast iron.",
					   "FR":"Le poignard est une arme de contact médiévale à une main fabriquée avec des lingots de fonte.",
					   "JP":"中世的な片手持ちの小型武器。金床で鋳鉄から製造できます。"},
		"bonus":{"attack":{"lightWeapons":0.475}},
		"damage":["closeCombat", "slashing"],
		"attackTime":0.75,
		"anim":"slash",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":0.5},
			"xpSkill":{"lightWeapons":0.5}
		},
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"anvil",
				"time":1.5,
				"gainItem":{"saber":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"castIron":1},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"strength":3},
				"xpSkill":{"weaponsForging":1},
				"quantity":-1
			},{
				"workshop":"anvil",
				"time":3,
				"gainItem":{"katarDagger":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":2},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"strength":6},
				"xpSkill":{"weaponsForging":6},
				"quantity":-2
		}]
	},
	"dagger":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"dagger.atf"},
		"name":{"EN":"dagger",
				"FR":"dague",
				"JP":"ダガー"},
		"description":{"EN":"The dagger is a medieval one-handed melee weapon made from cast iron.",
					   "FR":"La dague est une arme de contact médiévale à une main fabriquée avec des lingots de fonte.",
					   "JP":"中世的な片手持ちの小型武器。金床で鋳鉄から製造できます。"},
		"bonus":{"attack":{"lightWeapons":0.325}},
		"damage":["closeCombat", "slashing"],
		"attackTime":0.75,
		"anim":"slash",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":0.5},
			"xpSkill":{"lightWeapons":0.5}
		},
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"anvil",
				"time":1.5,
				"gainItem":{"cutlass":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"castIron":1},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"strength":3},
				"xpSkill":{"weaponsForging":3},
				"quantity":-1
			},{
				"workshop":"anvil",
				"time":3,
				"gainItem":{"saber":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"castIron":2},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"strength":6},
				"xpSkill":{"weaponsForging":6},
				"quantity":-2
			},{
				"workshop":"anvil",
				"time":4.5,
				"gainItem":{"katarDagger":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":3},
				"costPrimaryCharacteristic":{"stamina":9},
				"xpSecondaryCharacteristic":{"strength":9},
				"xpSkill":{"weaponsForging":9},
				"quantity":-3
		}]
	},
	"flail":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"flail.atf"},
		"name":{"EN":"flail",
				"FR":"fléau d'armes",
				"JP":"フレイル"},
		"description":{"EN":"The flail is a medieval one-handed melee weapon made from wood and cast iron.",
					   "FR":"Le fléau d'armes est une arme de contact médiévale à une main fabriquée avec du bois et de la fonte.",
					   "JP":"中世的な片手持ちの鈍器。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":1.75}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"anvil",
				"time":7.5,
				"gainItem":{"twoMorningStarsFlail":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":3},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"weaponsForging":15},
				"quantity":-5
		}]
	},
	"golemShatterer":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"golemShatterer.atf"},
		"name":{"EN":"golem shatterer",
				"FR":"fracasseur de golems",
				"JP":"ゴーレム殺し"},
		"description":{"EN":"A golem shatterer is a two-handed mace particularly powerful against golems. (damages x4)",
					   "FR":"Le fracasseur de golems est une masse à deux mains particulièrement efficace contre les golems. (dégâts x4)",
					   "JP":"ゴーレムに対し絶大な威力（4倍）を誇る、両手持ちの鈍器。石切や採鉱補助道具としても利用可能です。石切場で切石から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":4.1},
				 "stonecutting":{"bluntWeapons":0.25},
				 "mining":{"bluntWeapons":0.25}},
		"damage":["closeCombat", "crushing", "golemKiller"],
		"attackTime":1.5,
		"anim":"slash", "scale":1.5,
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"bluntWeapons":1}
		},
		"xpSkill":{
			"stonecutting":{
				"xpSecondaryCharacteristic":{"strength":0.25},
				"xpSkill":{"bluntWeapons":0.5}
				},
			"mining":{
				"xpSecondaryCharacteristic":{"strength":0.25},
				"xpSkill":{"bluntWeapons":0.5}
				}
		},
		"equip":true,
		"produce":[{
				"workshop":"quarrierWorkshop",
				"no":7,
				"time":24,
				"gainItem":{"golemShatterer":1},
				"bonusTimeSkill":"stonecutting",
				"costRessource":{"freeStone":24},
				"costPrimaryCharacteristic":{"stamina":48},
				"xpSecondaryCharacteristic":{"strength":48},
				"xpSkill":{"weaponsForging":48},
				"quantity":-24
		}],
		"enhance":[{
			"skill":"weaponsForging",
			"workshop":"quarrierWorkshop",
			"time":24,
			"gainItem":{"golemShatterer":1},
			"bonusTimeSkill":"stonecutting",
			"costRessource":{"freeStone":24},
			"costPrimaryCharacteristic":{"stamina":48},
			"xpSecondaryCharacteristic":{"strength":48},
			"xpSkill":{"weaponsForging":48},
			"quantity":-24
			}]
	},
	"halberd":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"halberd.atf"},
		"name":{"EN":"halberd",
				"FR":"hallebarde",
				"JP":"ハルバード"},
		"description":{"EN":"The halberd is a miedeval melee and two handed weapon manufactured from wood and cast iron.",
					   "FR":"L'hallebarde est une arme médiévale de contact, à deux mains et fabriquée avec du bois et de la fonte.",
					   "JP":"中世的な両手持ちの長柄武器。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"polearms":5}},
		"damage":["closeCombat", "slashing"],
		"attackTime":2, "range":24,
		"anim":"slash", "scale":1.25,
		"effect":"axe",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"polearms":1}
		},
		"equip":true,
		"upgrade":[{
				"workshop":"anvil",
				"time":7.5,
				"gainItem":{"bardiche":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":5},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"weaponsForging":15},
				"quantity":-5
			}]
	},
	"katarDagger":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"katarDagger.atf"},
		"name":{"EN":"katar dagger",
				"FR":"poignard katar",
				"JP":"ジャマダハル"},
		"description":{"EN":"The katar dagger is a one-handed melee weapon made from steel.",
					   "FR":"Le poignard katar est une arme de contact à une main fabriquée en acier.",
					   "JP":"片手持ちの小型武器。金床で鋼鉄から製造できます。"},
		"bonus":{"attack":{"lightWeapons":0.708}},
		"damage":["closeCombat", "piercing"],
		"attackTime":0.75,
		"anim":"thrust",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":0.5},
			"xpSkill":{"lightWeapons":0.5}
		},
		"equip":true,
		"oneHand":true,
		"produce":[{
				"workshop":"anvil",
				"no":19,
				"time":6,
				"gainItem":{"katarDagger":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":4},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"strength":12},
				"xpSkill":{"weaponsForging":12},
				"quantity":-4
		}]
	},
	"knife":{
		"type":"item",
		"age":"stoneAge",
		"category":"weapon",
		"picture":{"file":"knife.atf"},
		"name":{"EN":"dagger",
				"FR":"coutelas",
				"JP":"石のナイフ"},
		"description":{"EN":"The knife is a rudimentary one-handed melee weapon made from stone.",
					   "FR":"Le coutelas est une arme de contact rudimentaire à une main fabriquée avec de la pierre.",
					   "JP":"原始的な片手持ちの小型武器。狩猟や精肉補助道具としても利用可能です。野営地で石材から製造できます。"},
		"bonus":{"attack":{"lightWeapons":0.266},
				 "hunting":{"tools":0.5},
				 "butchery":{"tools":0.5}},
		"damage":["closeCombat", "piercing"],
		"attackTime":0.75,
		"anim":"slash",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":0.5},
			"xpSkill":{"lightWeapons":0.5}
		},
		"xpSkill":{
			"hunting":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
			},
			"butchery":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
			}
		},
		"equip":true,
		"oneHand":true,
		"enhance":[{
			"skill":"weaponsForging",
			"workshop":"huntingCamp",
			"time":1,
			"gainItem":{"knife":1},
			"bonusTimeSkill":"hunting",
			"costRessource":{"stone":1},
			"costPrimaryCharacteristic":{"stamina":2},
			"xpSecondaryCharacteristic":{"strength":2},
			"xpSkill":{"hunting":2},
			"quantity":-2
		}]
	},
	"longSword":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"longSword.atf"},
		"name":{"EN":"long sword",
				"FR":"épée longue",
				"JP":"ロングソード"},
		"description":{"EN":"The long sword is a medieval one-handed melee weapon made from cast iron.",
					   "FR":"L'épée longue est une arme de contact médiévale à une main fabriquée avec des lingots de fonte.",
					   "JP":"中世的な片手持ちの刀剣。金床で鋳鉄から製造できます。"},
		"bonus":{"attack":{"edgedWeapons":0.8}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1,
		"anim":"slash",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"edgedWeapons":0.5}
		},
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"anvil",
				"time":1.5,
				"gainItem":{"bastardSword":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"castIron":1},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"strength":3},
				"xpSkill":{"weaponsForging":3},
				"quantity":-1
			},{
				"workshop":"anvil",
				"time":6,
				"gainItem":{"steelSword":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":4},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"strength":12},
				"xpSkill":{"weaponsForging":12},
				"quantity":-4
			},{
				"workshop":"arsenal",
				"time":10.5,
				"gainItem":{"gunblade":1},
				"bonusTimeSkill":"firearmsForging",
				"costRessource":{"steel":7},
				"costPrimaryCharacteristic":{"stamina":21},
				"xpSecondaryCharacteristic":{"strength":21},
				"xpSkill":{"firearmsForging":21},
				"quantity":-7
			}]
	},
	"mace":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"mace.atf"},
		"name":{"EN":"mace",
				"FR":"masse d'armes",
				"JP":"メイス"},
		"description":{"EN":"The mace is a medieval one-handed melee weapon made from wood and cast iron.",
					   "FR":"La masse d'armes est une arme de contact médiévale à une main fabriquée avec du bois et de la fonte.",
					   "JP":"中世的な片手持ちの鈍器。石切や採鉱補助道具としても利用可能です。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":1.15},
				 "stonecutting":{"bluntWeapons":0.125},
				 "mining":{"bluntWeapons":0.125}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"xpSkill":{
			"stonecutting":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"bluntWeapons":0.25}
				},
			"mining":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"bluntWeapons":0.25}
				}
		},
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"anvil",
				"time":1.5,
				"gainItem":{"warHammer":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"castIron":1},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"strength":3},
				"xpSkill":{"weaponsForging":3},
				"quantity":-1
			},{
				"workshop":"anvil",
				"time":7.5,
				"gainItem":{"twoHandedHammer":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":6, "castIron":4},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"weaponsForging":15},
				"quantity":-5
			},{
				"workshop":"anvil",
				"time":3,
				"gainItem":{"flail":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"castIron":2},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"strength":6},
				"xpSkill":{"weaponsForging":6},
				"quantity":-2
			},{
				"workshop":"anvil",
				"time":1.5,
				"gainItem":{"anvilHammer":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":6},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"strength":3},
				"xpSkill":{"weaponsForging":3},
				"quantity":-100
			},{
				"workshop":"anvil",
				"time":7.5,
				"gainItem":{"twoMorningStarsFlail":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":3},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"weaponsForging":15},
				"quantity":-5
			},{
				"workshop":"shamanicAltar",
				"time":6,
				"gainItem":{"thunderHammer":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":3, "castIron":3},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"strength":12},
				"xpSkill":{"weaponsForging":12},
				"quantity":-4
		}]
	},
	"pike":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"pike.atf"},
		"name":{"EN":"pike",
				"FR":"pique",
				"JP":"パイク"},
		"description":{"EN":"The pike is a medieval two-handed melee weapon made from wood and cast iron.",
					   "FR":"Le pique est une arme de contact médiévale à deux mains fabriquée avec du bois et de la fonte.",
					   "JP":"中世的な両手持ちの長柄武器。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"polearms":3.4}},
		"damage":["closeCombat", "piercing"],
		"attackTime":2, "range":24,
		"anim":"thrust", "scale":1.25,
		"effect":"missileEffect",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"polearms":1}
		},
		"equip":true,
		"upgrade":[{
				"workshop":"anvil",
				"time":3,
				"gainItem":{"vouge":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":6, "castIron":1},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"strength":6},
				"xpSkill":{"weaponsForging":6},
				"quantity":-2
			},{
				"workshop":"anvil",
				"time":6,
				"gainItem":{"halberd":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":12, "castIron":2},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"strength":12},
				"xpSkill":{"weaponsForging":12},
				"quantity":-4
			},{
				"workshop":"anvil",
				"time":10.5,
				"gainItem":{"bardiche":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":12, "steel":5},
				"costPrimaryCharacteristic":{"stamina":21},
				"xpSecondaryCharacteristic":{"strength":21},
				"xpSkill":{"weaponsForging":21},
				"quantity":-7
		}]
	},
	"saber":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"saber.atf"},
		"name":{"EN":"sabre",
				"FR":"sabre",
				"JP":"サーベル"},
		"description":{"EN":"The sabre is a medieval one-handed melee weapon made from cast iron.",
					   "FR":"Le sabre est une arme de contact médiévale à une main fabriquée avec des lingots de fonte.",
					   "JP":"中世的な片手持ちの小型武器。金床で鋳鉄から製造できます。"},
		"bonus":{"attack":{"lightWeapons":0.625}},
		"damage":["closeCombat", "slashing"],
		"attackTime":0.75,
		"anim":"slash",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":0.5},
			"xpSkill":{"lightWeapons":0.5}
		},
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"anvil",
				"time":4.5,
				"gainItem":{"katarDagger":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":3},
				"costPrimaryCharacteristic":{"stamina":9},
				"xpSecondaryCharacteristic":{"strength":9},
				"xpSkill":{"weaponsForging":9},
				"quantity":-3
		}]
	},
	"scytheOfSouls":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"scytheOfSouls.atf"},
		"name":{"EN":"scythe of souls",
				"FR":"faucheuse d'âmes",
				"JP":"魂の大鎌"},
		"description":{"EN":"The scythe of souls turns your opponents into ghosts.",
					   "FR":"La faucheuse d'âmes transforme vos adversaires en fantômes.",
					   "JP":"倒した敵を亡霊へと変化させる、両手持ちの長柄武器・混沌魔術器。闇の祭壇で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"polearms":2.9, "chaoticMagic":2.9}},
		"damage":["closeCombat", "slashing"],
		"attackTime":2, "range":24,
		"anim":"slash", "scale":1.25,
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"polearms":0.5, "chaoticMagic":0.5}
		},
		"kill":{
			"effect":{"name":"poisonGasEffect"},
			"create":[{"id":"lostSoul", "except":["undead"]}]
		},
		"equip":true
	},
	"shortSword":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"shortSword.atf"},
		"name":{"EN":"short sword",
				"FR":"épée courte",
				"JP":"ショートソード"},
		"description":{"EN":"The short sword is a medieval one-handed melee weapon made from cast iron.",
					   "FR":"L'épée courte est une arme de contact médiévale à une main fabriquée avec des lingots de fonte.",
					   "JP":"中世的な片手持ちの刀剣。金床で鋳鉄から製造できます。"},
		"bonus":{"attack":{"edgedWeapons":0.6}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1,
		"anim":"slash",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"edgedWeapons":0.5}
		},
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"anvil",
				"time":1.5,
				"gainItem":{"longSword":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"castIron":1},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"strength":3},
				"xpSkill":{"weaponsForging":3},
				"quantity":-1
			},{
				"workshop":"anvil",
				"time":7.5,
				"gainItem":{"twoHandedSword":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"castIron":5},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"weaponsForging":15},
				"quantity":-5
			},{
				"workshop":"anvil",
				"time":3,
				"gainItem":{"bastardSword":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"castIron":2},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"strength":6},
				"xpSkill":{"weaponsForging":6},
				"quantity":-2
			},{
				"workshop":"anvil",
				"time":10.5,
				"gainItem":{"broadSword":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"castIron":7},
				"costPrimaryCharacteristic":{"stamina":21},
				"xpSecondaryCharacteristic":{"strength":21},
				"xpSkill":{"weaponsForging":21},
				"quantity":-7
			},{
				"workshop":"anvil",
				"time":6,
				"gainItem":{"steelSword":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":4},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"strength":12},
				"xpSkill":{"weaponsForging":12},
				"quantity":-4
			},{
				"workshop":"anvil",
				"time":13.5,
				"gainItem":{"busterSword":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":9},
				"costPrimaryCharacteristic":{"stamina":27},
				"xpSecondaryCharacteristic":{"strength":27},
				"xpSkill":{"weaponsForging":27},
				"quantity":-9
			},{
				"workshop":"arsenal",
				"time":10.5,
				"gainItem":{"gunblade":1},
				"bonusTimeSkill":"firearmsForging",
				"costRessource":{"steel":7},
				"costPrimaryCharacteristic":{"stamina":21},
				"xpSecondaryCharacteristic":{"strength":21},
				"xpSkill":{"firearmsForging":21},
				"quantity":-7
			}]
	},
	"spear":{
		"type":"item",
		"age":"stoneAge",
		"category":"weapon",
		"picture":{"file":"spear.atf"},
		"name":{"EN":"spear",
				"FR":"lance",
				"JP":"石槍"},
		"description":{"EN":"The spear is a primitive two-handed melee weapon made with a stone spearhead.",
					   "FR":"La lance est une arme de contact primitive à deux mains fabriquée avec une pointe en pierre taillée.",
					   "JP":"原始的な両手持ちの長柄武器。野営地で木材と石材から製造できます。"},
		"bonus":{"attack":{"polearms":2.6}},
		"damage":["closeCombat", "piercing"],
		"attackTime":2, "range":24,
		"anim":"thrust", "scale":1.25,
		"effect":"missileEffect",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"polearms":1}
		},
		"equip":true,
		"enhance":[{
			"skill":"weaponsForging",
			"workshop":"huntingCamp",
			"time":10,
			"gainItem":{"spear":1},
			"bonusTimeSkill":"stonecutting",
			"costRessource":{"wood":10, "stone":5},
			"costPrimaryCharacteristic":{"stamina":20},
			"xpSecondaryCharacteristic":{"strength":20},
			"xpSkill":{"stonecutting":20},
			"quantity":-20
		}],
		"upgrade":[{
				"workshop":"ironworksWorkshop",
				"time":7,
				"gainItem":{"scythe":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":2, "castIron":4},
				"costPrimaryCharacteristic":{"stamina":14},
				"xpSecondaryCharacteristic":{"strength":14},
				"xpSkill":{"weaponsForging":14},
				"quantity":-14
			},{
				"workshop":"anvil",
				"time":6.5,
				"gainItem":{"pike":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":2, "castIron":4},
				"costPrimaryCharacteristic":{"stamina":13},
				"xpSecondaryCharacteristic":{"strength":13},
				"xpSkill":{"weaponsForging":13},
				"quantity":-4
			},{
				"workshop":"anvil",
				"time":9.5,
				"gainItem":{"vouge":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":8, "castIron":5},
				"costPrimaryCharacteristic":{"stamina":19},
				"xpSecondaryCharacteristic":{"strength":19},
				"xpSkill":{"weaponsForging":19},
				"quantity":-6
			},{
				"workshop":"pyrotechnicAltar",
				"time":5,
				"gainItem":{"fireballStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"parchment":10},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"intelligence":10},
				"xpSkill":{"enchantment":10},
				"quantity":-5
			},{
				"workshop":"anvil",
				"time":12.5,
				"gainItem":{"halberd":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":14, "castIron":6},
				"costPrimaryCharacteristic":{"stamina":25},
				"xpSecondaryCharacteristic":{"strength":25},
				"xpSkill":{"weaponsForging":25},
				"quantity":-8
			},{
				"workshop":"pyrotechnicAltar",
				"time":9,
				"gainItem":{"sunfireStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":4, "paper":7},
				"costPrimaryCharacteristic":{"stamina":18},
				"xpSecondaryCharacteristic":{"intelligence":18},
				"xpSkill":{"enchantment":18},
				"quantity":-9
			},{
				"workshop":"redemptiveAltar",
				"time":9,
				"gainItem":{"lightStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":4, "paper":7},
				"costPrimaryCharacteristic":{"stamina":18},
				"xpSecondaryCharacteristic":{"intelligence":18},
				"xpSkill":{"enchantment":18},
				"quantity":-9
			},{
				"workshop":"pyrotechnicAltar",
				"time":16,
				"gainItem":{"dragonBreathStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":4, "paper":14},
				"costPrimaryCharacteristic":{"stamina":32},
				"xpSecondaryCharacteristic":{"intelligence":32},
				"xpSkill":{"enchantment":32},
				"quantity":-16
			},{
				"workshop":"pyrotechnicAltar",
				"time":16,
				"gainItem":{"cometStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":4, "paper":14},
				"costPrimaryCharacteristic":{"stamina":32},
				"xpSecondaryCharacteristic":{"intelligence":32},
				"xpSkill":{"enchantment":32},
				"quantity":-16
			},{
				"workshop":"redemptiveAltar",
				"time":16,
				"gainItem":{"brightLightStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":4, "paper":14},
				"costPrimaryCharacteristic":{"stamina":32},
				"xpSecondaryCharacteristic":{"intelligence":32},
				"xpSkill":{"enchantment":32},
				"quantity":-16
		}]
	},
	"steelAxe":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"steelAxe.atf"},
		"name":{"EN":"steel axe",
				"FR":"hache en acier",
				"JP":"鋼鉄の斧"},
		"description":{"EN":"The steel axe is a modern one-handed weapon and made from steel and wood.",
					   "FR":"La hache en acier est une arme à une main moderne fabriquée en acier et en bois.",
					   "JP":"現代的な片手持ちの斧。伐採補助道具としても利用可能です。金床で木材と鋼鉄から製造できます。"},
		"bonus":{"attack":{"axes":1.625},
				 "woodcutting":{"axes":0.125}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1.25,
		"anim":"slash", "scale":1.25,
		"effect":"axe",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"axes":0.5}
		},
		"xpSkill":{
			"woodcutting":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"axes":0.25}
				}
		},
		"equip":true,
		"oneHand":true,
		"produce":[{
				"workshop":"anvil",
				"no":22.5,
				"time":10.5,
				"gainItem":{"steelAxe":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":6, "steel":6},
				"costPrimaryCharacteristic":{"stamina":21},
				"xpSecondaryCharacteristic":{"strength":21},
				"xpSkill":{"weaponsForging":21},
				"quantity":-7
		}]
	},
	"steelSword":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"steelSword.atf"},
		"name":{"EN":"steel sword",
				"FR":"épée d'acier",
				"JP":"鋼鉄の剣"},
		"description":{"EN":"The steel sword is a one-handed melee weapon made from steel.",
					   "FR":"L'épée d'acier est une arme de contact à une main fabriquée en acier.",
					   "JP":"片手持ちの刀剣。金床で鋼鉄から製造できます。"},
		"bonus":{"attack":{"edgedWeapons":1.14}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1,
		"anim":"slash", "scale":1.25,
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":0.5},
			"xpSkill":{"edgedWeapons":0.5}
		},
		"equip":true,
		"oneHand":true,
		"produce":[{
				"workshop":"anvil",
				"no":20,
				"time":7.5,
				"gainItem":{"steelSword":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":5},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"weaponsForging":15},
				"quantity":-5
		}],
		"upgrade":[{
				"workshop":"arsenal",
				"time":4.5,
				"gainItem":{"gunblade":1},
				"bonusTimeSkill":"firearmsForging",
				"costRessource":{"steel":3},
				"costPrimaryCharacteristic":{"stamina":9},
				"xpSecondaryCharacteristic":{"strength":9},
				"xpSkill":{"firearmsForging":9},
				"quantity":-3
		}]
	},
	"stick":{
		"type":"item",
		"age":"woodenAge",
		"category":"weapon",
		"picture":{"file":"stick.atf"},
		"name":{"EN":"stick",
				"FR":"bâton",
				"JP":"棍"},
		"description":{"EN":"The stick is a primitive two-handed melee weapon made from wood.",
					   "FR":"Le bâton est une arme primitive de contact à deux mains fabriquée en bois.",
					   "JP":"原始的な両手持ちの長柄武器。野営地で木材から製造できます。"},
		"bonus":{"attack":{"polearms":1.4}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1, "range":24,
		"anim":"slash", "scale":1.25,
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"polearms":1}
		},
		"equip":true,
		"enhance":[{
			"skill":"weaponsForging",
			"workshop":"huntingCamp",
			"time":5,
			"gainItem":{"stick":1},
			"bonusTimeSkill":"woodcutting",
			"costRessource":{"wood":10},
			"costPrimaryCharacteristic":{"stamina":10},
			"xpSecondaryCharacteristic":{"strength":10},
			"xpSkill":{"woodcutting":10},
			"quantity":-10
		}],
		"upgrade":[{
				"workshop":"huntingCamp",
				"time":5,
				"gainItem":{"spear":1},
				"bonusTimeSkill":"stonecutting",
				"costRessource":{"stone":5},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"strength":10},
				"xpSkill":{"stonecutting":10},
				"quantity":-10
			},{
				"workshop":"huntingCamp",
				"time":3,
				"gainItem":{"weightedStick":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"castIron":2},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"strength":6},
				"xpSkill":{"weaponsForging":6},
				"quantity":-6
			},{
				"workshop":"ironworksWorkshop",
				"time":7,
				"gainItem":{"scythe":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":2, "castIron":4},
				"costPrimaryCharacteristic":{"stamina":14},
				"xpSecondaryCharacteristic":{"strength":14},
				"xpSkill":{"weaponsForging":14},
				"quantity":-14
			},{
				"workshop":"anvil",
				"time":6.5,
				"gainItem":{"pike":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":2, "castIron":4},
				"costPrimaryCharacteristic":{"stamina":13},
				"xpSecondaryCharacteristic":{"strength":13},
				"xpSkill":{"weaponsForging":13},
				"quantity":-4
			},{
				"workshop":"shamanicAltar",
				"time":7.5,
				"gainItem":{"lightningStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"castIron":5},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"intelligence":15},
				"xpSkill":{"enchantment":15},
				"quantity":-15
			},{
				"workshop":"anvil",
				"time":9.5,
				"gainItem":{"vouge":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":8, "castIron":5},
				"costPrimaryCharacteristic":{"stamina":19},
				"xpSecondaryCharacteristic":{"strength":19},
				"xpSkill":{"weaponsForging":19},
				"quantity":-6
			},{
				"workshop":"shamanicAltar",
				"time":10,
				"gainItem":{"snowStarStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"crystals":5},
				"costPrimaryCharacteristic":{"stamina":20},
				"xpSecondaryCharacteristic":{"intelligence":20},
				"xpSkill":{"enchantment":20},
				"quantity":-10
			},{
				"workshop":"pyrotechnicAltar",
				"time":5,
				"gainItem":{"fireballStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"parchment":10},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"intelligence":10},
				"xpSkill":{"enchantment":10},
				"quantity":-5
			},{
				"workshop":"anvil",
				"time":12.5,
				"gainItem":{"halberd":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":14, "castIron":6},
				"costPrimaryCharacteristic":{"stamina":25},
				"xpSecondaryCharacteristic":{"strength":25},
				"xpSkill":{"weaponsForging":25},
				"quantity":-8
			},{
				"workshop":"anvil",
				"time":1,
				"gainItem":{"anvilHammer":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":2},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"strength":2},
				"xpSkill":{"weaponsForging":2},
				"quantity":-100
			},{
				"workshop":"pyrotechnicAltar",
				"time":9,
				"gainItem":{"sunfireStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":4, "paper":7},
				"costPrimaryCharacteristic":{"stamina":18},
				"xpSecondaryCharacteristic":{"intelligence":18},
				"xpSkill":{"enchantment":18},
				"quantity":-9
			},{
				"workshop":"redemptiveAltar",
				"time":9,
				"gainItem":{"lightStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":4, "paper":7},
				"costPrimaryCharacteristic":{"stamina":18},
				"xpSecondaryCharacteristic":{"intelligence":18},
				"xpSkill":{"enchantment":18},
				"quantity":-9
			},{
				"workshop":"anvil",
				"time":12.5,
				"gainItem":{"bardiche":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":14, "steel":6},
				"costPrimaryCharacteristic":{"stamina":25},
				"xpSecondaryCharacteristic":{"strength":25},
				"xpSkill":{"weaponsForging":25},
				"quantity":-12
			},{
				"workshop":"shamanicAltar",
				"time":17,
				"gainItem":{"cristalStarStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":2, "crystals":8},
				"costPrimaryCharacteristic":{"stamina":34},
				"xpSecondaryCharacteristic":{"intelligence":34},
				"xpSkill":{"enchantment":34},
				"quantity":-17
			},{
				"workshop":"pyrotechnicAltar",
				"time":16,
				"gainItem":{"dragonBreathStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":4, "paper":14},
				"costPrimaryCharacteristic":{"stamina":32},
				"xpSecondaryCharacteristic":{"intelligence":32},
				"xpSkill":{"enchantment":32},
				"quantity":-16
			},{
				"workshop":"pyrotechnicAltar",
				"time":16,
				"gainItem":{"cometStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":4, "paper":14},
				"costPrimaryCharacteristic":{"stamina":32},
				"xpSecondaryCharacteristic":{"intelligence":32},
				"xpSkill":{"enchantment":32},
				"quantity":-16
			},{
				"workshop":"redemptiveAltar",
				"time":16,
				"gainItem":{"brightLightStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":4, "paper":14},
				"costPrimaryCharacteristic":{"stamina":32},
				"xpSecondaryCharacteristic":{"intelligence":32},
				"xpSkill":{"enchantment":32},
				"quantity":-16
		}]
	},
	"summerSword":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"summerSword.atf"},
		"name":{"EN":"Summer sword",
				"FR":"glaive Summer",
				"JP":"朱炎の剣"},
		"description":{"EN":"The summer sword is a weapon which was bathed in the sun. It is particularly effective against creatures of darkness.",
					   "FR":"Le glaive Summer est une arme qui a été baignée dans le soleil. Elle est particulièrement efficace contre les créatures des ténèbres.",
					   "JP":"日光に浸し作られた、片手持ちの刀剣。暗闇のモンスターたちに対し高い威力を持つ。光の祭壇で棒金から製造できます。"},
		"bonus":{"attack":{"edgedWeapons":1}},
		"damage":["closeCombat", "slashing", "light"],
		"attackTime":1,
		"anim":"slash", "scale":1.25,
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"edgedWeapons":0.5}
		},
		"equip":true,
		"oneHand":true,
		"produce":[{
				"workshop":"redemptiveAltar",
				"no":5.5,
				"time":12.5,
				"gainItem":{"summerSword":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"goldBar":5},
				"costPrimaryCharacteristic":{"stamina":25},
				"xpSecondaryCharacteristic":{"address":25},
				"xpSkill":{"enchantment":25},
				"quantity":-25
			}]
	},
	"twoHandedHammer":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"twoHandedHammer.atf"},
		"name":{"EN":"two-handed hammer",
				"FR":"marteau à deux mains",
				"JP":"両手槌"},
		"description":{"EN":"The two-handed hammer is a medieval melee weapon made from cast iron.",
					   "FR":"Le marteau à deux mains est une arme de contact médiévale fabriquée avec des lingots de fonte.",
					   "JP":"中世的な両手持ちの鈍器。石切や採鉱補助道具としても利用可能です。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":2.9},
				 "stonecutting":{"bluntWeapons":0.25},
				 "mining":{"bluntWeapons":0.25}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash", "scale":1.25,
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"bluntWeapons":1}
		},
		"xpSkill":{
			"stonecutting":{
				"xpSecondaryCharacteristic":{"strength":0.25},
				"xpSkill":{"bluntWeapons":0.5}
				},
			"mining":{
				"xpSecondaryCharacteristic":{"strength":0.25},
				"xpSkill":{"bluntWeapons":0.5}
				}
		},
		"equip":true,
		"upgrade":[{
				"workshop":"anvil",
				"time":0.5,
				"gainItem":{"anvilHammer":1},
				"bonusTimeSkill":"weaponsForging",
				"costPrimaryCharacteristic":{"stamina":1},
				"xpSecondaryCharacteristic":{"strength":1},
				"xpSkill":{"weaponsForging":1},
				"quantity":-100
			}]
	},
	"twoHandedSword":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"twoHandedSword.atf"},
		"name":{"EN":"two-handed sword",
				"FR":"épée à deux mains",
				"JP":"両手大剣"},
		"description":{"EN":"The two-handed sword is a medieval melee weapon made from cast iron.",
					   "FR":"L'épée à deux mains est une arme de contact médiévale fabriquée avec des lingots de fonte.",
					   "JP":"中世的な両手持ちの刀剣。金床で鋳鉄から製造できます。"},
		"bonus":{"attack":{"edgedWeapons":1.6}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1,
		"anim":"slash", "scale":1.25,
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"edgedWeapons":1}
		},
		"equip":true,
		"upgrade":[{
				"workshop":"anvil",
				"time":3,
				"gainItem":{"broadSword":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"castIron":2},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"strength":6},
				"xpSkill":{"weaponsForging":6},
				"quantity":-2
			},{
				"workshop":"anvil",
				"time":13.5,
				"gainItem":{"busterSword":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":9},
				"costPrimaryCharacteristic":{"stamina":27},
				"xpSecondaryCharacteristic":{"strength":27},
				"xpSkill":{"weaponsForging":27},
				"quantity":-9
			}]
	},
	"twoMorningStarsFlail":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"twoMorningStarsFlail.atf"},
		"name":{"EN":"two-morning-stars flail",
				"FR":"fléau à deux étoiles du matin",
				"JP":"双頭フレイル"},
		"description":{"EN":"The two-morning-stars flail is a one-handed weapon which can knock twice.",
					   "FR":"Le fléau à deux étoiles du matin est une arme à une main qui frappe deux fois.",
					   "JP":"一度に2回攻撃可能な片手持ちの鈍器。金床で木材と鋼鉄から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":1.025}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.25},
			"xpSkill":{"bluntWeapons":0.25}
		},
		"addItems":[{
			"bonus":{"attack":{"bluntWeapons":1.025}},
			"damage":["closeCombat", "crushing"],
			"attackTime":1.5,
			"effect":"shock",
			"xpAttack":{
				"xpSecondaryCharacteristic":{"strength":0.25},
				"xpSkill":{"bluntWeapons":0.25}
			}}],
		"equip":true,
		"oneHand":true,
		"produce":[{
				"workshop":"anvil",
				"no":20.5,
				"time":11.5,
				"gainItem":{"twoMorningStarsFlail":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":6, "steel":4},
				"costPrimaryCharacteristic":{"stamina":23},
				"xpSecondaryCharacteristic":{"strength":23},
				"xpSkill":{"weaponsForging":23},
				"quantity":-8
		}]
	},
	"vouge":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"vouge.atf"},
		"name":{"EN":"vouge",
				"FR":"vouge",
				"JP":"ヴォウジェ"},
		"description":{"EN":"The vouge is a medieval two-handed melee weapon made from wood and cast iron.",
					   "FR":"La vouge est une arme de contact médiévale à deux mains fabriquée avec du bois et de la fonte.",
					   "JP":"中世的な両手持ちの長柄武器。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"polearms":4.2}},
		"damage":["closeCombat", "slashing"],
		"attackTime":2, "range":24,
		"anim":"slash", "scale":1.25,
		"effect":"axe",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"polearms":1}
		},
		"equip":true,
		"upgrade":[{
				"workshop":"anvil",
				"time":3,
				"gainItem":{"halberd":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":6, "castIron":1},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"strength":6},
				"xpSkill":{"weaponsForging":6},
				"quantity":-2
			},{
				"workshop":"anvil",
				"time":9,
				"gainItem":{"bardiche":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":6, "steel":5},
				"costPrimaryCharacteristic":{"stamina":18},
				"xpSecondaryCharacteristic":{"strength":18},
				"xpSkill":{"weaponsForging":18},
				"quantity":-6
			}]
	},
	"warAxe":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"warAxe.atf"},
		"name":{"EN":"war axe",
				"FR":"hache de guerre",
				"JP":"戦斧"},
		"description":{"EN":"The war axe is a medieval one-handed melee weapon made from cast iron and wood.",
					   "FR":"La hache de guerre est une arme de contact médiévale à une main fabriquée en fonte et en bois.",
					   "JP":"中世的な片手持ちの斧。伐採補助道具としても利用可能です。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"axes":1.125},
				 "woodcutting":{"axes":0.125}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1.25,
		"anim":"slash",
		"effect":"axe",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"axes":0.5}
		},
		"xpSkill":{
			"woodcutting":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"axes":0.25}
				}
		},
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"anvil",
				"time":9,
				"gainItem":{"twoHandedAxe":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"castIron":6},
				"costPrimaryCharacteristic":{"stamina":18},
				"xpSecondaryCharacteristic":{"strength":18},
				"xpSkill":{"weaponsForging":18},
				"quantity":-6
			},{
				"workshop":"anvil",
				"time":7.5,
				"gainItem":{"steelAxe":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":5},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"weaponsForging":15},
				"quantity":-5
			}]
	},
	"warHammer":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"warHammer.atf"},
		"name":{"EN":"war hammer",
				"FR":"marteau de guerre",
				"JP":"戦槌"},
		"description":{"EN":"The war hammer is a medieval one-handed melee weapon made from wood and cast iron.",
					   "FR":"Le marteau de guerre est une arme de contact médiévale à une main fabriquée avec du bois et de la fonte.",
					   "JP":"中世的な片手持ちの鈍器。石切や採鉱補助道具としても利用可能です。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":1.45},
				 "stonecutting":{"bluntWeapons":0.125},
				 "mining":{"bluntWeapons":0.125}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"xpSkill":{
			"stonecutting":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"bluntWeapons":0.25}
				},
			"mining":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"bluntWeapons":0.25}
				}
		},
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"anvil",
				"time":6,
				"gainItem":{"twoHandedHammer":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":6, "castIron":3},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"strength":12},
				"xpSkill":{"weaponsForging":12},
				"quantity":-4
			},{
				"workshop":"anvil",
				"time":1.5,
				"gainItem":{"flail":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"castIron":1},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"strength":3},
				"xpSkill":{"weaponsForging":3},
				"quantity":-1
			},{
				"workshop":"anvil",
				"time":7.5,
				"gainItem":{"twoMorningStarsFlail":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"steel":3},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"weaponsForging":15},
				"quantity":-5
			},{
				"workshop":"shamanicAltar",
				"time":4.5,
				"gainItem":{"thunderHammer":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":3, "castIron":2},
				"costPrimaryCharacteristic":{"stamina":9},
				"xpSecondaryCharacteristic":{"strength":9},
				"xpSkill":{"weaponsForging":9},
				"quantity":-3
			}]
	},
	"weightedStick":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"weightedStick.atf"},
		"name":{"EN":"weighted stick",
				"FR":"bâton lesté",
				"JP":"棒"},
		"description":{"EN":"The weighted stick is a two-handed melee weapon made from wood and cast iron.",
					   "FR":"Le bâton lesté est une arme de contact,à deux mains fabriquée en bois et en fonte.",
					   "JP":"両手持ちの長柄武器。野営地で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"polearms":2.2}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1, "range":24,
		"anim":"slash", "scale":1.25,
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"polearms":1}
		},
		"equip":true,
		"enhance":[{
			"skill":"weaponsForging",
			"workshop":"huntingCamp",
			"time":8,
			"gainItem":{"weightedStick":1},
			"bonusTimeSkill":"weaponsForging",
			"costRessource":{"wood":10, "castIron":2},
			"costPrimaryCharacteristic":{"stamina":16},
			"xpSecondaryCharacteristic":{"strength":16},
			"xpSkill":{"weaponsForging":16},
			"quantity":-16
		}]
	},
	"woodenSword":{
		"type":"item",
		"age":"stoneAge",
		"category":"weapon",
		"picture":{"file":"woodenSword.atf"},
		"name":{"EN":"wooden sword",
				"FR":"épée de bois",
				"JP":"木剣"},
		"description":{"EN":"The wooden sword is a rudimentary weapon used in training camps.",
					   "FR":"L'épée de bois est une arme rudimentaire utilisée dans les camps d'entraînement.",
					   "JP":"訓練用の原始的な片手持ちの刀剣。鋸台で厚板から製造できます。"},
		"bonus":{"attack":{"edgedWeapons":0.4}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"edgedWeapons":0.5}
		},
		"equip":true,
		"oneHand":true,
		"produce":[{
				"workshop":"tableSaw",
				"no":1,
				"time":2.5,
				"gainItem":{"woodenSword":1},
				"bonusTimeSkill":"sawing",
				"costRessource":{"plank":5},
				"costPrimaryCharacteristic":{"stamina":5},
				"xpSecondaryCharacteristic":{"strength":5},
				"xpSkill":{"sawing":5},
				"quantity":-5
		}]
	}
}