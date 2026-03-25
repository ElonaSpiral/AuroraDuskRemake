{
	"butcheryWorkshop":{
		"type":"workshop",
		"age":"stoneAge",
		"no":6.5,
		"picture":{"file":"butcheryWorkshop.png",
				   "file100":"butcheryWorkshop100.atf"},
		"name":{"EN":"butchery workshop",
				"FR":"atelier de boucherie",
				"JP":"精肉所"},
		"description":{"EN":"The butchery workshop allows you to cook meat.",
					   "FR":"L'atelier de boucherie permet de cuisiner de la viande.",
					   "JP":"生肉を調理することが可能です。厚板を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"plank":10},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":1},
			"xpSecondaryCharacteristic":{"address":1},
			"prebuild":{"id":"butcheryWorkshopYard", "time":0.5}
		},
		"quantity":200,
		"zero":{"EN":{"D":["I cannot find any butchery workshop."]},
				"FR":{"D":["Je ne trouve pas d'atelier de boucherie."]},
				"JP":{"D":["精肉所が見当たらないな。"]}},
		"title":{"EN":"Cook meat",
				 "FR":"Cuisiner de la viande",
				 "JP":"肉の調理"},
		"produce":[{
				"time":1,
				"gainItem":{"steak":1},
				"sound":"soundPick",
				"bonusSkill":"butchery",
				"costRessource":{"rawMeat":1, "wood":1},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"endurance":2},
				"xpSkill":{"butchery":2},
				"repeat":true,
				"quantity":-2
			},{
				"time":1,
				"gainItem":{"sausage":1},
				"sound":"soundPick",
				"bonusSkill":"butchery",
				"costRessource":{"rawMeat":2},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"endurance":2},
				"xpSkill":{"butchery":2},
				"repeat":true,
				"quantity":-2
			},{
				"time":1,
				"gainItem":{"boiledMeat":1},
				"sound":"soundPick",
				"bonusSkill":"butchery",
				"costRessource":{"rawMeat":1, "water":1},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"endurance":2},
				"xpSkill":{"butchery":2},
				"repeat":true,
				"quantity":-2
			},{
				"time":1.5,
				"gainItem":{"meatloaf":1},
				"sound":"soundPick",
				"bonusSkill":"butchery",
				"costRessource":{"flour":1, "rawMeat":2},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"endurance":3},
				"xpSkill":{"butchery":3},
				"repeat":true,
				"quantity":-3
			},{
				"time":3,
				"gainItem":{"skewer":2},
				"sound":"soundPick",
				"bonusSkill":"butchery",
				"costRessource":{"coal":1, "rawMeat":1},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"endurance":6},
				"xpSkill":{"butchery":6},
				"repeat":true,
				"quantity":-6
			}],
		"repair":{
			"health":10,
			"time":0.5,
			"costRessource":{"plank":1},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"repairing",
			"xpSkill":{"repairing":1},
			"xpSecondaryCharacteristic":{"rapidity":1}
		},
		"death":{
			"effect":{"name":"destruction", "scale":0.8}
		},
		"width":48,
		"height":57,
		"health":100,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2}
	},
	"butcheryWorkshopYard":{
		"type":"prebuild",
		"picture":{"file":"butcheryWorkshopYard.png",
				   "file100":"butcheryWorkshopYard100.atf"},
		"name":{"EN":"butchery workshop",
				"FR":"atelier de boucherie",
				"JP":"精肉所"},
		"description":{"EN":"The butchery workshop allows you to cook meat.",
					   "FR":"L'atelier de boucherie permet de cuisiner de la viande.",
					   "JP":"生肉を調理することが可能です。厚板を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction", "scale":0.8}
		},
		"width":48,
		"height":57,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2},
		"steps":0
	}
}