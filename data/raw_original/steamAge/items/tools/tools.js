{
	"adjustableWrench":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"adjustableWrench.atf"},
		"name":{"EN":"adjustable wrench",
				"FR":"clé à molette",
				"JP":"自在レンチ"},
		"description":{"EN":"The adjustable wrench is a tool used in mechanics.",
					   "FR":"La clé à molette est un outil utilisé en mécanique.",
					   "JP":"片手持ちのゴーレム工学補助道具。鈍器としても使用可能です。鉄製品工房で鋼鉄から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":1.54},
				 "golemology":{"tools":0.5}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"xpSkill":{
			"golemology":{
				"xpSecondaryCharacteristic":{"intelligence":0.25},
				"xpSkill":{"tools":0.5}
				}
		},
		"tag":["tool"],
		"equip":true,
		"oneHand":true
	},
	"backpack":{
		"type":"item",
		"age":"ironAge",
		"category":"back",
		"picture":{"file":"backpack.atf"},
		"name":{"EN":"backpack",
				"FR":"sac à dos",
				"JP":"背嚢"},
		"description":{"EN":"The backpack allows you to carry more resources.",
					   "FR":"Le sac à dos vous permet de transporter plus de ressources.",
					   "JP":"背負い式の道具袋。着用者の持久力を向上させ、資源の所持最大数をそれぞれ50個増加させます。革工房でなめし革から製造できます。"},
		"bonus":{"stamina":{"tools":0.25}},
		"resourcesMaxQuantity":50,
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"rapidity":0.125},
				"xpSkill":{"tools":0.25}
				}
		},
		"equip":true
	},
	"ballPeanHammer":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"ballPeanHammer.atf"},
		"name":{"EN":"ball-peen hammer",
				"FR":"marteau à panne ronde",
				"JP":"丸頭ハンマ"},
		"description":{"EN":"The ball-peen hammer is used in blacksmithing and construction.",
					   "FR":"Le marteau à panne ronde est utilisé pour la forge et la construction.",
					   "JP":"片手持ちの武器鎧鍛冶及び建築・修理補助道具。鈍器としても使用可能です。鉄製品工房で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":1.09},
				 "weaponsForging":{"tools":1},
				 "crossbowsForging":{"tools":1},
				 "armorsForging":{"tools":1},
				 "building":{"tools":0.5},
				 "repairing":{"tools":0.5}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"thrust",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"xpSkill":{
			"weaponsForging":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				},
			"crossbowsForging":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				},
			"armorsForging":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				},
			"building":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				},
			"repairing":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				}
		},
		"tag":["tool"],
		"equip":true,
		"oneHand":true
	},
	"billhook":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"billhook.atf"},
		"name":{"EN":"billhook",
				"FR":"serpe",
				"JP":"鉈鎌"},
		"description":{"EN":"The billhook is a tool used to harvest fields.",
					   "FR":"La serpe est un outil utilisé pour moissonner les champs.",
					   "JP":"片手持ちの収獲補助道具。小型武器としても使用可能です。鉄製品工房で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"lightWeapons":0.26},
				 "harvesting":{"tools":0.25}},
		"damage":["closeCombat", "slashing"],
		"attackTime":0.75,
		"anim":"slash",
		"effect":"axe",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":0.5},
			"xpSkill":{"lightWeapons":0.5}
		},
		"xpSkill":{
			"harvesting":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				}
		},
		"tag":["tool"],
		"equip":true,
		"oneHand":true,
		"upgrade":[{
				"workshop":"ironworksWorkshop",
				"time":12,
				"gainItem":{"scythe":1},
				"bonusTimeSkill":"weaponsForging",
				"costRessource":{"wood":11, "castIron":2},
				"costPrimaryCharacteristic":{"stamina":17},
				"xpSecondaryCharacteristic":{"strength":17},
				"xpSkill":{"weaponsForging":17},
				"quantity":-6
		}]
	},
	"cauldron":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"cauldron.atf"},
		"name":{"EN":"cauldron",
				"FR":"chaudron",
				"JP":"大釜"},
		"description":{"EN":"The cauldron is used to melt metal.",
					   "FR":"Le chaudron aide à la fonte des métaux.",
					   "JP":"大釜は金属の溶解を助けます。"},
		"bonus":{"attack":{"bluntWeapons":1},
				 "metalSmelting":{"tools":0.5}},
		"resourcesMaxQuantity":25,
		"damage":["closeCombat", "slashing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"xpSkill":{
			"metalSmelting":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"tools":0.25}
				}
		},
		"tag":["tool"],
		"equip":true
	},
	"chainSaw":{
		"type":"item",
		"age":"steamAge",
		"category":"weapon",
		"picture":{"file":"chainSaw.atf"},
		"name":{"EN":"chainsaw",
				"FR":"tronçonneuse",
				"JP":"チェーンソー"},
		"description":{"EN":"The chainsaw is the best tool to chop trees.",
					   "FR":"La tronçonneuse est le meilleur outil pour couper les arbres.",
					   "JP":"片手持ちの採伐補助道具。刀剣としても使用可能です。鉄製品工房で鋼鉄から製造できます。"},
		"bonus":{"attack":{"edgedWeapons":0.28},
				 "woodcutting":{"tools":0.5}},
		"damage":["closeCombat", "slashing"],
		"attackTime":0.5,
		"anim":"thrust",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"edgedWeapons":0.5}
		},
		"xpSkill":{
			"woodcutting":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"tools":0.25}
				}
		},
		"tag":["tool"],
		"equip":true,
		"oneHand":true
	},
	"chopper":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"chopper.atf"},
		"name":{"EN":"chopper",
				"FR":"hachoir",
				"JP":"肉切り包丁"},
		"description":{"EN":"The chopper is a tool used to cut meat.",
					   "FR":"Le hachoir est un outil utilisé pour découper la viande.",
					   "JP":"片手持ちの精肉補助道具。斧としても使用可能です。鉄製品工房で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"axes":0.7},
				 "butchery":{"tools":0.25}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1.25,
		"anim":"slash",
		"effect":"axe",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"axes":0.5}
		},
		"xpSkill":{
			"butchery":{
				"xpSecondaryCharacteristic":{"endurance":0.25},
				"xpSkill":{"tools":0.5}
				}
		},
		"tag":["tool"],
		"equip":true,
		"oneHand":true
	},
	"fork":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"fork.atf"},
		"name":{"EN":"fork",
				"FR":"fourche",
				"JP":"農業用フォーク"},
		"description":{"EN":"The fork is a two-handed tool used to move straw.",
					   "FR":"La fourche est un outil à deux mains utilisé pour transporter de la paille.",
					   "JP":"両手持ちの収獲補助道具。長柄武器としても使用可能です。鉄製品工房で木材から製造できます。"},
		"bonus":{"attack":{"polearms":2.72},
				 "harvesting":{"tools":0.5}},
		"damage":["closeCombat", "piercing"],
		"attackTime":2, "range":24,
		"anim":"thrust", "scale":1.25,
		"effect":"missileEffect",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"polearms":1}
		},
		"xpSkill":{
			"harvesting":{
				"xpSecondaryCharacteristic":{"rapidity":0.5},
				"xpSkill":{"tools":1}
				}
		},
		"tag":["tool"],
		"equip":true
	},
	"fryingPan":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"fryingPan.atf"},
		"name":{"EN":"frying pan",
				"FR":"poêle à frire",
				"JP":"フライパン"},
		"description":{"EN":"The frying pan is a tool used to cook.",
					   "FR":"La poêle à frire est un outil utilisé en cuisine.",
					   "JP":"片手持ちの製パン補助道具。鈍器としても使用可能です。鉄製品工房で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":1.16},
				 "bakery":{"tools":0.25}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"xpSkill":{
			"bakery":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				}
		},
		"tag":["tool"],
		"equip":true,
		"oneHand":true
	},
	"mallet":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"mallet.atf"},
		"name":{"EN":"mallet",
				"FR":"maillet",
				"JP":"木槌"},
		"description":{"EN":"The mallet is a tool used in construction.",
					   "FR":"Le maillet est un outil utilisé pour construire des bâtiments.",
					   "JP":"片手持ちの建築・修理補助道具。鈍器としても使用可能です。鉄製品工房で木材から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":0.55},
				 "building":{"tools":0.25},
				 "repairing":{"tools":0.25}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.25,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"xpSkill":{
			"building":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				},
			"repairing":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				}
		},
		"tag":["tool"],
		"equip":true,
		"oneHand":true
	},
	"pan":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"pan.atf"},
		"name":{"EN":"pan",
				"FR":"batée",
				"JP":"パン"},
		"description":{"EN":"The pan is a bowl used to separate minerals.",
					   "FR":"La batée est une cuvette qui permet de séparer les métaux.",
					   "JP":"パンは、ミネラルを分離するために使用されるボウルです。"},
		"bonus":{"attack":{"bluntWeapons":0.8},
				 "mining":{"tools":1}},
		"damage":["closeCombat", "piercing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"lightWeapons":1}
		},
		"xpSkill":{
			"mining":{
				"xpSecondaryCharacteristic":{"rapidity":0.5},
				"xpSkill":{"tools":1}
				}
		},
		"tag":["tool"],
		"equip":true
	},
	"pickaxe":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"pickaxe.atf"},
		"name":{"EN":"pickaxe",
				"FR":"pioche",
				"JP":"つるはし"},
		"description":{"EN":"The pickaxe is a tool used to extract stone and minerals.",
					   "FR":"La pioche est un outil utilisé pour extraire de la pierre et des minerais.",
					   "JP":"片手持ちの石切・採鉱補助道具。鈍器としても使用可能です。鉄製品工房で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":0.92},
				 "stonecutting":{"tools":0.25},
				 "mining":{"tools":0.25}},
		"damage":["closeCombat", "piercing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"lightWeapons":0.5}
		},
		"xpSkill":{
			"stonecutting":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				},
			"mining":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				}
		},
		"tag":["tool"],
		"equip":true,
		"oneHand":true
	},
	"rollingPin":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"rollingPin.atf"},
		"name":{"EN":"rolling pin",
				"FR":"rouleau à pâtisserie",
				"JP":"のし棒"},
		"description":{"EN":"The rolling pin is a tool used to prepare cake.",
					   "FR":"Le rouleau à pâtisserie est un outil utilisé pour préparer des gâteaux.",
					   "JP":"片手持ちの製パン補助道具。鈍器としても使用可能です。鉄製品工房で木材から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":0.55},
				 "bakery":{"tools":0.25}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.25,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"xpSkill":{
			"bakery":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				}
		},
		"tag":["tool"],
		"equip":true,
		"oneHand":true
	},
	"scissors":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"scissors.atf"},
		"name":{"EN":"scissors",
				"FR":"ciseaux",
				"JP":"はさみ"},
		"description":{"EN":"The scissors are a tool used to cut fabric.",
					   "FR":"Les ciseaux sont un outil utilisé pour découper du tissu.",
					   "JP":"片手持ちの洋裁・靴作り補助道具。小型武器としても使用可能です。鉄製品工房で鋳鉄から製造できます。"},
		"bonus":{"attack":{"lightWeapons":0.26},
				 "sewing":{"tools":0.25},
				 "shoemaking":{"tools":0.1}},
		"damage":["closeCombat", "slashing"],
		"attackTime":0.75,
		"anim":"thrust",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":0.5},
			"xpSkill":{"lightWeapons":0.5}
		},
		"xpSkill":{
			"sewing":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				},
			"shoemaking":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				}
		},
		"tag":["tool"],
		"equip":true,
		"oneHand":true
	},
	"scythe":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"scythe.atf"},
		"name":{"EN":"scythe",
				"FR":"faux",
				"JP":"大鎌"},
		"description":{"EN":"The scythe is a two-handed tool used to harvest fields.",
					   "FR":"La faux est un outil à deux mains utilisé pour moissonner les champs.",
					   "JP":"両手持ちの収獲補助道具。長柄武器としても使用可能です。鉄製品工房で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"polearms":3.22},
				 "harvesting":{"tools":1}},
		"damage":["closeCombat", "slashing"],
		"attackTime":2,
		"anim":"slash", "scale":1.25,
		"effect":"axe",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"polearms":1}
		},
		"xpSkill":{
			"harvesting":{
				"xpSecondaryCharacteristic":{"rapidity":0.5},
				"xpSkill":{"tools":1}
				}
		},
		"tag":["tool"],
		"equip":true,
		"upgrade":[{
				"workshop":"blackMagicAltar",
				"time":12,
				"gainItem":{"scytheOfSouls":1},
				"bonusTimeSkill":"enchantment",
				"costRessource":{"wood":6, "castIron":6},
				"costPrimaryCharacteristic":{"stamina":24},
				"xpSecondaryCharacteristic":{"strength":24},
				"xpSkill":{"weaponsForging":24},
				"quantity":-12
		}]
	},
	"twoHandSaw":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"twoHandSaw.atf"},
		"name":{"EN":"two-handed saw",
				"FR":"scie à deux mains",
				"JP":"長鋸"},
		"description":{"EN":"The two-handed saw is a tool used to cut down trees.",
					   "FR":"La scie à deux mains est un outil utilisé pour abattre des arbres.",
					   "JP":"両手持ちの採伐・製材補助道具。斧としても使用可能です。鉄製品工房で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"axes":1.4},
				 "woodcutting":{"tools":0.5},
				 "sawing":{"tools":0.25}},
		"damage":["closeCombat", "slashing"],
		"attackTime":2,
		"anim":"thrust", "scale":1.25,
		"effect":"axe",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"axes":1}
		},
		"xpSkill":{
			"woodcutting":{
				"xpSecondaryCharacteristic":{"rapidity":0.5},
				"xpSkill":{"tools":1}
				},
			"sawing":{
				"xpSecondaryCharacteristic":{"rapidity":0.5},
				"xpSkill":{"tools":1}
				}
		},
		"tag":["tool"],
		"equip":true
	},
	"wickerBasket":{
		"type":"item",
		"age":"stoneAge",
		"category":"weapon",
		"picture":{"file":"wickerBasket.atf"},
		"name":{"EN":"wicker basket",
				"FR":"panier en osier",
				"JP":"編み籠"},
		"description":{"EN":"The wicker basket is a tool used to gather plants.",
					   "FR":"Le panier en osier est un outil utilisé pour ramasser des plantes.",
					   "JP":"両手持ちの採集・収獲補助道具。資源の所持最大数をそれぞれ25個増加させるほか、鈍器としても使用可能です。風車小屋で小麦から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":0.3},
				 "picking":{"tools":0.25},
				 "harvesting":{"tools":0.125}},
		"resourcesMaxQuantity":25,
		"damage":["closeCombat", "crushing"],
		"attackTime":1,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"xpSkill":{
			"picking":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				},
			"harvesting":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				}
		},
		"tag":["tool"],
		"equip":true,
		"produce":[{
				"workshop":"windmill",
				"no":2.5,
				"time":4,
				"gainItem":{"wickerBasket":1},
				"bonusTimeSkill":"toolsForging",
				"costRessource":{"grain":4},
				"costPrimaryCharacteristic":{"stamina":8},
				"xpSecondaryCharacteristic":{"rapidity":8},
				"xpSkill":{"toolsForging":8},
				"quantity":-1
		}]
	},
	"woodenBucket":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"woodenBucket.atf"},
		"name":{"EN":"wooden bucket",
				"FR":"seau en bois",
				"JP":"木桶"},
		"description":{"EN":"The wooden bucket is a tool used to draw water.",
					   "FR":"Le seau en bois est un outil utilisé pour puiser de l'eau.",
					   "JP":"両手持ちの採集・収獲補助道具。資源の所持最大数をそれぞれ30個増加させるほか、鈍器としても使用可能です。鋸台で厚板から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":0.36},
				 "picking":{"tools":0.30},
				 "harvesting":{"tools":0.15}},
		"resourcesMaxQuantity":30,
		"damage":["closeCombat", "crushing"],
		"attackTime":1,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"xpSkill":{
			"picking":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				},
			"harvesting":{
				"xpSecondaryCharacteristic":{"rapidity":0.25},
				"xpSkill":{"tools":0.5}
				}
		},
		"tag":["tool"],
		"equip":true,
		"produce":[{
				"workshop":"tableSaw",
				"no":3.5,
				"time":2,
				"gainItem":{"woodenBucket":1},
				"bonusTimeSkill":"toolsForging",
				"costRessource":{"plank":4},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"rapidity":4},
				"xpSkill":{"toolsForging":4},
				"quantity":-4
		}]
	}
}