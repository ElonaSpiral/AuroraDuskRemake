{
	"redemptiveAltar":{
		"type":"workshop",
		"age":"etherAge",
		"no":17,
		"picture":{"file":"redemptiveAltar.png",
				   "file100":"redemptiveAltar100.atf"},
		"name":{"EN":"redemptive altar",
				"FR":"autel de magie rédemptrice",
				"JP":"光の祭壇"},
		"description":{"EN":"The redemptive altar is a workshop which allows you to create spells of light.",
					   "FR":"L'autel de magie rédemptrice permet de fabriquer des sorts de lumière.",
					   "JP":"光の呪文や呪物の製造が可能です。切石を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"freeStone":10},
			"costPrimaryCharacteristic":{"stamina":2},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":2},
			"xpSecondaryCharacteristic":{"strength":2},
			"prebuild":{"id":"redemptiveAltarYard", "time":1}
		},
		"quantity":100,
		"zero":{"EN":{"D":["I cannot find any redemptive altar."]},
				"FR":{"D":["Je ne trouve pas d'autel de magie rédemptrice."]},
				"JP":{"D":["光の祭壇が見当たらないな。"]}},
		"title":{"EN":"Create spells of light",
				 "FR":"Fabriquer des sorts de lumière",
				 "JP":"光の呪文の製造"},
		"produce":[{
				"time":5,
				"gainItem":{"lightScepter":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":5, "parchment":5},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"intelligence":10},
				"xpSkill":{"enchantment":10},
				"quantity":-5
			},{
				"time":0.5,
				"gainItem":{"healingScroll":1},
				"bonusSkill":"redemptiveMagic",
				"costRessource":{"parchment":1},
				"costPrimaryCharacteristic":{"stamina":1},
				"xpSecondaryCharacteristic":{"willpower":1},
				"xpSkill":{"redemptiveMagic":1},
				"repeat":true,
				"quantity":-1
			},{
				"time":0.5,
				"gainItem":{"healingSpiritScroll":1},
				"bonusSkill":"redemptiveMagic",
				"costRessource":{"parchment":1},
				"costPrimaryCharacteristic":{"stamina":1},
				"xpSecondaryCharacteristic":{"willpower":1},
				"xpSkill":{"redemptiveMagic":1},
				"repeat":true,
				"quantity":-1
			},{
				"time":0.5,
				"gainItem":{"protectionScroll":1},
				"bonusSkill":"redemptiveMagic",
				"costRessource":{"parchment":1},
				"costPrimaryCharacteristic":{"stamina":1},
				"xpSecondaryCharacteristic":{"willpower":1},
				"xpSkill":{"redemptiveMagic":1},
				"repeat":true,
				"quantity":-1
			},{
				"time":0.5,
				"gainItem":{"celerityScroll":1},
				"bonusSkill":"redemptiveMagic",
				"costRessource":{"parchment":1},
				"costPrimaryCharacteristic":{"stamina":1},
				"xpSecondaryCharacteristic":{"willpower":1},
				"xpSkill":{"redemptiveMagic":1},
				"repeat":true,
				"quantity":-1
			},{
				"time":14,
				"gainItem":{"lightStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":14, "paper":7},
				"costPrimaryCharacteristic":{"stamina":28},
				"xpSecondaryCharacteristic":{"intelligence":28},
				"xpSkill":{"enchantment":28},
				"quantity":-14
			},{
				"time":20,
				"gainItem":{"sunDiadem":1},
				"bonusTimeSkill":"goldsmithery",
				"costRessource":{"goldBar":4, "paper":10},
				"costPrimaryCharacteristic":{"stamina":40},
				"xpSecondaryCharacteristic":{"intelligence":40},
				"xpSkill":{"goldsmithery":40},
				"quantity":-16
			},{
				"time":5,
				"gainItem":{"healingBook":1},
				"bonusTimeSkill":"redemptiveMagic",
				"costRessource":{"paper":5},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"willpower":10},
				"xpSkill":{"redemptiveMagic":10},
				"quantity":-10
			},{
				"time":5,
				"gainItem":{"healOtherBook":1},
				"bonusTimeSkill":"redemptiveMagic",
				"costRessource":{"paper":5},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"willpower":10},
				"xpSkill":{"redemptiveMagic":10},
				"quantity":-10
			},{
				"time":5,
				"gainItem":{"protectionBook":1},
				"bonusTimeSkill":"redemptiveMagic",
				"costRessource":{"paper":5},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"willpower":10},
				"xpSkill":{"redemptiveMagic":10},
				"quantity":-10
			},{
				"time":5,
				"gainItem":{"celerityBook":1},
				"bonusTimeSkill":"redemptiveMagic",
				"costRessource":{"paper":5},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"willpower":10},
				"xpSkill":{"redemptiveMagic":10},
				"quantity":-10
			}],
		"repair":{
			"health":15,
			"time":1,
			"costRessource":{"freeStone":1},
			"costPrimaryCharacteristic":{"stamina":2},
			"sound":"soundBuilding",
			"bonusSkill":"repairing",
			"xpSkill":{"repairing":2},
			"xpSecondaryCharacteristic":{"endurance":2}
		},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":64,
		"height":64,
		"health":150,
		"defense":200,
		"resistance":{"light":0.5, "death":0.5, "demolition":2, "poison":0}
	},
	"redemptiveAltarYard":{
		"type":"prebuild",
		"picture":{"file":"redemptiveAltarYard.png",
				   "file100":"redemptiveAltarYard100.atf"},
		"name":{"EN":"redemptive altar",
				"FR":"autel de magie rédemptrice",
				"JP":"光の祭壇"},
		"description":{"EN":"The redemptive altar is a workshop which allows you to create spells of light.",
					   "FR":"L'autel de magie rédemptrice permet de fabriquer des sorts de lumière.",
					   "JP":"光の呪文や呪物の製造が可能です。切石を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction"}
		},
		"width":64,
		"height":64,
		"defense":200,
		"resistance":{"light":0.5, "death":0.5, "demolition":2, "poison":0},
		"steps":0
	}
}