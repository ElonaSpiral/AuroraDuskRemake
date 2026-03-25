{
	"tanneryWorkshop":{
		"type":"workshop",
		"age":"woodenAge",
		"no":1,
		"picture":{"file":"tanneryWorkshop.png",
				   "file100":"tanneryWorkshop100.atf"},
		"name":{"EN":"tannery workshop",
				"FR":"atelier de tannerie",
				"JP":"製革所"},
		"description":{"EN":"The tannery workshop allows you to manufacture leather from animal skin.",
					   "FR":"L'atelier de tannerie permet de fabriquer du cuir à partir de peaux animales.",
					   "JP":"生皮からなめし革や羊皮紙の製造ができる他、一部革衣類の作成も可能です。木材を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"wood":5},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":1},
			"xpSecondaryCharacteristic":{"strength":1},
			"prebuild":{"id":"tanneryWorkshopYard", "time":0.5}
		},
		"quantity":100,
		"zero":{"EN":{"D":["I cannot find any tannery workshop."]},
				"FR":{"D":["Je ne trouve pas d'atelier de tannerie."]},
				"JP":{"D":["製革所が見当たらないな。"]}},
		"title":{"EN":"Tan leather clothes",
				 "FR":"Tanner des vêtements de cuir",
				 "JP":"革製品の製造"},
		"produce":[{
				"time":0.5,
				"gainRessource":{"leather":1},
				"sound":"soundPick",
				"bonusSkill":"tanning",
				"costRessource":{"animalSkins":1},
				"costPrimaryCharacteristic":{"stamina":1},
				"xpSecondaryCharacteristic":{"address":1},
				"xpSkill":{"tanning":1},
				"repeat":true,
				"quantity":-1
			},{
				"time":1,
				"gainRessource":{"parchment":1},
				"sound":"soundPick",
				"bonusSkill":"tanning",
				"costRessource":{"animalSkins":2},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"address":2},
				"xpSkill":{"tanning":2},
				"repeat":true,
				"quantity":-2
			},{
				"time":1,
				"gainItem":{"furShoes":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":2},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"address":2},
				"xpSkill":{"leatherwork":2},
				"quantity":-2
			},{
				"time":3,
				"gainItem":{"furCoat":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":6},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"address":6},
				"xpSkill":{"leatherwork":6},
				"quantity":-6
			},{
				"time":4.5,
				"gainItem":{"leatherArmor":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":9},
				"costPrimaryCharacteristic":{"stamina":9},
				"xpSecondaryCharacteristic":{"address":9},
				"xpSkill":{"leatherwork":9},
				"quantity":-9
			},{
				"time":1.5,
				"gainItem":{"leatherCap":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":3},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"address":3},
				"xpSkill":{"leatherwork":3},
				"quantity":-3
			},{
				"time":6,
				"gainItem":{"studdedLeatherArmor":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":9, "castIron":1},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"address":12},
				"xpSkill":{"leatherwork":12},
				"quantity":-12
			},{
				"time":3,
				"gainItem":{"studdedLeatherCap":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":3, "castIron":1},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"address":6},
				"xpSkill":{"leatherwork":6},
				"quantity":-6
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
			"effect":{"name":"destruction", "scale":0.5}
		},
		"width":40,
		"height":40,
		"health":10,
		"defense":50,
		"resistance":{"fire":2, "death":0.5, "demolition":2}
	}
}