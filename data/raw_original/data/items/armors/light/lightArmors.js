{
	"crystalArmor":{
		"type":"item",
		"age":"goldenAge",
		"category":"body",
		"picture":{"file":"crystalArmor.atf"},
		"name":{"EN":"crystal armour",
				"FR":"armure de cristal",
				"JP":"水晶の鎧"},
		"description":{"EN":"The crystal armour is a light armour made from crystal.",
					   "FR":"L'armure de cristal est une armure légère fabriquée avec des cristaux.",
					   "JP":"着用者の体力を向上させ、魔法属性に耐性を与える軽鎧。石切場にて水晶から製造できます。"},
		"bonus":{"health":{"lightArmors":0.5625}},
		"resistance":{"magic":-0.2},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"rapidity":0.375},
				"xpSkill":{"lightArmors":0.75}
				}
		},
		"appearance":{"clothes":{"M":"crystalArmorM.png","F":"crystalArmorF.png"}},
		"equip":true,
		"enhance":[{
			"skill":"armorsForging",
			"workshop":"quarrierWorkshop",
			"time":18,
			"gainItem":{"crystalArmor":1},
			"bonusTimeSkill":"stonecutting",
			"costRessource":{"crystals":9},
			"costPrimaryCharacteristic":{"stamina":36},
			"xpSecondaryCharacteristic":{"strength":36},
			"xpSkill":{"stonecutting":36},
			"quantity":-12
		}]
	},
	"crystalHelmet":{
		"type":"item",
		"age":"goldenAge",
		"category":"head",
		"picture":{"file":"crystalHelmet.atf"},
		"name":{"EN":"crystal helmet",
				"FR":"casque de cristal",
				"JP":"水晶の兜"},
		"description":{"EN":"The crystal helmet is a light helmet made from crystal.",
					   "FR":"Le casque de cristal est un casque léger fabriqué avec des cristaux.",
					   "JP":"着用者の体力を向上させ、魔法属性に耐性を与える軽兜。石切場にて水晶から製造できます。"},
		"bonus":{"health":{"lightArmors":0.1875}},
		"resistance":{"magic":-0.1},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"lightArmors":0.25}
				}
		},
		"appearance":{"hairs":{"D":"crystalHelmetD.png"}},
		"equip":true,
		"enhance":[{
			"skill":"armorsForging",
			"workshop":"quarrierWorkshop",
			"time":6,
			"gainItem":{"crystalHelmet":1},
			"bonusTimeSkill":"stonecutting",
			"costRessource":{"crystals":3},
			"costPrimaryCharacteristic":{"stamina":12},
			"xpSecondaryCharacteristic":{"strength":12},
			"xpSkill":{"stonecutting":12},
			"quantity":-4
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
		"equip":true
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
		"equip":true
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
		"equip":true
	},
	"partialHelmet":{
		"type":"item",
		"age":"etherAge",
		"category":"head",
		"picture":{"file":"partialHelmet.atf"},
		"name":{"EN":"partial helmet",
				"FR":"casque partiel",
				"JP":"パーシャルヘルメット"},
		"description":{"EN":"The partial helmet is a light helmet made from cast iron.",
					   "FR":"Le casque partiel est un casque léger fabriqué avec du fer.",
					   "JP":"着用者の体力を向上させる軽兜。電気属性にわずかに弱くなります。鎧工房にて鋳鉄となめし革から製造できます。"},
		"bonus":{"health":{"lightArmors":0.15}},
		"resistance":{"electricity":0.05},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"lightArmors":0.25}
				}
		},
		"appearance":{"hat":{"D":"partialHelmetD.png"}},
		"equip":true
	},
	"studdedLeatherArmor":{
		"type":"item",
		"age":"ironAge",
		"category":"body",
		"picture":{"file":"studdedLeatherArmor.atf"},
		"name":{"EN":"studded leather armour",
				"FR":"armure de cuir clouté",
				"JP":"鋲打ち革鎧"},
		"description":{"EN":"The studded leather armour is a light armour made from leather and cast iron.",
					   "FR":"L'armure de cuir clouté est une armure légère fabriquée avec du cuir et de la fonte.",
					   "JP":"着用者の体力を向上させる軽鎧。電気属性にわずかに弱くなります。製革所にてなめし革と鋳鉄から製造できます。"},
		"bonus":{"health":{"lightArmors":0.3375}},
		"resistance":{"electricity":0.05},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"rapidity":0.375},
				"xpSkill":{"lightArmors":0.75}
				}
		},
		"appearance":{"clothes":{"M":"studdedLeatherArmorM.png","F":"studdedLeatherArmorF.png"}},
		"equip":true
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
					   "JP":"着用者の体力を向上させる軽兜。電気属性にわずかに弱くなります。製革所にてなめし革と鋳鉄から製造できます。"},
		"bonus":{"health":{"lightArmors":0.1125}},
		"resistance":{"electricity":0.025},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"lightArmors":0.25}
				}
		},
		"appearance":{"hairs":{"D":"studdedLeatherCapD.png"}},
		"equip":true
	}
}