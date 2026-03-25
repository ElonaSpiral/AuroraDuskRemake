{
	"crepusculumDungeon":{
		"type":"dungeon",
		"picture":{"file":"crepusculumDungeon.png",
				   "file100":"crepusculumDungeon100.atf"},
		"name":{"EN":"crepusculum dungeon",
				"FR":"donjon du Crépuscule",
				"DE":"Crepusculum dungeon",
				"JP":"黄昏のダンジョン"},
		"description":{"EN":"The Crepusculum dungeon is the headquarters of the Dusk Hordes.",
					   "FR":"Le donjon du Crépuscule est le quartier général des Hordes du Crépuscule.",
					   "DE":"Crepusculums Dungeon ist das Hauptquartier der Dunklen Horde",
					   "JP":"黄昏の軍勢の司令部です。周囲の敵への攻撃能力も持っています。"},
		"death":{
			"effect":{"name":"destruction","scale":2.25}
		},
		"width":192,
		"height":192,
		"visualHeight":224,
		"health":8000,
		"attack":300,"attackTime":6,"range":600,"missile":"blackOrb","attackDY":-194,
		"damage":["magic", "death"],
		"defense":150,
		"resistance":{"light":1.5, "fire":1.25, "death":0.5, "demolition":2, "poison":0},
		"timeRegeneration":5,
		"regeneration":1,
		"spawn":{"interval":150,
				 "baseNumber":0,
				 "coefPopulation":1}
	}
}