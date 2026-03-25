{
	"battleHelmet":{
		"type":"item",
		"age":"steamAge",
		"category":"head",
		"picture":{"file":"battleHelmet.atf"},
		"name":{"EN":"battle helmet",
				"FR":"casque de combat",
				"JP":"戦闘用ヘルメット"},
		"description":{"EN":"The battle helmet is a light helmet made from steel.",
					   "FR":"Le casque de combat est un casque léger fabriqué avec de l'acier.",
					   "JP":"着用者の体力を向上させる軽兜。電気属性にわずかに弱くなります。鎧工房にて鋼鉄と織物から製造できます。"},
		"bonus":{"health":{"lightArmors":0.2125}},
		"resistance":{"electricity":0.1},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"lightArmors":0.25}
				}
		},
		"appearance":{"hairs":{"D":"battleHelmetD.png"}},
		"equip":true,
		"produce":[{
				"workshop":"armoryWorkshop",
				"no":19,
				"time":4,
				"gainItem":{"battleHelmet":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"steel":2, "fabric":1},
				"costPrimaryCharacteristic":{"stamina":8},
				"xpSecondaryCharacteristic":{"strength":8},
				"xpSkill":{"armorsForging":8},
				"quantity":-3
		}]
	},
	"bulletproofVest":{
		"type":"item",
		"age":"steamAge",
		"category":"body",
		"picture":{"file":"bulletproofVest.atf"},
		"name":{"EN":"bulletproof vest",
				"FR":"gilet pare-balles",
				"JP":"防弾ベスト"},
		"description":{"EN":"The bulletproof vest is a light armour made from steel.",
					   "FR":"Le gilet pare-balles est une armure légère fabriquée en acier.",
					   "JP":"着用者の体力を向上させ、射撃攻撃への耐性を与える軽鎧。電気属性にわずかに弱くなります。鎧工房にて鋼鉄と織物から製造できます。"},
		"bonus":{"health":{"lightArmors":0.6375}},
		"resistance":{"missile":-0.2, "electricity":0.2},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"rapidity":0.375},
				"xpSkill":{"lightArmors":0.75}
				}
		},
		"appearance":{"clothes":{"M":"bulletproofVestM.png","F":"bulletproofVestF.png"}},
		"equip":true,
		"produce":[{
				"workshop":"armoryWorkshop",
				"no":18,
				"time":16,
				"gainItem":{"bulletproofVest":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"steel":8, "fabric":4},
				"costPrimaryCharacteristic":{"stamina":32},
				"xpSecondaryCharacteristic":{"strength":32},
				"xpSkill":{"armorsForging":32},
				"quantity":-11
		}]
	},
	"halfArmor":{
		"type":"item",
		"age":"etherAge",
		"category":"body",
		"picture":{"file":"halfArmor.atf"},
		"name":{"EN":"half armour",
				"FR":"demi-armure",
				"JP":"ハーフアーマー"},
		"description":{"EN":"The half armour is a light armour made from fabric and cast iron.",
					   "FR":"La demi-armure est une armure légère fabriquée avec du tissu et de la fonte.",
					   "JP":"着用者の体力を向上させる軽鎧。電気属性にわずかに弱くなります。鎧工房にて鋳鉄と織物から製造できます。"},
		"bonus":{"health":{"lightArmors":0.45}},
		"resistance":{"electricity":0.1},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"rapidity":0.375},
				"xpSkill":{"lightArmors":0.75}
				}
		},
		"appearance":{"clothes":{"M":"halfArmorM.png","F":"halfArmorF.png"}},
		"equip":true,
		"upgrade":[{
				"workshop":"armoryWorkshop",
				"time":11,
				"gainItem":{"bulletproofVest":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"steel":7, "fabric":1},
				"costPrimaryCharacteristic":{"stamina":22},
				"xpSecondaryCharacteristic":{"strength":22},
				"xpSkill":{"armorsForging":22},
				"quantity":-7
		}]
	},
	"leatherArmor":{
		"type":"item",
		"age":"stoneAge",
		"category":"body",
		"picture":{"file":"leatherArmor.atf"},
		"name":{"EN":"leather armour",
				"FR":"armure de cuir",
				"JP":"革鎧"},
		"description":{"EN":"The leather armour is a light armour made from leather.",
					   "FR":"L'armure de cuir est une armure légère fabriquée avec du cuir.",
					   "JP":"着用者の体力を向上させる軽鎧。製革所にてなめし革から製造できます。"},
		"bonus":{"health":{"lightArmors":0.225}},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"rapidity":0.375},
				"xpSkill":{"lightArmors":0.75}
				}
		},
		"appearance":{"clothes":{"M":"leatherArmorM.png","F":"leatherArmorF.png"}},
		"equip":true,
		"upgrade":[{
				"workshop":"tanneryWorkshop",
				"time":1.5,
				"gainItem":{"studdedLeatherArmor":1},
				"bonusTimeSkill":"tanning",
				"costRessource":{"castIron":1},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"address":3},
				"xpSkill":{"tanning":3},
				"quantity":-2
		}]
	},
	"leatherCap":{
		"type":"item",
		"age":"stoneAge",
		"category":"head",
		"picture":{"file":"leatherCap.atf"},
		"name":{"EN":"leather cap",
				"FR":"calotte de cuir",
				"JP":"革帽子"},
		"description":{"EN":"The leather cap is a light helmet made from leather.",
					   "FR":"La calotte de cuir est une casque léger fabriqué avec du cuir.",
					   "JP":"着用者の体力を向上させる軽兜。製革所にてなめし革から製造できます。"},
		"bonus":{"health":{"lightArmors":0.075}},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"lightArmors":0.25}
				}
		},
		"appearance":{"hairs":{"D":"leatherCapD.png"}},
		"equip":true,
		"upgrade":[{
				"workshop":"tanneryWorkshop",
				"time":1.5,
				"gainItem":{"studdedLeatherCap":1},
				"bonusTimeSkill":"tanning",
				"costRessource":{"castIron":1},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"address":3},
				"xpSkill":{"tanning":3},
				"quantity":-2
			},{
				"workshop":"armoryWorkshop",
				"time":3,
				"gainItem":{"partialHelmet":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"castIron":2},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"strength":6},
				"xpSkill":{"armorsForging":6},
				"quantity":-2
		}]
	},
	"studdedLeatherCap":{
		"type":"item",
		"age":"ironAge",
		"category":"head",
		"picture":{"file":"studdedLeatherCap.atf"},
		"name":{"EN":"studded leather cap",
				"FR":"calotte de cuir clouté",
				"JP":"鋲打ち革帽子"},
		"description":{"EN":"The studded leather cap is a light helmet manufactured from leather and cast iron.",
					   "FR":"La calotte de cuir clouté est un casque léger fabriqué avec du cuir et du fer.",
					   "JP":"着用者の体力を向上させる軽兜。製革所にてなめし革と鋳鉄から製造できます。"},
		"bonus":{"health":{"lightArmors":0.1125}},
		"resistance":{"electricity":0.05},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"lightArmors":0.25}
				}
		},
		"appearance":{"hairs":{"D":"studdedLeatherCapD.png"}},
		"equip":true,
		"upgrade":[{
				"workshop":"armoryWorkshop",
				"time":1.5,
				"gainItem":{"partialHelmet":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"castIron":1},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"strength":3},
				"xpSkill":{"armorsForging":3},
				"quantity":-1
		}]
	},
	"wingedHelmet":{
		"type":"item",
		"age":"ironAge",
		"category":"head",
		"picture":{"file":"wingedHelmet.atf"},
		"name":{"EN":"winged helmet",
				"FR":"casque ailé",
				"JP":"羽根兜"},
		"description":{"EN":"The winged helmet is a light helmet which improves your speed.",
					   "FR":"Le casque ailé est un casque léger qui augmente votre vitesse.",
					   "JP":"着用者の体力を向上させ、移動速度を向上させる軽兜。電気属性にわずかに弱くなります。鎧工房にて鋳鉄となめし革から製造できます。"},
		"bonus":{"health":{"lightArmors":0.1125}, "speed":0.5},
		"resistance":{"electricity":0.1},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"lightArmors":0.25}
				}
		},
		"appearance":{"hairs":{"D":"wingedHelmetD.png"}},
		"equip":true,
		"produce":[{
				"workshop":"armoryWorkshop",
				"no":1,
				"time":4,
				"gainItem":{"wingedHelmet":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"leather":2, "castIron":2},
				"costPrimaryCharacteristic":{"stamina":8},
				"xpSecondaryCharacteristic":{"strength":9},
				"xpSkill":{"armorsForging":8},
				"quantity":-3
		}]
	}
}