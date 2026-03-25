{
	"shoemakingWorkshop":{
		"type":"workshop",
		"age":"stoneAge",
		"no":9,
		"picture":{"file":"shoemakingWorkshop.png",
				   "file100":"shoemakingWorkshop100.atf"},
		"name":{"EN":"shoemaking workshop",
				"FR":"atelier de cordonnerie",
				"JP":"靴作り場"},
		"description":{"EN":"The shoemaking workshop allows you to manufacture shoes.",
					   "FR":"L'atelier de cordonnerie permet de fabriquer des chaussures.",
					   "JP":"なめし革などを用いて靴の製造が可能です。厚板を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"plank":10},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":1},
			"xpSecondaryCharacteristic":{"address":1},
			"prebuild":{"id":"shoemakingWorkshopYard", "time":0.5}
		},
		"quantity":120,
		"zero":{"EN":{"D":["I cannot find any shoemaking workshop."]},
				"FR":{"D":["Je ne trouve pas d'atelier de cordonnerie."]},
				"JP":{"D":["靴作り場が見当たらないな。"]}},
		"title":{"EN":"Manufacture shoes",
				 "FR":"Fabriquer des chaussures",
				 "JP":"靴の製造"},
		"produce":[{
				"time":1.5,
				"gainItem":{"sandals":1},
				"bonusTimeSkill":"shoemaking",
				"costRessource":{"leather":3},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"address":3},
				"xpSkill":{"shoemaking":3},
				"quantity":-3
			},{
				"time":2,
				"gainItem":{"boots":1},
				"bonusTimeSkill":"shoemaking",
				"costRessource":{"leather":4},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"address":4},
				"xpSkill":{"shoemaking":4},
				"quantity":-4
			},{
				"time":3.5,
				"gainItem":{"studdedBoots":1},
				"bonusTimeSkill":"shoemaking",
				"costRessource":{"leather":4, "castIron":1},
				"costPrimaryCharacteristic":{"stamina":7},
				"xpSecondaryCharacteristic":{"address":7},
				"xpSkill":{"shoemaking":7},
				"quantity":-7
			},{
				"time":3,
				"gainItem":{"chainLeggings":1},
				"bonusTimeSkill":"shoemaking",
				"costRessource":{"castIron":2},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"address":6},
				"xpSkill":{"shoemaking":6},
				"quantity":-6
			},{
				"time":2.5,
				"gainItem":{"urbanShoes":1},
				"bonusTimeSkill":"shoemaking",
				"costRessource":{"leather":5},
				"costPrimaryCharacteristic":{"stamina":5},
				"xpSecondaryCharacteristic":{"address":5},
				"xpSkill":{"shoemaking":5},
				"quantity":-5
			},{
				"time":4.5,
				"gainItem":{"plateBoots":1},
				"bonusTimeSkill":"shoemaking",
				"costRessource":{"castIron":3},
				"costPrimaryCharacteristic":{"stamina":9},
				"xpSecondaryCharacteristic":{"address":9},
				"xpSkill":{"shoemaking":9},
				"quantity":-9
			},{
				"time":4,
				"gainItem":{"sorcererShoes":1},
				"bonusTimeSkill":"shoemaking",
				"costRessource":{"leather":4, "crystals":1},
				"costPrimaryCharacteristic":{"stamina":8},
				"xpSecondaryCharacteristic":{"address":8},
				"xpSkill":{"shoemaking":8},
				"quantity":-8
			},{
				"time":7,
				"gainItem":{"balShoes":1},
				"bonusTimeSkill":"shoemaking",
				"costRessource":{"leather":4, "goldBar":1},
				"costPrimaryCharacteristic":{"stamina":14},
				"xpSecondaryCharacteristic":{"address":14},
				"xpSkill":{"shoemaking":14},
				"quantity":-14
			},{
				"time":5,
				"gainItem":{"mageShoes":1},
				"bonusTimeSkill":"shoemaking",
				"costRessource":{"leather":6, "crystals":1},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"address":10},
				"xpSkill":{"shoemaking":10},
				"quantity":-10
			},{
				"time":10,
				"gainItem":{"sevenPlacesBoots":1},
				"bonusTimeSkill":"shoemaking",
				"costRessource":{"leather":10},
				"costPrimaryCharacteristic":{"stamina":20},
				"xpSecondaryCharacteristic":{"address":20},
				"xpSkill":{"shoemaking":20},
				"quantity":-20
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
			"effect":{"name":"destruction", "scale":0.75}
		},
		"width":40,
		"height":48,
		"health":100,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0}
	},
	"shoemakingWorkshopYard":{
		"type":"prebuild",
		"picture":{"file":"shoemakingWorkshopYard.png",
				   "file100":"shoemakingWorkshopYard100.atf"},
		"name":{"EN":"shoemaking workshop",
				"FR":"atelier de cordonnerie",
				"JP":"靴作り場"},
		"description":{"EN":"The shoemaking workshop allows you to manufacture shoes.",
					   "FR":"L'atelier de cordonnerie permet de fabriquer des chaussures.",
					   "JP":"なめし革などを用いて靴の製造が可能です。厚板を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction", "scale":0.75}
		},
		"width":40,
		"height":48,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0},
		"steps":0
	}
}