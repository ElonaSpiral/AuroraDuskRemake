{
	"ambroisia":{
		"type":"item",
		"age":"stoneAge",
		"category":"edible",
		"picture":{"file":"ambrosia.atf"},
		"name":{"EN":"ambrosia",
				"FR":"ambroisie",
				"JP":"精製水"},
		"description":{"EN":"Ambrosia is the drink of the gods.",
					   "FR":"L'ambroisie est la boisson des dieux.",
					   "JP":"アンブロシアは神の飲み物です。"},
		"use":{
			"quantity":-1,
			"gainTemporaryItem":{"foodBonusAmbrosia":120},
			"gainPrimaryCharacteristic":{"stamina":{"intelligence":0.2}},
			"xpSecondaryCharacteristic":{"intelligence":2}
		},
		"maxQuantity":{"alcohols":1},
		"full":{"EN":{"D":["I have too much ambrosia."]},
				"FR":{"D":["J'ai le maximum d'ambroisie."]},
				"JP":{"D":["アンブロシアが多すぎます。"]}},
		"secret":true
	},
	"chocolate":{
		"type":"item",
		"age":"steamAge",
		"category":"edible",
		"picture":{"file":"chocolate.atf"},
		"name":{"EN":"chocolate",
				"FR":"chocolat",
				"JP":"チョコレート"},
		"description":{"EN":"Chocolate is a delight brought from faraway lands.",
					   "FR":"Le chocolat est un délice importé de contrées lointaines.",
					   "JP":"チョコレートは遠くの土地からもたらされる喜びです。"},
		"use":{
			"quantity":-1,
			"gainTemporaryItem":{"foodBonusChocolate":120},
			"gainPrimaryCharacteristic":{"stamina":{"rapidity":0.2}},
			"xpSecondaryCharacteristic":{"rapidity":2}
		},
		"maxQuantity":{"alcohols":1},
		"full":{"EN":{"D":["I have too much chocolate."]},
				"FR":{"D":["J'ai le maximum de chocolat."]},
				"JP":{"D":["チョコレートが多すぎます。"]}},
		"secret":true
	},
	"diamondNecklace":{
		"type":"item",
		"age":"goldenAge",
		"category":"neck",
		"picture":{"file":"diamondNecklace.atf"},
		"name":{"EN":"diamond necklace",
				"FR":"collier de diamants",
				"JP":"ダイアモンドのネックレス"},
		"description":{"EN":"This necklace is one of the most beautiful jewel of the crown.",
					   "FR":"Ce collier est l'un des plus beaux joyaux de la couronne.",
					   "JP":"このネックレスは、王冠の最も美しい宝石の一つです。"},
		"bonus":{"health":{"jewellery":0.5}, "stamina":{"jewellery":0.5}, "mana":{"jewellery":0.5}},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"charisma":0.04},
				"xpSkill":{"jewellery":0.08}
				},
			"stamina":{
				"xpSecondaryCharacteristic":{"charisma":0.04},
				"xpSkill":{"jewellery":0.08}
				},
			"mana":{
				"xpSecondaryCharacteristic":{"charisma":0.04},
				"xpSkill":{"jewellery":0.08}
				}
		},
		"equip":true,
		"secret":true
	},
	"pastry":{
		"type":"item",
		"age":"goldenAge",
		"category":"edible",
		"picture":{"file":"pastry.atf"},
		"name":{"EN":"pastries",
				"FR":"pâtisseries",
				"JP":"ペストリー"},
		"description":{"EN":"Pastries are a fine dish.",
					   "FR":"La patisserie est un met raffiné.",
					   "JP":"ペストリーは素晴らしい料理です。"},
		"use":{
			"quantity":-1,
			"gainTemporaryItem":{"foodBonusPastry":120},
			"gainPrimaryCharacteristic":{"stamina":{"charisma":0.2}},
			"xpSecondaryCharacteristic":{"charisma":2}
		},
		"maxQuantity":{"bakery":1},
		"full":{"EN":{"D":["I have too many pastries."]},
				"FR":{"D":["J'ai le maximum de pâtisseries."]},
				"JP":{"D":["ペストリーが多すぎます。"]}},
		"secret":true
	},
	"royalJelly":{
		"type":"item",
		"age":"etherAge",
		"category":"edible",
		"picture":{"file":"royalJelly.atf"},
		"name":{"EN":"royal jelly",
				"FR":"gelée royale",
				"JP":"ローヤルゼリー"},
		"description":{"EN":"Royal jelly is the food of queen bee.",
					   "FR":"La gelée royale est l'aliment de la reins des abeilles.",
					   "JP":"ローヤルゼリーは、女王蜂の餌です。"},
		"use":{
			"quantity":-1,
			"gainTemporaryItem":{"foodBonusRoyalJelly":120},
			"gainPrimaryCharacteristic":{"stamina":{"willpower":0.2}},
			"xpSecondaryCharacteristic":{"willpower":2}
		},
		"maxQuantity":{"bakery":1},
		"full":{"EN":{"D":["I have too much royal jelly."]},
				"FR":{"D":["J'ai le maximum de gelée royale."]},
				"JP":{"D":["ローヤルゼリーが多すぎます。"]}},
		"secret":true
	},
	"sigillaryRing":{
		"type":"item",
		"age":"goldenAge",
		"category":"ring",
		"picture":{"file":"sigillaryRing.atf"},
		"name":{"EN":"sigillary ring",
				"FR":"anneau sigillaire",
				"JP":"シジラリング"},
		"description":{"EN":"This ring is used by the sovereign to affix his seal.",
					   "FR":"Cet anneau est utilisé par le souverain pour apposer son sceau.",
					   "JP":"このリングは、主権者が彼のシールを貼るために使用します。"},
		"bonus":{"conscription":{"jewellery":0.25},
				 "militaryEngineering":{"jewellery":0.25},
				 "training":{"jewellery":0.25}},
		"xpSkill":{
			"conscription":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				},
			"militaryEngineering":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				},
			"training":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				}
		},
		"equip":true,
		"secret":true
	},
	"velvetGloves":{
		"type":"item",
		"age":"steamAge",
		"category":"hand",
		"picture":{"file":"velvetGloves.atf"},
		"name":{"EN":"velvet gloves",
				"FR":"gants de velours",
				"JP":"ベルベット手袋"},
		"description":{"EN":"Velvet gloves can hide iron hands.",
					   "FR":"Un gant de velours peut cacher une main de fer.",
					   "JP":"ベルベットの手袋は鉄の手を隠すことができます。"},
		"bonus":{"strength":25, "address":25, "intelligence":25},
		"xpPrimaryCharacteristic":{
			"strength":{
				"xpSecondaryCharacteristic":{"charisma":0.04},
				"xpSkill":{"jewellery":0.08}
				},
			"address":{
				"xpSecondaryCharacteristic":{"charisma":0.04},
				"xpSkill":{"jewellery":0.08}
				},
			"intelligence":{
				"xpSecondaryCharacteristic":{"charisma":0.04},
				"xpSkill":{"jewellery":0.08}
				}
		},
		"equip":true,
		"secret":true
	}
}