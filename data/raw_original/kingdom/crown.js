{
	"crown":{
		"type":"item",
		"age":"stoneAge",
		"category":"head",
		"picture":{"file":"crown.atf"},
		"name":{"EN":"crown",
				"FR":"couronnne",
				"JP":"クラウン"},
		"description":{"EN":{"M":"The crown designates you as the king.", "F":"The crown designates you as the queen."},
					   "FR":{"M":"La couronne fait de vous le roi.", "F":"La couronne fait de vous la reine."},
					   "JP":{"M":"王冠はあなたを王にします。", "F":"王冠はあなたを女王にします。"}},
		"bonus":{"health":{"jewellery":1},
				 "conscription":{"jewellery":1}},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				}
		},
		"xpSkill":{
			"conscription":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				}
		},
		"autoUse":{
			"time":10,
			"gainRessource":{"goldCoin":1}
		},
		"appearance":{"hat":{"D":"crownD.png"}},
		"equip":true,
		"gain":{
			"equip":true,
			"king":true,
			"message":{"EN":{"M":"[playerName] has been proclaimed king!", "F":"[playerName] has been proclaimed queen!"},
					   "FR":{"M":"[playerName] est proclamé roi !", "F":"[playerName] est proclamée reine !"},
					   "JP":{"M":"[playerName]宣言された王です！", "F":"[playerName]宣言された女王です！"}}
		},
		"unequip":{
			"quantity":-1,
			"king":false,
			"message":{"EN":{"M":"The king has given up his crown!", "F":"The queen has given up her crown!"},
					   "FR":{"M":"Le roi a renoncé à sa couronne !", "F":"La reine a renoncé à sa couronne !"},
					   "JP":{"M":"王は王冠をあきらめた！", "F":"女王は王冠をあきらめた！"}}
		},
		"death":{
			"quantity":-1,
			"king":false,
			"message":{"EN":{"M":"The king is dead!", "F":"The queen is dead!"},
					   "FR":{"M":"Le roi est mort !", "F":"Le reine est morte !"},
					   "JP":{"M":"王は死んでいる！", "F":"女王は死んでいる！"}}
		},
		"secret":true
	}
}