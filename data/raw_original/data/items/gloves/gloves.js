{
	"ballGloves":{
		"type":"item",
		"age":"goldenAge",
		"category":"hand",
		"picture":{"file":"ballGloves.atf"},
		"name":{"EN":"ball gloves",
				"FR":"gants de bal",
				"JP":"舞踏用手袋"},
		"description":{"EN":"The ball gloves are gloves made from leather and gold bars.",
					   "FR":"Les gants de bal sont des gants fabriqués avec du cuir et des lingots d'or.",
					   "JP":"着用者の持久力を向上させる手袋。革工房でなめし革と棒金から製造できます。"},
		"bonus":{"stamina":{"gloves":0.25}},
		"xpPrimaryCharacteristic":{
			"stamina":{
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
		"equip":true
	},
	"sorcererGloves":{
		"type":"item",
		"age":"etherAge",
		"category":"hand",
		"picture":{"file":"sorcererGloves.atf"},
		"name":{"EN":"sorcerer gloves",
				"FR":"gants de sorcier",
				"JP":"魔術師の手袋"},
		"description":{"EN":"Sorcerer gloves are magical gloves made from leather and crystal..",
					   "FR":"Les gants de sorcier sont des gants magiques fabriquées avec du cuir et des cristaux.",
					   "JP":"着用者の魔力を向上させる手袋。革工房でなめし革と水晶から製造できます。"},
		"bonus":{"mana":{"gloves":0.20}},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"intelligence":0.125},
				"xpSkill":{"gloves":1}
				}
		},
		"equip":true
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
		"resistance":{"electricity":0.1},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"gloves":1}
				}
		},
		"equip":true
	}
}