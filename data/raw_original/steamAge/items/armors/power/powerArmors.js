{
	"mountPredatorPowerArmor":{
		"type":"item",
		"age":"steamAge",
		"category":"mount",
		"picture":{"file":"mountPredatorPowerArmor.atf"},
		"name":{"EN":"power-assisted predator armour",
				"FR":"armure assistée de prédateur",
				"JP":"プレデターパワーアーマー"},
		"description":{"EN":"The power-assisted predator armour is a close combat armour.",
					   "FR":"L'armure assistée de prédateur est une armure de combat rapproché.",
					   "JP":"近接戦闘用のパワーアーマーです。パワーアーマー工房で鋼鉄から建造できます。"},
		"bonus":{"health":{"powerArmors":4}, "attack":{"powerArmors":4}, "defense":100},
		"damage":["closeCombat", "slashing"],
		"attackTime":4,
		"effect":"scratch",
		"resistance":{"electricity":0.5},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"endurance":0.125},
			"xpSkill":{"powerArmors":0.5}
		},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"endurance":0.125},
				"xpSkill":{"powerArmors":0.5}
				}
		},
		"speed":4,
		"mount":{"width":80, "height":90, "y":-50, "stepY":2, "file":"mountPredatorPowerArmorD.png", "plans":[true, true, true, true]},
		"equip":true,
		"gain":{
			"equip":true
		},
		"unequip":{
			"quantity":-1,
			"create":[{"id":"predatorPowerArmor"}]
		},
		"death":{
			"quantity":-1,
			"create":[{"id":"predatorPowerArmor"}]
		}
	},
	"mountWorkerPowerArmor":{
		"type":"item",
		"age":"steamAge",
		"category":"mount",
		"picture":{"file":"mountWorkerPowerArmor.atf"},
		"name":{"EN":"power-assisted worker armour",
				"FR":"armure assistée de travail",
				"JP":"ワーカーパワーアーマー"},
		"description":{"EN":"The power-assisted worker armour gives you a powerful protection.",
					   "FR":"L'armure assistée d'ouvrier offre une excellente protection.",
					   "JP":"強力な防護を着用者に与えるパワーアーマーです。パワーアーマー工房で鋼鉄から建造できます。"},
		"bonus":{"health":{"powerArmors":4}, "strength":{"powerArmors":0.5}, "defense":100},
		"resistance":{"electricity":0.5},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"endurance":0.125},
				"xpSkill":{"powerArmors":0.5}
				}
		},
		"xpSecondaryCharacteristic":{
			"strength":{
				"xpSecondaryCharacteristic":{"endurance":0.125},
				"xpSkill":{"powerArmors":0.5}
				}
		},
		"speed":4,
		"mount":{"width":75, "height":90, "y":-55, "stepY":2, "file":"mountWorkerPowerArmorD.png", "plans":[true, true, true, true]},
		"equip":true,
		"gain":{
			"equip":true
		},
		"unequip":{
			"quantity":-1,
			"create":[{"id":"workerPowerArmor"}]
		},
		"death":{
			"quantity":-1,
			"create":[{"id":"workerPowerArmor"}]
		}
	}
}