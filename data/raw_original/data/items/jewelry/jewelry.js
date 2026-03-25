{
	"amuletOfCheetah":{
		"type":"item",
		"age":"goldenAge",
		"category":"neck",
		"picture":{"file":"amuletOfCheetah.atf"},
		"name":{"EN":"cheetah amulet",
				"FR":"amulette du guépard",
				"JP":"狩猟豹のお守り"},
		"description":{"EN":"The cheetah amulet is a jewel manufactured from gold bars.",
					   "FR":"L'amulette du guépard est un bijou fabriqué avec des lingots d'or.",
					   "JP":"着用者の移動速度を向上させる首飾り。宝石細工場で棒金から製造できます。"},
		"bonus":{"speed":1},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"charisma":0.25},
				"xpSkill":{"jewellery":0.5}
				}
		},
		"equip":true
	},
	"amuletOfFire":{
		"type":"item",
		"age":"goldenAge",
		"category":"neck",
		"picture":{"file":"amuletOfFire.atf"},
		"name":{"EN":"amulet of fire",
				"FR":"amulette de feu",
				"JP":"火のお守り"},
		"description":{"EN":"The amulet of fire is a jewel which can throw fireballs. It is manufactured from gold bars.",
					   "FR":"L'amulette de feu est un bijou qui envoie des boules de feu. Elle est fabriquée avec des lingots d'or.",
					   "JP":"火球を放つ火工魔術の発動体となる首飾り。火の祭壇で紙と棒金から製造できます。"},
		"bonus":{"attack":{"pyrotechnicMagic":2}},
		"attackTime":4, "range":350, "missile":"fireball",
		"damage":["magic", "fire"],
		"attack":{
			"costPrimaryCharacteristic":{"mana":5}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.125},
			"xpSkill":{"pyrotechnicMagic":0.25}
		},
		"equip":true
	},
	"amuletOfLightning":{
		"type":"item",
		"age":"etherAge",
		"category":"neck",
		"picture":{"file":"amuletOfLightning.atf"},
		"name":{"EN":"amulet of lightning",
				"FR":"amulette d'éclair",
				"JP":"雷のお守り"},
		"description":{"EN":"The amulet of lightning is a jewel which can throw thunderbolts. It is manufactured from iron bar.",
					   "FR":"L'amulette d'éclair est un bijou qui projette de la foudre. Elle est fabriquée avec des lingots de fer.",
					   "JP":"雷を標的に直接投射する妖術の発動体となる首飾り。祈祷所で羊皮紙と鋳鉄から製造できます。"},
		"bonus":{"attack":{"druidicMagic":0.6}},
		"attackTime":2, "range":300,
		"effect":"lightningImpact","effectLine":"lightningLine",
		"damage":["magic", "electricity"],
		"attack":{
			"costPrimaryCharacteristic":{"mana":1}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.125},
			"xpSkill":{"druidicMagic":0.25}
		},
		"equip":true
	},
	"amuletOfProtection":{
		"type":"item",
		"age":"goldenAge",
		"category":"neck",
		"picture":{"file":"amuletOfProtection.atf"},
		"name":{"EN":"amulet of protection",
				"FR":"amulette de protection",
				"JP":"保護のお守り"},
		"description":{"EN":"The amulet of protection is a jewel manufactured from gold bars.",
					   "FR":"L'amulette de protection est un bijou fabriqué avec des lingots d'or.",
					   "JP":"着用者の防御力を向上させる首飾り。宝石細工場で鋳鉄と棒金から製造できます。"},
		"bonus":{"defense":{"jewellery":0.5}},
		"xpDefense":{
			"xpSecondaryCharacteristic":{"charisma":0.25},
			"xpSkill":{"jewellery":0.5}
		},
		"equip":true
	},
	"lifeRegenerationRing":{
		"type":"item",
		"age":"goldenAge",
		"category":"ring",
		"picture":{"file":"lifeRegenerationRing.atf"},
		"name":{"EN":"ring of life regeneration",
				"FR":"anneau de régénération vitale",
				"JP":"体力再生の指輪"},
		"description":{"EN":"The ring of life regeneration is a jewel made from gold bars.",
					   "FR":"L'anneau de régénération vitale est un bijou fabriqué avec des lingots d'or.",
					   "JP":"着用者の体力回復速度を向上させる指輪。宝石細工場で棒金から製造できます。"},
		"bonusRegeneration":{"health":1},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				}
		},
		"equip":true,
		"oneHand":true
	},
	"lifeRing":{
		"type":"item",
		"age":"goldenAge",
		"category":"ring",
		"picture":{"file":"lifeRing.atf"},
		"name":{"EN":"life ring",
				"FR":"anneau de vie",
				"JP":"生命の指輪"},
		"description":{"EN":"The life ring is a jewel made from gold bars.",
					   "FR":"L'anneau de vie est un bijou fabriqué avec des lingots d'or.",
					   "JP":"着用者の体力を向上させる指輪。宝石細工場で棒金から製造できます。"},
		"bonus":{"health":{"jewellery":0.25}},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				}
		},
		"equip":true,
		"oneHand":true
	},
	"magicRing":{
		"type":"item",
		"age":"goldenAge",
		"category":"ring",
		"picture":{"file":"magicRing.atf"},
		"name":{"EN":"ring of magic",
				"FR":"anneau de magie",
				"JP":"魔法の指輪"},
		"description":{"EN":"The ring of magic is a jewel made from gold bars.",
					   "FR":"L'anneau de magie est un bijou fabriqué avec des lingots d'or.",
					   "JP":"着用者の魔力を向上させる指輪。宝石細工場で水晶と棒金から製造できます。"},
		"bonus":{"mana":{"jewellery":0.25}},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				}
		},
		"equip":true,
		"oneHand":true
	},
	"manaRegenerationRing":{
		"type":"item",
		"age":"goldenAge",
		"category":"ring",
		"picture":{"file":"manaRegenerationRing.atf"},
		"name":{"EN":"ring of mana regeneration",
				"FR":"anneau de régénération de mana",
				"JP":"魔力回復の指輪"},
		"description":{"EN":"The ring of mana regeneration is a jewel made from gold bars.",
					   "FR":"L'anneau de régénération de mana est un bijou fabriqué avec des lingots d'or.",
					   "JP":"着用者の魔力回復速度を向上させる指輪。宝石細工場で水晶と棒金から製造できます。"},
		"bonusRegeneration":{"mana":1},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				}
		},
		"equip":true,
		"oneHand":true
	},
	"ringOfIceShards":{
		"type":"item",
		"age":"goldenAge",
		"category":"ring",
		"picture":{"file":"ringOfIceShards.atf"},
		"name":{"EN":"ring of ice shards",
				"FR":"anneau d'éclats de glace",
				"JP":"氷片の指輪"},
		"description":{"EN":"The ring of ice shards is a jewel which can throw ice shards.",
					   "FR":"L'anneau d'éclats de glace est un bijou qui lance des projectiles de glace.",
					   "JP":"当たった標的の移動速度を一時的に下げる氷弾を放つ妖術の発動体となる指輪。祈祷所で水晶と棒金から製造できます。"},
		"bonus":{"attack":{"druidicMagic":0.75}},
		"attackTime":2, "range":450, "missile":"iceBolt", "attackDY":-32, "attackDelay":1, "special":{"selfGuided":0.05, "penality":{"id":"slowdown", "time":5}},
		"damage":["magic", "ice"],
		"attack":{
			"costPrimaryCharacteristic":{"mana":1}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.125},
			"xpSkill":{"druidicMagic":0.125}
		},
		"equip":true,
		"oneHand":true
	},
	"ringOfProtection":{
		"type":"item",
		"age":"goldenAge",
		"category":"ring",
		"picture":{"file":"ringOfProtection.atf"},
		"name":{"EN":"ring of protection",
				"FR":"anneau de protection",
				"JP":"保護の指輪"},
		"description":{"EN":"The ring of protection is a jewel made from gold bars.",
					   "FR":"L'anneau de protection est un bijou fabriqué avec des lingots d'or.",
					   "JP":"着用者の防御力を向上させる指輪。宝石細工場で鋳鉄と棒金から製造できます。"},
		"bonus":{"defense":{"jewellery":0.25}},
		"xpDefense":{
			"xpSecondaryCharacteristic":{"charisma":0.125},
			"xpSkill":{"jewellery":0.25}
		},
		"equip":true,
		"oneHand":true
	},
	"sunDiadem":{
		"type":"item",
		"age":"goldenAge",
		"category":"head",
		"picture":{"file":"sunDiadem.atf"},
		"name":{"EN":"solaris diadem",
				"FR":"diadème solaris",
				"JP":"太陽の王冠"},
		"description":{"EN":"The solaris diadem is a head jewel which can throw shards of light. It is made from gold bars.",
					   "FR":"Le diadème solaris est un serre-tête qui envoie des éclats de lumière. Il est fabriqué avec des lingots d'or.",
					   "JP":"誘導し、当たった標的を一時的に盲目にする光矢を 5 発放つ鎮圧魔術の発動体となる冠。光の祭壇で紙と棒金から製造できます。"},
		"bonus":{"attack":{"repressiveMagic":0.5}},
		"attackTime":5, "range":350, "missile":"lightArrow",
		"attacks":[{"range":700, "missile":"lightArrow", "damage":["magic", "light"], "fixedAngle":-1.57, "attackDY":-27, "attackDelay":1, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":700, "missile":"lightArrow", "damage":["magic", "light"], "fixedAngle":-2.09, "attackDX":-10, "attackDY":-24, "attackDelay":1, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":700, "missile":"lightArrow", "damage":["magic", "light"], "fixedAngle":-2.61, "attackDX":-17, "attackDY":-16, "attackDelay":1, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":700, "missile":"lightArrow", "damage":["magic", "light"], "fixedAngle":-1.05, "attackDX":10, "attackDY":-25, "attackDelay":1, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":700, "missile":"lightArrow", "damage":["magic", "light"], "fixedAngle":-0.53, "attackDX":18, "attackDY":-18, "attackDelay":1, "selfGuided":0.2, "penality":{"id":"blind", "time":5}}],
		"damage":["magic", "light"],
		"attack":{
			"costPrimaryCharacteristic":{"mana":5}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.05},
			"xpSkill":{"repressiveMagic":0.1}
		},
		"appearance":{"hat":{"D":"sunDiademD.png"}},
		"equip":true
	},
	"vitalityRing":{
		"type":"item",
		"age":"goldenAge",
		"category":"ring",
		"picture":{"file":"vitalityRing.atf"},
		"name":{"EN":"ring of vitality",
				"FR":"anneau de vitalité",
				"JP":"活力の指輪"},
		"description":{"EN":"The ring of vitality is a jewel made from gold bars.",
					   "FR":"L'anneau de vitalité est un bijou fabriqué avec des lingots d'or.",
					   "JP":"着用者の持久力を向上させる指輪。宝石細工場で棒金から製造できます。"},
		"bonus":{"stamina":{"jewellery":0.25}},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				}
		},
		"equip":true,
		"oneHand":true
	}
}