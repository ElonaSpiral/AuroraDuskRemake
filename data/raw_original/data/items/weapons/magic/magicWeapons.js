{
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
		"equip":true
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
					   "JP":"火弾を放つ、片手持ちの火工魔術発動体。火の祭壇で木材と羊皮紙から製造できます。"},
		"bonus":{"attack":{"pyrotechnicMagic":2.1}},
		"attackTime":4, "range":300, "missile":"fireshot",
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
		"oneHand":true
	},
	"iceScepter":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"iceScepter.atf"},
		"name":{"EN":"ice sceptre",
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
		"oneHand":true
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
		"attackTime":2, "range":250,
		"damage":["magic", "electricity"],
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
		"oneHand":true
	},
	"lightningStaff":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"lightningStaff.atf"},
		"name":{"EN":"lightning staff",
				"FR":"bâton de foudre",
				"JP":"雷の杖"},
		"description":{"EN":"The lightning staff is a magical two-handed weapon made from wood and iron.",
					   "FR":"Le bâton de foudre est une arme magique à deux mains fabriquée avec du bois et de la fonte.",
					   "JP":"雷を標的に直接投射する、両手持ちの妖術発動体。祈祷所で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"druidicMagic":1.6}},
		"attackTime":2, "range":250,
		"damage":["magic", "electricity"],
		"anim":"magic", "scale":1.25,
		"effect":"lightningImpact","effectLine":"lightningLine",
		"attack":{
			"costPrimaryCharacteristic":{"mana":10}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":1},
			"xpSkill":{"druidicMagic":1}
		},
		"equip":true
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
		"bonus":{"attack":{"repressiveMagic":0.15}},
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
		"oneHand":true
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
		"bonus":{"attack":{"repressiveMagic":0.33}},
		"attackTime":2, "range":400, "missile":"lightOrb",
		"attacks":[{"range":600, "missile":"lightOrb", "damage":["magic", "light"], "angle":1.57, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":600, "missile":"lightOrb", "damage":["magic", "light"], "angle":0, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":600, "missile":"lightOrb", "damage":["magic", "light"], "angle":-1.57, "selfGuided":0.2, "penality":{"id":"blind", "time":5}}],
		"damage":["magic", "light"],
		"anim":"magic", "scale":1.25,
		"attack":{
			"costPrimaryCharacteristic":{"mana":3}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.33},
			"xpSkill":{"repressiveMagic":0.33}
		},
		"equip":true
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
					   "JP":"火弾を前方3方向に放つ、片手持ちの火工魔術発動体。火の祭壇で木材と羊皮紙から製造できます。"},
		"bonus":{"attack":{"pyrotechnicMagic":0.93}},
		"attackTime":4, "range":350, "missile":"fireshot",
		"attacks":[{"range":350, "missile":"fireshot", "damage":["magic", "fire"], "angle":0.2},
				   {"range":350, "missile":"fireshot", "damage":["magic", "fire"], "angle":0},
				   {"range":350, "missile":"fireshot", "damage":["magic", "fire"], "angle":-0.2}],
		"damage":["magic", "fire"],
		"anim":"magic",
		"attack":{
			"costPrimaryCharacteristic":{"mana":12}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.17},
			"xpSkill":{"pyrotechnicMagic":0.17}
		},
		"equip":true,
		"oneHand":true
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
		"bonus":{"attack":{"druidicMagic":0.5}},
		"attackTime":4, "range":400, "missile":"iceBolt",
		"attacks":[{"range":400, "missile":"iceBolt", "damage":["magic", "ice"], "attackDY":-32, "attackDelay":1.2, "selfGuided":0.05, "penality":{"id":"slowdown", "time":5}},
				   {"range":400, "missile":"iceBolt", "damage":["magic", "ice"], "attackDY":32, "attackDelay":1.8, "selfGuided":0.05, "penality":{"id":"slowdown", "time":5}},
				   {"range":400, "missile":"iceBolt", "damage":["magic", "ice"], "attackDX":-28, "attackDY":-16, "attackDelay":1, "selfGuided":0.05, "penality":{"id":"slowdown", "time":5}},
				   {"range":400, "missile":"iceBolt", "damage":["magic", "ice"], "attackDX":28, "attackDY":-16, "attackDelay":1.4, "selfGuided":0.05, "penality":{"id":"slowdown", "time":5}},
				   {"range":400, "missile":"iceBolt", "damage":["magic", "ice"], "attackDX":-28, "attackDY":16, "attackDelay":2, "selfGuided":0.05, "penality":{"id":"slowdown", "time":5}},
				   {"range":400, "missile":"iceBolt", "damage":["magic", "ice"], "attackDX":28, "attackDY":16, "attackDelay":1.6, "selfGuided":0.05, "penality":{"id":"slowdown", "time":5}}],
		"damage":["magic", "ice"],
		"anim":"magic", "scale":1.25,
		"attack":{
			"costPrimaryCharacteristic":{"mana":16}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.16},
			"xpSkill":{"druidicMagic":0.16}
		},
		"equip":true
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
					   "JP":"一定範囲を巻き込む火球を全方位に計16発放つ、両手持ちの火工魔術発動体。火の祭壇で木材と羊皮紙から製造できます。"},
		"bonus":{"attack":{"pyrotechnicMagic":0.65625}},
		"attackTime":4, "range":500, "missile":"fireball",
		"attacks":[{"range":500, "missile":"fireball", "damage":["magic", "fire"], "angle":-1.57,
						"special":{"area":{"attack":{"pyrotechnicMagic":0.33}, "range":32, "effect":"miniExplosion"}}},
				   {"range":500, "missile":"fireball", "damage":["magic", "fire"], "angle":-1.96,
						"special":{"area":{"attack":{"pyrotechnicMagic":0.33}, "range":32, "effect":"miniExplosion"}}},
				   {"range":500, "missile":"fireball", "damage":["magic", "fire"], "angle":-2.35,
						"special":{"area":{"attack":{"pyrotechnicMagic":0.33}, "range":32, "effect":"miniExplosion"}}},
				   {"range":500, "missile":"fireball", "damage":["magic", "fire"], "angle":-2.74,
						"special":{"area":{"attack":{"pyrotechnicMagic":0.33}, "range":32, "effect":"miniExplosion"}}},
				   {"range":500, "missile":"fireball", "damage":["magic", "fire"], "angle":-3.14,
						"special":{"area":{"attack":{"pyrotechnicMagic":0.33}, "range":32, "effect":"miniExplosion"}}},
				   {"range":500, "missile":"fireball", "damage":["magic", "fire"], "angle":2.74,
						"special":{"area":{"attack":{"pyrotechnicMagic":0.33}, "range":32, "effect":"miniExplosion"}}},
				   {"range":500, "missile":"fireball", "damage":["magic", "fire"], "angle":2.35,
						"special":{"area":{"attack":{"pyrotechnicMagic":0.33}, "range":32, "effect":"miniExplosion"}}},
				   {"range":500, "missile":"fireball", "damage":["magic", "fire"], "angle":1.96,
						"special":{"area":{"attack":{"pyrotechnicMagic":0.33}, "range":32, "effect":"miniExplosion"}}},
				   {"range":500, "missile":"fireball", "damage":["magic", "fire"], "angle":1.57,
						"special":{"area":{"attack":{"pyrotechnicMagic":0.33}, "range":32, "effect":"miniExplosion"}}},
				   {"range":500, "missile":"fireball", "damage":["magic", "fire"], "angle":1.17,
						"special":{"area":{"attack":{"pyrotechnicMagic":0.33}, "range":32, "effect":"miniExplosion"}}},
				   {"range":500, "missile":"fireball", "damage":["magic", "fire"], "angle":0.78,
						"special":{"area":{"attack":{"pyrotechnicMagic":0.33}, "range":32, "effect":"miniExplosion"}}},
				   {"range":500, "missile":"fireball", "damage":["magic", "fire"], "angle":0.39,
						"special":{"area":{"attack":{"pyrotechnicMagic":0.33}, "range":32, "effect":"miniExplosion"}}},
				   {"range":500, "missile":"fireball", "damage":["magic", "fire"], "angle":0,
						"special":{"area":{"attack":{"pyrotechnicMagic":0.33}, "range":32, "effect":"miniExplosion"}}},
				   {"range":500, "missile":"fireball", "damage":["magic", "fire"], "angle":-0.39,
						"special":{"area":{"attack":{"pyrotechnicMagic":0.33}, "range":32, "effect":"miniExplosion"}}},
				   {"range":500, "missile":"fireball", "damage":["magic", "fire"], "angle":-0.78,
						"special":{"area":{"attack":{"pyrotechnicMagic":0.33}, "range":32, "effect":"miniExplosion"}}},
				   {"range":500, "missile":"fireball", "damage":["magic", "fire"], "angle":-1.17,
						"special":{"area":{"attack":{"pyrotechnicMagic":0.33}, "range":32, "effect":"miniExplosion"}}}],
		"damage":["magic", "fire"],
		"anim":"magic", "scale":1.25,
		"attack":{
			"costPrimaryCharacteristic":{"mana":32}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.0625},
			"xpSkill":{"pyrotechnicMagic":0.0625}
		},
		"equip":true
	}
}