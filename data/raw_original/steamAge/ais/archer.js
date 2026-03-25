{
	"AI_archer":{
		"type":"ai",
		"rate":1,
		"name":{"EN":"archer",
				"FR":"archer",
				"DE":"bogenschütze",
				"JP":"弓兵"},
		"lock":true,
		"orders":[
			{"item":"jam"},
			{"item":"bread",				"endingAge":"goldenAge"},
			{"item":"cookedMeat",			"endingAge":"stoneAge"},
			
			{"defenseTower":"woodenTower",	"quantity":2,			"endingAge":"stoneAge"},
			{"defenseTower":"advWoodenTower","quantity":2},

			{"item":"compoundBow"},
			{"item":"compositeBow",			"endingAge":"steamAge"},
			{"item":"longBow",				"endingAge":"goldenAge"},
			{"item":"bow",					"endingAge":"etherAge"},
			{"item":"shortBow",				"endingAge":"ironAge"},
			{"item":"blowgun",				"endingAge":"stoneAge"},

			{"item":"arrows",				"quantity":50},
			{"item":"darts",				"quantity":50, 			"endingAge":"stoneAge"},
			
			{"resurrectTower":"totem",		"endingAge":"stoneAge"},
			{"resurrectTower":"soulsStatue","endingAge":"ironAge"},
			{"resurrectTower":"chapel"},

			{"item":"bandage",				"quantity":10},
			{"item":"ointment",				"quantity":20, 			"endingAge":"stoneAge"},

			{"item":"mountRaceHorse"},
			{"item":"mountWarHorse",		"endingAge":"steamAge"},

			{"item":"archerGloves"},
			{"item":"studdedLeatherGloves",	"endingAge":"etherAge"},
			{"item":"leatherGloves",		"endingAge":"ironAge"},

			{"item":"bulletproofVest"},
			{"item":"crystalArmor",			"endingAge":"steamAge"},
			{"item":"halfArmor",			"endingAge":"goldenAge"},
			{"item":"studdedLeatherArmor",	"endingAge":"etherAge"},
			{"item":"leatherArmor",			"endingAge":"ironAge"},

			{"item":"wingedHelmet"},
			{"item":"leatherCap",			"endingAge":"ironAge"},

			{"item":"amuletOfCheetah"},

			{"item":"beltOfAgility"},
			{"item":"leatherBelt",			"endingAge":"ironAge"},

			{"item":"studdedBoots"},
			{"item":"sandals",				"endingAge":"ironAge"},
			{"item":"furShoes",				"endingAge":"stoneAge"},

			{"item":"cloakOfProtection"},

			{"item":"lifeRegenerationRing"},
			{"item":"lifeRing"}
		]
	}
}