{
	"blackMagicAltar":{
		"type":"workshop",
		"age":"etherAge",
		"no":17.5,
		"picture":{"file":"blackMagicAltar.png",
				   "file100":"blackMagicAltar100.atf"},
		"name":{"EN":"black magic altar",
				"FR":"autel de magie noire",
				"JP":"闇の祭壇"},
		"description":{"EN":"The black magic altar is a workshop which allows you to create dark spells.",
					   "FR":"L'autel de magie noire permet de fabriquer des sorts des ténèbres.",
					   "JP":"闇の呪文や呪物の製造が可能です。厚板を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"plank":10},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":1},
			"xpSecondaryCharacteristic":{"strength":1},
			"prebuild":{"id":"blackMagicAltarYard", "time":0.5}
		},
		"quantity":100,
		"zero":{"EN":{"D":["I cannot find any black magic altar."]},
				"FR":{"D":["Je ne trouve pas d'autel de magie noire."]},
				"JP":{"D":["闇の祭壇が見当たらないな。"]}},
		"title":{"EN":"Create dark spells",
				 "FR":"Fabriquer des sorts des ténèbres",
				 "JP":"闇の呪文の製造"},
		"produce":[{
				"time":6,
				"gainItem":{"deathBeamRod":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":6, "parchment":6},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"intelligence":12},
				"xpSkill":{"enchantment":12},
				"quantity":-6
			},{
				"time":7,
				"gainItem":{"poisonScepter":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":7, "medicinalHerbs":7},
				"costPrimaryCharacteristic":{"stamina":14},
				"xpSecondaryCharacteristic":{"intelligence":14},
				"xpSkill":{"enchantment":14},
				"quantity":-7
			},{
				"time":2,
				"gainItem":{"summonSkeletonScroll":1},
				"bonusSkill":"necromanticMagic",
				"costRessource":{"parchment":4},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"willpower":4},
				"xpSkill":{"necromanticMagic":4},
				"repeat":true,
				"quantity":-4
			},{
				"time":6,
				"gainItem":{"glovesOfGhoulTouch":1},
				"bonusTimeSkill":"necromanticMagic",
				"costRessource":{"leather":6, "medicinalHerbs":6},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"willpower":12},
				"xpSkill":{"necromanticMagic":12},
				"quantity":-6
			},{
				"time":10,
				"gainItem":{"poisonStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":10, "medicinalHerbs":10},
				"costPrimaryCharacteristic":{"stamina":20},
				"xpSecondaryCharacteristic":{"intelligence":20},
				"xpSkill":{"enchantment":20},
				"quantity":-10
			},{
				"time":10.5,
				"gainItem":{"boneSpearStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":14, "parchment":7},
				"costPrimaryCharacteristic":{"stamina":21},
				"xpSecondaryCharacteristic":{"intelligence":21},
				"xpSkill":{"enchantment":21},
				"quantity":-11
			},{
				"time":4,
				"gainItem":{"summonZombieScroll":1},
				"bonusSkill":"necromanticMagic",
				"costRessource":{"parchment":8},
				"costPrimaryCharacteristic":{"stamina":8},
				"xpSecondaryCharacteristic":{"willpower":8},
				"xpSkill":{"necromanticMagic":8},
				"repeat":true,
				"quantity":-8
			},{
				"time":12.5,
				"gainItem":{"ringOfSoulProtection":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":5},
				"costPrimaryCharacteristic":{"stamina":25},
				"xpSecondaryCharacteristic":{"address":25},
				"xpSkill":{"goldsmithery":25},
				"quantity":-12
			},{
				"time":14,
				"gainItem":{"poisonNovaStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":14, "medicinalHerbs":14},
				"costPrimaryCharacteristic":{"stamina":28},
				"xpSecondaryCharacteristic":{"intelligence":28},
				"xpSkill":{"enchantment":28},
				"quantity":-14
			},{
				"time":24,
				"gainItem":{"scytheOfSouls":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":18, "castIron":10},
				"costPrimaryCharacteristic":{"stamina":48},
				"xpSecondaryCharacteristic":{"strength":48},
				"xpSkill":{"weaponsForging":48},
				"quantity":-24
			},{
				"time":8,
				"gainItem":{"summonMummyScroll":1},
				"bonusSkill":"necromanticMagic",
				"costRessource":{"parchment":16},
				"costPrimaryCharacteristic":{"stamina":16},
				"xpSecondaryCharacteristic":{"willpower":16},
				"xpSkill":{"necromanticMagic":16},
				"repeat":true,
				"quantity":-16
			},{
				"time":7.5,
				"gainItem":{"summonReaperScroll":1},
				"bonusSkill":"necromanticMagic",
				"costRessource":{"parchment":15},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"willpower":15},
				"xpSkill":{"necromanticMagic":15},
				"repeat":true,
				"quantity":-15
			},{
				"time":6,
				"gainItem":{"summonNightmareScroll":1},
				"bonusTimeSkill":"necromanticMagic",
				"costRessource":{"parchment":12},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"willpower":12},
				"xpSkill":{"necromanticMagic":12},
				"repeat":true,
				"quantity":-12
			},{
				"time":6,
				"gainItem":{"lichTransformationBook":1},
				"bonusTimeSkill":"necromanticMagic",
				"costRessource":{"paper":6},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"willpower":12},
				"xpSkill":{"necromanticMagic":12},
				"quantity":-12
			}],
		"repair":{
			"health":10,
			"time":0.5,
			"costRessource":{"plank":1},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"repairing",
			"xpSkill":{"repairing":1},
			"xpSecondaryCharacteristic":{"endurance":1}
		},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":64,
		"height":64,
		"health":100,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2}
	},
	"blackMagicAltarYard":{
		"type":"prebuild",
		"picture":{"file":"blackMagicAltarYard.png",
				   "file100":"blackMagicAltarYard100.atf"},
		"name":{"EN":"black magic altar",
				"FR":"autel de magie noire",
				"JP":"闇の祭壇"},
		"description":{"EN":"The black magic altar allows to create dark spells.",
					   "FR":"L'autel de magie noire permet de fabriquer des sorts des ténèbres.",
					   "JP":"闇の呪文や呪物の製造が可能です。厚板を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":64,
		"height":64,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2},
		"steps":0
	}
}