{
	"bakeryOven":{
		"type":"workshop",
		"age":"stoneAge",
		"no":7,
		"picture":{"file":"bakeryOven.png",
				   "file100":"bakeryOven100.atf"},
		"name":{"EN":"bakery oven",
				"FR":"four à pain",
				"JP":"製パン用オーブン"},
		"description":{"EN":"The oven is a workshop which allows you to bake bread.",
					   "FR":"Le four permet de faire du pain.",
					   "JP":"小麦粉などを用いてパンを焼くことが可能です。切石を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"freeStone":10},
			"costPrimaryCharacteristic":{"stamina":2},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":2},
			"xpSecondaryCharacteristic":{"strength":2},
			"prebuild":{"id":"bakeryOvenYard", "time":1}
		},
		"quantity":100,
		"zero":{"EN":{"D":["I cannot find any bakery oven."]},
				"FR":{"D":["Je ne trouve pas de four à pain."]},
				"JP":{"D":["製パン用オーブンが見当たらないな。"]}},
		"title":{"EN":"Baking",
				 "FR":"Cuire du pain",
				 "JP":"製パン"},
		"produce":[{
				"time":1,
				"gainItem":{"bread":1},
				"sound":"soundPick",
				"bonusSkill":"bakery",
				"costRessource":{"flour":1},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"rapidity":2},
				"xpSkill":{"bakery":2},
				"repeat":true,
				"quantity":-2
			},{
				"time":1.5,
				"gainItem":{"meatPie":1},
				"sound":"soundPick",
				"bonusSkill":"bakery",
				"costRessource":{"flour":1, "rawMeat":2},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"rapidity":3},
				"xpSkill":{"bakery":3},
				"repeat":true,
				"quantity":-3
			},{
				"time":1.5,
				"gainItem":{"cake":1},
				"sound":"soundPick",
				"bonusSkill":"bakery",
				"costRessource":{"milk":1, "fruits":2},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"rapidity":3},
				"xpSkill":{"bakery":3},
				"repeat":true,
				"quantity":-3
			},{
				"time":4,
				"gainItem":{"brioche":4},
				"sound":"soundPick",
				"bonusSkill":"bakery",
				"costRessource":{"flour":4},
				"costPrimaryCharacteristic":{"stamina":8},
				"xpSecondaryCharacteristic":{"rapidity":8},
				"xpSkill":{"bakery":8},
				"repeat":true,
				"quantity":-8
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
		"resistance":{"death":0.5, "demolition":2, "poison":0}
	}
}