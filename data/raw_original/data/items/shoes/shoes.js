{
	"balShoes":{
		"type":"item",
		"age":"goldenAge",
		"category":"feet",
		"picture":{"file":"balShoes.atf"},
		"name":{"EN":"bal shoes",
				"FR":"chaussures de bal",
				"JP":"舞踏靴"},
		"description":{"EN":"Bal shoes are medieval shoes made from leather.",
					   "FR":"Les chaussures de bal sont des chaussures médiévales fabriquées avec du cuir.",
					   "JP":"着用者の持久力と移動速度を向上させる中世的な革靴。靴作り場でなめし革と棒金から製造できます。"},
		"bonus":{"stamina":{"shoes":0.25}, "speed":1},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"shoes":1}
				}
		},
		"equip":true
	},
	"boots":{
		"type":"item",
		"age":"ironAge",
		"category":"feet",
		"picture":{"file":"boots.atf"},
		"name":{"EN":"boots",
				"FR":"bottes",
				"JP":"ブーツ"},
		"description":{"EN":"Boots are medieval shoes made from leather.",
					   "FR":"Les bottes sont des chaussures médiévales fabriquées avec du cuir.",
					   "JP":"着用者の持久力と移動速度を向上させる中世的な革靴。靴作り場でなめし革から製造できます。"},
		"bonus":{"stamina":{"shoes":0.15}, "speed":1},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"shoes":1}
				}
		},
		"equip":true
	},
	"chainLeggings":{
		"type":"item",
		"age":"ironAge",
		"category":"feet",
		"picture":{"file":"chainLeggings.atf"},
		"name":{"EN":"chain leggings",
				"FR":"jambières de mailles",
				"JP":"鎖のすね当て"},
		"description":{"EN":"Chain leggings are battle shoes made from cast iron.",
					   "FR":"Les jambières de mailles sont des chausses de combat fabriquées avec de la fonte.",
					   "JP":"着用者の体力と移動速度を向上させる戦闘用靴。電気属性にわずかに弱くなります。靴作り場で鋳鉄から製造できます。"},
		"bonus":{"health":{"shoes":0.2}, "speed":0.75},
		"resistance":{"electricity":0.1},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"endurance":0.125},
				"xpSkill":{"shoes":1}
				}
		},
		"equip":true
	},
	"clogs":{
		"type":"item",
		"age":"etherAge",
		"category":"feet",
		"picture":{"file":"clogs.atf"},
		"name":{"EN":"sabots",
				"FR":"sabots",
				"JP":"木靴"},
		"description":{"EN":"Sabots are wooden shoes.",
					   "FR":"Les sabots sont des chausses en bois.",
					   "JP":"着用者の持久力と移動速度を向上させ、電気属性への耐性を与える木靴。火属性にわずかに弱くなります。鋸台で木材から製造できます。"},
		"bonus":{"stamina":{"shoes":0.3}, "speed":0.75},
		"resistance":{"fire":0.1, "electricity":-0.1},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"shoes":1}
				}
		},
		"equip":true
	},
	"furShoes":{
		"type":"item",
		"age":"woodenAge",
		"category":"feet",
		"picture":{"file":"furShoes.atf"},
		"name":{"EN":"fur shoes",
				"FR":"chaussures de fourrure",
				"JP":"毛皮の靴"},
		"description":{"EN":"Fur shoes are prehistoric shoes made from leather.",
					   "FR":"Les chaussures de fourrure sont des chaussures préhistoriques fabriquées avec du cuir.",
					   "JP":"着用者の持久力と移動速度を向上させ、氷属性への耐性をわずかに与える有史以前の革靴。製革所でなめし革から製造できます。"},
		"bonus":{"stamina":{"shoes":0.05}, "speed":0.75},
		"resistance":{"ice":-0.1},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"shoes":1}
				}
		},
		"equip":true
	},
	"mageShoes":{
		"type":"item",
		"age":"goldenAge",
		"category":"feet",
		"picture":{"file":"mageShoes.atf"},
		"name":{"EN":"mage shoes",
				"FR":"chaussures de mage",
				"JP":"魔導師の靴"},
		"description":{"EN":"Mage shoes are medieval shoes made from fabric and crystal.",
					   "FR":"Les chaussures de mage sont des chaussures magiques fabriquées avec du tissu et des cristaux.",
					   "JP":"着用者の魔力と移動速度を向上させ、魔法属性への耐性をわずかに与える革靴。靴作り場でなめし革と水晶から製造できます。"},
		"bonus":{"mana":{"shoes":0.25}, "speed":1},
		"resistance":{"magic":-0.1},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"willpower":0.125},
				"xpSkill":{"shoes":1}
				}
		},
		"equip":true
	},
	"plateBoots":{
		"type":"item",
		"age":"etherAge",
		"category":"feet",
		"picture":{"file":"plateBoots.atf"},
		"name":{"EN":"plate boots",
				"FR":"bottes de plaques",
				"JP":"プレートブーツ"},
		"description":{"EN":"Plate boots are war shoes made from cast iron.",
					   "FR":"Les bottes de plaques sont des chaussures de guerre fabriquées avec de la fonte.",
					   "JP":"着用者の体力と移動速度を向上させる戦闘用靴。電気属性にわずかに弱くなります。靴作り場で鋳鉄から製造できます。"},
		"bonus":{"health":{"shoes":0.25}, "speed":0.5},
		"resistance":{"electricity":0.1},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"endurance":0.125},
				"xpSkill":{"shoes":1}
				}
		},
		"equip":true
	},
	"sandals":{
		"type":"item",
		"age":"stoneAge",
		"category":"feet",
		"picture":{"file":"sandals.atf"},
		"name":{"EN":"sandals",
				"FR":"sandales",
				"JP":"革のサンダル"},
		"description":{"EN":"Sandals are antique shoes made from leather.",
					   "FR":"Les sandales sont des chaussures antiques fabriquées avec du cuir.",
					   "JP":"着用者の持久力と移動速度を向上させる古風な革靴。靴作り場でなめし革から製造できます。"},
		"bonus":{"stamina":{"shoes":0.1}, "speed":1},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"shoes":1}
				}
		},
		"equip":true
	},
	"sevenPlacesBoots":{
		"type":"item",
		"age":"goldenAge",
		"category":"feet",
		"picture":{"file":"sevenPlacesBoots.atf"},
		"name":{"EN":"seven-league boots",
				"FR":"bottes des sept lieux",
				"JP":"セブンリーグブーツ"},
		"description":{"EN":"Seven-league boots are shoes which increase your walking speed.",
					   "FR":"Les bottes des sept lieux sont des chaussures qui améliorent votre vitesse de marche.",
					   "JP":"着用者の移動速度を大きく向上させる革靴。靴作り場でなめし革から製造できます。"},
		"bonus":{"speed":1.5},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"shoes":1}
				}
		},
		"equip":true
	},
	"sorcererShoes":{
		"type":"item",
		"age":"etherAge",
		"category":"feet",
		"picture":{"file":"sorcererShoes.atf"},
		"name":{"EN":"sorcerer shoes",
				"FR":"chaussures de sorcier",
				"JP":"魔術師の靴"},
		"description":{"EN":"The sorcerer shoes are magical shoes made from leather and crystal.",
					   "FR":"Les chaussures de sorcier sont des chaussures magiques fabriquées avec du cuir et des cristaux.",
					   "JP":"着用者の魔力と移動速度を向上させる革靴。魔法属性にわずかに弱くなります。靴作り場でなめし革と水晶から製造できます。"},
		"bonus":{"mana":{"shoes":0.20}, "speed":1},
		"resistance":{"magic":0.1},
		"xpPrimaryCharacteristic":{
			"mana":{
				"xpSecondaryCharacteristic":{"willpower":0.125},
				"xpSkill":{"shoes":1}
				}
		},
		"equip":true
	},
	"studdedBoots":{
		"type":"item",
		"age":"ironAge",
		"category":"feet",
		"picture":{"file":"studdedBoots.atf"},
		"name":{"EN":"studded boots",
				"FR":"bottes cloutées",
				"JP":"鋲打ちブーツ"},
		"description":{"EN":"Studded boots are battle shoes made from leather and cast iron.",
					   "FR":"Les bottes cloutées sont des chaussures de combat fabriquées avec du cuir et de la fonte.",
					   "JP":"着用者の体力と移動速度を向上させる戦闘用革靴。電気属性にわずかに弱くなります。靴作り場でなめし革と鋳鉄から製造できます。"},
		"bonus":{"health":{"shoes":0.15}, "speed":1},
		"resistance":{"electricity":0.05},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"shoes":1}
				}
		},
		"equip":true
	},
	"urbanShoes":{
		"type":"item",
		"age":"etherAge",
		"category":"feet",
		"picture":{"file":"urbanShoes.atf"},
		"name":{"EN":"urban shoes",
				"FR":"chaussures citadines",
				"JP":"アーバンシューズ"},
		"description":{"EN":"Urban shoes are medieval shoes made from leather.",
					   "FR":"Les chaussures citadines sont des chaussures médiévales fabriquées avec du cuir.",
					   "JP":"着用者の持久力と移動速度を向上させる中世的な革靴。靴作り場でなめし革から製造できます。"},
		"bonus":{"stamina":{"shoes":0.20}, "speed":1},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"shoes":1}
				}
		},
		"equip":true
	}
}