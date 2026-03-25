{
	"pyrotechnicAltar":{
		"type":"workshop",
		"age":"etherAge",
		"no":16,
		"picture":{"file":"pyrotechnicAltar.png",
				   "file100":"pyrotechnicAltar100.atf"},
		"name":{"EN":"pyrotechnic altar",
				"FR":"autel de pyrotechnie",
				"JP":"火の祭壇"},
		"description":{"EN":"The pyrotechnic altar is a workshop which allows you to create fire spells.",
					   "FR":"L'autel de pyrotechnie permet de fabriquer des sorts de feu.",
					   "JP":"火の呪文や呪物の製造が可能です。切石を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"freeStone":10},
			"costPrimaryCharacteristic":{"stamina":2},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":2},
			"xpSecondaryCharacteristic":{"strength":2},
			"prebuild":{"id":"pyrotechnicAltarYard", "time":1}
		},
		"quantity":100,
		"zero":{"EN":{"D":["I cannot find any pyrotechnic altar."]},
				"FR":{"D":["Je ne trouve pas d'autel de pyrotechnie."]},
				"JP":{"D":["火の祭壇が見当たらないな。"]}},
		"title":{"EN":"Create fire spells",
				 "FR":"Fabriquer des sorts de feu",
				 "JP":"火の呪文の製造"},
		"produce":[{
				"time":6,
				"gainItem":{"fireScepter":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":6, "parchment":6},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"intelligence":12},
				"xpSkill":{"enchantment":12},
				"quantity":-6
			},{
				"time":10,
				"gainItem":{"fireballStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":10, "parchment":10},
				"costPrimaryCharacteristic":{"stamina":20},
				"xpSecondaryCharacteristic":{"intelligence":20},
				"xpSkill":{"enchantment":20},
				"quantity":-10
			},{
				"time":0.5,
				"gainItem":{"flameBladeScroll":1},
				"bonusSkill":"conjuration",
				"costRessource":{"parchment":1},
				"costPrimaryCharacteristic":{"stamina":1},
				"xpSecondaryCharacteristic":{"willpower":1},
				"xpSkill":{"conjuration":1},
				"repeat":true,
				"quantity":-1
			},{
				"time":0.5,
				"gainItem":{"sparkScroll":1},
				"bonusSkill":"conjuration",
				"costRessource":{"parchment":1},
				"costPrimaryCharacteristic":{"stamina":1},
				"xpSecondaryCharacteristic":{"willpower":1},
				"xpSkill":{"conjuration":1},
				"repeat":true,
				"quantity":-1
			},{
				"time":8,
				"gainItem":{"multipleFireScepter":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":8, "paper":4},
				"costPrimaryCharacteristic":{"stamina":16},
				"xpSecondaryCharacteristic":{"intelligence":16},
				"xpSkill":{"enchantment":16},
				"quantity":-8
			},{
				"time":14,
				"gainItem":{"sunfireStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":14, "paper":7},
				"costPrimaryCharacteristic":{"stamina":28},
				"xpSecondaryCharacteristic":{"intelligence":28},
				"xpSkill":{"enchantment":28},
				"quantity":-14
			},{
				"time":5,
				"gainItem":{"flameBladeBook":1},
				"bonusTimeSkill":"conjuration",
				"costRessource":{"paper":5},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"willpower":10},
				"xpSkill":{"conjuration":10},
				"quantity":-10
			},{
				"time":10,
				"gainItem":{"amuletOfFire":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":2, "paper":5},
				"costPrimaryCharacteristic":{"stamina":20},
				"xpSecondaryCharacteristic":{"intelligence":20},
				"xpSkill":{"goldsmithery":20},
				"quantity":-8
			},{
				"time":5,
				"gainItem":{"fireElementalScroll":1},
				"bonusSkill":"conjuration",
				"costRessource":{"parchment":10},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"willpower":10},
				"xpSkill":{"conjuration":10},
				"repeat":true,
				"quantity":-10
			}],
		"repair":{
			"health":15,
			"time":1,
			"costRessource":{"freeStone":1},
			"costPrimaryCharacteristic":{"stamina":2},
			"sound":"soundBuilding",
			"bonusSkill":"repairing",
			"xpSkill":{"repairing":2},
			"xpSecondaryCharacteristic":{"endurance":2}
		},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":64,
		"height":64,
		"health":150,
		"defense":200,
		"resistance":{"fire":0.5, "death":0.5, "demolition":2, "poison":0}
	},
	"pyrotechnicAltarYard":{
		"type":"prebuild",
		"picture":{"file":"pyrotechnicAltarYard.png",
				   "file100":"pyrotechnicAltarYard100.atf"},
		"name":{"EN":"pyrotechnic altar",
				"FR":"autel de pyrotechnie",
				"JP":"火の祭壇"},
		"description":{"EN":"The pyrotechnic altar is a workshop which allows you to create fire spells.",
					   "FR":"L'autel de pyrotechnie permet de fabriquer des sorts de feu.",
					   "JP":"火の呪文や呪物の製造が可能です。切石を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":64,
		"height":64,
		"defense":200,
		"resistance":{"fire":0.5, "death":0.5, "demolition":2, "poison":0},
		"steps":0
	}
}