{
	"twoFloorsHouse":{
		"type":"house",
		"age":"steamAge",
		"no":8,
		"picture":{"file":"twoFloorsHouse.png",
				   "file100":"twoFloorsHouse100.atf"},
		"name":{"EN":"two-floored house",
				"FR":"maison à deux étages",
				"JP":"2階建て家屋"},
		"description":{"EN":"The two-floored house is a modern building.",
					   "FR":"La maison à deux étages est une demeure moderne.",
					   "JP":"厚板と切石で作られた、現代的な家屋です。家主の持久力及び回復速度を大幅に向上させる他、屋内で休むことも可能です。"},
		"bonus":{"stamina":150},
		"bonusRegeneration":{"stamina":2},
		"build":{
			"chooseLocation":true,
			"buildable":"all",
			"costRessource":{"plank":50, "freeStone":50},
			"costPrimaryCharacteristic":{"stamina":2},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":2},
			"xpSecondaryCharacteristic":{"strength":2},
			"prebuild":{"id":"twoFloorsHouseYard", "time":1}
		},
		"repair":{
			"health":40,
			"time":1.5,
			"costRessource":{"plank":1, "freeStone":1},
			"costPrimaryCharacteristic":{"stamina":3},
			"sound":"soundBuilding",
			"bonusSkill":"repairing",
			"xpSkill":{"repairing":3},
			"xpSecondaryCharacteristic":{"endurance":3}
		},
		"death":{
			"effect":{"name":"destruction", "scale":1.5}
		},
		"width":150,
		"height":128,
		"visualHeight":143,
		"health":2000,
		"defense":200,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0}
	},
	"twoFloorsHouseYard":{
		"type":"prebuild",
		"picture":{"file":"twoFloorsHouseYard.png",
				   "file100":"twoFloorsHouseYard100.atf"},
		"name":{"EN":"two-floored house",
				"FR":"maison à deux étages",
				"JP":"2階建て家屋"},
		"description":{"EN":"The two-floored house is a modern building.",
					   "FR":"La maison à deux étages est une demeure moderne.",
					   "JP":"厚板と切石で作られた、現代的な家屋です。家主の持久力及び回復速度を大幅に向上させる他、屋内で休むことも可能です。"},
		"death":{
			"effect":{"name":"destruction", "scale":1.5}
		},
		"width":150,
		"height":128,
		"visualHeight":143,
		"defense":200,
		"resistance":{"fire":2, "death":0.5, "demolition":2, "poison":0},
		"steps":4
	},
	"militaryCasemat":{
		"type":"house",
		"age":"steamAge",
		"no":9,
		"picture":{"file":"militaryCasemat.png",
				   "file100":"militaryCasemat100.atf"},
		"name":{"EN":"military barracks",
				"FR":"baraquement militaire",
				"JP":"軍用住宅"},
		"description":{"EN":"Military barracks are used to quarter soldiers.",
					   "FR":"Le baraquement militaire sert de cantonnement aux soldats.",
					   "JP":"鋼鉄で作られた、兵士の居住区です。家主の体力及び回復速度を向上させる他、屋内で休むことも可能です。"},
		"bonus":{"health":150},
		"bonusRegeneration":{"health":1},
		"build":{
			"chooseLocation":true,
			"buildable":"all",
			"costRessource":{"steel":50},
			"costPrimaryCharacteristic":{"stamina":3},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":3},
			"xpSecondaryCharacteristic":{"strength":3},
			"prebuild":{"id":"militaryCasematYard", "time":1.5}
		},
		"repair":{
			"health":5,
			"time":1.5,
			"costRessource":{"steel":1},
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
		"height":120,
		"visualHeight":144,
		"health":1050,
		"defense":200,
		"resistance":{"fire":1.5, "death":0.5, "electricity":1.5, "demolition":2, "poison":0}
	},
	"militaryCasematYard":{
		"type":"prebuild",
		"picture":{"file":"militaryCasematYard.png",
				   "file100":"militaryCasematYard100.atf"},
		"name":{"EN":"military barracks",
				"FR":"baraquement militaire",
				"JP":"軍用住宅"},
		"description":{"EN":"Military barracks are shelters for soldiers.",
					   "FR":"Le baraquement militaire sert de cantonnement aux soldats.",
					   "JP":"鋼鉄で作られた、兵士の居住区です。家主の体力及び回復速度を向上させる他、屋内で休むことも可能です。"},
		"death":{
			"effect":{"name":"destruction", "scale":1.25}
		},
		"width":96,
		"height":120,
		"visualHeight":144,
		"defense":200,
		"resistance":{"fire":1.5, "death":0.5, "electricity":1.5, "demolition":2, "poison":0},
		"steps":2
	}
}