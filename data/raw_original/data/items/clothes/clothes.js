{
	"ballHat":{
		"type":"item",
		"age":"goldenAge",
		"category":"head",
		"picture":{"file":"ballHat.atf"},
		"name":{"EN":"ball hat",
				"FR":"chapeau de bal",
				"JP":"舞踏帽"},
		"description":{"EN":"The ball hat is a headgear made from fabric.",
					   "FR":"Le chapeau de bal est un couvre-chef fabriqué avec du tissu.",
					   "JP":"着用者の持久力を向上させる帽子。裁縫場で織物と棒金から製造できます。"},
		"bonus":{"stamina":{"clothes":0.25}},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"clothes":0.25}
				}
		},
		"tag":["cloth"],
		"equip":true
	},
	"bandana":{
		"type":"item",
		"age":"stoneAge",
		"category":"head",
		"picture":{"file":"bandana.atf"},
		"name":{"EN":"bandana",
				"FR":"bandana",
				"JP":"バンダナ"},
		"description":{"EN":"The bandana is a headgear simply made from fabric.",
					   "FR":"Le bandana est un couvre-chef fabriqué simplement avec du tissu.",
					   "JP":"着用者の持久力を向上させる、頭に巻くバンダナ。織機で織物から製造できます。"},
		"bonus":{"stamina":{"clothes":0.1}},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"clothes":0.25}
				}
		},
		"tag":["cloth"],
		"equip":true
	},
	"brocarde":{
		"type":"item",
		"age":"goldenAge",
		"category":"body",
		"picture":{"file":"brocarde.atf"},
		"name":{"EN":"brocade",
				"FR":"brocart",
				"JP":"ブロケード"},
		"description":{"EN":"The brocade is a piece of clothing made from fabric and gold bars.",
					   "FR":"Le brocart est un vêtement fabriqué avec du tissu est des lingots d'or.",
					   "JP":"着用者の持久力を向上させる衣服。裁縫場で織物と棒金から製造できます。"},
		"bonus":{"stamina":{"clothes":0.75}},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.375},
				"xpSkill":{"clothes":0.75}
				}
		},
		"tag":["cloth"],
		"equip":true
	},
	"chiton":{
		"type":"item",
		"age":"stoneAge",
		"category":"body",
		"picture":{"file":"chiton.atf"},
		"name":{"EN":"chiton",
				"FR":"chiton",
				"JP":"キトン"},
		"description":{"EN":"The chiton is an antique piece of clothing made from fabric.",
					   "FR":"Le chiton est un vêtement antique fabriqué avec du tissu.",
					   "JP":"着用者の持久力を向上させる古代の衣服。織機で織物から製造できます。"},
		"bonus":{"stamina":{"clothes":0.3}},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.375},
				"xpSkill":{"clothes":0.75}
				}
		},
		"tag":["cloth"],
		"equip":true
	},
	"furCoat":{
		"type":"item",
		"age":"woodenAge",
		"category":"body",
		"picture":{"file":"furCoat.atf"},
		"name":{"EN":"fur coat",
				"FR":"manteau de fourrure",
				"JP":"毛皮のコート"},
		"description":{"EN":"The fur coat is a primitive piece of clothing made from leather.",
					   "FR":"Le manteau de fourrure est un vêtement primitif fabriqué avec du cuir.",
					   "JP":"着用者の持久力を向上させ、氷属性に耐性を与える原始的な衣服。製革所でなめし革から製造できます。"},
		"bonus":{"stamina":{"clothes":0.15}},
		"resistance":{"ice":-0.2},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.375},
				"xpSkill":{"clothes":0.75}
				}
		},
		"tag":["cloth"],
		"equip":true
	},
	"hunterHat":{
		"type":"item",
		"age":"woodenAge",
		"category":"head",
		"picture":{"file":"hunterHat.atf"},
		"name":{"EN":"hunter hat",
				"FR":"toque de chasseur",
				"JP":"狩人帽"},
		"description":{"EN":"The hunter hat is a headgear made from animal skin.",
					   "FR":"La toque de chasseur est un couvre-chef fabriqué avec des peaux animales.",
					   "JP":"着用者の持久力を向上させ、氷属性に耐性を与える帽子。野営地で生皮から製造できます。"},
		"bonus":{"stamina":{"clothes":0.05}},
		"resistance":{"ice":-0.1},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"clothes":0.25}
				}
		},
		"tag":["cloth"],
		"equip":true,
		"enhance":[{
			"skill":"sewing",
			"workshop":"huntingCamp",
			"time":1.5,
			"gainItem":{"hunterHat":1},
			"bonusTimeSkill":"tanning",
			"costRessource":{"animalSkins":3},
			"costPrimaryCharacteristic":{"stamina":3},
			"xpSecondaryCharacteristic":{"rapidity":3},
			"xpSkill":{"hunting":3},
			"quantity":-3
		}]
	},
	"mageHat":{
		"type":"item",
		"age":"goldenAge",
		"category":"head",
		"picture":{"file":"mageHat.atf"},
		"name":{"EN":"mage hat",
				"FR":"chapeau de mage",
				"JP":"魔導帽"},
		"description":{"EN":"The mage hat is a headgear made from fabric and crystal.",
					   "FR":"La chapeau de mage est un couvre-chef fabriqué avec du tissu et des cristaux.",
					   "JP":"着用者の魔力を向上させ、魔法属性に耐性を与える魔法帽子。裁縫場で織物と水晶から製造できます。"},
		"bonus":{"mana":{"magicClothes":0.25}},
		"resistance":{"magic":-0.1},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"willpower":0.125},
				"xpSkill":{"magicClothes":0.25}
				}
		},
		"tag":["magic cloth"],
		"appearance":{"hat":{"D":"mageHatDXL.png"}},
		"equip":true
	},
	"mageRobe":{
		"type":"item",
		"age":"goldenAge",
		"category":"body",
		"picture":{"file":"mageRobe.atf"},
		"name":{"EN":"mage robe",
				"FR":"robe de mage",
				"JP":"魔導法衣"},
		"description":{"EN":"The mage robe is a piece of clothing made from fabric and crystal.",
					   "FR":"La robe de mage est un vêtement fabriqué avec du tissu et des cristaux.",
					   "JP":"着用者の魔力を向上させ、魔法属性に耐性を与える魔法衣服。裁縫場で織物と水晶から製造できます。"},
		"bonus":{"mana":{"magicClothes":0.75}},
		"resistance":{"magic":-0.2},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"willpower":0.375},
				"xpSkill":{"magicClothes":0.75}
				}
		},
		"appearance":{"clothes":{"M":"mageRobeM.png","F":"mageRobeF.png"}},
		"tag":["magic cloth"],
		"equip":true
	},
	"medievalHat":{
		"type":"item",
		"age":"ironAge",
		"category":"head",
		"picture":{"file":"medievalHat.atf"},
		"name":{"EN":"medieval hat",
				"FR":"chapeau médiéval",
				"JP":"中世帽"},
		"description":{"EN":"The medieval hat is a headgear made from fabric.",
					   "FR":"Le chapeau médiéval est un couvre-chef fabriqué avec du tissu.",
					   "JP":"着用者の持久力を向上させる中世的な帽子。裁縫場で織物から製造できます。"},
		"bonus":{"stamina":{"clothes":0.15}},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"clothes":0.25}
				}
		},
		"tag":["cloth"],
		"equip":true
	},
	"medievalTunic":{
		"type":"item",
		"age":"ironAge",
		"category":"body",
		"picture":{"file":"medievalTunic.atf"},
		"name":{"EN":"medieval tunic",
				"FR":"tunique médiévale",
				"JP":"中世上着"},
		"description":{"EN":"The medieval tunic is a piece of clothing made from fabric.",
					   "FR":"La tunique médiévale est un vêtement fabriqué avec du tissu.",
					   "JP":"着用者の持久力を向上させる中世的な衣服。裁縫場で織物から製造できます。"},
		"bonus":{"stamina":{"clothes":0.45}},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.375},
				"xpSkill":{"clothes":0.75}
				}
		},
		"tag":["cloth"],
		"equip":true
	},
	"sorcererHat":{
		"type":"item",
		"age":"etherAge",
		"category":"head",
		"picture":{"file":"sorcererHat.atf"},
		"name":{"EN":"sorcerer robe",
				"FR":"robe de sorcier",
				"JP":"魔術帽"},
		"description":{"EN":"The sorcerer robe is a piece of clothing made from fabric and crystal.",
					   "FR":"La robe de sorcier est un vêtement fabriqué avec du tissu et des cristaux.",
					   "JP":"着用者の魔力を向上させ、魔法属性に耐性を与える魔法帽子。裁縫場で織物と水晶から製造できます。"},
		"bonus":{"mana":{"magicClothes":0.2}},
		"resistance":{"magic":-0.1},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"willpower":0.125},
				"xpSkill":{"magicClothes":0.25}
				}
		},
		"tag":["magic cloth"],
		"appearance":{"hat":{"D":"sorcererHatDXL.png"}},
		"equip":true
	},
	"sorcererRobe":{
		"type":"item",
		"age":"etherAge",
		"category":"body",
		"picture":{"file":"sorcererRobe.atf"},
		"name":{"EN":"sorcerer robe",
				"FR":"robe de sorcier",
				"JP":"魔術法衣"},
		"description":{"EN":"The sorcerer robe is a cloth manufactured from fabric and crystals.",
					   "FR":"La robe de sorcier est un vêtement fabriqué avec du tissu et des cristaux.",
					   "JP":"着用者の魔力を向上させ、魔法属性に耐性を与える魔法衣服。裁縫場で織物と水晶から製造できます。"},
		"bonus":{"mana":{"magicClothes":0.6}},
		"resistance":{"magic":-0.2},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"willpower":0.375},
				"xpSkill":{"magicClothes":0.75}
				}
		},
		"appearance":{"clothes":{"M":"sorcererRobeM.png","F":"sorcererRobeF.png"}},
		"tag":["magic cloth"],
		"equip":true
	},
	"strawHat":{
		"type":"item",
		"age":"stoneAge",
		"category":"head",
		"picture":{"file":"strawHat.atf"},
		"name":{"EN":"straw hat",
				"FR":"chapeau de paille",
				"JP":"麦わら帽"},
		"description":{"EN":"The straw hat is a headgear made from wheat.",
					   "FR":"Le chapeau de paille est un couvre-chef fabriqué avec du blé.",
					   "JP":"着用者の持久力を向上させる帽子。火属性にわずかに弱くなります。裁縫場で織物と水晶から製造できます。"},
		"bonus":{"stamina":{"clothes":0.1}},
		"resistance":{"fire":0.1},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"clothes":0.25}
				}
		},
		"tag":["cloth"],
		"equip":true
	},
	"urbanHat":{
		"type":"item",
		"age":"etherAge",
		"category":"head",
		"picture":{"file":"urbanHat.atf"},
		"name":{"EN":"urban hat",
				"FR":"chapeau citadin",
				"JP":"アーバンハット"},
		"description":{"EN":"The urban hat is a headgear made from fabric.",
					   "FR":"Le chapeau citadin est un couvre-chef fabriqué avec du tissu.",
					   "JP":"着用者の持久力を向上させる帽子。裁縫場で織物から製造できます。"},
		"bonus":{"stamina":{"clothes":0.2}},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"clothes":0.25}
				}
		},
		"tag":["cloth"],
		"equip":true
	},
	"urbanTunic":{
		"type":"item",
		"age":"etherAge",
		"category":"body",
		"picture":{"file":"urbanTunic.atf"},
		"name":{"EN":"urban tunic",
				"FR":"tunique citadine",
				"JP":"アーバンチュニック"},
		"description":{"EN":"The urban tunic is a piece of clothing made from fabric.",
					   "FR":"La tunique citadine est un vêtement fabriqué avec du tissu.",
					   "JP":"着用者の持久力を向上させる衣服。裁縫場で織物から製造できます。"},
		"bonus":{"stamina":{"clothes":0.6}},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.375},
				"xpSkill":{"clothes":0.75}
				}
		},
		"tag":["cloth"],
		"equip":true
	}
}