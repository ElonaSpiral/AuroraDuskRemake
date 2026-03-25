{
	"amuletOfMagicResistance":{
		"type":"item",
		"age":"goldenAge",
		"category":"neck",
		"picture":{"file":"amuletOfMagicResistance.atf"},
		"name":{"EN":"amulet of magic resistance",
				"FR":"amulette de résistance à la magie",
				"JP":"魔法耐性のお守り"},
		"description":{"EN":"This amulet increases your resistance to all sorts of magic.",
					   "FR":"Cette amulette augmente votre résistance à toutes les magies.",
					   "JP":"着用者の全魔法属性に対する耐性を向上させる首飾り。宝石細工場で棒金と水晶から製造できます。"},
		"resistance":{"magic":-0.2},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				}
		},
		"equip":true,
		"produce":[{
				"workshop":"jewelryWorkshop",
				"no":7.5,
				"time":9.5,
				"gainItem":{"amuletOfMagicResistance":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":3, "crystals":1},
				"costPrimaryCharacteristic":{"stamina":19},
				"xpSecondaryCharacteristic":{"address":19},
				"xpSkill":{"goldsmithery":19},
				"quantity":-9
		}]
	},
	"ringOfFaith":{
		"type":"item",
		"age":"steamAge",
		"category":"ring",
		"picture":{"file":"ringOfFaith.atf"},
		"name":{"EN":"ring of faith",
				"FR":"anneau de foi",
				"JP":"信仰の指輪"},
		"description":{"EN":"The ring of faith is a jewel made from gold bars.",
					   "FR":"L'anneau de foi est un bijou fabriqué avec des lingots d'or.",
					   "JP":"着用者の意志力を向上させる指輪。宝石細工場で棒金から製造できます。"},
		"bonus":{"willpower":25},
		"xpSecondaryCharacteristic":{
			"willpower":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				}
		},
		"equip":true,
		"oneHand":true,
		"produce":[{
				"workshop":"jewelryWorkshop",
				"no":10,
				"time":7.5,
				"gainItem":{"ringOfFaith":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":3},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"address":15},
				"xpSkill":{"goldsmithery":15},
				"quantity":-6
		}]
	},
	"ringOfFireResistance":{
		"type":"item",
		"age":"steamAge",
		"category":"ring",
		"picture":{"file":"ringOfFireResistance.atf"},
		"name":{"EN":"ring of fire resistance",
				"FR":"anneau de résistance au feu",
				"JP":"火耐性の指輪"},
		"description":{"EN":"The ring of fire resistance protects you from pyrotechnic spells.",
					   "FR":"L'anneau de résistance au feu vous protège des attaques pyrotechniques.",
					   "JP":"着用者の火属性に対する耐性を大きく向上させる指輪。火の祭壇で棒金から製造できます。"},
		"resistance":{"fire":-0.4},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				}
		},
		"equip":true,
		"oneHand":true,
		"produce":[{
				"workshop":"pyrotechnicAltar",
				"no":11.5,
				"time":7.5,
				"gainItem":{"ringOfFireResistance":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":3},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"address":15},
				"xpSkill":{"goldsmithery":15},
				"quantity":-6
		}]
	},
	"ringOfHumanInfluence":{
		"type":"item",
		"age":"steamAge",
		"category":"ring",
		"picture":{"file":"ringOfHumanInfluence.atf"},
		"name":{"EN":"ring of human influence",
				"FR":"anneau d'influence humaine",
				"JP":"魅力の指輪"},
		"description":{"EN":"The ring of human influence is a jewel made from gold bars.",
					   "FR":"L'anneau d'influence humaine est un bijou fabriqué avec des lingots d'or.",
					   "JP":"着用者の魅力を向上させる指輪。宝石細工場で棒金から製造できます。"},
		"bonus":{"charisma":25},
		"xpSecondaryCharacteristic":{
			"charisma":{
				"xpSkill":{"jewellery":0.5}
				}
		},
		"equip":true,
		"oneHand":true,
		"produce":[{
				"workshop":"jewelryWorkshop",
				"no":11,
				"time":7.5,
				"gainItem":{"ringOfHumanInfluence":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":3},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"address":15},
				"xpSkill":{"goldsmithery":15},
				"quantity":-6
		}]
	},
	"ringOfKnowledge":{
		"type":"item",
		"age":"steamAge",
		"category":"ring",
		"picture":{"file":"ringOfKnowledge.atf"},
		"name":{"EN":"ring of knowledge",
				"FR":"anneau de savoir",
				"JP":"知識の指輪"},
		"description":{"EN":"The ring of knowledge is a jewel made from gold bars.",
					   "FR":"L'anneau de savoir est un bijou fabriqué avec des lingots d'or.",
					   "JP":"着用者の知力を向上させる指輪。宝石細工場で棒金から製造できます。"},
		"bonus":{"intelligence":25},
		"xpSecondaryCharacteristic":{
			"intelligence":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				}
		},
		"equip":true,
		"oneHand":true,
		"produce":[{
				"workshop":"jewelryWorkshop",
				"no":9,
				"time":7.5,
				"gainItem":{"ringOfKnowledge":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":3},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"address":15},
				"xpSkill":{"goldsmithery":15},
				"quantity":-6
		}]
	},
	"ringOfSoulProtection":{
		"type":"item",
		"age":"goldenAge",
		"category":"ring",
		"picture":{"file":"ringOfSoulProtection.atf"},
		"name":{"EN":"ring of soul protection",
				"FR":"anneau de protection de l'âme",
				"JP":"魂保護の指輪"},
		"description":{"EN":"The ring of soul protection automatically resurrects you when you die. It breaks after use.",
					   "FR":"L'anneau de protection de l'âme vous ressuscite automatiquement à votre mort. Il se brise après utilisation.",
					   "JP":"着用者が死亡した際、自動的に身代わりになって消失する指輪。闇の祭壇で棒金から製造できます。"},
		"equip":true,
		"oneHand":true,
		"death":{
			"quantity":-1,
			"resurrect":1,
			"effect":"poisonGasEffect"
		}
	},
	"rosary":{
		"type":"item",
		"age":"steamAge",
		"category":"neck",
		"picture":{"file":"rosary.atf"},
		"name":{"EN":"rosary",
				"FR":"chapelet",
				"JP":"ロザリオ"},
		"description":{"EN":"The rosary is a collar which increases your magic of light skills.",
					   "FR":"Le chapelet est un collier qui augmente vos compétences de magie blanche.",
					   "JP":"着用者の鎮圧・救済魔術技能を向上させ、光属性への耐性を与える首飾り。光の祭壇で木材と羊毛から製造できます。"},
		"bonus":{"repressiveMagic":{"jewellery":0.25},
				 "redemptiveMagic":{"jewellery":0.25}},
		"resistance":{"light":-0.2},
		"xpSkill":{
			"repressiveMagic":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				},
			"redemptiveMagic":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				}
		},
		"equip":true,
		"produce":[{
				"workshop":"redemptiveAltar",
				"no":12,
				"time":1.5,
				"gainItem":{"rosary":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":1, "wool":1},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"address":3},
				"xpSkill":{"enchantment":3},
				"quantity":-2
		}]
	},
	"strengthRing":{
		"type":"item",
		"age":"steamAge",
		"category":"ring",
		"picture":{"file":"strengthRing.atf"},
		"name":{"EN":"strength ring",
				"FR":"anneau de force",
				"JP":"筋力の指輪"},
		"description":{"EN":"The strength ring is a jewel made from gold bars.",
					   "FR":"L'anneau de force est un bijou fabriqué avec des lingots d'or.",
					   "JP":"着用者の筋力を向上させる指輪。宝石細工場で棒金から製造できます。"},
		"bonus":{"strength":25},
		"xpSecondaryCharacteristic":{
			"strength":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				}
		},
		"equip":true,
		"oneHand":true,
		"produce":[{
				"workshop":"jewelryWorkshop",
				"no":8,
				"time":7.5,
				"gainItem":{"strengthRing":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":3},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"address":15},
				"xpSkill":{"goldsmithery":15},
				"quantity":-6
		}]
	}
}