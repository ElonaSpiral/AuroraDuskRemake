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
		"oneHand":true
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
		"oneHand":true
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
		"oneHand":true
	},
	"woodenShield":{
		"type":"item",
		"age":"stoneAge",
		"category":"weapon",
		"picture":{"file":"woodenShield.atf"},
		"name":{"EN":"wooden shield",
				"FR":"targe",
				"JP":"木の盾"},
		"description":{"EN":"The wooden shield is a medieval protection made from planks.",
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
		"oneHand":true
	}
}