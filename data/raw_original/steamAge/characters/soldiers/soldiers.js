{
	"battleBear":{
		"type":"monster",
		"age":"steamAge",
		"picture":{"file":"battleBear.png",
				   "file100":"battleBear100.atf"},
		"name":{"EN":"battle bear",
				"FR":"ours de combat",
				"JP":"バトルベア"},
		"pluralName":{"EN":"battle bears",
					  "FR":"ours de combat",
					  "JP":"バトルベアーズ"},
		"rate":1,
		"width":75,
		"height":60,
		"health":300,
		"attack":150, "attackTime":3, "attackEffect":"scratch",
		"damage":["closeCombat", "crushing"],
		"attacks":[{"attack":150, "damage":["closeCombat", "crushing"], "attackTime":4, "attackEffect":"scratch"}],
		"defense":125,
		"speed":3,
		"death":{
			"effect":{"name":"deathEffect", "scale":1.5}
		},
		"produce":[{
				"workshop":"barrack",
				"no":5.75,
				"time":15,
				"createCharacter":{"battleBear":1},
				"bonusTimeSkill":"training",
				"costRessource":{"rawMeat":60},
				"costPrimaryCharacteristic":{"stamina":30},
				"xpSecondaryCharacteristic":{"charisma":30},
				"xpSkill":{"training":30},
				"repeat":true
		}]
	},
	"bombard":{
		"type":"monster",
		"age":"goldenAge",
		"picture":{"file":"bombard.png",
				   "file100":"bombard100.atf"},
		"name":{"EN":"bombard",
				"FR":"bombarde",
				"DE":"Steinschleudermaschine",
				"JP":"射石砲"},
		"pluralName":{"EN":"bombards",
					  "FR":"bombardes",
					  "DE":"Steinschleudermaschinen",
					  "JP":"射石砲"},
		"tag":["siege weapon"],
		"width":80,
		"height":80,
		"shadow":false,
		"health":250,
		"attack":2000,
		"attackTime":20, "range":700, "missile":"cannonBall", "sound":"soundCannon",
		"special":{"pierce":true, "area":{"attack":1000, "range":32, "effect":"miniExplosion"}},
		"damage":["missile", "demolition"],
		"defense":200,
		"resistance":{"death":0.5, "demolition":2, "fire":1.5, "poison":0},
		"speed":2,
		"created":{
			"move":{
				"randomX":128,
				"y":64
			}
		}
	},
	"catapult":{
		"type":"monster",
		"age":"etherAge",
		"picture":{"file":"catapult.png",
				   "file100":"catapult100.atf"},
		"name":{"EN":"catapult",
				"FR":"catapulte",
				"DE":"katapult",
				"JP":"投石機"},
		"pluralName":{"EN":"catapults",
					  "FR":"catapultes",
					  "DE":"katapults",
					  "JP":"投石機"},
		"tag":["siege weapon"],
		"width":80,
		"height":70,
		"shadow":false,
		"health":250,
		"attack":1000, "range":600, "attackTime":10, "missile":"stoneBall", "sound":"soundCatapult",
		"damage":["missile", "crushing", "demolition"],
		"defense":150,
		"resistance":{"death":0.5, "demolition":2, "fire":2, "poison":0},
		"speed":2,
		"created":{
			"move":{
				"randomX":128,
				"y":64
			}
		}
	},
	"heavyCannon":{
		"type":"monster",
		"age":"steamAge",
		"picture":{"file":"heavyCannon.png",
				   "file100":"heavyCannon100.atf"},
		"name":{"EN":"heavy cannon",
				"FR":"canon lourd",
				"DE":"schwere Kanone",
				"JP":"重砲"},
		"pluralName":{"EN":"heavy cannons",
					  "FR":"canons lourds",
					  "DE":"schwere Kanonen",
					  "JP":"重砲"},
		"tag":["siege weapon"],
		"width":90,
		"height":80,
		"shadow":false,
		"health":300,
		"attack":3000,
		"attackTime":30, "range":800, "missile":"cannonBall", "sound":"soundCannon",
		"special":{"pierce":true, "area":{"attack":1500, "range":48, "effect":"miniExplosion"}},
		"damage":["missile", "demolition"],
		"defense":200,
		"resistance":{"death":0.5, "demolition":2, "fire":1.5, "poison":0},
		"speed":2,
		"created":{
			"move":{
				"randomX":128,
				"y":64
			}
		}
	},
	"heavyHorseman":{
		"type":"monster",
		"age":"ironAge",
		"picture":{"file":"heavyHorseman.png",
				   "file100":"heavyHorseman100.atf"},
		"name":{"EN":"heavy horseman",
				"FR":"cavalier lourd",
				"JP":"重騎兵"},
		"pluralName":{"EN":"heavy horsemen",
					  "FR":"cavaliers lourds",
					  "JP":"重騎兵"},
		"tag":["cavalry"],
		"width":56,
		"height":64,
		"health":160,
		"attack":150, "attackEffect":"blade",
		"damage":["closeCombat", "slashing"],
		"defense":150,
		"resistance":{"electricity":1.5},
		"speed":9,
		"created":{
			"move":{
				"randomX":128,
				"y":48
			}
		},
		"produce":[{
				"workshop":"barrack",
				"no":2.5,
				"time":11,
				"createCharacter":{"heavyHorseman":1},
				"bonusTimeSkill":"conscription",
				"costRessource":{"silverCoin":12,"grain":5},
				"costPrimaryCharacteristic":{"stamina":22},
				"xpSecondaryCharacteristic":{"charisma":22},
				"xpSkill":{"conscription":22},
				"repeat":true
		}]
	},
	"horseRaider":{
		"type":"monster",
		"age":"stoneAge",
		"picture":{"file":"horseRaider.png",
				   "file100":"horseRaider100.atf"},
		"name":{"EN":"mounted archer",
				"FR":"archer monté",
				"JP":"弓騎兵"},
		"pluralName":{"EN":"mounted archers",
					  "FR":"archers montés",
					  "JP":"弓騎兵"},
		"tag":["cavalry"],
		"width":56,
		"height":64,
		"health":130,
		"attack":180, "attackTime":2, "range":250, "missile":"arrow", "attackDY":-32,
		"damage":["missile", "piercing"],
		"defense":100,
		"speed":10,
		"created":{
			"move":{
				"randomX":128,
				"y":48
			}
		},
		"produce":[{
				"workshop":"barrack",
				"no":1.5,
				"time":15,
				"createCharacter":{"horseRaider":1},
				"bonusTimeSkill":"conscription",
				"costRessource":{"silverCoin":20,"grain":5},
				"costPrimaryCharacteristic":{"stamina":30},
				"xpSecondaryCharacteristic":{"charisma":30},
				"xpSkill":{"conscription":30},
				"repeat":true
		}]
	},
	"knight":{
		"type":"monster",
		"age":"goldenAge",
		"picture":{"file":"knight.png",
				   "file100":"knight100.atf"},
		"name":{"EN":"knight",
				"FR":"chevalier",
				"JP":"騎士"},
		"pluralName":{"EN":"knights",
					  "FR":"chevaliers",
					  "JP":"騎士"},
		"tag":["cavalry"],
		"width":56,
		"height":64,
		"health":220,
		"attack":600, "attackTime":2, "attackEffect":"axe",
		"damage":["closeCombat", "slashing"],
		"defense":200,
		"resistance":{"electricity":1.5},
		"speed":8.5,
		"created":{
			"move":{
				"randomX":128,
				"y":48
			}
		},
		"produce":[{
				"workshop":"barrack",
				"no":5.5,
				"time":17.5,
				"createCharacter":{"knight":1},
				"bonusTimeSkill":"conscription",
				"costRessource":{"silverCoin":25,"grain":5},
				"costPrimaryCharacteristic":{"stamina":35},
				"xpSecondaryCharacteristic":{"charisma":35},
				"xpSkill":{"conscription":35},
				"repeat":true
		}]
	},
	"lightHorseman":{
		"type":"monster",
		"age":"stoneAge",
		"picture":{"file":"lightHorseman.png",
				   "file100":"lightHorseman100.atf"},
		"name":{"EN":"light horseman",
				"FR":"cavalier léger",
				"JP":"軽騎兵"},
		"pluralName":{"EN":"light horsemen",
					  "FR":"cavaliers légers",
					  "JP":"軽騎兵"},
		"tag":["cavalry"],
		"width":56,
		"height":64,
		"health":130,
		"attack":182, "attackTime":1.5, "attackEffect":"shock",
		"damage":["closeCombat", "crushing"],
		"defense":140,
		"speed":10,
		"created":{
			"move":{
				"randomX":128,
				"y":48
			}
		},
		"produce":[{
				"workshop":"barrack",
				"no":0.5,
				"time":10,
				"createCharacter":{"lightHorseman":1},
				"bonusTimeSkill":"conscription",
				"costRessource":{"silverCoin":10,"grain":5},
				"costPrimaryCharacteristic":{"stamina":20},
				"xpSecondaryCharacteristic":{"charisma":20},
				"xpSkill":{"conscription":20},
				"repeat":true
		}]
	},
	"siegeScorpion":{
		"type":"monster",
		"age":"ironAge",
		"picture":{"file":"scorpion.png",
				   "file100":"scorpion100.atf"},
		"name":{"EN":"scorpion",
				"FR":"scorpion",
				"JP":"弩砲"},
		"pluralName":{"EN":"scorpions",
					  "FR":"scorpions",
					  "JP":"弩砲"},
		"tag":["siege weapon"],
		"width":64,
		"height":64,
		"shadow":false,
		"health":200,
		"attack":600, "range":500, "attackTime":6, "missile":"giantBolt", "sound":"soundGiantCrossbow",
		"damage":["missile", "piercing", "demolition"],
		"defense":150,
		"resistance":{"death":0.5, "demolition":2, "fire":2, "poison":0},
		"speed":2,
		"created":{
			"move":{
				"randomX":128,
				"y":64
			}
		}
	},
	"steamTrooper":{
		"type":"monster",
		"age":"steamAge",
		"picture":{"file":"steamTrooper.png",
				   "file100":"steamTrooper100.atf"},
		"name":{"EN":"steam trooper",
				"FR":"steam trooper",
				"JP":"蒸気騎兵"},
		"pluralName":{"EN":"steam troopers",
					  "FR":"steam troopers",
					  "JP":"蒸気騎兵"},
		"tag":["infantry"],
		"width":41,
		"height":57,
		"health":220,
		"attack":75, "range":200, "attackTime":0.5, "missile":"cartridge", "attackDX":-14, "attackDY":-27,
		"damage":["missile", "piercing"],
		"attacks":[{"attack":100, "damage":["missile", "piercing"], "range":200, "attackTime":0.5, "missile":"cartridge", "attackDX":14, "attackDY":-27, "attackDelay":0.25}],
		"defense":200,
		"resistance":{"electricity":1.5},
		"speed":3,
		"created":{
			"move":{
				"randomX":128,
				"y":48
			}
		},
		"produce":[{
				"workshop":"barrack",
				"no":6,
				"time":30,
				"createCharacter":{"steamTrooper":1},
				"bonusTimeSkill":"conscription",
				"costRessource":{"silverCoin":60},
				"costPrimaryCharacteristic":{"stamina":60},
				"xpSecondaryCharacteristic":{"charisma":60},
				"xpSkill":{"conscription":60},
				"repeat":true
		}]
	}
}