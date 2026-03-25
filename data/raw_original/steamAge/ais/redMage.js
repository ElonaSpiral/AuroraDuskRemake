{
	"AI_redMage":{
		"type":"ai",
		"rate":1,
		"name":{"EN":"red mage",
				"FR":"mage rouge",
				"DE":"Roten Magier",
				"JP":"赤魔導師"},
		"lock":true,
		"orders":[
			{"item":"wine"},
			{"item":"bread","endingAge":"etherAge"},
			{"item":"cookedMeat","endingAge":"stoneAge"},
			
			{"resurrectTower":"totem",		"endingAge":"stoneAge"},
			{"resurrectTower":"soulsStatue","endingAge":"ironAge"},
			{"resurrectTower":"chapel"},
			
			{"quantity":2,"item":"fireScepter","endingAge":"goldenAge"},
			{"quantity":2,"item":"brightMultipleFireScepter"},
			{"quantity":2,"item":"multipleFireScepter","endingAge":"steamAge"},
			{"quantity":2,"item":"lightningScepter","endingAge":"etherAge"},
			{"item":"blowgun","endingAge":"stoneAge"},
			{"item":"shortBow","endingAge":"ironAge"},
			{"quantity":20,"item":"arrows","endingAge":"ironAge"},
			{"quantity":20,"item":"darts","endingAge":"stoneAge"},
			{"item":"amuletOfFire"},
			{"item":"lifePotion"},
			{"item":"lightLifePotion","endingAge":"goldenAge"},
			{"item":"ointment","endingAge":"etherAge"},
			{"item":"ether"},
			{"item":"lightEther","endingAge":"goldenAge"},
			{"item":"mushroomSoup","endingAge":"etherAge"},
			
			{"defenseTower":"woodenTower",		"endingAge":"stoneAge"},
			{"defenseTower":"advWoodenTower",	"endingAge":"ironAge"},
			{"defenseTower":"stoneTower",	"endingAge":"etherAge"},
			{"defenseTower":"flameTower",	"quantity":3},
			
			{"item":"mountUnicorn"},
			{"item":"mageRobe"},
			{"item":"sorcererHat"},
			{"item":"sorcererGloves"},
			{"item":"mageShoes"},
			{"item":"sandals","endingAge":"ironAge"},
			{"item":"boots","endingAge":"goldenAge"},
			{"item":"ringOfFireResistance"},
			{"item":"magicRing"},
			{"item":"cloakOfWizardry"},
			{"house":"magicHouse"},
			{"item":"leatherBelt"}
		]
	}
}