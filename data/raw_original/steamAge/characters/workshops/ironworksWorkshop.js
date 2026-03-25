{
	"ironworksWorkshop":{
		"type":"workshop",
		"age":"ironAge",
		"no":13.5,
		"picture":{"file":"ironworksWorkshop.png",
				   "file100":"ironworksWorkshop100.atf"},
		"name":{"EN":"ironwork workshop",
				"FR":"atelier de ferronnerie",
				"JP":"鉄製品工房"},
		"description":{"EN":"The ironwork workshop allows you to manufacture tools.",
					   "FR":"L'atelier de ferronnerie vous permet de fabriquer des outils.",
					   "JP":"鋳鉄などを用いて道具の製造が可能です。切石を用いて建築することができます。"},
		"build":{
			"buildable":"all",
			"costRessource":{"freeStone":10},
			"costPrimaryCharacteristic":{"stamina":2},
			"sound":"soundBuilding",
			"bonusSkill":"building",
			"xpSkill":{"building":2},
			"xpSecondaryCharacteristic":{"strength":2},
			"prebuild":{"id":"ironworksWorkshopYard", "time":0.5}
		},
		"quantity":80,
		"zero":{"EN":{"D":["I cannot find any ironwork workshop."]},
				"FR":{"D":["Je ne trouve pas d'atelier de ferronnerie."]},
				"JP":{"D":["鉄製品工房が見当たらないな。"]}},
		"title":{"EN":"Manufacture tools",
				 "FR":"Fabriquer des outils",
				 "JP":"道具の製造"},
		"produce":[{
				"time":2,
				"gainItem":{"scissors":1},
				"bonusTimeSkill":"toolsForging",
				"costRessource":{"castIron":2},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"strength":6},
				"xpSkill":{"toolsForging":6},
				"quantity":-2
			},{
				"time":2,
				"gainItem":{"billhook":1},
				"bonusTimeSkill":"toolsForging",
				"costRessource":{"wood":1, "castIron":2},
				"costPrimaryCharacteristic":{"stamina":7},
				"xpSecondaryCharacteristic":{"strength":7},
				"xpSkill":{"toolsForging":7},
				"quantity":-2
			},{
				"time":4,
				"gainItem":{"mallet":1},
				"bonusTimeSkill":"toolsForging",
				"costRessource":{"wood":6},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"strength":6},
				"xpSkill":{"toolsForging":6},
				"quantity":-2
			},{
				"time":4,
				"gainItem":{"rollingPin":1},
				"bonusTimeSkill":"toolsForging",
				"costRessource":{"wood":6},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"strength":6},
				"xpSkill":{"toolsForging":6},
				"quantity":-2
			},{
				"time":8,
				"gainItem":{"pickaxe":1},
				"bonusTimeSkill":"toolsForging",
				"costRessource":{"wood":6, "castIron":2},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"strength":12},
				"xpSkill":{"toolsForging":12},
				"quantity":-4
			},{
				"time":7,
				"gainItem":{"chopper":1},
				"bonusTimeSkill":"toolsForging",
				"costRessource":{"wood":2, "castIron":3},
				"costPrimaryCharacteristic":{"stamina":11},
				"xpSecondaryCharacteristic":{"strength":11},
				"xpSkill":{"toolsForging":11},
				"quantity":-4
			},{
				"time":11,
				"gainItem":{"twoHandSaw":1},
				"bonusTimeSkill":"toolsForging",
				"costRessource":{"wood":12, "castIron":2},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"toolsForging":15},
				"quantity":-7
			},{
				"time":6,
				"gainItem":{"fork":1},
				"bonusTimeSkill":"toolsForging",
				"costRessource":{"wood":12},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"strength":12},
				"xpSkill":{"toolsForging":12},
				"quantity":-4
			},{
				"time":10,
				"gainItem":{"cauldron":1},
				"bonusTimeSkill":"toolsForging",
				"costRessource":{"castIron":5},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"toolsForging":15},
				"quantity":-5
			},{
				"time":10,
				"gainItem":{"fryingPan":1},
				"bonusTimeSkill":"toolsForging",
				"costRessource":{"wood":3, "castIron":4},
				"costPrimaryCharacteristic":{"stamina":15},
				"xpSecondaryCharacteristic":{"strength":15},
				"xpSkill":{"toolsForging":15},
				"quantity":-5
			},{
				"time":6.5,
				"gainItem":{"ballPeanHammer":1},
				"bonusTimeSkill":"toolsForging",
				"costRessource":{"wood":4, "castIron":3},
				"costPrimaryCharacteristic":{"stamina":13},
				"xpSecondaryCharacteristic":{"strength":13},
				"xpSkill":{"toolsForging":13},
				"quantity":-4
			},{
				"time":12,
				"gainItem":{"scythe":1},
				"bonusTimeSkill":"toolsForging",
				"costRessource":{"wood":12, "castIron":4},
				"costPrimaryCharacteristic":{"stamina":24},
				"xpSecondaryCharacteristic":{"strength":24},
				"xpSkill":{"toolsForging":24},
				"quantity":-8
			},{
				"time":8,
				"gainItem":{"pan":1},
				"bonusTimeSkill":"toolsForging",
				"costRessource":{"castIron":4},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"strength":12},
				"xpSkill":{"toolsForging":12},
				"quantity":-4
			},{
				"time":9,
				"gainItem":{"adjustableWrench":1},
				"bonusTimeSkill":"toolsForging",
				"costRessource":{"steel":6},
				"costPrimaryCharacteristic":{"stamina":18},
				"xpSecondaryCharacteristic":{"strength":18},
				"xpSkill":{"toolsForging":18},
				"quantity":-6
			},{
				"time":15,
				"gainItem":{"chainSaw":1},
				"bonusTimeSkill":"toolsForging",
				"costRessource":{"steel":10},
				"costPrimaryCharacteristic":{"stamina":30},
				"xpSecondaryCharacteristic":{"strength":30},
				"xpSkill":{"toolsForging":30},
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
			"effect":{"name":"destruction", "scale":1.25}
		},
		"width":41,
		"height":80,
		"health":150,
		"defense":200,
		"resistance":{"death":0.5, "demolition":2}
	},
	"ironworksWorkshopYard":{
		"type":"prebuild",
		"picture":{"file":"ironworksWorkshopYard.png",
				   "file100":"ironworksWorkshopYard100.atf"},
		"name":{"EN":"ironwork workshop",
				"FR":"atelier de ferronnerie",
				"JP":"鉄製品工房"},
		"description":{"EN":"The ironwork workshop allows you to manufacture tools.",
					   "FR":"L'atelier de ferronnerie vous permet de fabriquer des outils.",
					   "JP":"鋳鉄などを用いて道具の製造が可能です。切石を用いて建築することができます。"},
		"death":{
			"effect":{"name":"destruction", "scale":1.25}
		},
		"width":41,
		"height":80,
		"defense":200,
		"resistance":{"death":0.5, "demolition":2},
		"steps":0
	}
}