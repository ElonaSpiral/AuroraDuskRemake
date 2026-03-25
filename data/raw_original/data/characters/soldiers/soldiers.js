{
	"archer":{
		"type":"monster",
		"age":"stoneAge",
		"picture":{"file":"archer.png",
				   "file100":"archer100.atf"},
		"name":{"EN":"archer",
				"FR":"archer",
				"JP":"弓兵"},
		"pluralName":{"EN":"archers",
					  "FR":"archers",
					  "JP":"弓兵"},
		"tag":["infantry"],
		"width":32,
		"height":48,
		"health":130,
		"attack":180, "attackTime":2, "range":250, "missile":"arrow", "attackDY":-24,
		"damage":["missile", "piercing"],
		"defense":100,
		"speed":5,
		"created":{
			"move":{
				"randomX":128,
				"y":48
			}
		}
	},
	"cuirassier":{
		"type":"monster",
		"age":"goldenAge",
		"picture":{"file":"cuirassier.png",
				   "file100":"cuirassier100.atf"},
		"name":{"EN":"cuirassier",
				"FR":"cuirassier",
				"JP":"胸甲兵"},
		"pluralName":{"EN":"cuirassiers",
					  "FR":"cuirassiers",
					  "JP":"胸甲兵"},
		"tag":["infantry"],
		"width":32,
		"height":48,
		"health":220,
		"attack":600, "attackTime":2, "attackEffect":"axe",
		"damage":["closeCombat", "slashing"],
		"defense":200,
		"resistance":{"electricity":1.5},
		"speed":3.5,
		"created":{
			"move":{
				"randomX":128,
				"y":48
			}
		}
	},
	"fireElemental":{
		"type":"monster",
		"age":"goldenAge",
		"picture":{"file":"fireElemental.png",
				   "file100":"fireElemental100.atf"},
		"name":{"EN":"fire elemental",
				"FR":"élémentaire de feu",
				"JP":"火の精霊"},
		"pluralName":{"EN":"fire elementals",
					  "FR":"élémentaires de feu",
					  "JP":"火の精霊"},
		"tag":["invocation"],
		"width":32,
		"height":48,
		"health":200,
		"attack":600, "attackTime":1, "attackEffect":"flameEffect",
		"damage":["magic", "fire"],
		"defense":200,
		"resistance":{"fire":0.2, "ice":5, "poison":0},
		"speed":4,
		"flying":true
	},
	"healer":{
		"type":"monster",
		"age":"etherAge",
		"picture":{"file":"healer.png",
				   "file100":"healer100.atf"},
		"name":{"EN":"healer",
				"FR":"guérisseuse",
				"JP":"治療師"},
		"pluralName":{"EN":"healers",
					  "FR":"guérisseuses",
					  "JP":"ヒーラー"},
		"tag":["infantry"],
		"ai":"healer",
		"width":32,
		"height":48,
		"health":100,
		"attack":100, "attackTime":4, "range":300, "missile":"lightOrb", "special":{"selfGuided":0.2, "penality":{"id":"blind", "time":5}},
		"healingScore":25, "healingEffect":"healingEffect", "unlimitedHealing":true,
		"damage":["magic", "light"],
		"defense":100,
		"resistance":{"light":0.8},
		"speed":4,
		"created":{
			"move":{
				"randomX":128,
				"randomY":128
			}
		}
	},
	"healingSpirit":{
		"type":"monster",
		"age":"etherAge",
		"picture":{"file":"healingSpirit.png",
				   "file100":"healingSpirit100.atf"},
		"name":{"EN":"healing spirit",
				"FR":"esprit de guérison",
				"JP":"治癒の精霊"},
		"pluralName":{"EN":"healing spirits",
					  "FR":"esprits de guérison",
					  "JP":"治癒の精霊"},
		"tag":["invocation"],
		"ai":"healer",
		"width":32,
		"height":48,
		"health":25,
		"attack":25, "attackEffect":"lightFlash", "healingEffect":"healingEffect", "unlimitedHealing":true,
		"damage":["magic", "light"],
		"defense":100,
		"resistance":{"light":0.2, "death":5, "poison":0},
		"speed":6,
		"flying":true,
		"created":{
			"move":{
				"randomX":128,
				"randomY":128
			}
		}
	},
	"infantryman":{
		"type":"monster",
		"age":"ironAge",
		"picture":{"file":"infantryman.png",
				   "file100":"infantryman100.atf"},
		"name":{"EN":"foot soldier",
				"FR":"fantassin",
				"JP":"歩兵"},
		"pluralName":{"EN":"foot soldiers",
					  "FR":"fantassins",
					  "JP":"歩兵"},
		"tag":["infantry"],
		"width":32,
		"height":48,
		"health":160,
		"attack":150, "attackEffect":"blade",
		"damage":["closeCombat", "slashing"],
		"defense":150,
		"resistance":{"electricity":1.5},
		"speed":4,
		"created":{
			"move":{
				"randomX":128,
				"y":48
			}
		}
	},
	"militiaman":{
		"type":"monster",
		"age":"stoneAge",
		"picture":{"file":"militiaman.png",
				   "file100":"militiaman100.atf"},
		"name":{"EN":"militiaman",
				"FR":"milicien",
				"JP":"民兵"},
		"pluralName":{"EN":"militiamen",
					  "FR":"miliciens",
					  "JP":"民兵"},
		"tag":["infantry"],
		"width":32,
		"height":48,
		"health":130,
		"attack":182, "attackTime":1.5, "attackEffect":"shock",
		"damage":["closeCombat", "crushing"],
		"defense":140,
		"speed":5,
		"created":{
			"move":{
				"randomX":128,
				"y":48
			}
		}
	},
	"pyromage":{
		"type":"monster",
		"age":"etherAge",
		"picture":{"file":"pyromage.png",
				   "file100":"pyromage100.atf"},
		"name":{"EN":"pyromage",
				"FR":"pyromage",
				"JP":"火工魔術師"},
		"pluralName":{"EN":"pyromages",
					  "FR":"pyromages",
					  "JP":"火工魔術師"},
		"tag":["infantry"],
		"width":32,
		"height":48,
		"health":100,
		"attack":310, "attackTime":4, "range":300, "missile":"fireshot", "attackDY":-24,
		"damage":["magic", "fire"],
		"defense":100,
		"resistance":{"fire":0.75},
		"speed":5,
		"created":{
			"move":{
				"randomX":128,
				"y":48
			}
		}
	},
	"servantF":{
		"type":"monster",
		"age":"stoneAge",
		"picture":{"file":"servantF.png",
				   "file100":"servantF100.atf"},
		"name":{"EN":"female servant",
				"FR":"servante",
				"JP":"女収獲者"},
		"pluralName":{"EN":"female servants",
					  "FR":"servantes",
					  "JP":"女収獲者"},
		"description":{"EN":"The female servants collect resources and store them in the town centre.",
					   "FR":"Les servantes collectent des ressources et les entreposent au centre-ville.",
					   "JP":"資源を収集し、タウンセンターへと収めます。"},
		"tag":["harvester"],
		"ai":"servant",
		"width":32,
		"height":48,
		"health":100,
		"stamina":999999999,
		"mana":999999999,
		"attack":100, "attackTime":1, "attackEffect":"default",
		"damage":["closeCombat", "crushing"],
		"defense":100,
		"speed":5,
		"created":{
			"move":{
				"randomX":128,
				"y":48
			}
		}
	},
	"servantM":{
		"type":"monster",
		"age":"stoneAge",
		"picture":{"file":"servantM.png",
				   "file100":"servantM100.atf"},
		"name":{"EN":"servant",
				"FR":"serviteur",
				"JP":"男収獲者"},
		"pluralName":{"EN":"servants",
					  "FR":"serviteurs",
					  "JP":"男収獲者"},
		"description":{"EN":"The servants collect resources and store them in the town centre.",
					   "FR":"Les serviteurs collectent des ressources et les entreposent au centre-ville.",
					   "JP":"資源を収集し、タウンセンターへと収めます。"},
		"tag":["harvester"],
		"ai":"servant",
		"width":32,
		"height":48,
		"health":100,
		"stamina":999999999,
		"mana":999999999,
		"attack":100, "attackTime":1, "attackEffect":"default",
		"damage":["closeCombat", "crushing"],
		"defense":100,
		"speed":5,
		"created":{
			"move":{
				"randomX":128,
				"y":48
			}
		}
	},
	"spark":{
		"type":"monster",
		"age":"etherAge",
		"picture":{"file":"spark.png",
				   "file100":"spark100.atf"},
		"name":{"EN":"spark",
				"FR":"flammèche",
				"JP":"火花"},
		"pluralName":{"EN":"sparks",
					  "FR":"flammèches",
					  "JP":"火花"},
		"tag":["invocation"],
		"width":24,
		"height":32,
		"health":100,
		"attack":1000, "attackTime":1, "attackEffect":"canonExplosion",
		"damage":["magic", "fire"],
		"defense":100,
		"resistance":{"fire":0.2, "ice":5, "poison":0},
		"speed":8,
		"flying":true,
		"kamikaze":true
	}
}