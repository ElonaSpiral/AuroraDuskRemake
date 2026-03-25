{
	"powerArmorsWorkshop":{
		"type":"workshop",
		"age":"steamAge",
		"no":22,
		"picture":{"file":"powerArmorsWorkshop.png",
				   "file100":"powerArmorsWorkshop100.atf"},
		"name":{"EN":"power armours workshop",
				"FR":"atelier d'armures assistées",
				"JP":"パワーアーマー工房"},
		"description":{"EN":"This workshop allows you to manufacture steam-powered armours.",
					   "FR":"Cet atelier permet de fabriquer des armures assistées fonctionnant à la vapeur.",
					   "JP":"鋼鉄を用いて蒸気駆動のパワーアーマーの製造が可能です。鋼鉄を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"steel":50},
			"costPrimaryCharacteristic":{"stamina":3},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":3},
			"xpSecondaryCharacteristic":{"strength":3},
			"prebuild":{"id":"powerArmorsWorkshopYard", "time":1.5}
		},
		"quantity":100,
		"zero":{"EN":{"D":["I cannot find any power armours workshop."]},
				"FR":{"D":["Je ne trouve pas d'atelier d'armures assistées."]},
				"JP":{"D":["パワーアーマー工房が見当たらないな。"]}},
		"title":{"EN":"Manufacture power armours",
				 "FR":"Fabriquer des armures assistées",
				 "JP":"パワーアーマーの製造"},
		"produce":[{
				"time":50,
				"gainItem":{"mountWorkerPowerArmor":1},
				"bonusTimeSkill":"powerArmorsForging",
				"costRessource":{"steel":50},
				"costPrimaryCharacteristic":{"stamina":50},
				"xpSecondaryCharacteristic":{"endurance":50},
				"xpSkill":{"powerArmorsForging":50},
				"quantity":-5
			},{
				"time":50,
				"gainItem":{"mountPredatorPowerArmor":1},
				"bonusTimeSkill":"powerArmorsForging",
				"costRessource":{"steel":50},
				"costPrimaryCharacteristic":{"stamina":50},
				"xpSecondaryCharacteristic":{"endurance":50},
				"xpSkill":{"powerArmorsForging":50},
				"quantity":-5
			}],
		"repair":{
			"health":8,
			"time":1.5,
			"costRessource":{"steel":3},
			"costPrimaryCharacteristic":{"stamina":3},
			"sound":"soundBuilding",
			"bonusSkill":"repairing",
			"xpSkill":{"repairing":3},
			"xpSecondaryCharacteristic":{"endurance":3}
		},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":96,
		"height":90,
		"health":400,
		"defense":200,
		"resistance":{"death":0.5, "demolition":2}
	},
	"powerArmorsWorkshopYard":{
		"type":"prebuild",
		"picture":{"file":"powerArmorsWorkshopYard.png",
				   "file100":"powerArmorsWorkshopYard100.atf"},
		"name":{"EN":"power armours workshop",
				"FR":"atelier d'armures assistées",
				"JP":"パワーアーマー工房"},
		"description":{"EN":"This workshop allows you to manufacture steam-powered armours.",
					   "FR":"Cet atelier permet de fabriquer des armures assistées fonctionnant à la vapeur.",
					   "JP":"鋼鉄を用いて蒸気駆動のパワーアーマーの製造が可能です。鋼鉄を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":96,
		"height":90,
		"defense":400,
		"resistance":{"death":0.5, "demolition":2},
		"steps":0
	}
}