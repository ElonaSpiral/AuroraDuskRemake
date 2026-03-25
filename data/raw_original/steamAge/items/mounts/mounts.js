{
	"mountNightmare":{
		"type":"item",
		"age":"steamAge",
		"category":"mount",
		"picture":{"file":"mountNightmare.atf"},
		"name":{"EN":"nightmare",
				"FR":"cheval de cauchemar",
				"JP":"ナイトメア"},
		"description":{"EN":"The nightmare is a mount which can throw flames.",
					   "FR":"Le cheval de cauchemar est une monture qui projette des flammes.",
					   "JP":"搭乗者の移動速度と体力、魔力を向上させ、己も火を吐く騎乗生物です。"},
		"bonus":{"health":{"riding":0.1}, "mana":{"riding":0.1}, "attack":{"pyrotechnicMagic":5}},
		"attackTime":4,
		"damage":["magic", "fire"],
		"effect":"flameThrowingEffect",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.25},
			"xpSkill":{"pyrotechnicMagic":0.25}
		},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"rapidity":0.06},
				"xpSkill":{"riding":0.5}
				},
			"mana":{
				"xpSecondaryCharacteristic":{"rapidity":0.06},
				"xpSkill":{"riding":0.5}
				}
		},
		"speed":10,
		"mount":{"width":56, "height":48, "y":-16, "stepY":1, "file":"mountNightmareD.png", "plans":[true, true, false, false]},
		"lost":{"EN":"My nightmare has dissipated.",
				"FR":"Mon cheval de cauchemar s'est dissipé.",
				"JP":"ナイトメアが消えてしまった。"},
		"equip":true,
		"gain":{
			"equip":true
		},
		"unequip":{
			"quantity":-1
		},
		"death":{
			"quantity":-1
		}
	},
	"mountPalfrey":{
		"type":"item",
		"age":"goldenAge",
		"category":"mount",
		"picture":{"file":"mountPalfrey.atf"},
		"name":{"EN":"palfrey",
				"FR":"palefroi",
				"JP":"乗用馬"},
		"description":{"EN":"The palfrey is a valuable and prestigious mount.",
					   "FR":"Le palefroi est une monture de prestige de grande valeur.",
					   "JP":"搭乗者の移動速度と体力、持久力、魔力を向上させる、高級で由緒ある騎乗生物です。"},
		"bonus":{"health":{"riding":0.1}, "stamina":{"riding":0.1}, "mana":{"riding":0.1}},
		"speed":10,
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"rapidity":0.04},
				"xpSkill":{"riding":0.33}
				},
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.04},
				"xpSkill":{"riding":0.33}
				},
			"mana":{
				"xpSecondaryCharacteristic":{"rapidity":0.04},
				"xpSkill":{"riding":0.33}
				}
		},
		"mount":{"width":56, "height":48, "y":-16, "stepY":1, "file":"mountPalfreyD.png", "plans":[true, true, false, false]},
		"equip":true,
		"gain":{
			"equip":true
		},
		"unequip":{
			"quantity":-1,
			"create":[{"id":"palfrey"}]
		},
		"death":{
			"quantity":-1,
			"create":[{"id":"palfrey"}]
		}
	},
	"mountRaceHorse":{
		"type":"item",
		"age":"steamAge",
		"category":"mount",
		"picture":{"file":"mountRaceHorse.atf"},
		"name":{"EN":"race horse",
				"FR":"cheval de course",
				"JP":"競走馬"},
		"description":{"EN":"The race horse is the fastest of mounts.",
					   "FR":"Le cheval de course est la monture la plus rapide.",
					   "JP":"搭乗者の移動速度を向上させる、最速の騎乗生物です。."},
		"speed":12.5,
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"riding":1}
				}
		},
		"mount":{"width":56, "height":48, "y":-16, "stepY":1, "file":"mountRaceHorseD.png", "plans":[true, true, false, false]},
		"equip":true,
		"gain":{
			"equip":true
		},
		"unequip":{
			"quantity":-1,
			"create":[{"id":"raceHorse"}]
		},
		"death":{
			"quantity":-1,
			"create":[{"id":"raceHorse"}]
		}
	},
	"mountSaddleHorse":{
		"type":"item",
		"age":"stoneAge",
		"category":"mount",
		"picture":{"file":"mountSaddleHorse.atf"},
		"name":{"EN":"saddle horse",
				"FR":"cheval de selle",
				"JP":"軽量馬"},
		"description":{"EN":"The saddle horse is a mount that improves your movement speed.",
					   "FR":"Le cheval de selle est une monture qui améliore votre vitesse de déplacement.",
					   "JP":"搭乗者の移動速度と持久力を向上させる騎乗生物です。"},
		"bonus":{"stamina":{"riding":0.25}},
		"speed":10,
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"riding":1}
				}
		},
		"mount":{"width":56, "height":48, "y":-16, "stepY":1, "file":"mountSaddleHorseD.png", "plans":[true, true, false, false]},
		"equip":true,
		"gain":{
			"equip":true
		},
		"unequip":{
			"quantity":-1,
			"create":[{"id":"saddleHorse"}]
		},
		"death":{
			"quantity":-1,
			"create":[{"id":"saddleHorse"}]
		}
	},
	"mountUnicorn":{
		"type":"item",
		"age":"etherAge",
		"category":"mount",
		"picture":{"file":"mountUnicorn.atf"},
		"name":{"EN":"unicorn",
				"FR":"licorne",
				"JP":"一角獣"},
		"description":{"EN":"The unicorn is a mount that improves your movement speed.",
					   "FR":"La licorne est une monture qui améliore votre vitesse de déplacement.",
					   "JP":"搭乗者の移動速度と魔力を向上させる騎乗生物です。"},
		"bonus":{"mana":{"riding":0.25}},
		"speed":10,
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"willpower":0.125},
				"xpSkill":{"riding":1}
				}
		},
		"mount":{"width":56, "height":48, "y":-16, "stepY":1, "file":"mountUnicornD.png", "plans":[true, true, false, false]},
		"equip":true,
		"gain":{
			"equip":true
		},
		"unequip":{
			"quantity":-1,
			"create":[{"id":"unicorn"}]
		},
		"death":{
			"quantity":-1,
			"create":[{"id":"unicorn"}]
		}
	},
	"mountWarHorse":{
		"type":"item",
		"age":"ironAge",
		"category":"mount",
		"picture":{"file":"mountWarHorse.atf"},
		"name":{"EN":"war horse",
				"FR":"cheval de guerre",
				"JP":"軍馬"},
		"description":{"EN":"The war horse is a mount that improves your health and your movement speed.",
					   "FR":"Le cheval de guerre est une monture qui améliore votre vie et votre vitesse de déplacement.",
					   "JP":"搭乗者の移動速度と体力を向上させる騎乗生物です。"},
		"bonus":{"health":{"riding":0.25}},
		"speed":10,
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"endurance":0.125},
				"xpSkill":{"riding":1}
				}
		},
		"mount":{"width":56, "height":48, "y":-16, "stepY":1, "file":"mountWarHorseD.png", "plans":[true, true, false, false]},
		"equip":true,
		"gain":{
			"equip":true
		},
		"unequip":{
			"quantity":-1,
			"create":[{"id":"warHorse"}]
		},
		"death":{
			"quantity":-1,
			"create":[{"id":"warHorse"}]
		}
	}
}