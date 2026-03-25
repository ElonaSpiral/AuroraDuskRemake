{
	"tableSaw":{
		"type":"workshop",
		"age":"stoneAge",
		"no":3,
		"picture":{"file":"tableSaw.png",
				   "file100":"tableSaw100.atf"},
		"name":{"EN":"sawbench",
				"FR":"banc de scie",
				"JP":"鋸台"},
		"description":{"EN":"The sawbench is a workshop which allows you to manufacture planks from wood.",
					   "FR":"Le banc de scie permet de fabriquer des planches à partir de bois.",
					   "JP":"木材から厚板の製造ができるほか、一部木製品の作成も可能です。木材を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"wood":20},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":1},
			"xpSecondaryCharacteristic":{"strength":1},
			"prebuild":{"id":"tableSawYard", "time":0.5}
		},
		"quantity":100,
		"zero":{"EN":{"D":["I cannot find any sawbench."]},
				"FR":{"D":["Je ne trouve pas de banc de scie."]},
				"JP":{"D":["鋸台が見当たらないな。"]}},
		"title":{"EN":"Saw planks",
				 "FR":"Scier des planches",
				 "JP":"厚板の切断"},
		"produce":[{
				"time":0.5,
				"gainRessource":{"plank":1},
				"sound":"soundSaw",
				"bonusSkill":"sawing",
				"costRessource":{"wood":1},
				"costPrimaryCharacteristic":{"stamina":1},
				"xpSecondaryCharacteristic":{"strength":1},
				"xpSkill":{"sawing":1},
				"repeat":true,
				"quantity":-1
			},{
				"time":2.5,
				"gainItem":{"woodenShield":1},
				"bonusTimeSkill":"sawing",
				"costRessource":{"plank":5},
				"costPrimaryCharacteristic":{"stamina":5},
				"xpSecondaryCharacteristic":{"strength":5},
				"xpSkill":{"sawing":5},
				"quantity":-5
			},{
				"time":4.5,
				"gainItem":{"woodenArmor":1},
				"bonusTimeSkill":"sawing",
				"costRessource":{"plank":9},
				"costPrimaryCharacteristic":{"stamina":9},
				"xpSecondaryCharacteristic":{"strength":9},
				"xpSkill":{"sawing":9},
				"quantity":-9
			},{
				"time":1.5,
				"gainItem":{"woodenHelmet":1},
				"bonusTimeSkill":"sawing",
				"costRessource":{"plank":3},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"strength":3},
				"xpSkill":{"sawing":3},
				"quantity":-3
			},{
				"time":2.5,
				"gainItem":{"clogs":1},
				"bonusTimeSkill":"shoemaking",
				"costRessource":{"wood":10},
				"costPrimaryCharacteristic":{"stamina":5},
				"xpSecondaryCharacteristic":{"address":5},
				"xpSkill":{"sawing":5},
				"quantity":-5
			}],
		"repair":{
			"health":5,
			"time":0.5,
			"costRessource":{"wood":1},
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
		"defense":100,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0}
	},
	"tableSawYard":{
		"type":"prebuild",
		"picture":{"file":"tableSawYard.png",
				   "file100":"tableSawYard100.atf"},
		"name":{"EN":"sawbench",
				"FR":"banc de scie",
				"JP":"鋸台"},
		"description":{"EN":"The sawbench is a workshop which allows you to manufacture planks from wood.",
					   "FR":"Le banc de scie permet de fabriquer des planches à partir de bois.",
					   "JP":"木材から厚板の製造ができるほか、一部木製品の作成も可能です。木材を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":64,
		"height":64,
		"defense":100,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0},
		"steps":0
	}
}