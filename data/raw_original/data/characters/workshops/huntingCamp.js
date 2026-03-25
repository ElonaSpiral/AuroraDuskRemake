{
	"huntingCamp":{
		"type":"workshop",
		"age":"woodenAge",
		"no":0,
		"picture":{"file":"huntingCamp.png",
				   "file100":"huntingCamp100.atf"},
		"frames":4, "firstFrame":1,
		"name":{"EN":"hunting camp",
				"FR":"camp de chasse",
				"JP":"野営地"},
		"description":{"EN":"The hunting camp is a workshop which allows you to manufacture wooden weapons.",
					   "FR":"Le camp de chasse est un atelier dans lequel vous pouvez fabriquer des armes en bois.",
					   "JP":"狩猟用の武器や、その他の道具の製造が可能です。木材を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"wood":10},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":1},
			"xpSecondaryCharacteristic":{"address":1},
			"prebuild":{"id":"huntingCampYard", "time":0.5}
		},
		"quantity":100,
		"zero":{"EN":{"D":["I cannot find any hunting camp."]},
				"FR":{"D":["Je ne trouve pas de camp de chasse."]},
				"JP":{"D":["野営地が見つからないな。"]}},
		"title":{"EN":"Manufacture hunting weapons",
				 "FR":"Fabriquer des armes de chasse",
				 "JP":"狩猟武器の製造"},
		"produce":[{
				"time":1,
				"gainItem":{"cookedMeat":1},
				"sound":"soundPick",
				"bonusSkill":"hunting",
				"costRessource":{"rawMeat":1, "wood":1},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"strength":2},
				"xpSkill":{"hunting":2},
				"repeat":true,
				"quantity":-2
			},{
				"time":2.5,
				"gainItem":{"club":1},
				"bonusTimeSkill":"woodcutting",
				"costRessource":{"wood":5},
				"costPrimaryCharacteristic":{"stamina":5},
				"xpSecondaryCharacteristic":{"strength":5},
				"xpSkill":{"woodcutting":5},
				"quantity":-5
			},{
				"time":5,
				"gainItem":{"stick":1},
				"bonusTimeSkill":"woodcutting",
				"costRessource":{"wood":10},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"strength":10},
				"xpSkill":{"woodcutting":10},
				"quantity":-10
			},{
				"time":2.5,
				"gainItem":{"blowgun":1},
				"bonusTimeSkill":"hunting",
				"costRessource":{"wood":10},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"address":10},
				"xpSkill":{"hunting":10},
				"quantity":-10
			},{
				"time":0.5,
				"gainItem":{"darts":10},
				"bonusSkill":"hunting",
				"costRessource":{"wood":1},
				"costPrimaryCharacteristic":{"stamina":1},
				"xpSecondaryCharacteristic":{"strength":1},
				"xpSkill":{"hunting":1},
				"repeat":true,
				"quantity":-1
			},{
				"time":1.5,
				"gainItem":{"hunterHat":1},
				"bonusTimeSkill":"tanning",
				"costRessource":{"animalSkins":3},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"rapidity":3},
				"xpSkill":{"hunting":3},
				"quantity":-3
			},{
				"time":10,
				"gainItem":{"spear":1},
				"bonusTimeSkill":"stonecutting",
				"costRessource":{"wood":10, "stone":5},
				"costPrimaryCharacteristic":{"stamina":20},
				"xpSecondaryCharacteristic":{"strength":20},
				"xpSkill":{"stonecutting":20},
				"quantity":-20
			},{
				"time":0.5,
				"gainItem":{"sling":1},
				"bonusTimeSkill":"tanning",
				"costRessource":{"leather":1},
				"costPrimaryCharacteristic":{"stamina":1},
				"xpSecondaryCharacteristic":{"address":1},
				"xpSkill":{"tanning":1},
				"quantity":-1
			},{
				"time":1,
				"gainItem":{"bullets":20},
				"bonusSkill":"stonecutting",
				"costRessource":{"stone":1},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"strength":2},
				"xpSkill":{"stonecutting":2},
				"repeat":true,
				"quantity":-2
			},{
				"time":1,
				"gainItem":{"sausage":1},
				"sound":"soundPick",
				"bonusSkill":"hunting",
				"costRessource":{"rawMeat":2},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"strength":2},
				"xpSkill":{"hunting":2},
				"repeat":true,
				"quantity":-2
			},{
				"time":1,
				"gainItem":{"jam":1},
				"sound":"soundPick",
				"bonusSkill":"picking",
				"costRessource":{"fruits":2},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"rapidity":2},
				"xpSkill":{"picking":2},
				"repeat":true,
				"quantity":-2
			}],
		"repair":{
			"health":4,
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
		"health":40,
		"defense":100,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0}
	},
	"huntingCampYard":{
		"type":"prebuild",
		"picture":{"file":"huntingCampYard.png",
				   "file100":"huntingCampYard100.atf"},
		"name":{"EN":"hunting camp",
				"FR":"camp de chasse",
				"JP":"野営地"},
		"description":{"EN":"The hunting camp is a workshop which allows you to manufacture wooden weapons.",
					   "FR":"Le camp de chasse est un atelier dans lequel vous pouvez fabriquer des armes en bois.",
					   "JP":"狩猟用の武器や、その他の道具の製造が可能です。木材を用いて建築することができます。"},
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