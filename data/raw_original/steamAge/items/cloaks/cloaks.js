{
	"cloakOfProtection":{
		"type":"item",
		"age":"steamAge",
		"category":"back",
		"picture":{"file":"cloakOfProtection.atf"},
		"name":{"EN":"cloak of protection",
				"FR":"cape de protection",
				"JP":"保護の外套"},
		"description":{"EN":"The cloak of protection increases your defence.",
					   "FR":"La cape de protection augmente votre défense.",
					   "JP":"着用者の防御力を向上させる外套。裁縫場で織物から製造できます。"},
		"bonus":{"defense":{"cloaks":0.25}},
		"resistance":{"magic":-0.1},
		"xpDefense":{
			"xpSecondaryCharacteristic":{"rapidity":0.25},
			"xpSkill":{"cloaks":0.5}
		},
		"appearance":{"cloakB":{"D":"cloakB.png","color":5397107},
					  "cloakF":{"D":"cloakF.png","color":5397107}},
		"equip":true,
		"produce":[{
				"workshop":"sewingWorkshop",
				"no":13,
				"time":8,
				"gainItem":{"cloakOfProtection":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":8},
				"costPrimaryCharacteristic":{"stamina":16},
				"xpSecondaryCharacteristic":{"address":16},
				"xpSkill":{"sewing":16},
				"quantity":-8
		}]
	},
	"cloakOfWizardry":{
		"type":"item",
		"age":"goldenAge",
		"category":"back",
		"picture":{"file":"cloakOfWizardry.atf"},
		"name":{"EN":"cloak of wizardry",
				"FR":"cape de sorcellerie",
				"JP":"魔術の外套"},
		"description":{"EN":"The cloak of wizardry increases your stock of mana.",
					   "FR":"La cape de sorcellerie améliore votre réserve de mana.",
					   "JP":"着用者の魔力を向上させ、魔法への耐性を与える外套。裁縫場で織物から製造できます。"},
		"bonus":{"mana":{"cloaks":0.5}},
		"resistance":{"magic":-0.1},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"cloaks":0.5}
				}
		},
		"appearance":{"cloakB":{"D":"cloakB.png","color":4344503},
					  "cloakF":{"D":"cloakF.png","color":4344503}},
		"equip":true,
		"produce":[{
				"workshop":"sewingWorkshop",
				"no":10,
				"time":6,
				"gainItem":{"cloakOfWizardry":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":6},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"address":12},
				"xpSkill":{"sewing":12},
				"quantity":-6
		}]
	},
	"nymphCloak":{
		"type":"item",
		"age":"steamAge",
		"category":"back",
		"picture":{"file":"nymphCloak.atf"},
		"name":{"EN":"nymph cloak",
				"FR":"cape de nymphe",
				"JP":"ニンフの外套"},
		"description":{"EN":"The nymph cloak increases your charisma.",
					   "FR":"La cape de nymphe augmente votre charisme.",
					   "JP":"着用者の魅力を向上させる外套。裁縫場で織物から製造できます。"},
		"bonus":{"charisma":{"cloaks":0.25}},
		"xpSecondaryCharacteristic":{
			"willpower":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"cloaks":0.5}
				}
		},
		"appearance":{"cloakB":{"D":"cloakB.png","color":11893685},
					  "cloakF":{"D":"cloakF.png","color":11893685}},
		"equip":true,
		"produce":[{
				"workshop":"sewingWorkshop",
				"no":14,
				"time":8,
				"gainItem":{"nymphCloak":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":8},
				"costPrimaryCharacteristic":{"stamina":16},
				"xpSecondaryCharacteristic":{"address":16},
				"xpSkill":{"sewing":16},
				"quantity":-8
		}]
	}
}