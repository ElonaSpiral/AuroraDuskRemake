{
	"windmill":{
		"type":"workshop",
		"age":"stoneAge",
		"no":6,
		"picture":{"file":"windmill.png",
				   "file100":"windmill100.atf"},
		"frames":8,
		"name":{"EN":"windmill",
				"FR":"moulin à vent",
				"JP":"風車小屋"},
		"description":{"EN":"The windmill is a workshop which allows you to grind wheat into flour.",
					   "FR":"Le moulin permet de moudre des céréales en farine.",
					   "JP":"小麦から、小麦粉や藁を用いた製品の製造が可能です。厚板を用いて建築することができます。"},
		"build":{
			"chooseLocation":true,
			"buildable":"all",
			"costRessource":{"plank":80},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":1},
			"xpSecondaryCharacteristic":{"address":1},
			"prebuild":{"id":"windmillYard", "time":0.5}
		},
		"quantity":800,
		"zero":{"EN":{"D":["I cannot find any windmill."]},
				"FR":{"D":["Je ne trouve pas de moulin à vent."]},
				"JP":{"D":["風車小屋が見当たらないな。"]}},
		"title":{"EN":"Grind flour",
				 "FR":"Moudre de la farine",
				 "JP":"小麦を挽く"},
		"produce":[{
				"time":1,
				"gainRessource":{"flour":1},
				"sound":"soundPick",
				"bonusSkill":"harvesting",
				"costRessource":{"grain":1},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"rapidity":2},
				"xpSkill":{"harvesting":2},
				"repeat":true,
				"quantity":-1
			},{
				"time":2,
				"gainItem":{"strawHat":1},
				"bonusTimeSkill":"harvesting",
				"costRessource":{"grain":2},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"rapidity":4},
				"xpSkill":{"harvesting":4},
				"quantity":-2
			}],
		"repair":{
			"health":8,
			"time":0.5,
			"costRessource":{"plank":1},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"repairing",
			"xpSkill":{"repairing":1},
			"xpSecondaryCharacteristic":{"rapidity":1}
		},
		"death":{
			"effect":{"name":"destruction", "scale":1.5}
		},
		"width":60,
		"visualWidth":140,
		"height":128,
		"visualHeight":152,
		"health":640,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0}
	},
	"windmillYard":{
		"type":"prebuild",
		"picture":{"file":"windmillYard.png",
				   "file100":"windmillYard100.atf"},
		"name":{"EN":"windmill",
				"FR":"moulin à vent",
				"JP":"風車小屋"},
		"description":{"EN":"The windmill is a workshop which allows you to grind wheat into flour.",
					   "FR":"Le moulin permet de moudre des céréales en farine.",
					   "JP":"小麦から、小麦粉や藁を用いた製品の製造が可能です。厚板を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction", "scale":1.5}
		},
		"width":60,
		"visualWidth":128,
		"height":96,
		"visualHeight":152,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0},
		"steps":3
	}
}