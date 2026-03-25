{
	"sewingWorkshop":{
		"type":"workshop",
		"age":"ironAge",
		"no":11,
		"picture":{"file":"sewingWorkshop.png",
				   "file100":"sewingWorkshop100.atf"},
		"name":{"EN":"sewing workshop",
				"FR":"atelier de couture",
				"JP":"裁縫場"},
		"description":{"EN":"The sewing workshop allows you to manufacture clothes from fabric.",
					   "FR":"L'atelier de couture permet de fabriquer des vêtements avec du tissu.",
					   "JP":"織物などを用いて衣類の作成が可能です。厚板を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"plank":10},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":1},
			"xpSecondaryCharacteristic":{"address":1},
			"prebuild":{"id":"sewingWorkshopYard", "time":0.5}
		},
		"quantity":120,
		"zero":{"EN":{"D":["I cannot find any sewing workshop."]},
				"FR":{"D":["Je ne trouve pas d'atelier de couture."]},
				"JP":{"D":["裁縫場が見当たらないな。"]}},
		"title":{"EN":"Manufacture clothes",
				 "FR":"Confectionner des vêtements",
				 "JP":"衣類の製造"},
		"produce":[{
				"time":9,
				"gainItem":{"medievalTunic":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":9},
				"costPrimaryCharacteristic":{"stamina":18},
				"xpSecondaryCharacteristic":{"address":18},
				"xpSkill":{"sewing":18},
				"quantity":-9
			},{
				"time":3,
				"gainItem":{"medievalHat":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":3},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"address":6},
				"xpSkill":{"sewing":6},
				"quantity":-3
			},{
				"time":12,
				"gainItem":{"urbanTunic":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":12},
				"costPrimaryCharacteristic":{"stamina":24},
				"xpSecondaryCharacteristic":{"address":24},
				"xpSkill":{"sewing":24},
				"quantity":-12
			},{
				"time":4,
				"gainItem":{"urbanHat":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":4},
				"costPrimaryCharacteristic":{"stamina":8},
				"xpSecondaryCharacteristic":{"address":8},
				"xpSkill":{"sewing":8},
				"quantity":-4
			},{
				"time":12,
				"gainItem":{"sorcererRobe":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":6, "crystals":3},
				"costPrimaryCharacteristic":{"stamina":24},
				"xpSecondaryCharacteristic":{"address":24},
				"xpSkill":{"sewing":24},
				"quantity":-12
			},{
				"time":4,
				"gainItem":{"sorcererHat":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":2, "crystals":1},
				"costPrimaryCharacteristic":{"stamina":8},
				"xpSecondaryCharacteristic":{"address":8},
				"xpSkill":{"sewing":8},
				"quantity":-4
			},{
				"time":15,
				"gainItem":{"brocarde":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":10, "goldBar":1},
				"costPrimaryCharacteristic":{"stamina":30},
				"xpSecondaryCharacteristic":{"address":30},
				"xpSkill":{"sewing":30},
				"quantity":-15
			},{
				"time":6,
				"gainItem":{"ballHat":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":2, "goldBar":1},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"address":12},
				"xpSkill":{"sewing":12},
				"quantity":-6
			},{
				"time":16,
				"gainItem":{"mageRobe":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":8, "crystals":4},
				"costPrimaryCharacteristic":{"stamina":32},
				"xpSecondaryCharacteristic":{"address":32},
				"xpSkill":{"sewing":32},
				"quantity":-16
			},{
				"time":6,
				"gainItem":{"mageHat":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":3, "crystals":2},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"address":12},
				"xpSkill":{"sewing":12},
				"quantity":-6
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
		"height":56,
		"health":100,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0}
	},
	"sewingWorkshopYard":{
		"type":"prebuild",
		"picture":{"file":"sewingWorkshopYard.png",
				   "file100":"sewingWorkshopYard100.atf"},
		"name":{"EN":"sewing workshop",
				"FR":"atelier de couture",
				"JP":"裁縫場"},
		"description":{"EN":"The sewing workshop allows you to manufacture clothes from fabric.",
					   "FR":"L'atelier de couture permet de fabriquer des vêtements avec du tissu.",
					   "JP":"織物などを用いて衣類の作成が可能です。厚板を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":56,
		"height":56,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0},
		"steps":0
	}
}