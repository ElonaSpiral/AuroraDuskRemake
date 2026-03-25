{
	"paperMill":{
		"type":"workshop",
		"age":"goldenAge",
		"no":19,
		"picture":{"file":"paperMill.png",
				   "file100":"paperMill100.atf"},
		"name":{"EN":"paper mill",
				"FR":"atelier de papeterie",
				"JP":"製紙場"},
		"description":{"EN":"The paper mill allows you to manufacture paper from wood or wool.",
					   "FR":"L'atelier de papeterie permet de fabriquer du papier à partir de bois ou de laine.",
					   "JP":"毛糸もしくは木材から紙の製造が可能です。厚板を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"plank":15},
			"costPrimaryCharacteristic":{"stamina":1},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":1},
			"xpSecondaryCharacteristic":{"address":1},
			"prebuild":{"id":"paperMillYard", "time":0.5}
		},
		"quantity":100,
		"zero":{"EN":{"D":["I cannot find any paper mill."]},
				"FR":{"D":["Je ne trouve pas d'atelier de papeterie."]},
				"JP":{"D":["製紙場が見当たらないな。"]}},
		"title":{"EN":"Manufacture paper",
				 "FR":"Fabriquer du papier",
				 "JP":"紙の製造"},
		"produce":[{
				"time":1,
				"gainRessource":{"paper":1},
				"sound":"soundPaper",
				"bonusSkill":"papermaking",
				"costRessource":{"wool":1},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"intelligence":2},
				"xpSkill":{"papermaking":2},
				"repeat":true,
				"quantity":-1
			},{
				"time":1,
				"gainRessource":{"paper":1},
				"sound":"soundPaper",
				"bonusSkill":"papermaking",
				"age":"steamAge",
				"costRessource":{"wood":2},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"intelligence":2},
				"xpSkill":{"papermaking":2},
				"repeat":true,
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
			"xpSecondaryCharacteristic":{"rapidity":1}
		},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":64,
		"height":64,
		"health":150,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2}
	}
}