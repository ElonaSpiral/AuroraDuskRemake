{
	"stable":{
		"type":"workshop",
		"age":"stoneAge",
		"no":9.5,
		"picture":{"file":"stable.png",
				   "file100":"stable100.atf"},
		"name":{"EN":"stables",
				"FR":"écurie",
				"JP":"厩舎"},
		"description":{"EN":"The stables allow to tame horses.",
					   "FR":"L'écurie vous permet de dresser des chevaux.",
					   "JP":"小麦などを用いて馬の育成が可能です。厚板を用いて建築することができます。"},
		"build":{
			"chooseLocation":true,
			"buildable":"all",
			"costRessource":{"plank":100},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":1},
			"xpSecondaryCharacteristic":{"strength":2},
			"prebuild":{"id":"stableYard", "time":0.5}
		},
		"quantity":50,
		"zero":{"EN":{"D":["I cannot find any stables."]},
				"FR":{"D":["Je ne trouve pas d'écurie."]},
				"JP":{"D":["厩舎が見当たらないな。"]}},
		"title":{"EN":"Tame horses",
				 "FR":"Dresser des chevaux",
				 "JP":"馬の訓練"},
		"produce":[{
				"time":13,
				"gainItem":{"mountSaddleHorse":1},
				"bonusTimeSkill":"training",
				"costRessource":{"grain":20, "leather":6},
				"costPrimaryCharacteristic":{"stamina":26},
				"xpSecondaryCharacteristic":{"charisma":26},
				"xpSkill":{"training":26},
				"quantity":-1
			},{
				"time":19,
				"gainItem":{"mountWarHorse":1},
				"bonusTimeSkill":"training",
				"costRessource":{"grain":20, "castIron":6},
				"costPrimaryCharacteristic":{"stamina":38},
				"xpSecondaryCharacteristic":{"charisma":38},
				"xpSkill":{"training":38},
				"quantity":-1
			},{
				"time":22,
				"gainItem":{"mountUnicorn":1},
				"bonusTimeSkill":"training",
				"costRessource":{"grain":20, "crystals":6},
				"costPrimaryCharacteristic":{"stamina":44},
				"xpSecondaryCharacteristic":{"charisma":44},
				"xpSkill":{"training":44},
				"quantity":-1
			},{
				"time":25,
				"gainItem":{"mountPalfrey":1},
				"bonusTimeSkill":"training",
				"costRessource":{"grain":20, "goldBar":3},
				"costPrimaryCharacteristic":{"stamina":50},
				"xpSecondaryCharacteristic":{"charisma":50},
				"xpSkill":{"training":50},
				"quantity":-1
			},{
				"time":25,
				"gainItem":{"mountRaceHorse":1},
				"bonusTimeSkill":"training",
				"costRessource":{"grain":20, "fabric":10},
				"costPrimaryCharacteristic":{"stamina":50},
				"xpSecondaryCharacteristic":{"charisma":50},
				"xpSkill":{"training":50},
				"quantity":-1
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
			"effect":{"name":"destruction", "scale":2}
		},
		"width":128,
		"height":128,
		"visualHeight":160,
		"health":1000,
		"defense":125,
		"resistance":{"fire":2, "death":0.5, "demolition":2}
	},
	"stableYard":{
		"type":"prebuild",
		"picture":{"file":"stableYard.png",
				   "file100":"stableYard100.atf"},
		"name":{"EN":"stables",
				"FR":"écurie",
				"JP":"厩舎"},
		"description":{"EN":"The stables allow to tame horses.",
					   "FR":"L'écurie vous permet de dresser des chevaux.",
					   "JP":"小麦などを用いて馬の育成が可能です。厚板を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction", "scale":2}
		},
		"width":128,
		"height":128,
		"visualHeight":160,
		"defense":125,
		"resistance":{"fire":2, "death":0.5, "demolition":2},
		"steps":3
	}
}