{
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
		"equip":true,
		"upgrade":[{
				"workshop":"tanneryWorkshop",
				"time":1.5,
				"gainItem":{"leatherArmor":1},
				"bonusTimeSkill":"tanning",
				"costRessource":{"leather":3},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"address":3},
				"xpSkill":{"tanning":3},
				"quantity":-3
			},{
				"workshop":"tanneryWorkshop",
				"time":3,
				"gainItem":{"studdedLeatherArmor":1},
				"bonusTimeSkill":"tanning",
				"costRessource":{"leather":3, "castIron":1},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"address":6},
				"xpSkill":{"tanning":6},
				"quantity":-4
		}]
	},
	"jacket":{
		"type":"item",
		"age":"steamAge",
		"category":"body",
		"picture":{"file":"jacket.atf"},
		"name":{"EN":"jacket",
				"FR":"veste",
				"JP":"ジャケット"},
		"description":{"EN":"The jacket is a modern piece of clothing made from fabric.",
					   "FR":"La veste est un vêtement moderne fabriqué avec du tissu.",
					   "JP":"着用者の持久力を向上させる現代的な衣服。裁縫場で織物から製造できます。"},
		"bonus":{"stamina":{"clothes":0.84}},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.375},
				"xpSkill":{"clothes":0.75}
				}
		},
		"tag":["cloth"],
		"equip":true,
		"produce":[{
				"workshop":"sewingWorkshop",
				"no":11,
				"time":18,
				"gainItem":{"jacket":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":18},
				"costPrimaryCharacteristic":{"stamina":32},
				"xpSecondaryCharacteristic":{"address":32},
				"xpSkill":{"sewing":32},
				"quantity":-18
		}]
	},
	"mageHat":{
		"type":"item",
		"age":"goldenAge",
		"category":"head",
		"picture":{"file":"mageHatRed.atf"},
		"name":{"EN":"red mage hat",
				"FR":"chapeau de mage écarlate",
				"JP":"赤魔導帽"},
		"description":{"EN":"The red mage hat is a headgear made from fabric and crystal.",
					   "FR":"La chapeau de mage écarlate est un couvre-chef fabriqué avec du tissu et des cristaux.",
					   "JP":"着用者の魔力、火工魔術・召喚術技能を向上させ、火属性に耐性を与える魔法帽子。裁縫場で織物と水晶から製造できます。"},
		"bonus":{"mana":{"magicClothes":0.25},
				 "pyrotechnicMagic":{"magicClothes":0.25},
				 "conjuration":{"magicClothes":0.25}},
		"resistance":{"fire":-0.1},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"willpower":0.125},
				"xpSkill":{"magicClothes":0.25}
				}
		},
		"xpSkill":{
			"pyrotechnicMagic":{
				"xpSecondaryCharacteristic":{"willpower":0.0416},
				"xpSkill":{"magicClothes":0.25}
				},
			"conjuration":{
				"xpSecondaryCharacteristic":{"willpower":0.0416},
				"xpSkill":{"magicClothes":0.25}
				}
		},
		"tag":["magic cloth"],
		"appearance":{"hat":{"D":"mageHatRedDXL.png"}},
		"equip":true
	},
	"mageHatBlack":{
		"type":"item",
		"age":"goldenAge",
		"category":"head",
		"picture":{"file":"mageHatBlack.atf"},
		"name":{"EN":"dark mage hat",
				"FR":"chapeau de mage ténébreux",
				"JP":"闇魔導帽"},
		"description":{"EN":"The dark mage hat is a headgear made from fabric and crystal.",
					   "FR":"La chapeau de mage ténébreux est un couvre-chef fabriqué avec du tissu et des cristaux.",
					   "JP":"着用者の魔力、混沌魔術・死霊術技能を向上させ、死属性に耐性を与える魔法帽子。裁縫場で織物と水晶から製造できます。"},
		"bonus":{"mana":{"magicClothes":0.25},
				 "chaoticMagic":{"magicClothes":0.25},
				 "necromanticMagic":{"magicClothes":0.25}},
		"resistance":{"death":-0.1},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"willpower":0.125},
				"xpSkill":{"magicClothes":0.25}
				}
		},
		"xpSkill":{
			"chaoticMagic":{
				"xpSecondaryCharacteristic":{"willpower":0.0416},
				"xpSkill":{"magicClothes":0.25}
				},
			"necromanticMagic":{
				"xpSecondaryCharacteristic":{"willpower":0.0416},
				"xpSkill":{"magicClothes":0.25}
				}
		},
		"tag":["magic cloth"],
		"appearance":{"hat":{"D":"mageHatBlackDXL.png"}},
		"equip":true,
		"produce":[{
				"workshop":"sewingWorkshop",
				"no":9.3,
				"time":6,
				"gainItem":{"mageHatBlack":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":3, "crystals":2},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"address":12},
				"xpSkill":{"sewing":12},
				"quantity":-6
		}]
	},
	"mageHatGreen":{
		"type":"item",
		"age":"goldenAge",
		"category":"head",
		"picture":{"file":"mageHatGreen.atf"},
		"name":{"EN":"sylvan mage hat",
				"FR":"chapeau de mage sylvestre",
				"JP":"森魔導帽"},
		"description":{"EN":"The sylvan mage hat is a headgear made from wood and crystal.",
					   "FR":"La chapeau de mage sylvestre est un couvre-chef fabriqué avec du bois et des cristaux.",
					   "JP":"着用者の魔力、妖術・祈祷術技能を向上させ、電気属性に耐性を与える魔法帽子。裁縫場で織物と水晶から製造できます。"},
		"bonus":{"mana":{"magicClothes":0.25},
				 "druidicMagic":{"magicClothes":0.25},
				 "shamanicMagic":{"magicClothes":0.25}},
		"resistance":{"electricity":-0.1},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"willpower":0.125},
				"xpSkill":{"magicClothes":0.25}
				}
		},
		"xpSkill":{
			"druidicMagic":{
				"xpSecondaryCharacteristic":{"willpower":0.0416},
				"xpSkill":{"magicClothes":0.25}
				},
			"shamanicMagic":{
				"xpSecondaryCharacteristic":{"willpower":0.0416},
				"xpSkill":{"magicClothes":0.25}
				}
		},
		"tag":["magic cloth"],
		"appearance":{"hat":{"D":"mageHatGreenD.png"}},
		"equip":true,
		"produce":[{
				"workshop":"shamanicAltar",
				"no":12.4,
				"time":6,
				"gainItem":{"mageHatGreen":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"wood":12, "crystals":2},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"address":12},
				"xpSkill":{"sewing":12},
				"quantity":-6
		}]
	},
	"mageHatWhite":{
		"type":"item",
		"age":"goldenAge",
		"category":"head",
		"picture":{"file":"mageHatWhite.atf"},
		"name":{"EN":"immaculate mage hat",
				"FR":"chapeau de mage immaculé",
				"JP":"白魔導帽"},
		"description":{"EN":"The immaculate mage hat is a headgear made from fabric and crystal.",
					   "FR":"La chapeau de mage immaculé est un couvre-chef fabriqué avec du tissu et des cristaux.",
					   "JP":"着用者の魔力、鎮圧・救済魔術技能を向上させ、光属性に耐性を与える魔法帽子。裁縫場で織物と水晶から製造できます。"},
		"bonus":{"mana":{"magicClothes":0.25},
				 "repressiveMagic":{"magicClothes":0.25},
				 "redemptiveMagic":{"magicClothes":0.25}},
		"resistance":{"light":-0.1},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"willpower":0.125},
				"xpSkill":{"magicClothes":0.25}
				}
		},
		"xpSkill":{
			"repressiveMagic":{
				"xpSecondaryCharacteristic":{"willpower":0.0416},
				"xpSkill":{"magicClothes":0.25}
				},
			"redemptiveMagic":{
				"xpSecondaryCharacteristic":{"willpower":0.0416},
				"xpSkill":{"magicClothes":0.25}
				}
		},
		"tag":["magic cloth"],
		"appearance":{"hat":{"D":"mageHatWhiteDXL.png"}},
		"equip":true,
		"produce":[{
				"workshop":"sewingWorkshop",
				"no":9.1,
				"time":6,
				"gainItem":{"mageHatWhite":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":3, "crystals":2},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"address":12},
				"xpSkill":{"sewing":12},
				"quantity":-6
		}]
	},
	"mageRobe":{
		"type":"item",
		"age":"goldenAge",
		"category":"body",
		"picture":{"file":"mageRobeRed.atf"},
		"name":{"EN":"scarlet mage robe",
				"FR":"robe de mage écarlate",
				"JP":"赤魔導法衣"},
		"description":{"EN":"The scarlet mage robe is a piece of clothing made from fabric and crystal.",
					   "FR":"La robe de mage écarlate est un vêtement fabriqué avec du tissu et des cristaux.",
					   "JP":"着用者の魔力、火工魔術・召喚術技能を向上させ、火属性に耐性を与える魔法衣服。裁縫場で織物と水晶から製造できます。"},
		"bonus":{"mana":{"magicClothes":0.75},
				 "pyrotechnicMagic":{"magicClothes":0.25},
				 "conjuration":{"magicClothes":0.25}},
		"resistance":{"fire":-0.2},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"willpower":0.1875},
				"xpSkill":{"magicClothes":0.375}
				}
		},
		"xpSkill":{
			"pyrotechnicMagic":{
				"xpSecondaryCharacteristic":{"willpower":0.0625},
				"xpSkill":{"magicClothes":0.375}
				},
			"conjuration":{
				"xpSecondaryCharacteristic":{"willpower":0.0625},
				"xpSkill":{"magicClothes":0.375}
				}
		},
		"tag":["magic cloth"],
		"appearance":{"clothes":{"M":"mageRobeRedM.png","F":"mageRobeRedF.png"}},
		"equip":true
	},
	"mageRobeGreen":{
		"type":"item",
		"age":"goldenAge",
		"category":"body",
		"picture":{"file":"mageRobeGreen.atf"},
		"name":{"EN":"sylvan mage robe",
				"FR":"robe de mage sylvestre",
				"JP":"森魔導法衣"},
		"description":{"EN":"The sylvan mage robe is a piece of clothing made from plants and crystal.",
					   "FR":"La robe de mage sylvestre est un vêtement fabriqué avec des plantes et des cristaux.",
					   "JP":"着用者の魔力、妖術・祈祷術技能を向上させ、電気属性に耐性を与える魔法衣服。裁縫場で織物と水晶から製造できます。"},
		"bonus":{"mana":{"magicClothes":0.75},
				 "druidicMagic":{"magicClothes":0.25},
				 "shamanicMagic":{"magicClothes":0.25}},
		"resistance":{"electricity":-0.2},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"willpower":0.1875},
				"xpSkill":{"magicClothes":0.375}
				}
		},
		"xpSkill":{
			"druidicMagic":{
				"xpSecondaryCharacteristic":{"willpower":0.0625},
				"xpSkill":{"magicClothes":0.375}
				},
			"shamanicMagic":{
				"xpSecondaryCharacteristic":{"willpower":0.0625},
				"xpSkill":{"magicClothes":0.375}
				}
		},
		"appearance":{"clothes":{"M":"mageRobeGreenM.png","F":"mageRobeGreenF.png"}},
		"tag":["magic cloth"],
		"equip":true,
		"produce":[{
				"workshop":"shamanicAltar",
				"no":12.3,
				"time":16,
				"gainItem":{"mageRobeGreen":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"medicinalHerbs":32, "crystals":4},
				"costPrimaryCharacteristic":{"stamina":32},
				"xpSecondaryCharacteristic":{"address":32},
				"xpSkill":{"sewing":32},
				"quantity":-16
		}]
	},
	"mageRobeBlack":{
		"type":"item",
		"age":"goldenAge",
		"category":"body",
		"picture":{"file":"mageRobeBlack.atf"},
		"name":{"EN":"dark mage robe",
				"FR":"robe de mage ténébreuse",
				"JP":"闇魔導法衣"},
		"description":{"EN":"The dark mage robe is a piece of clothing made from fabric and crystal.",
					   "FR":"La robe de mage ténébreuse est un vêtement fabriqué avec du tissu et des cristaux.",
					   "JP":"着用者の魔力、混沌魔術・死霊術技能を向上させ、死属性に耐性を与える魔法衣服。裁縫場で織物と水晶から製造できます。"},
		"bonus":{"mana":{"magicClothes":0.75},
				 "chaoticMagic":{"magicClothes":0.25},
				 "necromanticMagic":{"magicClothes":0.25}},
		"resistance":{"death":-0.2},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"willpower":0.1875},
				"xpSkill":{"magicClothes":0.375}
				}
		},
		"xpSkill":{
			"chaoticMagic":{
				"xpSecondaryCharacteristic":{"willpower":0.0625},
				"xpSkill":{"magicClothes":0.375}
				},
			"necromanticMagic":{
				"xpSecondaryCharacteristic":{"willpower":0.0625},
				"xpSkill":{"magicClothes":0.375}
				}
		},
		"appearance":{"clothes":{"M":"mageRobeBlackM.png","F":"mageRobeBlackF.png"}},
		"tag":["magic cloth"],
		"equip":true,
		"produce":[{
				"workshop":"sewingWorkshop",
				"no":9.2,
				"time":16,
				"gainItem":{"mageRobeBlack":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":8, "crystals":4},
				"costPrimaryCharacteristic":{"stamina":32},
				"xpSecondaryCharacteristic":{"address":32},
				"xpSkill":{"sewing":32},
				"quantity":-16
		}]
	},
	"mageRobeWhite":{
		"type":"item",
		"age":"goldenAge",
		"category":"body",
		"picture":{"file":"mageRobeWhite.atf"},
		"name":{"EN":"immaculate mage robe",
				"FR":"robe de mage immaculée",
				"JP":"白魔導法衣"},
		"description":{"EN":"The immaculate mage robe is a piece of clothing made from fabric and crystal.",
					   "FR":"La robe de mage immaculée est un vêtement fabriqué avec du tissu et des cristaux.",
					   "JP":"着用者の魔力、鎮圧・救済魔術技能を向上させ、光属性に耐性を与える魔法衣服。裁縫場で織物と水晶から製造できます。"},
		"bonus":{"mana":{"magicClothes":0.75},
				 "repressiveMagic":{"magicClothes":0.25},
				 "redemptiveMagic":{"magicClothes":0.25}},
		"resistance":{"light":-0.2},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"willpower":0.1875},
				"xpSkill":{"magicClothes":0.375}
				}
		},
		"xpSkill":{
			"repressiveMagic":{
				"xpSecondaryCharacteristic":{"willpower":0.0625},
				"xpSkill":{"magicClothes":0.375}
				},
			"redemptiveMagic":{
				"xpSecondaryCharacteristic":{"willpower":0.0625},
				"xpSkill":{"magicClothes":0.375}
				}
		},
		"appearance":{"clothes":{"M":"mageRobeWhiteM.png","F":"mageRobeWhiteF.png"}},
		"tag":["magic cloth"],
		"equip":true,
		"produce":[{
				"workshop":"sewingWorkshop",
				"no":9,
				"time":16,
				"gainItem":{"mageRobeWhite":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":8, "crystals":4},
				"costPrimaryCharacteristic":{"stamina":32},
				"xpSecondaryCharacteristic":{"address":32},
				"xpSkill":{"sewing":32},
				"quantity":-16
		}]
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
		"equip":true,
		"upgrade":[{
				"workshop":"sewingWorkshop",
				"time":2.5,
				"gainItem":{"urbanHat":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":4},
				"costPrimaryCharacteristic":{"stamina":5},
				"xpSecondaryCharacteristic":{"address":5},
				"xpSkill":{"sewing":5},
				"quantity":-2
			},{
				"workshop":"sewingWorkshop",
				"time":2,
				"gainItem":{"sorcererHat":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"crystals":1},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"address":4},
				"xpSkill":{"sewing":4},
				"quantity":-2
			},{
				"workshop":"sewingWorkshop",
				"time":5,
				"gainItem":{"ballHat":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"goldBar":1},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"address":10},
				"xpSkill":{"sewing":10},
				"quantity":-5
			},{
				"workshop":"sewingWorkshop",
				"time":4,
				"gainItem":{"mageHat":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"crystals":2},
				"costPrimaryCharacteristic":{"stamina":8},
				"xpSecondaryCharacteristic":{"address":8},
				"xpSkill":{"sewing":8},
				"quantity":-4
			}]
	},
	"pullover":{
		"type":"item",
		"age":"steamAge",
		"category":"body",
		"picture":{"file":"pullover.atf"},
		"name":{"EN":"pullover",
				"FR":"pullover",
				"JP":"セーター"},
		"description":{"EN":"The pullover is a piece of clothing knitted with wool.",
					   "FR":"Le pullover est un vêtement tricoté avec de la laine.",
					   "JP":"着用者の持久力と回復速度を向上させ、氷属性に耐性を与える衣服。織機で羊毛から製造できます。"},
		"bonus":{"stamina":{"clothes":0.42}},
		"bonusRegeneration":{"stamina":1},
		"resistance":{"ice":-0.2},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.375},
				"xpSkill":{"clothes":0.75}
				}
		},
		"tag":["cloth"],
		"equip":true,
		"produce":[{
				"workshop":"loom",
				"no":3,
				"time":10,
				"gainItem":{"pullover":1},
				"bonusTimeSkill":"weaving",
				"costRessource":{"wool":10},
				"costPrimaryCharacteristic":{"stamina":20},
				"xpSecondaryCharacteristic":{"address":20},
				"xpSkill":{"weaving":20},
				"quantity":-10
		}]
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
		"equip":true,
		"upgrade":[{
				"workshop":"sewingWorkshop",
				"time":3,
				"gainItem":{"urbanTunic":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":3},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"address":6},
				"xpSkill":{"sewing":6},
				"quantity":-3
			},{
				"workshop":"sewingWorkshop",
				"time":6,
				"gainItem":{"sorcererRobe":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"crystals":3},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"address":12},
				"xpSkill":{"sewing":12},
				"quantity":-6
			},{
				"workshop":"sewingWorkshop",
				"time":6,
				"gainItem":{"brocarde":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":1, "goldBar":1},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"address":12},
				"xpSkill":{"sewing":12},
				"quantity":-6
			},{
				"workshop":"sewingWorkshop",
				"time":8,
				"gainItem":{"mageRobe":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"crystals":4},
				"costPrimaryCharacteristic":{"stamina":16},
				"xpSecondaryCharacteristic":{"address":16},
				"xpSkill":{"sewing":16},
				"quantity":-8
			}]
	},
	"sorcererHat":{
		"type":"item",
		"age":"etherAge",
		"category":"head",
		"picture":{"file":"sorcererHat.atf"},
		"name":{"EN":"sorcerer hat",
				"FR":"chapeau de sorcier",
				"JP":"魔術帽"},
		"description":{"EN":"The sorcerer hat is a headgear made from fabric and crystal.",
					   "FR":"Le chapeau de sorcier est un couvre-chef fabriqué avec du tissu et des cristaux.",
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
		"equip":true,
		"upgrade":[{
				"workshop":"sewingWorkshop",
				"time":2,
				"gainItem":{"mageHat":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"crystals":1},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"address":4},
				"xpSkill":{"sewing":4},
				"quantity":-2
			},{
				"workshop":"sewingWorkshop",
				"time":2,
				"gainItem":{"mageHatWhite":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"crystals":1},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"address":4},
				"xpSkill":{"sewing":4},
				"quantity":-2
			},{
				"workshop":"sewingWorkshop",
				"time":2,
				"gainItem":{"mageHatBlack":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"crystals":1},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"address":4},
				"xpSkill":{"sewing":4},
				"quantity":-2
			}]
	},
	"sorcererRobe":{
		"type":"item",
		"age":"etherAge",
		"category":"body",
		"picture":{"file":"sorcererRobe.atf"},
		"name":{"EN":"sorcerer robe",
				"FR":"robe de sorcier",
				"JP":"魔術法衣"},
		"description":{"EN":"The sorcerer robe is a piece of clothing made from fabric and crystal.",
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
		"equip":true,
		"upgrade":[{
				"workshop":"sewingWorkshop",
				"time":2,
				"gainItem":{"mageRobe":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"crystals":1},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"address":4},
				"xpSkill":{"sewing":4},
				"quantity":-2
			},{
				"workshop":"sewingWorkshop",
				"time":2,
				"gainItem":{"mageRobeWhite":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"crystals":1},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"address":4},
				"xpSkill":{"sewing":4},
				"quantity":-2
			},{
				"workshop":"sewingWorkshop",
				"time":2,
				"gainItem":{"mageRobeBlack":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"crystals":1},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"address":4},
				"xpSkill":{"sewing":4},
				"quantity":-2
			}]
	},
	"topHat":{
		"type":"item",
		"age":"steamAge",
		"category":"head",
		"picture":{"file":"topHat.atf"},
		"name":{"EN":"top hat",
				"FR":"haut-de-forme",
				"JP":"シルクハット"},
		"description":{"EN":"The ball hat is a modern headgear made from fabric.",
					   "FR":"Le haut-de-forme est un couvre-chef moderne fabriqué avec du tissu.",
					   "JP":"着用者の持久力を向上させる現代的な帽子。裁縫場で織物から製造できます。"},
		"bonus":{"stamina":{"clothes":0.3}},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"clothes":0.25}
				}
		},
		"tag":["cloth"],
		"equip":true,
		"produce":[{
				"workshop":"sewingWorkshop",
				"no":12,
				"time":6,
				"gainItem":{"topHat":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":6},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"address":12},
				"xpSkill":{"sewing":12},
				"quantity":-6
		}]
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
		"equip":true,
		"upgrade":[{
				"workshop":"sewingWorkshop",
				"time":2,
				"gainItem":{"sorcererHat":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"crystals":1},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"address":4},
				"xpSkill":{"sewing":4},
				"quantity":-2
			},{
				"workshop":"sewingWorkshop",
				"time":5,
				"gainItem":{"ballHat":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"goldBar":1},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"address":10},
				"xpSkill":{"sewing":10},
				"quantity":-5
			},{
				"workshop":"sewingWorkshop",
				"time":4,
				"gainItem":{"mageHat":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"crystals":2},
				"costPrimaryCharacteristic":{"stamina":8},
				"xpSecondaryCharacteristic":{"address":8},
				"xpSkill":{"sewing":8},
				"quantity":-4
			}]
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
		"equip":true,
		"upgrade":[{
				"workshop":"sewingWorkshop",
				"time":6,
				"gainItem":{"sorcererRobe":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"crystals":3},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"address":12},
				"xpSkill":{"sewing":12},
				"quantity":-6
			},{
				"workshop":"sewingWorkshop",
				"time":6,
				"gainItem":{"brocarde":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"fabric":1, "goldBar":1},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"address":12},
				"xpSkill":{"sewing":12},
				"quantity":-6
			},{
				"workshop":"sewingWorkshop",
				"time":8,
				"gainItem":{"mageRobe":1},
				"bonusTimeSkill":"sewing",
				"costRessource":{"crystals":4},
				"costPrimaryCharacteristic":{"stamina":16},
				"xpSecondaryCharacteristic":{"address":16},
				"xpSkill":{"sewing":16},
				"quantity":-8
			}]
	},
	"woolCap":{
		"type":"item",
		"age":"steamAge",
		"category":"head",
		"picture":{"file":"woolCap.atf"},
		"name":{"EN":"wool cap",
				"FR":"bonnet de laine",
				"JP":"毛糸帽"},
		"description":{"EN":"The wool cap is a hat knitted with wool.",
					   "FR":"Le bonnet de laine est un couvre-chef tricoté avec de la laine.",
					   "JP":"着用者の持久力と回復速度を向上させ、氷属性に耐性を与える帽子。織機で羊毛から製造できます。"},
		"bonus":{"stamina":{"clothes":0.14}},
		"bonusRegeneration":{"stamina":1},
		"resistance":{"ice":-0.1},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"clothes":0.25}
				}
		},
		"tag":["cloth"],
		"equip":true,
		"produce":[{
				"workshop":"loom",
				"no":4,
				"time":3,
				"gainItem":{"woolCap":1},
				"bonusTimeSkill":"weaving",
				"costRessource":{"wool":3},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"address":6},
				"xpSkill":{"weaving":6},
				"quantity":-3
		}]
	}
}