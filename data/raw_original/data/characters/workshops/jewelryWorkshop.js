{
	"jewelryWorkshop":{
		"type":"workshop",
		"age":"goldenAge",
		"no":21,
		"picture":{"file":"jewelryWorkshop.png",
				   "file100":"jewelryWorkshop100.atf"},
		"name":{"EN":"jewellery workshop",
				"FR":"atelier de bijouterie",
				"JP":"宝石細工場"},
		"description":{"EN":"The jewellery workshop allows you to manufacture rings and necklaces from gold bars.",
					   "FR":"L'atelier de bijouterie vous permet de fabriquer des anneaux et des colliers à partir de lingots d'or.",
					   "JP":"棒金などを用いて指輪や首飾りの製造が可能です。厚板を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"plank":10},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":1},
			"xpSecondaryCharacteristic":{"address":1},
			"prebuild":{"id":"jewelryWorkshopYard", "time":0.5}
		},
		"quantity":100,
		"zero":{"EN":{"D":["I cannot find any jewellery workshop."]},
				"FR":{"D":["Je ne trouve pas d'atelier de bijouterie."]},
				"JP":{"D":["宝石細工場が見当たらないな。"]}},
		"title":{"EN":"Manufacture jewels",
				 "FR":"Fabriquer des bijoux",
				 "JP":"宝石細工の製造"},
		"produce":[{
				"time":5,
				"gainItem":{"lifeRing":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":2},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"address":10},
				"xpSkill":{"goldsmithery":10},
				"quantity":-4
			},{
				"time":5,
				"gainItem":{"lifeRegenerationRing":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":2},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"address":10},
				"xpSkill":{"goldsmithery":10},
				"quantity":-4
			},{
				"time":5,
				"gainItem":{"vitalityRing":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":2},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"address":10},
				"xpSkill":{"goldsmithery":10},
				"quantity":-4
			},{
				"time":4.5,
				"gainItem":{"magicRing":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":1, "crystals":1},
				"costPrimaryCharacteristic":{"stamina":9},
				"xpSecondaryCharacteristic":{"address":9},
				"xpSkill":{"goldsmithery":9},
				"quantity":-4
			},{
				"time":4.5,
				"gainItem":{"manaRegenerationRing":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":1, "crystals":1},
				"costPrimaryCharacteristic":{"stamina":9},
				"xpSecondaryCharacteristic":{"address":9},
				"xpSkill":{"goldsmithery":9},
				"quantity":-4
			},{
				"time":5.5,
				"gainItem":{"ringOfProtection":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":1, "castIron":2},
				"costPrimaryCharacteristic":{"stamina":11},
				"xpSecondaryCharacteristic":{"address":11},
				"xpSkill":{"goldsmithery":11},
				"quantity":-4
			},{
				"time":10.5,
				"gainItem":{"amuletOfProtection":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":3, "castIron":2},
				"costPrimaryCharacteristic":{"stamina":21},
				"xpSecondaryCharacteristic":{"address":21},
				"xpSkill":{"goldsmithery":21},
				"quantity":-8
			},{
				"time":10,
				"gainItem":{"amuletOfCheetah":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":4},
				"costPrimaryCharacteristic":{"stamina":20},
				"xpSecondaryCharacteristic":{"address":20},
				"xpSkill":{"goldsmithery":20},
				"quantity":-8
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
		"width":64,
		"height":48,
		"health":100,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0}
	},
	"jewelryWorkshopYard":{
		"type":"prebuild",
		"picture":{"file":"jewelryWorkshopYard.png",
				   "file100":"jewelryWorkshopYard100.atf"},
		"name":{"EN":"jewellery workshop",
				"FR":"atelier de bijouterie",
				"JP":"宝石細工場"},
		"description":{"EN":"The jewellery workshop allows you to manufacture rings and necklaces from gold bars.",
					   "FR":"L'atelier de bijouterie vous permet de fabriquer des anneaux et des colliers à partir de lingots d'or.",
					   "JP":"棒金などを用いて指輪や首飾りの製造が可能です。厚板を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":64,
		"height":48,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0},
		"steps":0
	}
}