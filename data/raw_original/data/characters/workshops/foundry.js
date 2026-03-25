{
	"foundry":{
		"type":"workshop",
		"age":"ironAge",
		"no":13,
		"picture":{"file":"foundry.png",
				   "file100":"foundry100.atf"},
		"name":{"EN":"foundry",
				"FR":"fonderie",
				"JP":"鋳造所"},
		"description":{"EN":"The foundry is a workshop which allows you to manufacture metal bars from minerals.",
					   "FR":"La fonderie permet de fabriquer des lingots de métal à partir de minerais.",
					   "JP":"原鉄などの鉱物から各種金属棒の鋳造が可能です。切石を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"freeStone":10},
			"costPrimaryCharacteristic":{"stamina":2},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":2},
			"xpSecondaryCharacteristic":{"strength":2},
			"prebuild":{"id":"foundryYard", "time":1}
		},
		"quantity":100,
		"zero":{"EN":{"D":["I cannot find any foundry."]},
				"FR":{"D":["Je ne trouve pas de fonderie."]},
				"JP":{"D":["鋳造所が見当たらないな。"]}},
		"title":{"EN":"Smelt metal bars",
				 "FR":"Fondre des lingots de métal",
				 "JP":"金属棒の鋳造"},
		"produce":[{
				"time":1.5,
				"gainRessource":{"castIron":1},
				"sound":"soundIronSteam",
				"bonusSkill":"metalSmelting",
				"costRessource":{"iron":1},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"endurance":3},
				"xpSkill":{"metalSmelting":3},
				"repeat":true,
				"quantity":-1
			},{
				"time":2.5,
				"gainRessource":{"goldBar":1},
				"sound":"soundIronSteam",
				"bonusSkill":"metalSmelting",
				"costRessource":{"gold":1},
				"costPrimaryCharacteristic":{"stamina":5},
				"xpSecondaryCharacteristic":{"endurance":5},
				"xpSkill":{"metalSmelting":5},
				"repeat":true,
				"quantity":-1
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
	},
	"foundryYard":{
		"type":"prebuild",
		"picture":{"file":"foundryYard.png",
				   "file100":"foundryYard100.atf"},
		"name":{"EN":"foundry",
				"FR":"fonderie",
				"JP":"鋳造所"},
		"description":{"EN":"The foundry is a workshop which allows you to manufacture metal bars from minerals.",
					   "FR":"La fonderie permet de fabriquer des lingots de métal à partir de minerais.",
					   "JP":"原鉄などの鉱物から各種金属棒の鋳造が可能です。切石を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":64,
		"height":64,
		"defense":200,
		"resistance":{"death":0.5, "demolition":2, "poison":0},
		"steps":0
	}
}