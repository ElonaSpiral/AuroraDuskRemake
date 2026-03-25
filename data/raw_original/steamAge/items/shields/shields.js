{
	"largeShield":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"largeShield.atf"},
		"name":{"EN":"large shield",
				"FR":"pavois",
				"JP":"大盾"},
		"description":{"EN":"The large shield is a medieval protection made from cast iron.",
					   "FR":"Le pavois est une protection médiévale fabriquée avec des lingots de fonte.",
					   "JP":"中世的な片手持ちの盾。着用者の防御力を高め、近接攻撃と射撃攻撃への耐性を与えますが、電気属性にわずかに弱くなります。鎧工房で鋳鉄から製造できます。"},
		"bonus":{"defense":{"shields":1}},
		"resistance":{"closeCombat":-0.1, "missile":-0.2, "electricity":0.1},
		"xpDefense":{
			"xpSecondaryCharacteristic":{"endurance":0.5},
			"xpSkill":{"shields":0.5}
		},
		"tag":["shield"],
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"armoryWorkshop",
				"time":7.5,
				"gainItem":{"steelShield":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"steel":5},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"weaponsForging":15},
				"quantity":-5
		}]
	},
	"mediumShield":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"mediumShield.atf"},
		"name":{"EN":"medium shield",
				"FR":"écu",
				"JP":"盾"},
		"description":{"EN":"The medium shield is a medieval protection made from cast iron.",
					   "FR":"L'écu est une protection médiévale fabriquée avec des lingots de fonte.",
					   "JP":"中世的な片手持ちの盾。着用者の防御力を高め、近接攻撃と射撃攻撃への耐性を与えますが、電気属性にわずかに弱くなります。鎧工房で鋳鉄から製造できます。"},
		"bonus":{"defense":{"shields":0.8}},
		"resistance":{"closeCombat":-0.15, "missile":-0.15, "electricity":0.1},
		"xpDefense":{
			"xpSecondaryCharacteristic":{"endurance":0.5},
			"xpSkill":{"shields":0.5}
		},
		"tag":["shield"],
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"armoryWorkshop",
				"time":1.5,
				"gainItem":{"largeShield":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"castIron":1},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"strength":3},
				"xpSkill":{"weaponsForging":3},
				"quantity":-1
			},{
				"workshop":"armoryWorkshop",
				"time":7.5,
				"gainItem":{"steelShield":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"steel":5},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"weaponsForging":15},
				"quantity":-5
		}]
	},
	"smallShield":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"smallShield.atf"},
		"name":{"EN":"small shield",
				"FR":"rondache",
				"JP":"小盾"},
		"description":{"EN":"The small shield is a medieval protection made from wood and cast iron.",
					   "FR":"La rondache est une protection médiévale fabriquée avec du bois et des lingots de fonte.",
					   "JP":"中世的な片手持ちの盾。着用者の防御力を高め、近接攻撃と射撃攻撃への耐性を与えますが、電気属性にわずかに弱くなります。鎧工房で厚板と鋳鉄から製造できます。"},
		"bonus":{"defense":{"shields":0.6}},
		"resistance":{"closeCombat":-0.2, "missile":-0.1, "electricity":0.1},
		"xpDefense":{
			"xpSecondaryCharacteristic":{"endurance":0.5},
			"xpSkill":{"shields":0.5}
		},
		"tag":["shield"],
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"armoryWorkshop",
				"time":4.5,
				"gainItem":{"mediumShield":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"castIron":3},
				"costPrimaryCharacteristic":{"stamina":9},
				"xpSecondaryCharacteristic":{"strength":9},
				"xpSkill":{"weaponsForging":9},
				"quantity":-3
			},{
				"workshop":"armoryWorkshop",
				"time":6,
				"gainItem":{"largeShield":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"castIron":4},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"strength":12},
				"xpSkill":{"weaponsForging":12},
				"quantity":-4
			},{
				"workshop":"armoryWorkshop",
				"time":7.5,
				"gainItem":{"steelShield":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"steel":5},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"weaponsForging":15},
				"quantity":-5
		}]
	},
	"steelShield":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"steelShield.atf"},
		"name":{"EN":"steel shield",
				"FR":"bouclier d'acier",
				"JP":"鋼鉄の盾"},
		"description":{"EN":"The steel shield is a modern protection made from steel.",
					   "FR":"Le bouclier d'acier est une protection moderne fabriquée avec de l'acier.",
					   "JP":"現代的な片手持ちの盾。着用者の防御力を高め、近接攻撃と射撃攻撃への耐性を与えますが、電気属性にわずかに弱くなります。鎧工房で鋼鉄から製造できます。"},
		"bonus":{"defense":{"shields":1.13}},
		"resistance":{"closeCombat":-0.1, "missile":-0.2, "electricity":0.1},
		"xpDefense":{
			"xpSecondaryCharacteristic":{"endurance":0.5},
			"xpSkill":{"shields":0.5}
		},
		"tag":["shield"],
		"equip":true,
		"oneHand":true,
		"produce":[{
				"workshop":"armoryWorkshop",
				"no":20,
				"time":9,
				"gainItem":{"steelShield":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"steel":6},
				"costPrimaryCharacteristic":{"stamina":18},
				"xpSecondaryCharacteristic":{"strength":18},
				"xpSkill":{"weaponsForging":18},
				"quantity":-6
		}]
	},
	"woodenShield":{
		"type":"item",
		"age":"stoneAge",
		"category":"weapon",
		"picture":{"file":"woodenShield.atf"},
		"name":{"EN":"wooden shield",
				"FR":"targe",
				"JP":"木の盾"},
		"description":{"EN":"The wooden shield is a miedeval protection manufactured from planks.",
					   "FR":"La targe est une protection médiévale fabriquée avec des planches.",
					   "JP":"中世的な片手持ちの盾。着用者の防御力を高め、近接攻撃と射撃攻撃、電気属性への耐性を与えますが、火属性にわずかに弱くなります。鋸台で厚板から製造できます。"},
		"bonus":{"defense":{"shields":0.4}},
		"resistance":{"closeCombat":-0.2, "missile":-0.1, "fire":0.1, "electricity":-0.1},
		"xpDefense":{
			"xpSecondaryCharacteristic":{"endurance":0.5},
			"xpSkill":{"shields":0.5}
		},
		"tag":["shield"],
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"armoryWorkshop",
				"time":2,
				"gainItem":{"smallShield":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"plank":1, "castIron":1},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"strength":4},
				"xpSkill":{"weaponsForging":4},
				"quantity":-1
			},{
				"workshop":"armoryWorkshop",
				"time":4.5,
				"gainItem":{"mediumShield":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"castIron":3},
				"costPrimaryCharacteristic":{"stamina":9},
				"xpSecondaryCharacteristic":{"strength":9},
				"xpSkill":{"weaponsForging":9},
				"quantity":-3
			},{
				"workshop":"armoryWorkshop",
				"time":6,
				"gainItem":{"largeShield":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"castIron":4},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"strength":12},
				"xpSkill":{"weaponsForging":12},
				"quantity":-4
			},{
				"workshop":"armoryWorkshop",
				"time":7.5,
				"gainItem":{"steelShield":1},
				"bonusTimeSkill":"armorsForging",
				"costRessource":{"steel":5},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"weaponsForging":15},
				"quantity":-5
		}]
	}
}