{
	"crosier":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"crosier.atf"},
		"name":{"EN":"crosier",
				"FR":"crosse",
				"JP":"十字架"},
		"description":{"EN":"The crosier projects 9 orbs of light that blind the enemies.",
					   "FR":"La crosse projette 9 orbes de lumière qui éblouissent les ennemis.",
					   "JP":"クロージャーは、敵を盲目にする9つの光球を投影します。"},
		"bonus":{"attack":{"repressiveMagic":0.25}},
		"attackTime":2, "range":450, "missile":"lightOrb",
		"damage":["magic", "light"],
		"anim":"magic", "scale":1.25,
		"attacks":[{"range":675, "damage":["magic", "light"], "missile":"lightOrb", "angle":3, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":675, "damage":["magic", "light"], "missile":"lightOrb", "angle":2.5, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":675, "damage":["magic", "light"], "missile":"lightOrb", "angle":2, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":675, "damage":["magic", "light"], "missile":"lightOrb", "angle":1.35, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":675, "damage":["magic", "light"], "missile":"lightOrb", "angle":0, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":675, "damage":["magic", "light"], "missile":"lightOrb", "angle":-1.35, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":675, "damage":["magic", "light"], "missile":"lightOrb", "angle":-2, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":675, "damage":["magic", "light"], "missile":"lightOrb", "angle":-2.5, "selfGuided":0.2, "penality":{"id":"blind", "time":5}},
				   {"range":675, "damage":["magic", "light"], "missile":"lightOrb", "angle":-3, "selfGuided":0.2, "penality":{"id":"blind", "time":5}}],
		"attack":{
			"costPrimaryCharacteristic":{"mana":9}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.12},
			"xpSkill":{"repressiveMagic":0.12}
		},
		"equip":true,
		"oneHand":true,
		"secret":true
	},
	"curtana":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"curtana.atf"},
		"name":{"EN":"Curtana",
				"FR":"Courte",
				"JP":"片手半剣"},
		"description":{"EN":"The curtana is a very high quality sword.",
					   "FR":"La Courte est une épée de très haute qualité.",
					   "JP":"クルタナは非常に高品質の剣です"},
		"bonus":{"attack":{"edgedWeapons":1.5}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1,
		"anim":"slash",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"edgedWeapons":0.5}
		},
		"equip":true,
		"oneHand":true,
		"secret":true
	},
	"kingScepter":{
		"type":"item",
		"age":"stoneAge",
		"category":"weapon",
		"picture":{"file":"kingScepter.atf"},
		"name":{"EN":"king sceptre",
				"FR":"scpetre royal",
				"JP":"王笏"},
		"description":{"EN":"The royal sceptre is the symbol of the sovereign.",
					   "FR":"Le sceptre royal est le symbole du souverain.",
					   "JP":"王室の王笏は主権の象徴です。"},
		"bonus":{"attack":{"bluntWeapons":2},
				 "conscription":{"jewellery":1}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"xpSkill":{
			"conscription":{
				"xpSecondaryCharacteristic":{"charisma":0.125},
				"xpSkill":{"jewellery":0.25}
				}
		},
		"equip":true,
		"oneHand":true,
		"secret":true
	},
	"mountPegasus":{
		"type":"item",
		"age":"goldenAge",
		"category":"mount",
		"picture":{"file":"mountPegasus.atf"},
		"name":{"EN":"Pegasus",
				"FR":"Pégase",
				"JP":"乗用馬"},
		"description":{"EN":"The Pegasus is a flying mount.",
					   "FR":"Le Pégase est une monture volante.",
					   "JP":"ペガサスは空飛ぶ山です。"},
		"bonus":{"health":{"riding":0.5}, "stamina":{"riding":0.5}, "mana":{"riding":0.5}},
		"flying":true, "autoWalk":true,
		"speed":10,
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"rapidity":0.04},
				"xpSkill":{"riding":0.33}
				},
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.04},
				"xpSkill":{"riding":0.33}
				},
			"mana":{
				"xpSecondaryCharacteristic":{"rapidity":0.04},
				"xpSkill":{"riding":0.33}
				}
		},
		"mount":{"width":96, "height":48, "y":-16, "stepY":1, "file":"mountPegasusD.png", "plans":[true, true, true, true]},
		"equip":true,
		"gain":{
			"equip":true
		},
		"unequip":{
			"quantity":-1,
			"create":[{"id":"pegasus"}]
		},
		"death":{
			"quantity":-1,
			"create":[{"id":"pegasus"}]
		},
		"secret":true
	},
	"rapier":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"rapier.atf"},
		"name":{"EN":"rapier",
				"FR":"rapière",
				"JP":"ジャマダハル"},
		"description":{"EN":"The rapier is a very elegant contact weapon.",
					   "FR":"La rapière est une arme de contact très élégante.",
					   "JP":"レピアは非常にエレガントな接触兵器です。"},
		"bonus":{"attack":{"lightWeapons":1}},
		"damage":["closeCombat", "piercing"],
		"attackTime":0.75,
		"anim":"thrust",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":0.5},
			"xpSkill":{"lightWeapons":0.5}
		},
		"equip":true,
		"oneHand":true,
		"secret":true
	},
	"royalFlair":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"royalFlair.atf"},
		"name":{"EN":"royal flair",
				"FR":"fléau royal",
				"JP":"ロイヤルフレア"},
		"description":{"EN":"The royal flail is a one-handed weapon which can hit three times.",
					   "FR":"Le fléau royal est une arme à une main qui frappe trois fois.",
					   "JP":"ロイヤルフレイルは片手武器で、3回攻撃できます。"},
		"bonus":{"attack":{"bluntWeapons":1}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.16},
			"xpSkill":{"bluntWeapons":0.16}
		},
		"addItems":[{
			"bonus":{"attack":{"bluntWeapons":1}},
			"damage":["closeCombat", "crushing"],
			"attackTime":1.5,
			"effect":"shock",
			"xpAttack":{
				"xpSecondaryCharacteristic":{"strength":0.16},
				"xpSkill":{"bluntWeapons":0.16}
			}},{
			"bonus":{"attack":{"bluntWeapons":1}},
			"damage":["closeCombat", "crushing"],
			"attackTime":1.5,
			"effect":"shock",
			"xpAttack":{
				"xpSecondaryCharacteristic":{"strength":0.16},
				"xpSkill":{"bluntWeapons":0.16}
			}}],
		"equip":true,
		"oneHand":true,
		"secret":true
	},
	"royalMantle":{
		"type":"item",
		"age":"stoneAge",
		"category":"back",
		"picture":{"file":"royalMantle.atf"},
		"name":{"EN":"royal mantle",
				"FR":"manteau royal",
				"JP":"ロイヤルマントル"},
		"description":{"EN":"The royal mantle increases your defence.",
					   "FR":"Le manteau royal augmente votre défense.",
					   "JP":"王室のマントルはあなたの防御力を高めます。"},
		"bonus":{"defense":{"cloaks":1}},
		"xpDefense":{
			"xpSecondaryCharacteristic":{"rapidity":0.25},
			"xpSkill":{"cloaks":0.5}
		},
		"appearance":{"cloakF":{"D":"royalMantleD.png"}},
		"equip":true,
		"secret":true
	},
	"sovereignsOrb":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"sovereignsOrb.atf"},
		"name":{"EN":"sovereign's orb",
				"FR":"orbe du souverain",
				"JP":"主権のオーブ"},
		"description":{"EN":"The sovereign's orb sends missiles of fire and ice.",
					   "FR":"L'orbe du souverain envoie des projectiles de feu et de glace.",
					   "JP":"主権のオーブは火と氷のミサイルを送ります。"},
		"bonus":{"attack":{"druidicMagic":0.33}},
		"attackTime":2, "range":400, "missile":"iceBolt",
		"damage":["magic", "ice"],
		"attacks":[{"range":400, "damage":["magic", "ice"], "missile":"iceBolt", "attackDX":16, "attackDY":32, "attackDelay":1.8, "selfGuided":0.05, "penality":{"id":"slowdown", "time":5}},
				   {"range":400, "damage":["magic", "ice"], "missile":"iceBolt", "attackDX":44, "attackDY":-16, "attackDelay":1.4, "selfGuided":0.05, "penality":{"id":"slowdown", "time":5}},
				   {"range":400, "damage":["magic", "ice"], "missile":"iceBolt", "attackDX":-12, "attackDY":-16, "attackDelay":1, "selfGuided":0.05, "penality":{"id":"slowdown", "time":5}}],
		"attack":{
			"costPrimaryCharacteristic":{"mana":16}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.16},
			"xpSkill":{"druidicMagic":0.16}
		},
		"addItems":[{
			"bonus":{"attack":{"pyrotechnicMagic":0.33}},
			"attackTime":2, "range":400, "missile":"fireball",
			"damage":["magic", "fire"],
			"attacks":[{"range":400, "damage":["magic", "fire"], "missile":"fireball", "attackDY":-32, "attackDelay":1.2},
					   {"range":400, "damage":["magic", "fire"], "missile":"fireball", "attackDX":-28, "attackDY":16, "attackDelay":2},
					   {"range":400, "damage":["magic", "fire"], "missile":"fireball", "attackDX":28, "attackDY":16, "attackDelay":1.6}],
			"xpAttack":{
				"xpSecondaryCharacteristic":{"intelligence":0.16},
				"xpSkill":{"pyrotechnicMagic":0.16}
			}}],
		"equip":true,
		"oneHand":true,
		"secret":true
	}
}