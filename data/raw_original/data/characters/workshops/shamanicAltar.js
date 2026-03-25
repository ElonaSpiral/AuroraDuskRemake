{
	"shamanicAltar":{
		"type":"workshop",
		"age":"woodenAge",
		"no":2,
		"picture":{"file":"shamanicAltar.png",
				   "file100":"shamanicAltar100.atf"},
		"name":{"EN":"shamanic altar",
				"FR":"autel chamanique",
				"JP":"祈祷所"},
		"description":{"EN":"The shamanic altar is a worshop which allows you to manufacture magical supply.",
					   "FR":"L'autel chamanique est un atelier dans lequel vous pouvez fabriquer du matériel magique.",
					   "JP":"様々な魔術関連品などの製造が可能です。木材を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"wood":15},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":1},
			"xpSecondaryCharacteristic":{"address":1},
			"prebuild":{"id":"shamanicAltarYard", "time":0.5}
		},
		"quantity":100,
		"zero":{"EN":{"D":["I cannot find any shamanic altar."]},
				"FR":{"D":["Je ne trouve pas d'autel chamanique."]},
				"JP":{"D":["祈祷所が見当たらないな。"]}},
		"title":{"EN":"Manufacture magical supply",
				 "FR":"Fabriquer du matériel magique",
				 "JP":"魔術関連品の製造"},
		"produce":[{
				"time":0.5,
				"gainItem":{"ointment":1},
				"bonusSkill":"shamanicMagic",
				"costRessource":{"medicinalHerbs":1},
				"costPrimaryCharacteristic":{"stamina":1},
				"xpSecondaryCharacteristic":{"willpower":1},
				"xpSkill":{"shamanicMagic":1},
				"repeat":true,
				"quantity":-1
			},{
				"time":0.5,
				"gainItem":{"mushroomSoup":1},
				"bonusSkill":"shamanicMagic",
				"costRessource":{"mushroom":1},
				"costPrimaryCharacteristic":{"stamina":1},
				"xpSecondaryCharacteristic":{"willpower":1},
				"xpSkill":{"shamanicMagic":1},
				"repeat":true,
				"quantity":-1
			},{
				"time":1,
				"gainItem":{"bandage":1},
				"bonusSkill":"shamanicMagic",
				"costRessource":{"fabric":1},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"willpower":2},
				"xpSkill":{"shamanicMagic":2},
				"repeat":true,
				"quantity":-2
			},{
				"time":5.5,
				"gainItem":{"lightningScepter":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":5, "castIron":2},
				"costPrimaryCharacteristic":{"stamina":11},
				"xpSecondaryCharacteristic":{"intelligence":11},
				"xpSkill":{"enchantment":11},
				"quantity":-11
			},{
				"time":6,
				"gainItem":{"iceScepter":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":4, "crystals":2},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"intelligence":12},
				"xpSkill":{"enchantment":12},
				"quantity":-12
			},{
				"time":12.5,
				"gainItem":{"lightningStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":10, "castIron":5},
				"costPrimaryCharacteristic":{"stamina":25},
				"xpSecondaryCharacteristic":{"intelligence":25},
				"xpSkill":{"enchantment":25},
				"quantity":-25
			},{
				"time":0.5,
				"gainItem":{"regenerationScroll":1},
				"bonusSkill":"shamanicMagic",
				"costRessource":{"parchment":1},
				"costPrimaryCharacteristic":{"stamina":1},
				"xpSecondaryCharacteristic":{"willpower":1},
				"xpSkill":{"shamanicMagic":1},
				"repeat":true,
				"quantity":-1
			},{
				"time":0.5,
				"gainItem":{"peelSkinScroll":1},
				"bonusSkill":"shamanicMagic",
				"costRessource":{"parchment":1},
				"costPrimaryCharacteristic":{"stamina":1},
				"xpSecondaryCharacteristic":{"willpower":1},
				"xpSkill":{"shamanicMagic":1},
				"repeat":true,
				"quantity":-1
			},{
				"time":5.5,
				"gainItem":{"amuletOfLightning":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"castIron":2, "parchment":5},
				"costPrimaryCharacteristic":{"stamina":11},
				"xpSecondaryCharacteristic":{"intelligence":11},
				"xpSkill":{"goldsmithery":11},
				"quantity":-5.5
			},{
				"time":14,
				"gainItem":{"snowStarStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":8, "crystals":5},
				"costPrimaryCharacteristic":{"stamina":28},
				"xpSecondaryCharacteristic":{"intelligence":28},
				"xpSkill":{"enchantment":28},
				"quantity":-14
			},{
				"time":5,
				"gainItem":{"magicalBerriesBook":1},
				"bonusTimeSkill":"shamanicMagic",
				"costRessource":{"paper":5},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"willpower":10},
				"xpSkill":{"shamanicMagic":10},
				"quantity":-10
			},{
				"time":5,
				"gainItem":{"regenerationBook":1},
				"bonusTimeSkill":"shamanicMagic",
				"costRessource":{"paper":5},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"willpower":10},
				"xpSkill":{"shamanicMagic":10},
				"quantity":-10
			},{
				"time":5,
				"gainItem":{"peelSkinBook":1},
				"bonusTimeSkill":"shamanicMagic",
				"costRessource":{"paper":5},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"willpower":10},
				"xpSkill":{"shamanicMagic":10},
				"quantity":-10
			},{
				"time":14,
				"gainItem":{"ringOfIceShards":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":1, "crystals":1},
				"costPrimaryCharacteristic":{"stamina":14},
				"xpSecondaryCharacteristic":{"intelligence":14},
				"xpSkill":{"goldsmithery":14},
				"quantity":-14
			}],
		"repair":{
			"health":2,
			"time":0.5,
			"costRessource":{"wood":1},
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
		"height":64,
		"health":30,
		"defense":100,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0}
	},
	"shamanicAltarYard":{
		"type":"prebuild",
		"picture":{"file":"shamanicAltarYard.png",
				   "file100":"shamanicAltarYard100.atf"},
		"name":{"EN":"shamanic altar",
				"FR":"autel chamanique",
				"JP":"祈祷所"},
		"description":{"EN":"The shamanic altar is a worshop which allows you to manufacture magical supply.",
					   "FR":"L'autel chamanique est un atelier dans lequel vous pouvez fabriquer du matériel magique.",
					   "JP":"様々な魔術関連品などの製造が可能です。木材を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":64,
		"height":64,
		"defense":100,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0},
		"steps":0
	}
}