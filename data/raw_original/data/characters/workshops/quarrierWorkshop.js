{
	"quarrierWorkshop":{
		"type":"workshop",
		"age":"stoneAge",
		"no":5,
		"picture":{"file":"quarrierWorkshop.png",
				   "file100":"quarrierWorkshop100.atf"},
		"name":{"EN":"stonecutting workshop",
				"FR":"atelier de taille",
				"JP":"石切場"},
		"description":{"EN":"The stonecutting workshop allows you to manufacture cut stone from stone.",
					   "FR":"L'atelier de taille permet de produire de la pierre taillée à partir de pierre.",
					   "JP":"石材から切石の製造ができるほか、石製品の作成も可能です。厚板を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"plank":5},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":1},
			"xpSecondaryCharacteristic":{"strength":1},
			"prebuild":{"id":"quarrierWorkshopYard", "time":0.5}
		},
		"quantity":100,
		"zero":{"EN":{"D":["I cannot find any stonecutting workshop."]},
				"FR":{"D":["Je ne trouve pas d'atelier de taille."]},
				"JP":{"D":["石切場が見当たらないな。"]}},
		"title":{"EN":"Cut stone",
				 "FR":"Tailler de la pierre",
				 "JP":"石の切断"},
		"produce":[{
				"time":1,
				"gainRessource":{"freeStone":1},
				"sound":"soundRock",
				"bonusSkill":"stonecutting",
				"costRessource":{"stone":1},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"strength":2},
				"xpSkill":{"stonecutting":2},
				"repeat":true,
				"quantity":-1
			},{
				"time":3,
				"gainItem":{"stoneAxe":1},
				"bonusTimeSkill":"stonecutting",
				"costRessource":{"freeStone":2, "wood":8},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"strength":6},
				"xpSkill":{"stonecutting":6},
				"quantity":-4
			},{
				"time":5,
				"gainItem":{"stoneHammer":1},
				"bonusTimeSkill":"stonecutting",
				"costRessource":{"freeStone":3, "wood":8},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"strength":10},
				"xpSkill":{"stonecutting":10},
				"quantity":-5
			},{
				"time":9,
				"gainItem":{"stoneArmor":1},
				"bonusTimeSkill":"stonecutting",
				"costRessource":{"freeStone":9},
				"costPrimaryCharacteristic":{"stamina":18},
				"xpSecondaryCharacteristic":{"strength":18},
				"xpSkill":{"stonecutting":18},
				"quantity":-9
			},{
				"time":3,
				"gainItem":{"stoneHelmet":1},
				"bonusTimeSkill":"stonecutting",
				"costRessource":{"freeStone":3},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"strength":6},
				"xpSkill":{"stonecutting":6},
				"quantity":-3
			},{
				"time":18,
				"gainItem":{"crystalArmor":1},
				"bonusTimeSkill":"stonecutting",
				"costRessource":{"crystals":9},
				"costPrimaryCharacteristic":{"stamina":36},
				"xpSecondaryCharacteristic":{"strength":36},
				"xpSkill":{"stonecutting":36},
				"quantity":-12
			},{
				"time":6,
				"gainItem":{"crystalHelmet":1},
				"bonusTimeSkill":"stonecutting",
				"costRessource":{"crystals":3},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"strength":12},
				"xpSkill":{"stonecutting":12},
				"quantity":-4
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
			"effect":{"name":"destruction", "scale":0.75}
		},
		"width":64,
		"height":32,
		"health":50,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0}
	},
	"quarrierWorkshopYard":{
		"type":"prebuild",
		"picture":{"file":"quarrierWorkshopYard.png",
				   "file100":"quarrierWorkshopYard100.atf"},
		"name":{"EN":"stonecutting workshop",
				"FR":"atelier de taille",
				"JP":"石切場"},
		"description":{"EN":"The stonecutting workshop allows you to manufacture cut stone from stone.",
					   "FR":"L'atelier de taille permet de produire de la pierre taillée à partir de pierre.",
					   "JP":"石材から切石の製造ができるほか、石製品の作成も可能です。厚板を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction", "scale":0.75}
		},
		"width":64,
		"height":32,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0},
		"steps":0
	}
}