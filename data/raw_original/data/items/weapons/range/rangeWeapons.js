{
	"blowgun":{
		"type":"item",
		"age":"woodenAge",
		"category":"weapon",
		"picture":{"file":"blowgun.atf"},
		"name":{"EN":"blowgun",
				"FR":"sarbacane",
				"JP":"吹き筒"},
		"description":{"EN":"The blowgun is a two-handed shooting weapon made from wood.",
					   "FR":"La sarbacane est une arme de tir à une main fabriquée avec du bois.",
					   "JP":"吹き矢を放つ、両手持ちの射撃武器。野営地で木材から製造できます。"},
		"bonus":{"attack":{"shootingWeapons":0.75}},
		"attackTime":2.5, "range":200, "missile":"dart",
		"damage":["missile", "piercing"],
		"attack":{
			"costItem":{"darts":1}
		},
		"sound":"soundBlowgun",
		"anim":"shoot",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":1},
			"xpSkill":{"shootingWeapons":1}
		},
		"equip":true,
		"enhance":[{
			"skill":"crossbowsForging",
			"workshop":"huntingCamp",
			"time":2.5,
			"gainItem":{"blowgun":1},
			"bonusTimeSkill":"hunting",
			"costRessource":{"wood":10},
			"costPrimaryCharacteristic":{"stamina":10},
			"xpSecondaryCharacteristic":{"address":10},
			"xpSkill":{"hunting":10},
			"quantity":-10
		}]
	},
	"bow":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"bow.atf"},
		"name":{"EN":"bow",
				"FR":"arc",
				"JP":"弓"},
		"description":{"EN":"The bow is an antique two-handed range weapon made from wood.",
					   "FR":"L'arc est une arme de tir médiévale à deux mains fabriquée en bois.",
					   "JP":"各種の矢を放つ、古風な両手持ちの弓。射場で木材から製造できます。"},
		"bonus":{"attack":{"bows":1.2}},
		"attackTime":2, "range":300, "missile":"arrow",
		"damage":["missile", "piercing"],
		"attack":{
			"costItem":{"arrows":1}
		},
		"sound":"soundBow",
		"anim":"shoot",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":1},
			"xpSkill":{"bows":1}
		},
		"equip":true
	},
	"compositeBow":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"compositeBow.atf"},
		"name":{"EN":"composite bow",
				"FR":"arc composite",
				"JP":"合成弓"},
		"description":{"EN":"The composite bow is a powerful two-handed range weapon made from wood.",
					   "FR":"L'arc composite est une puissante arme de tir à deux mains fabriquée en bois.",
					   "JP":"各種の矢を放つ、強力な両手持ちの弓。射場で木材から製造できます。"},
		"bonus":{"attack":{"bows":2}},
		"attackTime":2, "range":400, "missile":"arrow",
		"damage":["missile", "piercing"],
		"attack":{
			"costItem":{"arrows":1}
		},
		"sound":"soundBow",
		"anim":"shoot",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":1},
			"xpSkill":{"bows":1}
		},
		"equip":true
	},
	"crossbow":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"crossbow.atf"},
		"name":{"EN":"crossbow",
				"FR":"arbalète",
				"JP":"クロスボウ"},
		"description":{"EN":"The crossbow is a medieval two-handed range weapon made from cast iron.",
					   "FR":"L'arbalète est une arme de tir médiévale à deux mains fabriquée avec de la fonte.",
					   "JP":"各種のボルトを放つ、中世的な両手持ちの射撃武器。射場で鋳鉄から製造できます。"},
		"bonus":{"attack":{"shootingWeapons":1.5}},
		"attackTime":2.5, "range":300, "missile":"bolt",
		"damage":["missile", "piercing"],
		"attack":{
			"costItem":{"bolts":1}
		},
		"sound":"soundCrossbow",
		"anim":"shoot",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":1},
			"xpSkill":{"shootingWeapons":1}
		},
		"equip":true
	},
	"handCrossbow":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"handCrossbow.atf"},
		"name":{"EN":"hand crossbow",
				"FR":"arbalète de poing",
				"JP":"小型クロスボウ"},
		"description":{"EN":"各種のボルトを放つ、中世的な片手持ちの射撃武器。射場で鋳鉄から製造できます。",
					   "FR":"L'arbalète de poing est une arme de tir médiévale à une main fabriquée en métal."},
		"bonus":{"attack":{"shootingWeapons":1.125}},
		"attackTime":2.5, "range":300, "missile":"bolt",
		"damage":["missile", "piercing"],
		"attack":{
			"costItem":{"bolts":1}
		},
		"sound":"soundCrossbow",
		"anim":"shoot",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":0.5},
			"xpSkill":{"shootingWeapons":0.5}
		},
		"equip":true,
		"oneHand":true
	},
	"handgun":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"handgun.atf"},
		"name":{"EN":"handgun",
				"FR":"pistolet",
				"JP":"ピストル"},
		"description":{"EN":"The handgun is a one-handed fire weapon made from cast iron.",
					   "FR":"Le pistolet est une arme à feu à une main fabriquée en fonte.",
					   "JP":"銃弾を放つ、片手持ちの銃器。造兵廠で鋳鉄から製造できます。"},
		"bonus":{"attack":{"firearms":3}},
		"attackTime":3, "range":350, "missile":"cartridge",
		"damage":["missile", "piercing"],
		"attack":{
			"costItem":{"cartridges":1}
		},
		"sound":"soundGun",
		"anim":"shoot",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":0.5},
			"xpSkill":{"firearms":0.5}
		},
		"equip":true,
		"oneHand":true
	},
	"heavyCrossbow":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"heavyCrossbow.atf"},
		"name":{"EN":"heavy crossbow",
				"FR":"arbalète lourde",
				"JP":"大型クロスボウ"},
		"description":{"EN":"The heavy crossbow is a medieval two-handed range weapon made from cast iron.",
					   "FR":"L'arbalète lourde est une arme de tir médiévale à deux mains et fabriquée en métal.",
					   "JP":"各種のボルトを放つ、中世的な両手持ちの射撃武器。射場で鋳鉄から製造できます。"},
		"bonus":{"attack":{"shootingWeapons":2}},
		"attackTime":2.5, "range":350, "missile":"bolt",
		"damage":["missile", "piercing"],
		"attack":{
			"costItem":{"bolts":1}
		},
		"sound":"soundCrossbow",
		"anim":"shoot",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":1},
			"xpSkill":{"shootingWeapons":1}
		},
		"equip":true
	},
	"longBow":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"longBow.atf"},
		"name":{"EN":"long bow",
				"FR":"arc long",
				"JP":"長弓"},
		"description":{"EN":"The long bow is a powerful two-handed range weapon made from wood.",
					   "FR":"L'arc long est une puissante arme de tir à deux mains fabriquée en bois.",
					   "JP":"各種の矢を放つ、力強い両手持ちの弓。射場で木材から製造できます。"},
		"bonus":{"attack":{"bows":1.6}},
		"attackTime":2, "range":350, "missile":"arrow",
		"damage":["missile", "piercing"],
		"attack":{
			"costItem":{"arrows":1}
		},
		"sound":"soundBow",
		"anim":"shoot",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":1},
			"xpSkill":{"bows":1}
		},
		"equip":true
	},
	"repeatingCrossbow":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"repeatingCrossbow.atf"},
		"name":{"EN":"repeating crossbow",
				"FR":"arbalète à répétition",
				"JP":"連射式クロスボウ"},
		"description":{"EN":"The repeating crossbow is a quick two-handed range weapon made from cast iron.",
					   "FR":"The repeating crossbow is a quick two-handed range weapon made from cast iron.",
					   "JP":"各種のボルトを放つ、速射可能な両手持ちの射撃武器。射場で鋳鉄から製造できます。"},
		"bonus":{"attack":{"shootingWeapons":0.875}},
		"attackTime":1.25, "range":400, "missile":"bolt",
		"damage":["missile", "piercing"],
		"attack":{
			"costItem":{"bolts":1}
		},
		"sound":"soundCrossbow",
		"anim":"shoot",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":1},
			"xpSkill":{"shootingWeapons":1}
		},
		"equip":true
	},
	"rifle":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"rifle.atf"},
		"name":{"EN":"rifle",
				"FR":"fusil",
				"JP":"ライフル"},
		"description":{"EN":"The rifle is a two-handed firearm  made from cast iron.",
					   "FR":"Le fusil est une arme à feu à deux mains fabriquée en fonte.",
					   "JP":"銃弾を放つ、両手持ちの銃器。造兵廠で鋳鉄から製造できます。"},
		"bonus":{"attack":{"firearms":5}},
		"attackTime":3, "range":400, "missile":"cartridge",
		"damage":["missile", "piercing"],
		"attack":{
			"costItem":{"cartridges":1}
		},
		"sound":"soundGun",
		"anim":"shoot",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":1},
			"xpSkill":{"firearms":1}
		},
		"equip":true
	},
	"shortBow":{
		"type":"item",
		"age":"stoneAge",
		"category":"weapon",
		"picture":{"file":"shortBow.atf"},
		"name":{"EN":"short bow",
				"FR":"arc court",
				"JP":"短弓"},
		"description":{"EN":"The short bow is a primitive two-handed range weapon made from wood.",
					   "FR":"L'arc court est une arme de tir primitive à deux mains fabriquée en bois.",
					   "JP":"各種の矢を放つ、原始的な両手持ちの弓。射場で木材から製造できます。"},
		"bonus":{"attack":{"bows":0.8}},
		"attackTime":2, "range":250, "missile":"arrow",
		"damage":["missile", "piercing"],
		"attack":{
			"costItem":{"arrows":1}
		},
		"sound":"soundBow",
		"anim":"shoot",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":1},
			"xpSkill":{"bows":1}
		},
		"equip":true
	},
	"shoulderCannon":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"shoulderCannon.atf"},
		"name":{"EN":"shoulder cannon",
				"FR":"canon d'épaule",
				"JP":"肩掛け式カノン砲"},
		"description":{"EN":"The shoulder cannon is a heavy two-handed firearm made from cast iron.",
					   "FR":"Le canon d'épaule est une arme à feu lourde à deux mains fabriquée en fonte.",
					   "JP":"広範囲を巻き込む砲弾を放つ、両手持ちの大型銃器。造兵廠で鋳鉄から製造できます。"},
		"bonus":{"attack":{"firearms":12}},
		"attackTime":12, "range":500, "missile":"cannonBall",
		"special":{"pierce":true, "area":{"attack":{"firearms":3}, "range":96, "effect":"miniExplosion"}},
		"damage":["missile", "demolition"],
		"attack":{
			"costItem":{"cannonBalls":1}
		},
		"sound":"soundCannon",
		"anim":"shoot",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":1},
			"xpSkill":{"firearms":1}
		},
		"equip":true
	},
	"sling":{
		"type":"item",
		"age":"stoneAge",
		"category":"weapon",
		"picture":{"file":"sling.atf"},
		"name":{"EN":"sling",
				"FR":"fronde",
				"JP":"スリング"},
		"description":{"EN":"The sling is a one-handed shooting weapon made from leather.",
					   "FR":"La fronde est une arme de tir à une main fabriquée en cuir.",
					   "JP":"石弾を放つ、片手持ちの射撃武器。野営地でなめし革から製造できます。"},
		"bonus":{"attack":{"shootingWeapons":0.625}},
		"attackTime":2.5, "range":200, "missile":"bullet",
		"damage":["missile", "crushing"],
		"attack":{
			"costItem":{"bullets":1}
		},
		"sound":"soundThrow",
		"anim":"slash",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":0.5},
			"xpSkill":{"shootingWeapons":0.5}
		},
		"equip":true,
		"oneHand":true,
		"enhance":[{
			"skill":"bowsCrafting",
			"workshop":"huntingCamp",
			"time":0.5,
			"gainItem":{"sling":1},
			"bonusTimeSkill":"tanning",
			"costRessource":{"leather":1},
			"costPrimaryCharacteristic":{"stamina":1},
			"xpSecondaryCharacteristic":{"address":1},
			"xpSkill":{"tanning":1},
			"quantity":-1
		}]
	}
}