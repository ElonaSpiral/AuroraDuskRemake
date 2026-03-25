{
	"boneSpearStaff":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"boneSpearStaff.atf"},
		"name":{"EN":"bone-spear staff",
				"FR":"bâton de lance d'os",
				"JP":"骨槍の杖"},
		"description":{"EN":"The bone-spear staff is a magical two-handed weapon made from wood and paper.",
					   "FR":"Le bâton de lance d'os est une arme magique à deux mains fabriquée avec du bois et du papier.",
					   "JP":"貫通する骨槍を放つ、両手持ちの混沌魔術発動体。闇の祭壇で木材と羊皮紙から製造できます。"},
		"bonus":{"attack":{"chaoticMagic":2.5}},
		"attackTime":2, "range":400, "missile":"boneSpearMissile", "special":{"pierce":true},
		"damage":["magic", "death"],
		"anim":"magic", "scale":1.25,
		"attack":{
			"costPrimaryCharacteristic":{"mana":3}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":1},
			"xpSkill":{"chaoticMagic":1}
		},
		"equip":true
	},
	"brightLightStaff":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"brightLightStaff.atf"},
		"name":{"EN":"bright light staff",
				"FR":"bâton de lumière intense",
				"JP":"光明の杖"},
		"description":{"EN":"The bright light staff is a magical two-handed weapon made from wood and paper.",
					   "FR":"Le bâton de lumière intense est une arme magique à deux mains fabriquée avec du bois et du papier.",
					   "JP":"誘導し、当たった標的を一時的に盲目にする光玉を前方5方向に放つ、両手持ちの鎮圧魔術発動体。光の祭壇で木材と紙から製造できます。"},
		"bonus":{"attack":{"repressiveMagic":0.5}},
		"attackTime":2, "range":450, "missile":"lightOrb",
		"damage":["magic", "light"],
		"anim":"magic", "scale":1.25,
		"attacks":[{"range":675, "damage":["magic", "light"], "missile":"lightOrb", "angle":2, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":675, "damage":["magic", "light"], "missile":"lightOrb", "angle":1.35, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":675, "damage":["magic", "light"], "missile":"lightOrb", "angle":0, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":675, "damage":["magic", "light"], "missile":"lightOrb", "angle":-1.35, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":675, "damage":["magic", "light"], "missile":"lightOrb", "angle":-2, "selfGuided":0.2, "penality":{"id":"blind", "time":5}}],
		"attack":{
			"costPrimaryCharacteristic":{"mana":5}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.2},
			"xpSkill":{"repressiveMagic":0.2}
		},
		"equip":true,
		"produce":[{
				"workshop":"redemptiveAltar",
				"no":10,
				"time":21,
				"gainItem":{"brightLightStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":14, "paper":14},
				"costPrimaryCharacteristic":{"stamina":42},
				"xpSecondaryCharacteristic":{"intelligence":42},
				"xpSkill":{"enchantment":42},
				"quantity":-21
		}]
	},
	"brightMultipleFireScepter":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"brightMultipleFireScepter.atf"},
		"name":{"EN":"multiple bright fire sceptre",
				"FR":"sceptre de feu multiple intense",
				"JP":"複炎光の短杖"},
		"description":{"EN":"The multiple bright fire sceptre can throw 5 fireballs.",
					   "FR":"Le sceptre de feu multiple intense projette 5 boules de feu.",
					   "JP":"一定範囲を巻き込む火弾を前方5方向に放つ、片手持ちの火工魔術発動体。火の祭壇で木材と紙から製造できます。"},
		"bonus":{"attack":{"pyrotechnicMagic":1.25}},
		"attackTime":4, "range":400, "missile":"fireshot",
		"special":{"area":{"attack":{"pyrotechnicMagic":0.225}, "range":16, "effect":"miniExplosion"}},
		"damage":["magic", "fire"],
		"anim":"magic",
		"attacks":[{"range":400, "damage":["magic", "fire"], "missile":"fireshot", "angle":0.3, "special":{"area":{"attack":{"pyrotechnicMagic":0.225}, "range":16, "effect":"miniExplosion"}}},
				   {"range":400, "damage":["magic", "fire"], "missile":"fireshot", "angle":0.15, "special":{"area":{"attack":{"pyrotechnicMagic":0.225}, "range":16, "effect":"miniExplosion"}}},
				   {"range":400, "damage":["magic", "fire"], "missile":"fireshot", "angle":0, "special":{"area":{"attack":{"pyrotechnicMagic":0.225}, "range":16, "effect":"miniExplosion"}}},
				   {"range":400, "damage":["magic", "fire"], "missile":"fireshot", "angle":-0.15, "special":{"area":{"attack":{"pyrotechnicMagic":0.225}, "range":16, "effect":"miniExplosion"}}},
				   {"range":400, "damage":["magic", "fire"], "missile":"fireshot", "angle":-0.3, "special":{"area":{"attack":{"pyrotechnicMagic":0.225}, "range":16, "effect":"miniExplosion"}}}],
		"attack":{
			"costPrimaryCharacteristic":{"mana":20}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.1},
			"xpSkill":{"pyrotechnicMagic":0.1}
		},
		"equip":true,
		"oneHand":true,
		"produce":[{
				"workshop":"pyrotechnicAltar",
				"no":10,
				"time":10.5,
				"gainItem":{"brightMultipleFireScepter":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":7, "paper":7},
				"costPrimaryCharacteristic":{"stamina":21},
				"xpSecondaryCharacteristic":{"intelligence":21},
				"xpSkill":{"enchantment":21},
				"quantity":-10
		}]
	},
	"chainLightningStaff":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"chainLightningStaff.atf"},
		"name":{"EN":"chain lightning staff",
				"FR":"bâton d'éclairs en série",
				"JP":"鎖電の杖"},
		"description":{"EN":"The chain lightning staff allows you to shoot up to 4 opponents.",
					   "FR":"Le bâton d'éclairs en série permet de toucher jusqu'à 4 adversaires.",
					   "JP":"雷を最大4目標に直接投射する、両手持ちの妖術発動体。祈祷所で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"druidicMagic":1.6}},
		"attackTime":2, "range":250,
		"damage":["magic", "electricity"],
		"anim":"magic", "scale":1.25,
		"effect":"lightningImpact", "effectLine":"lightningLine",
		"special":{"chain":{"number":3, "attack":{"druidicMagic":1.6}, "range":200, "effect":"lightningImpact", "effectLine":"lightningLine"}},
		"attack":{
			"costPrimaryCharacteristic":{"mana":16}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.33},
			"xpSkill":{"druidicMagic":0.33}
		},
		"equip":true,
		"produce":[{
				"workshop":"shamanicAltar",
				"no":9.5,
				"time":15,
				"gainItem":{"chainLightningStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":12, "castIron":6},
				"costPrimaryCharacteristic":{"stamina":30},
				"xpSecondaryCharacteristic":{"intelligence":30},
				"xpSkill":{"enchantment":30},
				"quantity":-15
		}]
	},
	"cometStaff":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"cometStaff.atf"},
		"name":{"EN":"comet staff",
				"FR":"bâton de comète",
				"JP":"彗星の杖"},
		"description":{"EN":"The comet staff is a magical two-handed weapon made from wood and parchments.",
					   "FR":"Le bâton de comète est une arme magique à deux mains fabriquée avec du bois et du parchemin.",
					   "JP":"広範囲を巻き込む彗星を放つ、両手持ちの火工魔術発動体。火の祭壇で木材と紙から製造できます。"},
		"bonus":{"attack":{"pyrotechnicMagic":12.6}},
		"attackTime":6, "range":450, "missile":"comet",
		"special":{"area":{"attack":{"pyrotechnicMagic":6.3}, "range":96, "effect":"miniExplosion"}},
		"damage":["magic", "fire"],
		"anim":"magic", "scale":1.25,
		"attack":{
			"costPrimaryCharacteristic":{"mana":10}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":1},
			"xpSkill":{"pyrotechnicMagic":1}
		},
		"equip":true,
		"produce":[{
				"workshop":"pyrotechnicAltar",
				"no":11,
				"time":21,
				"gainItem":{"cometStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":14, "paper":14},
				"costPrimaryCharacteristic":{"stamina":42},
				"xpSecondaryCharacteristic":{"intelligence":42},
				"xpSkill":{"enchantment":42},
				"quantity":-21
		}]
	},
	"cristalStarStaff":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"cristalStarStaff.atf"},
		"name":{"EN":"cristal star staff",
				"FR":"bâton de cristal des neiges",
				"JP":"結晶星の杖"},
		"description":{"EN":"The cristal star staff is a magical two-handed weapon which can throw 12 crystal shards.",
					   "FR":"Le bâton de cristal des neiges est une arme magique à deux mains qui projette 12 éclats de cristal.",
					   "JP":"誘導し、当たった標的の移動速度を一時的に下げる氷弾と水晶ボルトを6発づつ放つ、両手持ちの妖術発動体。祈祷所で木材と水晶から製造できます。"},
		"bonus":{"attack":{"druidicMagic":0.5}},
		"attackTime":4, "range":450, "missile":"iceBolt",
		"damage":["magic", "ice"],
		"anim":"magic", "scale":1.25,
		"attacks":[{"range":450, "damage":["magic", "ice"], "missile":"iceBolt", "fixedAngle":-1.57, "attackDY":-16, "attackDelay":1, "selfGuided":0.2, "penality":{"id":"slowdown", "time":5}},
				   {"range":450, "damage":["magic", "ice"], "missile":"iceBolt", "fixedAngle":1.57, "attackDY":16, "attackDelay":1, "selfGuided":0.2, "penality":{"id":"slowdown", "time":5}},
				   {"range":450, "damage":["magic", "ice"], "missile":"iceBolt", "fixedAngle":-2.61, "attackDX":-14, "attackDY":-8, "attackDelay":1, "selfGuided":0.2, "penality":{"id":"slowdown", "time":5}},
				   {"range":450, "damage":["magic", "ice"], "missile":"iceBolt", "fixedAngle":-0.52, "attackDX":14, "attackDY":-8, "attackDelay":1, "selfGuided":0.2, "penality":{"id":"slowdown", "time":5}},
				   {"range":450, "damage":["magic", "ice"], "missile":"iceBolt", "fixedAngle":2.61, "attackDX":-14, "attackDY":8, "attackDelay":1, "selfGuided":0.2, "penality":{"id":"slowdown", "time":5}},
				   {"range":450, "damage":["magic", "ice"], "missile":"iceBolt", "fixedAngle":0.52, "attackDX":14, "attackDY":8, "attackDelay":1, "selfGuided":0.2, "penality":{"id":"slowdown", "time":5}},
				   {"range":900, "damage":["magic", "ice"], "missile":"cristalBolt", "fixedAngle":2.09, "attackDX":8, "attackDY":-14, "attackDelay":1, "selfGuided":0.02, "penality":{"id":"slowdown", "time":5}},
				   {"range":900, "damage":["magic", "ice"], "missile":"cristalBolt", "fixedAngle":-1.05, "attackDX":-8, "attackDY":14, "attackDelay":1, "selfGuided":0.02, "penality":{"id":"slowdown", "time":5}},
				   {"range":900, "damage":["magic", "ice"], "missile":"cristalBolt", "fixedAngle":1.05, "attackDX":-8, "attackDY":-14, "attackDelay":1, "selfGuided":0.02, "penality":{"id":"slowdown", "time":5}},
				   {"range":900, "damage":["magic", "ice"], "missile":"cristalBolt", "fixedAngle":-2.09, "attackDX":8, "attackDY":14, "attackDelay":1, "selfGuided":0.02, "penality":{"id":"slowdown", "time":5}},
				   {"range":900, "damage":["magic", "ice"], "missile":"cristalBolt", "fixedAngle":0.01, "attackDX":-16, "attackDelay":1, "selfGuided":0.02, "penality":{"id":"slowdown", "time":5}},
				   {"range":900, "damage":["magic", "ice"], "missile":"cristalBolt", "fixedAngle":-3.14, "attackDX":16, "attackDelay":1, "selfGuided":0.02, "penality":{"id":"slowdown", "time":5}}],
		"attack":{
			"costPrimaryCharacteristic":{"mana":32}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.08},
			"xpSkill":{"druidicMagic":0.08}
		},
		"equip":true,
		"produce":[{
				"workshop":"shamanicAltar",
				"no":15,
				"time":22,
				"gainItem":{"cristalStarStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":12, "crystals":8},
				"costPrimaryCharacteristic":{"stamina":44},
				"xpSecondaryCharacteristic":{"intelligence":44},
				"xpSkill":{"enchantment":44},
				"quantity":-22
		}]
	},
	"deathBeamRod":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"deathBeamRod.atf"},
		"name":{"EN":"death beam rod",
				"FR":"baguette de rayon de la mort",
				"JP":"デスビームロッド"},
		"description":{"EN":"The death beam rod is a magical one-handed weapon made from wood and parchment. WARNING: This weapon consumes your health.",
					   "FR":"La baguette de rayon de la mort est une arme magique à une main fabriquée avec du bois et du parchemin. ATTENTION : Cette arme consomme votre santé.",
					   "JP":"体力と魔力両方を消費してビームを放つ、片手持ちの混沌魔術発動体。闇の祭壇で木材と羊皮紙から製造できます。"},
		"bonus":{"attack":{"chaoticMagic":0.5}},
		"attackTime":0.3, "range":250,
		"damage":["magic", "death"],
		"anim":"shoot",
		"effect":"deathBeamImpact","effectLine":"deathBeamLine",
		"attack":{
			"costPrimaryCharacteristic":{"health":1, "mana":3}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.5},
			"xpSkill":{"chaoticMagic":0.5}
		},
		"equip":true,
		"oneHand":true
	},
	"dragonBreathStaff":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"dragonBreathStaff.atf"},
		"name":{"EN":"dragon breath staff",
				"FR":"bâton de souffle de dragon",
				"JP":"竜息の杖"},
		"description":{"EN":"The dragon breath staff is a magical two-handed weapon made from wood and paper.",
					   "FR":"Le bâton de souffle de dragon est une arme magique à deux mains fabriquée avec du bois et du papier.",
					   "JP":"至近距離に炎を投射する、両手持ちの火工魔術発動体。火の祭壇で木材と紙から製造できます。"},
		"bonus":{"attack":{"pyrotechnicMagic":12.6}},
		"damage":["magic", "fire"],
		"attackTime":3,
		"anim":"magic", "scale":1.5,
		"effect":"flameThrowingEffect",
		"attack":{
			"costPrimaryCharacteristic":{"mana":20}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":1},
			"xpSkill":{"pyrotechnicMagic":1}
		},
		"equip":true,
		"produce":[{
				"workshop":"pyrotechnicAltar",
				"no":10,
				"time":21,
				"gainItem":{"dragonBreathStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":14, "paper":14},
				"costPrimaryCharacteristic":{"stamina":42},
				"xpSecondaryCharacteristic":{"intelligence":42},
				"xpSkill":{"enchantment":42},
				"quantity":-21
		}]
	},
	"fireballStaff":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"fireballStaff.atf"},
		"name":{"EN":"fireball staff",
				"FR":"bâton de boule de feu",
				"JP":"火球の杖"},
		"description":{"EN":"The fireball staff is a magical two-handed weapon made from wood and parchment.",
					   "FR":"Le bâton de boule de feu est une arme magique à deux mains fabriquée avec du bois et du parchemin.",
					   "JP":"一定範囲を巻き込む火球を放つ、両手持ちの火工魔術発動体。火の祭壇で木材と羊皮紙から製造できます。"},
		"bonus":{"attack":{"pyrotechnicMagic":4.2}},
		"attackTime":4, "range":400, "missile":"fireball",
		"special":{"area":{"attack":{"pyrotechnicMagic":1.05}, "range":32, "effect":"miniExplosion"}},
		"damage":["magic", "fire"],
		"anim":"magic", "scale":1.25,
		"attack":{
			"costPrimaryCharacteristic":{"mana":10}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":1},
			"xpSkill":{"pyrotechnicMagic":1}
		},
		"equip":true,
		"upgrade":[{
				"workshop":"pyrotechnicAltar",
				"time":9.5,
				"gainItem":{"sunfireStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":8, "paper":5},
				"costPrimaryCharacteristic":{"stamina":19},
				"xpSecondaryCharacteristic":{"intelligence":19},
				"xpSkill":{"enchantment":19},
				"quantity":-10
			},{
				"workshop":"pyrotechnicAltar",
				"time":19.5,
				"gainItem":{"dragonBreathStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":8, "paper":12},
				"costPrimaryCharacteristic":{"stamina":39},
				"xpSecondaryCharacteristic":{"intelligence":39},
				"xpSkill":{"enchantment":39},
				"quantity":-20
			},{
				"workshop":"pyrotechnicAltar",
				"time":19.5,
				"gainItem":{"cometStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":8, "paper":12},
				"costPrimaryCharacteristic":{"stamina":39},
				"xpSecondaryCharacteristic":{"intelligence":39},
				"xpSkill":{"enchantment":39},
				"quantity":-20
		}]
	},
	"fireScepter":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"fireScepter.atf"},
		"name":{"EN":"fire sceptre",
				"FR":"sceptre de feu",
				"JP":"火の短杖"},
		"description":{"EN":"The fire sceptre is a magical one-handed weapon made from wood and parchment.",
					   "FR":"Le sceptre de feu est une arme magique à une main fabriquée avec du bois et du parchemin.",
					   "JP":"一定範囲を巻き込む火弾を放つ、片手持ちの火工魔術発動体。火の祭壇で木材と羊皮紙から製造できます。"},
		"bonus":{"attack":{"pyrotechnicMagic":2.1}},
		"attackTime":4, "range":300, "missile":"fireshot",
		"special":{"area":{"attack":{"pyrotechnicMagic":0.525}, "range":16, "effect":"miniExplosion"}},
		"damage":["magic", "fire"],
		"anim":"magic",
		"attack":{
			"costPrimaryCharacteristic":{"mana":4}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.5},
			"xpSkill":{"pyrotechnicMagic":0.5}
		},
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"pyrotechnicAltar",
				"time":4,
				"gainItem":{"fireballStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":4, "parchment":4},
				"costPrimaryCharacteristic":{"stamina":8},
				"xpSecondaryCharacteristic":{"intelligence":8},
				"xpSkill":{"enchantment":8},
				"quantity":-4
			},{
				"workshop":"pyrotechnicAltar",
				"time":5,
				"gainItem":{"multipleFireScepter":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":2, "paper":3},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"intelligence":10},
				"xpSkill":{"enchantment":10},
				"quantity":-5
			},{
				"workshop":"pyrotechnicAltar",
				"time":11,
				"gainItem":{"sunfireStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":8, "paper":6},
				"costPrimaryCharacteristic":{"stamina":22},
				"xpSecondaryCharacteristic":{"intelligence":22},
				"xpSkill":{"enchantment":22},
				"quantity":-11
			},{
				"workshop":"pyrotechnicAltar",
				"time":6.5,
				"gainItem":{"brightMultipleFireScepter":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":1, "paper":6},
				"costPrimaryCharacteristic":{"stamina":13},
				"xpSecondaryCharacteristic":{"intelligence":13},
				"xpSkill":{"enchantment":13},
				"quantity":-6
			},{
				"workshop":"pyrotechnicAltar",
				"time":21,
				"gainItem":{"dragonBreathStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":8, "paper":13},
				"costPrimaryCharacteristic":{"stamina":42},
				"xpSecondaryCharacteristic":{"intelligence":42},
				"xpSkill":{"enchantment":42},
				"quantity":-21
			},{
				"workshop":"pyrotechnicAltar",
				"time":21,
				"gainItem":{"cometStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":8, "paper":13},
				"costPrimaryCharacteristic":{"stamina":42},
				"xpSecondaryCharacteristic":{"intelligence":42},
				"xpSkill":{"enchantment":42},
				"quantity":-21
		}]
	},
	"iceScepter":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"iceScepter.atf"},
		"name":{"EN":"ice scepter",
				"FR":"sceptre de glace",
				"JP":"氷の短杖"},
		"description":{"EN":"The ice sceptre is a magical one-handed weapon made from wood and crystal.",
					   "FR":"Le sceptre de glace est une arme magique à une main fabriquée avec du bois et du cristal.",
					   "JP":"微誘導し、当たった標的の移動速度を一時的に下げる氷弾を放つ、片手持ちの妖術発動体。祈祷所で木材と水晶から製造できます。"},
		"bonus":{"attack":{"druidicMagic":0.8}},
		"attackTime":2, "range":300, "missile":"iceBolt", "attackDY":-32, "attackDelay":1, "special":{"selfGuided":0.05, "penality":{"id":"slowdown", "time":5}},
		"damage":["magic", "ice"],
		"anim":"magic",
		"attack":{
			"costPrimaryCharacteristic":{"mana":2}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.5},
			"xpSkill":{"druidicMagic":0.5}
		},
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"shamanicAltar",
				"time":7,
				"gainItem":{"snowStarStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":4, "crystals":3},
				"costPrimaryCharacteristic":{"stamina":16},
				"xpSecondaryCharacteristic":{"intelligence":16},
				"xpSkill":{"enchantment":16},
				"quantity":-7
			},{
				"workshop":"shamanicAltar",
				"time":16,
				"gainItem":{"cristalStarStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":8, "crystals":6},
				"costPrimaryCharacteristic":{"stamina":32},
				"xpSecondaryCharacteristic":{"intelligence":32},
				"xpSkill":{"enchantment":32},
				"quantity":-16
		}]
	},
	"lightningScepter":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"lightningScepter.atf"},
		"name":{"EN":"lightning sceptre",
				"FR":"sceptre de foudre",
				"JP":"雷の短杖"},
		"description":{"EN":"The lightning sceptre is a magical one-handed weapon made from wood and iron.",
					   "FR":"Le sceptre de foudre est une arme magique à une main fabriquée avec du bois et de la fonte.",
					   "JP":"雷を標的に直接投射する、片手持ちの妖術発動体。祈祷所で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"druidicMagic":0.6}},
		"damage":["magic", "electricity"],
		"attackTime":2, "range":250,
		"anim":"magic",
		"effect":"lightningImpact","effectLine":"lightningLine",
		"attack":{
			"costPrimaryCharacteristic":{"mana":4}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.5},
			"xpSkill":{"druidicMagic":0.5}
		},
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"shamanicAltar",
				"time":7,
				"gainItem":{"lightningStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":5, "castIron":3},
				"costPrimaryCharacteristic":{"stamina":14},
				"xpSecondaryCharacteristic":{"intelligence":14},
				"xpSkill":{"enchantment":14},
				"quantity":-14
		}]
	},
	"lightScepter":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"lightScepter.atf"},
		"name":{"EN":"light sceptre",
				"FR":"sceptre de lumière",
				"JP":"光の短杖"},
		"description":{"EN":"The light sceptre is a magical one-handed weapon made from wood and parchments.",
					   "FR":"Le sceptre de lumière est une arme magique à une main fabriquée avec du bois et du parchemin.",
					   "JP":"誘導し、当たった標的を一時的に盲目にする光玉を放つ、片手持ちの鎮圧魔術発動体。光の祭壇で木材と羊皮紙から製造できます。"},
		"bonus":{"attack":{"repressiveMagic":0.5}},
		"attackTime":1, "range":300, "missile":"lightOrb", "special":{"selfGuided":0.2, "penality":{"id":"blind", "time":5}},
		"damage":["magic", "light"],
		"anim":"magic",
		"attack":{
			"costPrimaryCharacteristic":{"mana":1}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.5},
			"xpSkill":{"repressiveMagic":0.5}
		},
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"redemptiveAltar",
				"time":11,
				"gainItem":{"lightStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":9, "paper":6},
				"costPrimaryCharacteristic":{"stamina":22},
				"xpSecondaryCharacteristic":{"intelligence":22},
				"xpSkill":{"enchantment":22},
				"quantity":-11
			},{
				"workshop":"redemptiveAltar",
				"time":21,
				"gainItem":{"brightLightStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":9, "paper":13},
				"costPrimaryCharacteristic":{"stamina":42},
				"xpSecondaryCharacteristic":{"intelligence":42},
				"xpSkill":{"enchantment":42},
				"quantity":-21
		}]
	},
	"lightStaff":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"lightStaff.atf"},
		"name":{"EN":"light staff",
				"FR":"bâton de lumière",
				"JP":"光の杖"},
		"description":{"EN":"The light staff is a magical two-handed weapon made from wood and paper.",
					   "FR":"Le bâton de lumière est une arme magique à deux mains fabriquée avec du bois et du papier.",
					   "JP":"誘導し、当たった標的を一時的に盲目にする光玉を前方3方向に放つ、両手持ちの鎮圧魔術発動体。光の祭壇で木材と紙から製造できます。"},
		"bonus":{"attack":{"repressiveMagic":0.5}},
		"attackTime":2, "range":400, "missile":"lightOrb",
		"damage":["magic", "light"],
		"anim":"magic", "scale":1.25,
		"attacks":[{"range":600, "damage":["magic", "light"], "missile":"lightOrb", "angle":1.57, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":600, "damage":["magic", "light"], "missile":"lightOrb", "angle":0, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":600, "damage":["magic", "light"], "missile":"lightOrb", "angle":-1.57, "selfGuided":0.2, "penality":{"id":"blind", "time":5}}],
		"attack":{
			"costPrimaryCharacteristic":{"mana":3}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.33},
			"xpSkill":{"repressiveMagic":0.33}
		},
		"equip":true,
		"upgrade":[{
				"workshop":"redemptiveAltar",
				"time":10,
				"gainItem":{"brightLightStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"paper":7},
				"costPrimaryCharacteristic":{"stamina":21},
				"xpSecondaryCharacteristic":{"intelligence":21},
				"xpSkill":{"enchantment":21},
				"quantity":-10
		}]
	},
	"multipleFireScepter":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"multipleFireScepter.atf"},
		"name":{"EN":"multiple fire sceptre",
				"FR":"sceptre de feu multiple",
				"JP":"複火の短杖"},
		"description":{"EN":"The multiple fire sceptre is a one-handed magical weapon made from wood and paper.",
					   "FR":"Le sceptre de feu multiple est une arme magique à une main fabriquée avec du bois et du papier.",
					   "JP":"一定範囲を巻き込む火弾を前方3方向に放つ、片手持ちの火工魔術発動体。火の祭壇で木材と紙から製造できます。"},
		"bonus":{"attack":{"pyrotechnicMagic":1.5}},
		"attackTime":4, "range":350, "missile":"fireshot",
		"special":{"area":{"attack":{"pyrotechnicMagic":0.375}, "range":16, "effect":"miniExplosion"}},
		"damage":["magic", "fire"],
		"anim":"magic",
		"attacks":[{"range":350, "damage":["magic", "fire"], "missile":"fireshot", "angle":0.2, "special":{"area":{"attack":{"pyrotechnicMagic":0.375}, "range":16, "effect":"miniExplosion"}}},
				   {"range":350, "damage":["magic", "fire"], "missile":"fireshot", "angle":0, "special":{"area":{"attack":{"pyrotechnicMagic":0.375}, "range":16, "effect":"miniExplosion"}}},
				   {"range":350, "damage":["magic", "fire"], "missile":"fireshot", "angle":-0.2, "special":{"area":{"attack":{"pyrotechnicMagic":0.375}, "range":16, "effect":"miniExplosion"}}}],
		"attack":{
			"costPrimaryCharacteristic":{"mana":12}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.17},
			"xpSkill":{"pyrotechnicMagic":0.17}
		},
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"pyrotechnicAltar",
				"time":6,
				"gainItem":{"sunfireStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":6, "paper":3},
				"costPrimaryCharacteristic":{"stamina":12},
				"xpSecondaryCharacteristic":{"intelligence":12},
				"xpSkill":{"enchantment":12},
				"quantity":-6
			},{
				"workshop":"pyrotechnicAltar",
				"time":3,
				"gainItem":{"brightMultipleFireScepter":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"paper":3},
				"costPrimaryCharacteristic":{"stamina":6},
				"xpSecondaryCharacteristic":{"intelligence":6},
				"xpSkill":{"enchantment":6},
				"quantity":-3
			},{
				"workshop":"pyrotechnicAltar",
				"time":16.5,
				"gainItem":{"dragonBreathStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":6, "paper":10},
				"costPrimaryCharacteristic":{"stamina":33},
				"xpSecondaryCharacteristic":{"intelligence":33},
				"xpSkill":{"enchantment":33},
				"quantity":-16
			},{
				"workshop":"pyrotechnicAltar",
				"time":16.5,
				"gainItem":{"cometStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":6, "paper":10},
				"costPrimaryCharacteristic":{"stamina":33},
				"xpSecondaryCharacteristic":{"intelligence":33},
				"xpSkill":{"enchantment":33},
				"quantity":-16
		}]
	},
	"poisonNovaStaff":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"poisonNovaStaff.atf"},
		"name":{"EN":"poison nova staff",
				"FR":"bâton de nova de poison",
				"JP":"毒新星の杖"},
		"description":{"EN":"The poison nova staff is a magical two-handed weapon that can throw poison in all directions.",
					   "FR":"Le bâton de nova de poison est une arme magique à deux mains qui projette du poison dans toutes les directions.",
					   "JP":"当たった標的を一時的に毒状態にする毒ビームを全方位に計16発放つ、両手持ちの混沌魔術発動体。闇の祭壇で木材と薬草から製造できます。"},
		"bonus":{"attack":{"chaoticMagic":1.5}},
		"attackTime":4, "range":500, "missile":"poisonBeamMissile",
		"special":{"poison":{"attack":{"chaoticMagic":0.65}, "time":5}},
		"attacks":[{"range":500, "missile":"poisonBeamMissile", "damage":["magic", "poison"], "angle":-1.57,
						"special":{"poison":{"attack":{"chaoticMagic":0.65}, "time":5}}},
				   {"range":500, "missile":"poisonBeamMissile", "damage":["magic", "poison"], "angle":-1.96,
						"special":{"poison":{"attack":{"chaoticMagic":0.65}, "time":5}}},
				   {"range":500, "missile":"poisonBeamMissile", "damage":["magic", "poison"], "angle":-2.35,
						"special":{"poison":{"attack":{"chaoticMagic":0.65}, "time":5}}},
				   {"range":500, "missile":"poisonBeamMissile", "damage":["magic", "poison"], "angle":-2.74,
						"special":{"poison":{"attack":{"chaoticMagic":0.65}, "time":5}}},
				   {"range":500, "missile":"poisonBeamMissile", "damage":["magic", "poison"], "angle":-3.14,
						"special":{"poison":{"attack":{"chaoticMagic":0.65}, "time":5}}},
				   {"range":500, "missile":"poisonBeamMissile", "damage":["magic", "poison"], "angle":2.74,
						"special":{"poison":{"attack":{"chaoticMagic":0.65}, "time":5}}},
				   {"range":500, "missile":"poisonBeamMissile", "damage":["magic", "poison"], "angle":2.35,
						"special":{"poison":{"attack":{"chaoticMagic":0.65}, "time":5}}},
				   {"range":500, "missile":"poisonBeamMissile", "damage":["magic", "poison"], "angle":1.96,
						"special":{"poison":{"attack":{"chaoticMagic":0.65}, "time":5}}},
				   {"range":500, "missile":"poisonBeamMissile", "damage":["magic", "poison"], "angle":1.57,
						"special":{"poison":{"attack":{"chaoticMagic":0.65}, "time":5}}},
				   {"range":500, "missile":"poisonBeamMissile", "damage":["magic", "poison"], "angle":1.17,
						"special":{"poison":{"attack":{"chaoticMagic":0.65}, "time":5}}},
				   {"range":500, "missile":"poisonBeamMissile", "damage":["magic", "poison"], "angle":0.78,
						"special":{"poison":{"attack":{"chaoticMagic":0.65}, "time":5}}},
				   {"range":500, "missile":"poisonBeamMissile", "damage":["magic", "poison"], "angle":0.39,
						"special":{"poison":{"attack":{"chaoticMagic":0.65}, "time":5}}},
				   {"range":500, "missile":"poisonBeamMissile", "damage":["magic", "poison"], "angle":0,
						"special":{"poison":{"attack":{"chaoticMagic":0.65}, "time":5}}},
				   {"range":500, "missile":"poisonBeamMissile", "damage":["magic", "poison"], "angle":-0.39,
						"special":{"poison":{"attack":{"chaoticMagic":0.65}, "time":5}}},
				   {"range":500, "missile":"poisonBeamMissile", "damage":["magic", "poison"], "angle":-0.78,
						"special":{"poison":{"attack":{"chaoticMagic":0.65}, "time":5}}},
				   {"range":500, "missile":"poisonBeamMissile", "damage":["magic", "poison"], "angle":-1.17,
						"special":{"poison":{"attack":{"chaoticMagic":0.65}, "time":5}}}],
		"damage":["magic", "poison"],
		"anim":"magic", "scale":1.25,
		"attack":{
			"costPrimaryCharacteristic":{"mana":32}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.0625},
			"xpSkill":{"chaoticMagic":0.0625}
		},
		"equip":true
	},
	"poisonScepter":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"poisonScepter.atf"},
		"name":{"EN":"poison sceptre",
				"FR":"sceptre de poison",
				"JP":"毒の短杖"},
		"description":{"EN":"The poison sceptre is a magical one-handed weapon that poisons your target.",
					   "FR":"Le sceptre de poison est une arme magique à une main qui empoisonne la cible.",
					   "JP":"当たった標的を一時的に毒状態にする毒球を放つ、片手持ちの混沌魔術発動体。闇の祭壇で木材と薬草から製造できます。"},
		"bonus":{"attack":{"chaoticMagic":0.25}},
		"attackTime":0.3, "range":300, "missile":"poisonBallMissile",
		"special":{"poison":{"attack":{"chaoticMagic":2.5}, "time":5}},
		"damage":["magic", "poison"],
		"anim":"magic",
		"attack":{
			"costPrimaryCharacteristic":{"mana":5}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.5},
			"xpSkill":{"chaoticMagic":0.5}
		},
		"equip":true,
		"oneHand":true
	},
	"poisonStaff":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"poisonStaff.atf"},
		"name":{"EN":"poison staff",
				"FR":"bâton de poison",
				"JP":"毒の杖"},
		"description":{"EN":"The poison staff is a magical two-handed weapon that poisons your target.",
					   "FR":"Le bâton de poison est une arme magique à deux mains qui empoisonne la cible.",
					   "JP":"当たった標的を一時的に毒状態にする毒球を放つ、両手持ちの混沌魔術発動体。闇の祭壇で木材と薬草から製造できます。"},
		"bonus":{"attack":{"chaoticMagic":1.05}},
		"attackTime":1, "range":400, "missile":"poisonBeamMissile",
		"special":{"poison":{"attack":{"chaoticMagic":4.2}, "time":5}},
		"damage":["magic", "poison"],
		"anim":"magic", "scale":1.25,
		"attack":{
			"costPrimaryCharacteristic":{"mana":10}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":1},
			"xpSkill":{"chaoticMagic":1}
		},
		"equip":true
	},
	"snowStarStaff":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"snowStarStaff.atf"},
		"name":{"EN":"snow star staff",
				"FR":"bâton d'étoile des neiges",
				"JP":"雪星の杖"},
		"description":{"EN":"The snow star staff is a two-handed magical weapon which can throw six ice shards.",
					   "FR":"Le bâton d'étoile des neiges est une arme magique à deux mains qui projette 6 éclats de glace.",
					   "JP":"微誘導し、当たった標的の移動速度を一時的に下げる氷弾を前方6方向に放つ、両手持ちの妖術発動体。祈祷所で木材と水晶から製造できます。"},
		"bonus":{"attack":{"druidicMagic":0.33}},
		"attackTime":2, "range":400, "missile":"iceBolt",
		"damage":["magic", "ice"],
		"anim":"magic", "scale":1.25,
		"attacks":[{"range":400, "damage":["magic", "ice"], "missile":"iceBolt", "attackDY":-32, "attackDelay":1.2, "selfGuided":0.05, "penality":{"id":"slowdown", "time":5}},
				   {"range":400, "damage":["magic", "ice"], "missile":"iceBolt", "attackDY":32, "attackDelay":1.8, "selfGuided":0.05, "penality":{"id":"slowdown", "time":5}},
				   {"range":400, "damage":["magic", "ice"], "missile":"iceBolt", "attackDX":-28, "attackDY":-16, "attackDelay":1, "selfGuided":0.05, "penality":{"id":"slowdown", "time":5}},
				   {"range":400, "damage":["magic", "ice"], "missile":"iceBolt", "attackDX":28, "attackDY":-16, "attackDelay":1.4, "selfGuided":0.05, "penality":{"id":"slowdown", "time":5}},
				   {"range":400, "damage":["magic", "ice"], "missile":"iceBolt", "attackDX":-28, "attackDY":16, "attackDelay":2, "selfGuided":0.05, "penality":{"id":"slowdown", "time":5}},
				   {"range":400, "damage":["magic", "ice"], "missile":"iceBolt", "attackDX":28, "attackDY":16, "attackDelay":1.6, "selfGuided":0.05, "penality":{"id":"slowdown", "time":5}}],
		"attack":{
			"costPrimaryCharacteristic":{"mana":16}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.16},
			"xpSkill":{"druidicMagic":0.16}
		},
		"equip":true,
		"upgrade":[{
				"workshop":"shamanicAltar",
				"time":10,
				"gainItem":{"cristalStarStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":4, "crystals":3},
				"costPrimaryCharacteristic":{"stamina":19},
				"xpSecondaryCharacteristic":{"intelligence":19},
				"xpSkill":{"enchantment":19},
				"quantity":-10
		}]
	},
	"sunfireStaff":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"sunfireStaff.atf"},
		"name":{"EN":"sunfire staff",
				"FR":"bâton de feu solaire",
				"JP":"太陽炎の杖"},
		"description":{"EN":"The sunfire staff is a magical two-handed weapon which can throw fireballs in all directions.",
					   "FR":"Le bâton de feu solaire est une arme magique à deux mains qui envoie des boules de feu dans toutes les directions.",
					   "JP":"一定範囲を巻き込む火球を全方位に計16発放つ、両手持ちの火工魔術発動体。火の祭壇で木材と紙から製造できます。"},
		"bonus":{"attack":{"pyrotechnicMagic":0.65625}},
		"attackTime":4, "range":500, "missile":"fireball",
		"special":{"area":{"attack":{"pyrotechnicMagic":0.1640625}, "range":16, "effect":"miniExplosion"}},
		"damage":["magic", "fire"],
		"anim":"magic", "scale":1.25,
		"attacks":[{"range":500, "damage":["magic", "fire"], "missile":"fireball", "angle":-1.57, "special":{"area":{"attack":{"pyrotechnicMagic":0.1640625}, "range":16, "effect":"miniExplosion"}}},
				   {"range":500, "damage":["magic", "fire"], "missile":"fireball", "angle":-1.96, "special":{"area":{"attack":{"pyrotechnicMagic":0.1640625}, "range":16, "effect":"miniExplosion"}}},
				   {"range":500, "damage":["magic", "fire"], "missile":"fireball", "angle":-2.35, "special":{"area":{"attack":{"pyrotechnicMagic":0.1640625}, "range":16, "effect":"miniExplosion"}}},
				   {"range":500, "damage":["magic", "fire"], "missile":"fireball", "angle":-2.74, "special":{"area":{"attack":{"pyrotechnicMagic":0.1640625}, "range":16, "effect":"miniExplosion"}}},
				   {"range":500, "damage":["magic", "fire"], "missile":"fireball", "angle":-3.14, "special":{"area":{"attack":{"pyrotechnicMagic":0.1640625}, "range":16, "effect":"miniExplosion"}}},
				   {"range":500, "damage":["magic", "fire"], "missile":"fireball", "angle":2.74, "special":{"area":{"attack":{"pyrotechnicMagic":0.1640625}, "range":16, "effect":"miniExplosion"}}},
				   {"range":500, "damage":["magic", "fire"], "missile":"fireball", "angle":2.35, "special":{"area":{"attack":{"pyrotechnicMagic":0.1640625}, "range":16, "effect":"miniExplosion"}}},
				   {"range":500, "damage":["magic", "fire"], "missile":"fireball", "angle":1.96, "special":{"area":{"attack":{"pyrotechnicMagic":0.1640625}, "range":16, "effect":"miniExplosion"}}},
				   {"range":500, "damage":["magic", "fire"], "missile":"fireball", "angle":1.57, "special":{"area":{"attack":{"pyrotechnicMagic":0.1640625}, "range":16, "effect":"miniExplosion"}}},
				   {"range":500, "damage":["magic", "fire"], "missile":"fireball", "angle":1.17, "special":{"area":{"attack":{"pyrotechnicMagic":0.1640625}, "range":16, "effect":"miniExplosion"}}},
				   {"range":500, "damage":["magic", "fire"], "missile":"fireball", "angle":0.78, "special":{"area":{"attack":{"pyrotechnicMagic":0.1640625}, "range":16, "effect":"miniExplosion"}}},
				   {"range":500, "damage":["magic", "fire"], "missile":"fireball", "angle":0.39, "special":{"area":{"attack":{"pyrotechnicMagic":0.1640625}, "range":16, "effect":"miniExplosion"}}},
				   {"range":500, "damage":["magic", "fire"], "missile":"fireball", "angle":0, "special":{"area":{"attack":{"pyrotechnicMagic":0.1640625}, "range":16, "effect":"miniExplosion"}}},
				   {"range":500, "damage":["magic", "fire"], "missile":"fireball", "angle":-0.39, "special":{"area":{"attack":{"pyrotechnicMagic":0.1640625}, "range":16, "effect":"miniExplosion"}}},
				   {"range":500, "damage":["magic", "fire"], "missile":"fireball", "angle":-0.78, "special":{"area":{"attack":{"pyrotechnicMagic":0.1640625}, "range":16, "effect":"miniExplosion"}}},
				   {"range":500, "damage":["magic", "fire"], "missile":"fireball", "angle":-1.17, "special":{"area":{"attack":{"pyrotechnicMagic":0.1640625}, "range":16, "effect":"miniExplosion"}}}],
		"attack":{
			"costPrimaryCharacteristic":{"mana":32}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.0625},
			"xpSkill":{"pyrotechnicMagic":0.0625}
		},
		"equip":true,
		"upgrade":[{
				"workshop":"pyrotechnicAltar",
				"time":10.5,
				"gainItem":{"dragonBreathStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"paper":7},
				"costPrimaryCharacteristic":{"stamina":21},
				"xpSecondaryCharacteristic":{"intelligence":21},
				"xpSkill":{"enchantment":21},
				"quantity":-10
			},{
				"workshop":"pyrotechnicAltar",
				"time":10.5,
				"gainItem":{"cometStaff":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"paper":7},
				"costPrimaryCharacteristic":{"stamina":21},
				"xpSecondaryCharacteristic":{"intelligence":21},
				"xpSkill":{"enchantment":21},
				"quantity":-10
		}]
	},
	"thunderHammer":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"thunderHammer.atf"},
		"name":{"EN":"thunder hammer",
				"FR":"marteau de tonnerre",
				"JP":"雷の槌"},
		"description":{"EN":"The thunder hammer is a hammer which can throw lightning.",
					   "FR":"Le marteau de tonnerre est un marteau qui projette de la foudre.",
					   "JP":"雷を標的に直接投射する妖術発動体の機能も備えた、片手持ちの鈍器。祈祷所で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":3}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"addItems":[{
			"id":"thunderHammer",
			"category":"weapon",
			"bonus":{"attack":{"druidicMagic":0.9}},
			"attackTime":2, "range":50,
			"damage":["magic", "electricity"],
			"effect":"lightningImpact","effectLine":"lightningLine",
			"attack":{
				"costPrimaryCharacteristic":{"mana":4}
			},
			"anim":"slash",
			"xpAttack":{
				"xpSecondaryCharacteristic":{"intelligence":0.5},
				"xpSkill":{"druidicMagic":0.5}
			}}],
		"equip":true,
		"oneHand":true,
		"produce":[{
				"workshop":"shamanicAltar",
				"no":14,
				"time":12,
				"gainItem":{"thunderHammer":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":9, "castIron":5},
				"costPrimaryCharacteristic":{"stamina":24},
				"xpSecondaryCharacteristic":{"strength":24},
				"xpSkill":{"weaponsForging":24},
				"quantity":-12
		}]
	}
}