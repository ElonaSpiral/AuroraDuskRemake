{
	"distillery":{
		"type":"workshop",
		"age":"ironAge",
		"no":11,
		"picture":{"file":"distillery.png",
				   "file100":"distillery100.atf"},
		"name":{"EN":"distillery",
				"FR":"distillerie",
				"JP":"蒸溜所"},
		"description":{"EN":"The distillery is a workshop which allows to manufacture alcohol.",
					   "FR":"La distillerie permet de fabriquer de l'alcool.",
					   "JP":"各種の素材から酒類の蒸溜が可能です。鋳鉄を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"castIron":5},
			"costPrimaryCharacteristic":{"stamina":3},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":3},
			"xpSecondaryCharacteristic":{"strength":3},
			"prebuild":{"id":"distilleryYard", "time":1.5}
		},
		"quantity":100,
		"zero":{"EN":{"D":["I cannot find any distillery."]},
				"FR":{"D":["Je ne trouve pas de distillerie."]},
				"JP":{"D":["蒸溜所が見当たらないな。"]}},
		"title":{"EN":"Distil alcohol",
				 "FR":"Distiller de l'alcool",
				 "JP":"酒類の蒸溜"},
		"produce":[{
				"time":1,
				"gainItem":{"beer":1},
				"sound":"soundBottle",
				"bonusSkill":"alcohols",
				"costRessource":{"grain":1},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"address":2},
				"xpSkill":{"alcohols":2},
				"repeat":true,
				"quantity":-1
			},{
				"time":1,
				"gainItem":{"wine":1},
				"sound":"soundBottle",
				"bonusSkill":"alcohols",
				"costRessource":{"fruits":2},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"address":2},
				"xpSkill":{"alcohols":2},
				"repeat":true,
				"quantity":-1
			},{
				"time":1,
				"gainItem":{"absinthe":1},
				"sound":"soundBottle",
				"bonusSkill":"alcohols",
				"costRessource":{"medicinalHerbs":2},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"address":2},
				"xpSkill":{"alcohols":2},
				"repeat":true,
				"quantity":-1
			}],
		"repair":{
			"health":15,
			"time":1.5,
			"costRessource":{"castIron":1},
			"costPrimaryCharacteristic":{"stamina":3},
			"sound":"soundBuilding",
			"bonusSkill":"repairing",
			"xpSkill":{"repairing":3},
			"xpSecondaryCharacteristic":{"endurance":3}
		},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":64,
		"height":80,
		"health":75,
		"defense":300,
		"resistance":{"death":0.5, "demolition":2, "poison":0}
	},
	"distilleryYard":{
		"type":"prebuild",
		"picture":{"file":"distilleryYard.png",
				   "file100":"distilleryYard100.atf"},
		"name":{"EN":"distillery",
				"FR":"distillerie",
				"JP":"蒸溜所"},
		"description":{"EN":"The distillery is a workshop which allows you to manufacture liquor.",
					   "FR":"La distillerie permet de fabriquer de l'alcool.",
					   "JP":"各種の素材から酒類の蒸溜が可能です。鋳鉄を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":64,
		"height":80,
		"defense":300,
		"resistance":{"death":0.5, "demolition":2, "poison":0},
		"steps":0
	}
}