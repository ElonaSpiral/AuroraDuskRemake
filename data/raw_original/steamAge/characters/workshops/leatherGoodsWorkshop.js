{
	"leatherGoodsWorkshop":{
		"type":"workshop",
		"age":"stoneAge",
		"no":9.5,
		"picture":{"file":"leatherGoodsWorkshop.png",
				   "file100":"leatherGoodsWorkshop100.atf"},
		"name":{"EN":"leathermaking workshop",
				"FR":"atelier de maroquinerie",
				"JP":"革工房"},
		"description":{"EN":"The leathermaking workshop allows you to manufacture gloves and belts from leather.",
					   "FR":"L'atelier de maroquinerie permet de fabriquer des gants et des ceintures à partir de cuir.",
					   "JP":"なめし革などを用いて手袋やベルトの製造が可能です。厚板を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"plank":10},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":1},
			"xpSecondaryCharacteristic":{"address":1},
			"prebuild":{"id":"leatherGoodsWorkshopYard", "time":0.5}
		},
		"quantity":120,
		"zero":{"EN":{"D":["I cannot find any leathermaking workshop."]},
				"FR":{"D":["Je ne trouve pas d'atelier de maroquinerie."]},
				"JP":{"D":["革工房が見当たらないな。"]}},
		"title":{"EN":"Work leather",
				 "FR":"Travailler le cuir",
				 "JP":"革製品の製造"},
		"produce":[{
				"time":2,
				"gainItem":{"leatherGloves":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":4},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"address":4},
				"xpSkill":{"leatherwork":4},
				"quantity":-4
			},{
				"time":2,
				"gainItem":{"leatherBelt":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":4},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"address":4},
				"xpSkill":{"leatherwork":4},
				"quantity":-4
			},{
				"time":2.5,
				"gainItem":{"backpack":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":5},
				"costPrimaryCharacteristic":{"stamina":5},
				"xpSecondaryCharacteristic":{"address":5},
				"xpSkill":{"leatherwork":5},
				"quantity":-5
			},{
				"time":3.5,
				"gainItem":{"studdedLeatherGloves":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":4, "castIron":1},
				"costPrimaryCharacteristic":{"stamina":7},
				"xpSecondaryCharacteristic":{"address":7},
				"xpSkill":{"leatherwork":7},
				"quantity":-7
			},{
				"time":3.5,
				"gainItem":{"beltOfFortitude":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":4, "castIron":1},
				"costPrimaryCharacteristic":{"stamina":7},
				"xpSecondaryCharacteristic":{"address":7},
				"xpSkill":{"leatherwork":7},
				"quantity":-7
			},{
				"time":3.5,
				"gainItem":{"beltOfAgility":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":4, "castIron":1},
				"costPrimaryCharacteristic":{"stamina":7},
				"xpSecondaryCharacteristic":{"address":7},
				"xpSkill":{"leatherwork":7},
				"quantity":-7
			},{
				"time":4.5,
				"gainItem":{"battleGloves":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":6, "castIron":1},
				"costPrimaryCharacteristic":{"stamina":9},
				"xpSecondaryCharacteristic":{"address":9},
				"xpSkill":{"leatherwork":9},
				"quantity":-9
			},{
				"time":3,
				"gainItem":{"archerGloves":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":6},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"address":6},
				"xpSkill":{"leatherwork":6},
				"quantity":-6
			},{
				"time":4,
				"gainItem":{"sorcererGloves":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":4, "crystals":1},
				"costPrimaryCharacteristic":{"stamina":8},
				"xpSecondaryCharacteristic":{"address":8},
				"xpSkill":{"leatherwork":8},
				"quantity":-8
			},{
				"time":4,
				"gainItem":{"beltOfGiantStrength":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":4, "crystals":1},
				"costPrimaryCharacteristic":{"stamina":8},
				"xpSecondaryCharacteristic":{"address":8},
				"xpSkill":{"leatherwork":8},
				"quantity":-8
			},{
				"time":7,
				"gainItem":{"ballGloves":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":4, "goldBar":1},
				"costPrimaryCharacteristic":{"stamina":14},
				"xpSecondaryCharacteristic":{"address":14},
				"xpSkill":{"leatherwork":14},
				"quantity":-14
			},{
				"time":7,
				"gainItem":{"beltOfThePerformer":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":4, "goldBar":1},
				"costPrimaryCharacteristic":{"stamina":14},
				"xpSecondaryCharacteristic":{"address":14},
				"xpSkill":{"leatherwork":14},
				"quantity":-14
			},{
				"time":7,
				"gainItem":{"glovesOfStrength":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":4, "steel":2},
				"costPrimaryCharacteristic":{"stamina":14},
				"xpSecondaryCharacteristic":{"address":14},
				"xpSkill":{"leatherwork":14},
				"quantity":-14
			},{
				"time":4,
				"gainItem":{"glovesOfDexterity":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":8},
				"costPrimaryCharacteristic":{"stamina":8},
				"xpSecondaryCharacteristic":{"address":8},
				"xpSkill":{"leatherwork":8},
				"quantity":-8
			},{
				"time":7,
				"gainItem":{"steelBelt":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":4, "steel":2},
				"costPrimaryCharacteristic":{"stamina":14},
				"xpSecondaryCharacteristic":{"address":14},
				"xpSkill":{"leatherwork":14},
				"quantity":-14
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
		"height":52,
		"health":100,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2}
	},
	"leatherGoodsWorkshopYard":{
		"type":"prebuild",
		"picture":{"file":"leatherGoodsWorkshopYard.png",
				   "file100":"leatherGoodsWorkshopYard100.atf"},
		"name":{"EN":"leathermaking workshop",
				"FR":"atelier de maroquinerie",
				"JP":"革工房"},
		"description":{"EN":"The leathermaking workshop allows you to manufacture gloves and belts from leather.",
					   "FR":"L'atelier de maroquinerie permet de fabriquer des gants et des ceintures à partir de cuir.",
					   "JP":"なめし革などを用いて手袋やベルトの製造が可能です。厚板を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":64,
		"height":52,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2},
		"steps":0
	}
}