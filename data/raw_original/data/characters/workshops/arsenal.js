{
	"arsenal":{
		"type":"workshop",
		"age":"goldenAge",
		"no":20,
		"picture":{"file":"arsenal.png",
				   "file100":"arsenal100.atf"},
		"name":{"EN":"arsenal",
				"FR":"arsenal",
				"JP":"造兵廠"},
		"description":{"EN":"The arsenal is a workshop which allows you to manufacture firearms from cast iron and sulphur.",
					   "FR":"L'arsenal est un atelier qui vous permet de fabriquer des armes à feu à partir de lingots de fonte et de soufre.",
					   "JP":"鋳鉄や鋼鉄、硫黄を用いて銃器および弾薬の製造が可能です。厚板を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"plank":15},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":1},
			"xpSecondaryCharacteristic":{"address":1},
			"prebuild":{"id":"arsenalYard", "time":0.5}
		},
		"quantity":100,
		"zero":{"EN":{"D":["I cannot find any arsenal."]},
				"FR":{"D":["Je ne trouve pas d'arsenal."]},
				"JP":{"D":["造兵廠が見当たらないな。"]}},
		"title":{"EN":"Manufacture firearms",
				 "FR":"Fabriquer des armes à feu",
				 "JP":"銃器製造"},
		"produce":[{
				"time":7.5,
				"gainItem":{"handgun":1},
				"bonusTimeSkill":"firearmsForging",
				"costRessource":{"castIron":5},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"firearmsForging":15},
				"quantity":-5
			},{
				"time":15,
				"gainItem":{"rifle":1},
				"bonusTimeSkill":"firearmsForging",
				"costRessource":{"castIron":10},
				"costPrimaryCharacteristic":{"stamina":30},
				"xpSecondaryCharacteristic":{"strength":30},
				"xpSkill":{"firearmsForging":30},
				"quantity":-10
			},{
				"time":4,
				"gainItem":{"cartridges":5},
				"bonusSkill":"firearmsForging",
				"costRessource":{"sulfur":1, "castIron":1},
				"costPrimaryCharacteristic":{"stamina":8},
				"xpSecondaryCharacteristic":{"address":8},
				"xpSkill":{"firearmsForging":8},
				"repeat":true,
				"quantity":-2
			},{
				"time":30,
				"gainItem":{"shoulderCannon":1},
				"bonusTimeSkill":"firearmsForging",
				"costRessource":{"castIron":20},
				"costPrimaryCharacteristic":{"stamina":60},
				"xpSecondaryCharacteristic":{"strength":60},
				"xpSkill":{"firearmsForging":60},
				"quantity":-20
			},{
				"time":5.5,
				"gainItem":{"cannonBalls":1},
				"bonusSkill":"firearmsForging",
				"costRessource":{"castIron":2, "sulfur":1},
				"costPrimaryCharacteristic":{"stamina":11},
				"xpSecondaryCharacteristic":{"address":11},
				"xpSkill":{"firearmsForging":11},
				"repeat":true,
				"quantity":-3
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
			"effect":{"name":"destruction"}
		},
		"width":56,
		"height":64,
		"health":150,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0}
	},
	"arsenalYard":{
		"type":"prebuild",
		"picture":{"file":"arsenalYard.png",
				   "file100":"arsenalYard100.atf"},
		"name":{"EN":"arsenal",
				"FR":"arsenal",
				"JP":"造兵廠"},
		"description":{"EN":"The arsenal is a workshop which allows you to manufacture firearms from cast iron and sulphur.",
					   "FR":"L'arsenal est un atelier qui vous permet de fabriquer des armes à feu à partir de lingots de fonte et de soufre.",
					   "JP":"鋳鉄や鋼鉄、硫黄を用いて銃器および弾薬の製造が可能です。厚板を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":56,
		"height":64,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0},
		"steps":0
	}
}