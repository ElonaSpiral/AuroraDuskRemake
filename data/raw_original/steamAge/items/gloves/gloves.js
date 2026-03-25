{
	"archerGloves":{
		"type":"item",
		"age":"etherAge",
		"category":"hand",
		"picture":{"file":"archerGloves.atf"},
		"name":{"EN":"archer gloves",
				"FR":"gants d'archer",
				"JP":"弓手の手袋"},
		"description":{"EN":"The archer gloves increase your bow skills.",
					   "FR":"Les gants d'archer améliorent votre compétence de tir à l'arc.",
					   "JP":"着用者の弓技能を向上させる手袋。革工房でなめし革から製造できます。"},
		"bonus":{"bows":{"gloves":0.25}},
		"xpSkill":{
			"bows":{
				"xpSecondaryCharacteristic":{"address":0.125},
				"xpSkill":{"gloves":1}
				}
		},
		"equip":true
	},
	"battleGloves":{
		"type":"item",
		"age":"etherAge",
		"category":"hand",
		"picture":{"file":"battleGloves.atf"},
		"name":{"EN":"battle gloves",
				"FR":"gants de combat",
				"JP":"戦いの手袋"},
		"description":{"EN":"The battle gloves increase your close-combat skills.",
					   "FR":"Les gants de combat augmentent vos compétences de combat au corps-à-corps.",
					   "JP":"着用者の小型武器・刀剣・鈍器・斧・長柄武器技能を向上させる手袋。革工房でなめし革と鋳鉄から製造できます。"},
		"bonus":{"lightWeapons":{"gloves":0.25},
				 "edgedWeapons":{"gloves":0.25},
				 "bluntWeapons":{"gloves":0.25},
				 "axes":{"gloves":0.25},
				 "polearms":{"gloves":0.25}},
		"xpSkill":{
			"lightWeapons":{
				"xpSecondaryCharacteristic":{"address":0.125},
				"xpSkill":{"gloves":1}
				},
			"edgedWeapons":{
				"xpSecondaryCharacteristic":{"address":0.125},
				"xpSkill":{"gloves":1}
				},
			"bluntWeapons":{
				"xpSecondaryCharacteristic":{"address":0.125},
				"xpSkill":{"gloves":1}
				},
			"axes":{
				"xpSecondaryCharacteristic":{"address":0.125},
				"xpSkill":{"gloves":1}
				},
			"polearms":{
				"xpSecondaryCharacteristic":{"address":0.125},
				"xpSkill":{"gloves":1}
				},
			"shields":{
				"xpSecondaryCharacteristic":{"address":0.125},
				"xpSkill":{"gloves":1}
				}
		},
		"equip":true
	},
	"glovesOfDexterity":{
		"type":"item",
		"age":"steamAge",
		"category":"hand",
		"picture":{"file":"glovesOfDexterity.atf"},
		"name":{"EN":"gloves of dexterity",
				"FR":"gants de dextérité",
				"JP":"器用さの手袋"},
		"description":{"EN":"The gloves of dexterity increase your address.",
					   "FR":"Les gants de dextérité augmente votre adresse.",
					   "JP":"着用者の技量を向上させる手袋。革工房でなめし革から製造できます。"},
		"bonus":{"address":{"gloves":0.125}},
		"xpPrimaryCharacteristic":{
			"address":{
				"xpSecondaryCharacteristic":{"address":0.125},
				"xpSkill":{"gloves":1}
				}
		},
		"equip":true
	},
	"glovesOfGhoulTouch":{
		"type":"item",
		"age":"etherAge",
		"category":"hand",
		"picture":{"file":"glovesOfGhoulTouch.atf"},
		"name":{"EN":"gloves of ghoul touch",
				"FR":"gants de toucher de goule",
				"JP":"亡者の手袋"},
		"description":{"EN":"The gloves of ghoul touch inflict poison damage.",
					   "FR":"Les gants de toucher de goule infligent des dégâts de poison.",
					   "JP":"標的を一時的に毒状態にする混沌魔術のの発動体となる手袋。闇の祭壇でなめし革と薬草から製造できます。"},
		"bonus":{"attack":{"chaoticMagic":0.4}},
		"attackTime":1,
		"effect":"poisonGasEffect",
		"special":{"poison":{"attack":{"chaoticMagic":0.8}, "time":10}},
		"damage":["magic", "poison"],
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.03125},
			"xpSkill":{"chaoticMagic":0.25}
		},
		"equip":true
	},
	"glovesOfStrength":{
		"type":"item",
		"age":"steamAge",
		"category":"hand",
		"picture":{"file":"glovesOfStrength.atf"},
		"name":{"EN":"gloves of strength",
				"FR":"gants de force",
				"JP":"筋力の手袋"},
		"description":{"EN":"The gloves of strength increase your strength.",
					   "FR":"Les gants de force augmentent votre force.",
					   "JP":"着用者の筋力を向上させる手袋。革工房でなめし革と鋼鉄から製造できます。"},
		"bonus":{"strength":{"gloves":0.125}},
		"xpPrimaryCharacteristic":{
			"strength":{
				"xpSecondaryCharacteristic":{"address":0.125},
				"xpSkill":{"gloves":1}
				}
		},
		"equip":true
	},
	"leatherGloves":{
		"type":"item",
		"age":"stoneAge",
		"category":"hand",
		"picture":{"file":"leatherGloves.atf"},
		"name":{"EN":"leather gloves",
				"FR":"gants de cuir",
				"JP":"革の手袋"},
		"description":{"EN":"The leather gloves are a gloves made from leather.",
					   "FR":"Les gants de cuir sont des gants fabriqués avec du cuir.",
					   "JP":"着用者の持久力を向上させる手袋。革工房でなめし革から製造できます。"},
		"bonus":{"stamina":{"gloves":0.15}},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"address":0.125},
				"xpSkill":{"gloves":1}
				}
		},
		"equip":true,
		"upgrade":[{
				"workshop":"leatherGoodsWorkshop",
				"time":1.5,
				"gainItem":{"studdedLeatherGloves":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"castIron":1},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"address":3},
				"xpSkill":{"leatherwork":3},
				"quantity":-3
			},{
				"workshop":"leatherGoodsWorkshop",
				"time":2.5,
				"gainItem":{"battleGloves":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":2, "castIron":1},
				"costPrimaryCharacteristic":{"stamina":5},
				"xpSecondaryCharacteristic":{"address":5},
				"xpSkill":{"leatherwork":5},
				"quantity":-5
			},{
				"workshop":"leatherGoodsWorkshop",
				"time":5,
				"gainItem":{"sorcererGloves":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"crystals":1},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"address":4},
				"xpSkill":{"leatherwork":4},
				"quantity":-4
			},{
				"workshop":"leatherGoodsWorkshop",
				"time":5,
				"gainItem":{"ballGloves":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"goldBar":1},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"address":10},
				"xpSkill":{"leatherwork":10},
				"quantity":-10
			},{
				"workshop":"leatherGoodsWorkshop",
				"time":5,
				"gainItem":{"glovesOfStrength":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"steel":2},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"address":10},
				"xpSkill":{"leatherwork":10},
				"quantity":-10
			},{
				"workshop":"leatherGoodsWorkshop",
				"time":1,
				"gainItem":{"glovesOfDexterity":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":2},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"address":2},
				"xpSkill":{"leatherwork":2},
				"quantity":-2
			},{
				"workshop":"blackMagicAltar",
				"time":4,
				"gainItem":{"glovesOfGhoulTouch":1},
				"bonusTimeSkill":"necromanticMagic",
				"costRessource":{"leather":2, "medicinalHerbs":6},
				"costPrimaryCharacteristic":{"stamina":8},
				"xpSecondaryCharacteristic":{"willpower":8},
				"xpSkill":{"necromanticMagic":8},
				"quantity":-4
			}]
	},
	"studdedLeatherGloves":{
		"type":"item",
		"age":"ironAge",
		"category":"hand",
		"picture":{"file":"studdedLeatherGloves.atf"},
		"name":{"EN":"studded leather gloves",
				"FR":"gants de cuir clouté",
				"JP":"鋲打ち革手袋"},
		"description":{"EN":"Studded leather gloves are battle gloves made from leather and cast iron.",
					   "FR":"Les gants de cuir clouté sont des gants de combat fabriqués avec du cuir et de la fonte.",
					   "JP":"着用者の体力を向上させる手袋。電気属性にわずかに弱くなります。革工房でなめし革と鋳鉄から製造できます。"},
		"bonus":{"health":{"gloves":0.15}},
		"resistance":{"electricity":0.05},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"gloves":1}
				}
		},
		"equip":true,
		"upgrade":[{
				"workshop":"leatherGoodsWorkshop",
				"time":1,
				"gainItem":{"battleGloves":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":2},
				"costPrimaryCharacteristic":{"stamina":2},
				"xpSecondaryCharacteristic":{"address":2},
				"xpSkill":{"leatherwork":2},
				"quantity":-2
			}]
	}
}