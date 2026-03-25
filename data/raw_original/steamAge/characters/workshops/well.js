{
	"well":{
		"type":"workshop",
		"age":"stoneAge",
		"no":5.5,
		"picture":{"file":"well.png",
				   "file100":"well100.atf"},
		"name":{"EN":"well",
				"FR":"puits",
				"JP":"井戸"},
		"description":{"EN":"The well allows you to draw drinkable water.",
					   "FR":"Le puits permet de puiser de l'eau potable.",
					   "JP":"飲用可能な水を汲むことが可能です。厚板と切石を用いて建築することができます。"},
		"build":{
			"chooseLocation":true,
			"buildable":"all",
			"costRessource":{"plank":10, "freeStone":10},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":1},
			"xpSecondaryCharacteristic":{"address":1},
			"prebuild":{"id":"wellYard", "time":0.75}
		},
		"quantity":250,
		"zero":{"EN":{"D":["I cannot find any well."]},
				"FR":{"D":["Je ne trouve pas de puits."]},
				"JP":{"D":["井戸が見当たらないな。"]}},
		"produce":[{
				"time":1,
				"gainRessource":{"water":2},
				"sound":"soundWater",
				"bonusSkill":"picking",
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"rapidity":2},
				"xpSkill":{"picking":2},
				"repeat":true,
				"quantity":-1
			}],
		"repair":{
			"health":20,
			"time":0.5,
			"costRessource":{"plank":1, "freeStone":1},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"repairing",
			"xpSkill":{"repairing":1},
			"xpSecondaryCharacteristic":{"rapidity":1}
		},
		"death":{
			"effect":{"name":"destruction", "scale":1.25}
		},
		"width":48,
		"height":96,
		"health":200,
		"defense":150,
		"resistance":{"fire":1.5, "death":0.5, "demolition":2}
	},
	"wellYard":{
		"type":"prebuild",
		"picture":{"file":"wellYard.png",
				   "file100":"wellYard100.atf"},
		"name":{"EN":"well",
				"FR":"puits",
				"JP":"井戸"},
		"description":{"EN":"The well allows you to draw drinkable water.",
					   "FR":"Le puits permet de puiser de l'eau potable.",
					   "JP":"飲用可能な水を汲むことが可能です。厚板と切石を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction", "scale":1.25}
		},
		"width":48,
		"height":96,
		"defense":150,
		"resistance":{"fire":1.5, "death":0.5, "demolition":2},
		"steps":0
	}
}