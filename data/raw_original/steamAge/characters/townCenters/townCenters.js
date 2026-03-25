{
	"townCenterSteamAge":{
		"type":"townCenter",
		"age":"steamAge",
		"no":5,
		"picture":{"file":"townCenterSteamAge.png",
				   "file100":"townCenterSteamAge100.atf"},
		"name":{"EN":"town centre",
				"FR":"hôtel de ville",
				"JP":"タウンセンター"},
		"pluralName":{"EN":"town centres",
					  "FR":"hôtels de ville",
					  "JP":"タウンセンター"},
		"description":{"EN":"The town centre allows you to move to the next age.",
					   "FR":"L'hôtel de ville vous permet de passer à l'époque suivante.",
					   "JP":"蒸気の時代のタウンセンター。周囲の敵への攻撃能力を持つ他、次の年代に進むために必要です。収穫者の雇用元や資源倉庫にもなります。鋼鉄を用いて建築することができます。"},
		"build":{
			"chooseLocation":true,
			"buildable":"all",
			"costRessource":{"steel":300},
			"costPrimaryCharacteristic":{"stamina":3},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":3},
			"xpSecondaryCharacteristic":{"strength":3},
			"prebuild":{"id":"townCenterSteamAgeYard", "time":1.5}
		},
		"title":{"EN":"Recruit servants", "FR":"Recruter des serviteurs", "JP":"収獲者の雇用"},
		"produce":[{
				"time":0.5,
				"gainItem":{"crown":1},
				"costRessource":{"silverCoin":600}
			},{
				"time":25,
				"createCharacter":{"servantM":1},
				"bonusTimeSkill":"conscription",
				"costRessource":{"silverCoin":50},
				"costPrimaryCharacteristic":{"stamina":50},
				"xpSecondaryCharacteristic":{"charisma":50},
				"xpSkill":{"conscription":50},
				"repeat":true
			},{
				"time":25,
				"createCharacter":{"servantF":1},
				"bonusTimeSkill":"conscription",
				"costRessource":{"silverCoin":50},
				"costPrimaryCharacteristic":{"stamina":50},
				"xpSecondaryCharacteristic":{"charisma":50},
				"xpSkill":{"conscription":50},
				"repeat":true
			}],
		"repair":{
			"health":30,
			"time":1.5,
			"costRessource":{"steel":1},
			"costPrimaryCharacteristic":{"stamina":3},
			"sound":"soundBuilding",
			"bonusSkill":"repairing",
			"xpSkill":{"repairing":3},
			"xpSecondaryCharacteristic":{"endurance":3}
		},
		"death":{
			"effect":{"name":"destruction", "scale":2}
		},
		"width":192,
		"height":240,
		"visualHeight":256,
		"health":9000,
		"attack":700, "attackTime":3, "range":600, "missile":"microMissile", "attackDY":-215, "sound":"soundRocket", "special":{"selfGuided":0.125},
		"damage":["missile", "demolition"],
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0},
		"warehouse":true
	},
	"townCenterSteamAgeYard":{
		"type":"prebuild",
		"picture":{"file":"townCenterSteamAgeYard.png",
				   "file100":"townCenterSteamAgeYard100.atf"},
		"name":{"EN":"town centre",
				"FR":"hôtel de ville",
				"JP":"タウンセンター"},
		"description":{"EN":"The town centre allows you to move to the next age.",
					   "FR":"L'hôtel de ville vous permet de passer à l'époque suivante.",
					   "JP":"蒸気の時代のタウンセンター。周囲の敵への攻撃能力を持つ他、次の年代に進むために必要です。収穫者の雇用元や資源倉庫にもなります。鋼鉄を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction", "scale":2}
		},
		"width":192,
		"height":240,
		"visualHeight":256,
		"defense":150,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0},
		"steps":3
	}
}