{
	"loom":{
		"type":"workshop",
		"age":"stoneAge",
		"no":8,
		"picture":{"file":"loom.png",
				   "file100":"loom100.atf"},
		"name":{"EN":"loom",
				"FR":"métier à tisser",
				"JP":"織機"},
		"description":{"EN":"The loom is a workshop which allows you to manufacture fabric from wool.",
					   "FR":"Le métier à tisser permet de fabriquer du tissu à partir de laine.",
					   "JP":"羊毛から、織物や一部衣類の製造が可能です。厚板を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"plank":15},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":1},
			"xpSecondaryCharacteristic":{"strength":1},
			"prebuild":{"id":"loomYard", "time":0.5}
		},
		"quantity":100,
		"zero":{"EN":{"D":["I cannot find any loom."]},
				"FR":{"D":["Je ne trouve pas de métier à tisser."]},
				"JP":{"D":["織機が見当たらないな。"]}},
		"title":{"EN":"Weave fabric",
				 "FR":"Tisser des étoffes",
				 "JP":"布を織る"},
		"produce":[{
				"time":1,
				"gainRessource":{"fabric":1},
				"sound":"soundPick",
				"bonusSkill":"weaving",
				"costRessource":{"wool":1},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"rapidity":2},
				"xpSkill":{"weaving":2},
				"repeat":true,
				"quantity":-1
			},{
				"time":6,
				"gainItem":{"chiton":1},
				"bonusTimeSkill":"weaving",
				"costRessource":{"fabric":6},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"address":12},
				"xpSkill":{"weaving":12},
				"quantity":-6
			},{
				"time":3,
				"gainItem":{"bandana":1},
				"bonusTimeSkill":"weaving",
				"costRessource":{"fabric":2},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"address":6},
				"xpSkill":{"weaving":6},
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
			"xpSecondaryCharacteristic":{"endurance":1}
		},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":64,
		"height":80,
		"health":150,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0}
	},
	"loomYard":{
		"type":"prebuild",
		"picture":{"file":"loomYard.png",
				   "file100":"loomYard100.atf"},
		"name":{"EN":"loom",
				"FR":"métier à tisser",
				"JP":"織機"},
		"description":{"EN":"The loom is a workshop which allows you to manufacture fabric from wool.",
					   "FR":"Le métier à tisser permet de fabriquer du tissu à partir de laine.",
					   "JP":"羊毛から、織物や一部衣類の製造が可能です。厚板を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":64,
		"height":80,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0},
		"steps":0
	}
}