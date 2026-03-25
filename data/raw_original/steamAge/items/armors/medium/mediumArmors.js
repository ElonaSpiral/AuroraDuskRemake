{
	"cabasset":{
		"type":"item",
		"age":"goldenAge",
		"category":"head",
		"picture":{"file":"cabasset.atf"},
		"name":{"EN":"cabasset",
				"FR":"cabasset",
				"JP":"キャバセット"},
		"description":{"EN":"The cabasset is a medium helmet made from cast iron.",
					   "FR":"Le cabasset est un casque moyen fabriqué avec de la fonte.",
					   "JP":"着用者の体力を向上させる兜。移動速度が遅くなる他、電気属性にわずかに弱くなります。鎧工房にて鋳鉄となめし革から製造できます。"},
		"bonus":{"health":{"mediumArmors":0.25}},
		"bonusSpeed":-0.25,
		"resistance":{"electricity":0.1},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"endurance":0.125},
				"xpSkill":{"mediumArmors":0.25}
				}
		},
		"appearance":{"hairs":{"D":"cabassetD.png"}},
		"equip":true,
		"upgrade":[{
				"workshop":"armoryWorkshop",
				"time":7.5,
				"gainItem":{"spikedHelmet":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"steel":4, "leather":3},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"weaponsForging":15},
				"quantity":-5
		}]
	},
	"chainCap":{
		"type":"item",
		"age":"ironAge",
		"category":"head",
		"picture":{"file":"chainCap.atf"},
		"name":{"EN":"chain cap",
				"FR":"calotte de mailles",
				"JP":"鎖帽"},
		"description":{"EN":"The chain cap is a medium helmet made from cast iron.",
					   "FR":"La calotte de mailles est un casque moyen fabriqué avec de la fonte.",
					   "JP":"着用者の体力を向上させる兜。移動速度が遅くなる他、電気属性にわずかに弱くなります。鎧工房にて鋳鉄から製造できます。"},
		"bonus":{"health":{"mediumArmors":0.15}},
		"bonusSpeed":-0.25,
		"resistance":{"electricity":0.1},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"endurance":0.125},
				"xpSkill":{"mediumArmors":0.25}
				}
		},
		"appearance":{"hairs":{"D":"chainCapD.png"}},
		"equip":true,
		"upgrade":[{
				"workshop":"armoryWorkshop",
				"time":1.5,
				"gainItem":{"ironChapel":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"castIron":1},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"strength":3},
				"xpSkill":{"weaponsForging":3},
				"quantity":-1
			},{
				"workshop":"armoryWorkshop",
				"time":4.5,
				"gainItem":{"cabasset":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"castIron":2, "leather":3},
				"costPrimaryCharacteristic":{"stamina":9},
				"xpSecondaryCharacteristic":{"strength":9},
				"xpSkill":{"weaponsForging":9},
				"quantity":-3
			},{
				"workshop":"armoryWorkshop",
				"time":7.5,
				"gainItem":{"spikedHelmet":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"steel":4, "leather":3},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"weaponsForging":15},
				"quantity":-5
		}]
	},
	"chainmail":{
		"type":"item",
		"age":"ironAge",
		"category":"body",
		"picture":{"file":"chainmail.atf"},
		"name":{"EN":"chainmail",
				"FR":"cotte de mailles",
				"JP":"鎖帷子"},
		"description":{"EN":"The chainmail is a medium armour made from cast iron.",
					   "FR":"La cotte de mailles est une armure moyenne fabriquée avec de la fonte.",
					   "JP":"着用者の体力を向上させる鎧。移動速度が遅くなる他、電気属性に弱くなります。鎧工房にて鋳鉄から製造できます。"},
		"bonus":{"health":{"mediumArmors":0.45}},
		"bonusSpeed":-0.75,
		"resistance":{"electricity":0.2},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"endurance":0.375},
				"xpSkill":{"mediumArmors":0.75}
				}
		},
		"appearance":{"clothes":{"M":"chainmailM.png","F":"chainmailF.png"}},
		"equip":true,
		"upgrade":[{
				"workshop":"armoryWorkshop",
				"time":4.5,
				"gainItem":{"chainShirt":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"castIron":2, "leather":3},
				"costPrimaryCharacteristic":{"stamina":9},
				"xpSecondaryCharacteristic":{"strength":9},
				"xpSkill":{"weaponsForging":9},
				"quantity":-3
			},{
				"workshop":"armoryWorkshop",
				"time":9,
				"gainItem":{"longMail":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"castIron":5, "leather":3},
				"costPrimaryCharacteristic":{"stamina":18},
				"xpSecondaryCharacteristic":{"strength":18},
				"xpSkill":{"weaponsForging":18},
				"quantity":-6
			},{
				"workshop":"armoryWorkshop",
				"time":19.5,
				"gainItem":{"shellArmor":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"steel":12, "leather":3},
				"costPrimaryCharacteristic":{"stamina":39},
				"xpSecondaryCharacteristic":{"strength":39},
				"xpSkill":{"weaponsForging":39},
				"quantity":-13
		}]
	},
	"chainShirt":{
		"type":"item",
		"age":"etherAge",
		"category":"body",
		"picture":{"file":"chainShirt.atf"},
		"name":{"EN":"chain shirt",
				"FR":"chemise de mailles",
				"JP":"鎖のシャツ"},
		"description":{"EN":"The chain shirt is a medium armour made from cast iron.",
					   "FR":"La chemise de mailles est une armure moyenne fabriquée avec de la fonte.",
					   "JP":"着用者の体力を向上させる鎧。移動速度が遅くなる他、電気属性に弱くなります。鎧工房にて鋳鉄となめし革から製造できます。"},
		"bonus":{"health":{"mediumArmors":0.6}},
		"bonusSpeed":-0.75,
		"resistance":{"electricity":0.2},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"endurance":0.375},
				"xpSkill":{"mediumArmors":0.75}
				}
		},
		"appearance":{"clothes":{"M":"chainShirtM.png","F":"chainShirtF.png"}},
		"equip":true,
		"upgrade":[{
				"workshop":"armoryWorkshop",
				"time":4.5,
				"gainItem":{"longMail":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"castIron":3},
				"costPrimaryCharacteristic":{"stamina":9},
				"xpSecondaryCharacteristic":{"strength":9},
				"xpSkill":{"weaponsForging":9},
				"quantity":-3
			},{
				"workshop":"armoryWorkshop",
				"time":18,
				"gainItem":{"shellArmor":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"steel":12},
				"costPrimaryCharacteristic":{"stamina":36},
				"xpSecondaryCharacteristic":{"strength":36},
				"xpSkill":{"weaponsForging":36},
				"quantity":-12
		}]
	},
	"ironChapel":{
		"type":"item",
		"age":"etherAge",
		"category":"head",
		"picture":{"file":"ironChapel.atf"},
		"name":{"EN":"iron chapel",
				"FR":"chapel de fer",
				"JP":"鉄のチャペル"},
		"description":{"EN":"The iron chapel is a medium helmet made from cast iron.",
					   "FR":"Le chapel de fer est un casque moyen fabriqué avec de la fonte.",
					   "JP":"着用者の体力を向上させる兜。移動速度が遅くなる他、電気属性にわずかに弱くなります。鎧工房にて鋳鉄から製造できます。"},
		"bonus":{"health":{"mediumArmors":0.2}},
		"bonusSpeed":-0.25,
		"resistance":{"electricity":0.1},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"endurance":0.125},
				"xpSkill":{"mediumArmors":0.25}
				}
		},
		"appearance":{"hairs":{"D":"ironChapelD.png"}},
		"equip":true,
		"upgrade":[{
				"workshop":"armoryWorkshop",
				"time":3,
				"gainItem":{"cabasset":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"castIron":1, "leather":3},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"strength":6},
				"xpSkill":{"weaponsForging":6},
				"quantity":-2
			},{
				"workshop":"armoryWorkshop",
				"time":7.5,
				"gainItem":{"spikedHelmet":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"steel":4, "leather":3},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"weaponsForging":15},
				"quantity":-5
		}]
	},
	"longMail":{
		"type":"item",
		"age":"goldenAge",
		"category":"body",
		"picture":{"file":"longMail.atf"},
		"name":{"EN":"long mail",
				"FR":"haubert",
				"JP":"長帷子"},
		"description":{"EN":"The long mail is a medium armour made from cast iron.",
					   "FR":"Le haubert est une armure moyenne fabriquée avec de la fonte.",
					   "JP":"着用者の体力を向上させる鎧。移動速度が遅くなる他、電気属性に弱くなります。鎧工房にて鋳鉄となめし革から製造できます。"},
		"bonus":{"health":{"mediumArmors":0.75}},
		"bonusSpeed":-0.75,
		"resistance":{"electricity":0.2},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"endurance":0.375},
				"xpSkill":{"mediumArmors":0.75}
				}
		},
		"appearance":{"clothes":{"M":"longMailM.png","F":"longMailF.png"}},
		"equip":true,
		"upgrade":[{
				"workshop":"armoryWorkshop",
				"time":18,
				"gainItem":{"shellArmor":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"steel":12},
				"costPrimaryCharacteristic":{"stamina":36},
				"xpSecondaryCharacteristic":{"strength":36},
				"xpSkill":{"weaponsForging":36},
				"quantity":-12
		}]
	},
	"shellArmor":{
		"type":"item",
		"age":"steamAge",
		"category":"body",
		"picture":{"file":"shellArmor.atf"},
		"name":{"EN":"shell armour",
				"FR":"armure à bandes",
				"JP":"シェルアーマー"},
		"description":{"EN":"The shell armour is the best medium armour.",
					   "FR":"L'armure à bandes est la meilleur armure moyenne.",
					   "JP":"着用者の体力を向上させる鎧。移動速度が遅くなる他、電気属性に弱くなります。鎧工房にて鋼鉄となめし革から製造できます。"},
		"bonus":{"health":{"mediumArmors":0.85}},
		"bonusSpeed":-0.75,
		"resistance":{"electricity":0.2},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"endurance":0.375},
				"xpSkill":{"mediumArmors":0.75}
				}
		},
		"appearance":{"clothes":{"M":"shellArmorM.png","F":"shellArmorF.png"}},
		"equip":true,
		"produce":[{
				"workshop":"armoryWorkshop",
				"no":20,
				"time":22.5,
				"gainItem":{"shellArmor":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"leather":3, "steel":14},
				"costPrimaryCharacteristic":{"stamina":45},
				"xpSecondaryCharacteristic":{"strength":45},
				"xpSkill":{"weaponsForging":45},
				"quantity":-15
		}]
	},
	"spikedHelmet":{
		"type":"item",
		"age":"steamAge",
		"category":"head",
		"picture":{"file":"spikedHelmet.atf"},
		"name":{"EN":"spiked helmet",
				"FR":"casque à pointe",
				"JP":"ピッケルハウベ"},
		"description":{"EN":"The spiked helmet is a medium helmet which offer you an extra attack.",
					   "FR":"Le casque à pointe est un casque moyen qui procure une attaque supplémentaire.",
					   "JP":"小型武器の機能も備えた、着用者の体力を向上させる兜。移動速度が遅くなる他、電気属性に弱くなります。鎧工房にて鋼鉄となめし革から製造できます。"},
		"bonus":{"health":{"mediumArmors":0.25},
				 "attack":{"lightWeapons":0.14}},
		"attackTime":1.5,
		"damage":["closeCombat", "piercing"],
		"effect":"missileEffect",
		"bonusSpeed":-0.25,
		"resistance":{"electricity":0.2},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":0.1},
			"xpSkill":{"lightWeapons":0.1}
		},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"endurance":0.125},
				"xpSkill":{"mediumArmors":0.25}
				}
		},
		"appearance":{"hairs":{"D":"spikedHelmetD.png"}},
		"equip":true,
		"produce":[{
				"workshop":"armoryWorkshop",
				"no":21,
				"time":9,
				"gainItem":{"spikedHelmet":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"steel":5, "leather":3},
				"costPrimaryCharacteristic":{"stamina":18},
				"xpSecondaryCharacteristic":{"strength":18},
				"xpSkill":{"weaponsForging":18},
				"quantity":-6
		}]
	}
}