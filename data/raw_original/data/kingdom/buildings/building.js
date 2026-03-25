{
	"garrison":{
		"type":"defenseTower",
		"age":"stoneAge",
		"no":5.1,
		"picture":{"file":"garrison.png",
				   "file100":"garrison100.atf"},
		"name":{"EN":"garrison",
				"FR":"garnison",
				"JP":"駐屯地"},
		"description":{"EN":"The garrison automatically recruits militiamen.",
					   "FR":"La garnison recrute automatiquement des miliciens.",
					   "JP":"守備隊は自動的に民兵を募集します。"},
		"build":{
			"chooseLocation":true,
			"buildable":"all",
			"costRessource":{"freeStone":50, "plank":50},
			"costPrimaryCharacteristic":{"stamina":2},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":2},
			"xpSecondaryCharacteristic":{"strength":2},
			"prebuild":{"id":"garrisonYard", "time":1}
		},
		"autoProduce":[{
				"time":150,
				"createCharacter":{"militiaman":5}
		}],
		"repair":{
			"health":20,
			"time":1.5,
			"costRessource":{"freeStone":1, "plank":1},
			"costPrimaryCharacteristic":{"stamina":3},
			"sound":"soundBuilding",
			"bonusSkill":"repairing",
			"xpSkill":{"repairing":3},
			"xpSecondaryCharacteristic":{"endurance":3}
		},
		"death":{
			"effect":{"name":"destruction", "scale":1.25}
		},
		"width":96,
		"height":80,
		"visualHeight":96,
		"health":1000,
		"defense":150,
		"resistance":{"magic":0.5, "demolition":2, "poison":0}
	},
	"garrisonYard":{
		"type":"prebuild",
		"picture":{"file":"garrisonYard.png",
				   "file100":"garrisonYard100.atf"},
		"name":{"EN":"garrison",
				"FR":"garnison",
				"JP":"駐屯地"},
		"description":{"EN":"The garrison automatically recruits militiamen.",
					   "FR":"La garnison recrute automatiquement des miliciens.",
					   "JP":"守備隊は自動的に民兵を募集します。"},
		"death":{
			"effect":{"name":"destruction", "scale":1.25}
		},
		"width":96,
		"height":80,
		"visualHeight":96,
		"defense":150,
		"steps":3,
		"resistance":{"magic":0.5, "demolition":2, "poison":0}
	}
}