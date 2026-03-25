{
	"anvilHammer":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"anvilHammer.atf"},
		"name":{"EN":"anvil hammer",
				"FR":"marteau-enclume",
				"JP":"金床槌"},
		"description":{"EN":"The anvil hammer is a very heavy two-handed melee weapon. Its manufacturing requires an entire anvil.",
					   "FR":"Le marteau-enclume est une très lourde arme contondante à deux mains. Sa fabrication nécessite une enclume entière.",
					   "JP":"非常に重量のある、両手持ちの鈍器。石切や採鉱補助道具としても利用可能です。金床で木材から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":3.5},
				 "stonecutting":{"bluntWeapons":0.25},
				 "mining":{"bluntWeapons":0.25}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash", "scale":1.25,
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"bluntWeapons":1}
		},
		"xpSkill":{
			"stonecutting":{
				"xpSecondaryCharacteristic":{"strength":0.25},
				"xpSkill":{"bluntWeapons":0.5}
				},
			"mining":{
				"xpSecondaryCharacteristic":{"strength":0.25},
				"xpSkill":{"bluntWeapons":0.5}
				}
		},
		"equip":true
	},
	"bastardSword":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"bastardSword.atf"},
		"name":{"EN":"bastard sword",
				"FR":"épée bâtarde",
				"JP":"片手半剣"},
		"description":{"EN":"The bastard sword is a medieval one-handed melee weapon made from cast iron.",
					   "FR":"L'épée bâtarde est une arme de contact médiévale à une main fabriquée avec des lingots de fonte.",
					   "JP":"中世的な片手持ちの刀剣。金床で鋳鉄から製造できます。"},
		"bonus":{"attack":{"edgedWeapons":1}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1,
		"anim":"slash",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"edgedWeapons":0.5}
		},
		"equip":true,
		"oneHand":true
	},
	"battleAxe":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"battleAxe.atf"},
		"name":{"EN":"battle axe",
				"FR":"hache de bataille",
				"JP":"バトルアックス"},
		"description":{"EN":"The battle axe is a medieval one-handed melee weapon made from cast iron and wood.",
					   "FR":"La hache de bataille est une arme de contact médiévale à une main fabriquée en fonte et en bois.",
					   "JP":"中世的な片手持ちの斧。伐採補助道具としても利用可能です。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"axes":0.875},
				 "woodcutting":{"axes":0.125}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1.25,
		"anim":"slash",
		"effect":"axe",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"axes":0.5}
		},
		"xpSkill":{
			"woodcutting":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"axes":0.25}
				}
		},
		"equip":true,
		"oneHand":true
	},
	"broadSword":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"broadSword.atf"},
		"name":{"EN":"broad sword",
				"FR":"espadon",
				"JP":"ブロードソード"},
		"description":{"EN":"The broad sword is a medieval two-handed melee weapon made from cast iron.",
					   "FR":"L'espadon est une arme de contact médiévale à deux mains fabriquée avec des lingots de fonte.",
					   "JP":"中世的な両手持ちの刀剣。金床で鋳鉄から製造できます。"},
		"bonus":{"attack":{"edgedWeapons":2}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1,
		"anim":"slash", "scale":1.25,
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"edgedWeapons":1}
		},
		"equip":true
	},
	"club":{
		"type":"item",
		"age":"woodenAge",
		"category":"weapon",
		"picture":{"file":"club.atf"},
		"name":{"EN":"club",
				"FR":"gourdin",
				"JP":"クラブ"},
		"description":{"EN":"The club is a primitive one-handed melee weapon made from wood.",
					   "FR":"Le gourdin est une arme de contact primitive à une main fabriquée en bois.",
					   "JP":"原始的な片手持ちの鈍器。野営地で木材から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":0.55}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"equip":true,
		"oneHand":true,
		"enhance":[{
			"skill":"weaponsForging",
			"workshop":"huntingCamp",
			"time":2.5,
			"gainItem":{"club":1},
			"bonusTimeSkill":"woodcutting",
			"costRessource":{"wood":5},
			"costPrimaryCharacteristic":{"stamina":5},
			"xpSecondaryCharacteristic":{"strength":5},
			"xpSkill":{"woodcutting":5},
			"quantity":-5
		}]
	},
	"cutlass":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"cutlass.atf"},
		"name":{"EN":"cutlass",
				"FR":"poignard",
				"JP":"カットラス"},
		"description":{"EN":"The cutlass is a medieval one-handed melee weapon made from cast iron.",
					   "FR":"Le poignard est une arme de contact médiévale à une main fabriquée avec des lingots de fonte.",
					   "JP":"中世的な片手持ちの小型武器。金床で鋳鉄から製造できます。"},
		"bonus":{"attack":{"lightWeapons":0.475}},
		"damage":["closeCombat", "slashing"],
		"attackTime":0.75,
		"anim":"slash",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":0.5},
			"xpSkill":{"lightWeapons":0.5}
		},
		"equip":true,
		"oneHand":true
	},
	"dagger":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"dagger.atf"},
		"name":{"EN":"dagger",
				"FR":"dague",
				"JP":"ダガー"},
		"description":{"EN":"The dagger is a medieval one-handed melee weapon made from cast iron.",
					   "FR":"La dague est une arme de contact médiévale à une main fabriquée avec des lingots de fonte.",
					   "JP":"中世的な片手持ちの小型武器。金床で鋳鉄から製造できます。"},
		"bonus":{"attack":{"lightWeapons":0.325}},
		"damage":["closeCombat", "slashing"],
		"attackTime":0.75,
		"anim":"slash",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":0.5},
			"xpSkill":{"lightWeapons":0.5}
		},
		"equip":true,
		"oneHand":true
	},
	"flail":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"flail.atf"},
		"name":{"EN":"flail",
				"FR":"fléau d'armes",
				"JP":"フレイル"},
		"description":{"EN":"The flail is a medieval one-handed melee weapon made from wood and cast iron.",
					   "FR":"Le fléau d'armes est une arme de contact médiévale à une main fabriquée avec du bois et de la fonte.",
					   "JP":"中世的な片手持ちの鈍器。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":1.75}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"equip":true,
		"oneHand":true
	},
	"halberd":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"halberd.atf"},
		"name":{"EN":"halberd",
				"FR":"hallebarde",
				"JP":"ハルバード"},
		"description":{"EN":"The halberd is a medieval two-handed melee weapon made from wood and cast iron.",
					   "FR":"La hallebarde est une arme de contact médiévale à deux mains fabriquée avec du bois et de la fonte.",
					   "JP":"中世的な両手持ちの長柄武器。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"polearms":5}},
		"damage":["closeCombat", "slashing"],
		"attackTime":2, "range":24,
		"anim":"slash", "scale":1.25,
		"effect":"axe",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"polearms":1}
		},
		"equip":true
	},
	"longSword":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"longSword.atf"},
		"name":{"EN":"long sword",
				"FR":"épée longue",
				"JP":"ロングソード"},
		"description":{"EN":"The long sword is a medieval one-handed melee weapon made from cast iron.",
					   "FR":"L'épée longue est une arme de contact médiévale à une main fabriquée avec des lingots de fonte.",
					   "JP":"中世的な片手持ちの刀剣。金床で鋳鉄から製造できます。"},
		"bonus":{"attack":{"edgedWeapons":0.8}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1,
		"anim":"slash",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"edgedWeapons":0.5}
		},
		"equip":true,
		"oneHand":true
	},
	"mace":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"mace.atf"},
		"name":{"EN":"mace",
				"FR":"masse d'armes",
				"JP":"メイス"},
		"description":{"EN":"The mace is a medieval one-handed melee weapon made from wood and cast iron.",
					   "FR":"La masse d'armes est une arme de contact médiévale à une main fabriquée avec du bois et de la fonte.",
					   "JP":"中世的な片手持ちの鈍器。石切や採鉱補助道具としても利用可能です。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":1.15},
				 "stonecutting":{"bluntWeapons":0.125},
				 "mining":{"bluntWeapons":0.125}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"xpSkill":{
			"stonecutting":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"bluntWeapons":0.25}
				},
			"mining":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"bluntWeapons":0.25}
				}
		},
		"equip":true,
		"oneHand":true
	},
	"pike":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"pike.atf"},
		"name":{"EN":"pike",
				"FR":"pique",
				"JP":"パイク"},
		"description":{"EN":"The pike is a medieval two-handed melee weapon made from wood and cast iron.",
					   "FR":"Le pique est une arme de contact médiévale à deux mains fabriquée avec du bois et de la fonte.",
					   "JP":"中世的な両手持ちの長柄武器。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"polearms":3.4}},
		"damage":["closeCombat", "piercing"],
		"attackTime":2, "range":24,
		"anim":"thrust", "scale":1.25,
		"effect":"missileEffect",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"polearms":1}
		},
		"equip":true
	},
	"saber":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"saber.atf"},
		"name":{"EN":"sabre",
				"FR":"sabre",
				"JP":"サーベル"},
		"description":{"EN":"The sabre is a medieval one-handed melee weapon made from cast iron.",
					   "FR":"Le sabre est une arme de contact médiévale à une main fabriquée avec des lingots de fonte.",
					   "JP":"中世的な片手持ちの小型武器。金床で鋳鉄から製造できます。"},
		"bonus":{"attack":{"lightWeapons":0.625}},
		"damage":["closeCombat", "slashing"],
		"attackTime":0.75,
		"anim":"slash",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"address":0.5},
			"xpSkill":{"lightWeapons":0.5}
		},
		"equip":true,
		"oneHand":true
	},
	"shortSword":{
		"type":"item",
		"age":"ironAge",
		"category":"weapon",
		"picture":{"file":"shortSword.atf"},
		"name":{"EN":"short sword",
				"FR":"épée courte",
				"JP":"ショートソード"},
		"description":{"EN":"The short sword is a medieval one-handed melee weapon made from cast iron.",
					   "FR":"L'épée courte est une arme de contact médiévale à une main fabriquée avec des lingots de fonte.",
					   "JP":"中世的な片手持ちの刀剣。金床で鋳鉄から製造できます。"},
		"bonus":{"attack":{"edgedWeapons":0.6}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1,
		"anim":"slash",
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"edgedWeapons":0.5}
		},
		"equip":true,
		"oneHand":true
	},
	"spear":{
		"type":"item",
		"age":"stoneAge",
		"category":"weapon",
		"picture":{"file":"spear.atf"},
		"name":{"EN":"spear",
				"FR":"lance",
				"JP":"石槍"},
		"description":{"EN":"The spear is a primitive two-handed melee weapon made with a stone spearhead.",
					   "FR":"La lance est une arme de contact primitive à deux mains fabriquée avec une pointe en pierre taillée.",
					   "JP":"原始的な両手持ちの長柄武器。野営地で木材と石材から製造できます。"},
		"bonus":{"attack":{"polearms":2.6}},
		"damage":["closeCombat", "piercing"],
		"attackTime":2, "range":24,
		"anim":"thrust", "scale":1.25,
		"effect":"missileEffect",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"polearms":1}
		},
		"equip":true,
		"enhance":[{
			"skill":"weaponsForging",
			"workshop":"huntingCamp",
			"time":10,
			"gainItem":{"spear":1},
			"bonusTimeSkill":"stonecutting",
			"costRessource":{"wood":10, "stone":5},
			"costPrimaryCharacteristic":{"stamina":20},
			"xpSecondaryCharacteristic":{"strength":20},
			"xpSkill":{"stonecutting":20},
			"quantity":-20
		}]
	},
	"stick":{
		"type":"item",
		"age":"woodenAge",
		"category":"weapon",
		"picture":{"file":"stick.atf"},
		"name":{"EN":"stick",
				"FR":"bâton",
				"JP":"棍"},
		"description":{"EN":"The stick is a primitive two-handed melee weapon made from wood.",
					   "FR":"Le bâton est une arme primitive de contact à deux mains fabriquée en bois.",
					   "JP":"原始的な両手持ちの長柄武器。野営地で木材から製造できます。"},
		"bonus":{"attack":{"polearms":1.4}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1, "range":24,
		"anim":"slash", "scale":1.25,
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"polearms":1}
		},
		"equip":true,
		"enhance":[{
			"skill":"weaponsForging",
			"workshop":"huntingCamp",
			"time":5,
			"gainItem":{"stick":1},
			"bonusTimeSkill":"woodcutting",
			"costRessource":{"wood":10},
			"costPrimaryCharacteristic":{"stamina":10},
			"xpSecondaryCharacteristic":{"strength":10},
			"xpSkill":{"woodcutting":10},
			"quantity":-10
		}]
	},
	"stoneAxe":{
		"type":"item",
		"age":"stoneAge",
		"category":"weapon",
		"picture":{"file":"stoneAxe.atf"},
		"name":{"EN":"stone axe",
				"FR":"hache de pierre",
				"JP":"石斧"},
		"description":{"EN":"The stone axe is a neolithic one-handed melee weapon made from cut stone and wood.",
					   "FR":"La hache de pierre est une arme de contact néolithique à une main fabriquée en pierre taillée et en bois.",
					   "JP":"新石器時代の片手持ちの斧。伐採補助道具としても利用可能です。石切場で木材と切石から製造できます。"},
		"bonus":{"attack":{"axes":0.5625},
				 "woodcutting":{"axes":0.0625}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1.25,
		"anim":"slash",
		"effect":"axe",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"axes":0.5}
		},
		"xpSkill":{
			"woodcutting":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"axes":0.25}
				}
		},
		"equip":true,
		"oneHand":true,
		"enhance":[{
			"skill":"weaponsForging",
			"workshop":"quarrierWorkshop",
			"time":3,
			"gainItem":{"stoneAxe":1},
			"bonusTimeSkill":"stonecutting",
			"costRessource":{"freeStone":2, "wood":8},
			"costPrimaryCharacteristic":{"stamina":6},
			"xpSecondaryCharacteristic":{"strength":6},
			"xpSkill":{"stonecutting":6},
			"quantity":-4
		}]
	},
	"stoneHammer":{
		"type":"item",
		"age":"stoneAge",
		"category":"weapon",
		"picture":{"file":"stoneHammer.atf"},
		"name":{"EN":"stone hammer",
				"FR":"marteau de pierre",
				"JP":"石槌"},
		"description":{"EN":"The stone hammer is a neolithic one-handed melee weapon made from wood and cut stone.",
					   "FR":"Le marteau de pierre est une arme de contact néolithique à une main fabriquée avec du bois et de la pierre taillée.",
					   "JP":"新石器時代の片手持ちの鈍器。石切や採鉱補助道具としても利用可能です。石切場で木材と切石から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":0.85},
				 "stonecutting":{"bluntWeapons":0.0625},
				 "mining":{"bluntWeapons":0.0625}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"xpSkill":{
			"stonecutting":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"bluntWeapons":0.25}
				},
			"mining":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"bluntWeapons":0.25}
				}
		},
		"equip":true,
		"oneHand":true,
		"enhance":[{
			"skill":"weaponsForging",
			"workshop":"quarrierWorkshop",
			"time":5,
			"gainItem":{"stoneHammer":1},
			"bonusTimeSkill":"stonecutting",
			"costRessource":{"freeStone":3, "wood":8},
			"costPrimaryCharacteristic":{"stamina":10},
			"xpSecondaryCharacteristic":{"strength":10},
			"xpSkill":{"stonecutting":10},
			"quantity":-5
		}]
	},
	"twoHandedAxe":{
		"type":"item",
		"age":"goldenAge",
		"category":"weapon",
		"picture":{"file":"twoHandedAxe.atf"},
		"name":{"EN":"two-handed axe",
				"FR":"hache à deux mains",
				"JP":"両手斧"},
		"description":{"EN":"The two-handed axe is a medieval melee weapon made from cast iron and wood.",
					   "FR":"La hache à deux mains est une arme de contact médiévale fabriquée en fonte et en bois.",
					   "JP":"中世的な両手持ちの斧。伐採補助道具としても利用可能です。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"axes":2.75},
				 "woodcutting":{"axes":0.25}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1.25,
		"anim":"slash", "scale":1.25,
		"effect":"axe",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"axes":1}
		},
		"xpSkill":{
			"woodcutting":{
				"xpSecondaryCharacteristic":{"strength":0.25},
				"xpSkill":{"axes":0.5}
				}
		},
		"equip":true
	},
	"twoHandedHammer":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"twoHandedHammer.atf"},
		"name":{"EN":"two-handed hammer",
				"FR":"marteau à deux mains",
				"JP":"両手槌"},
		"description":{"EN":"The two-handed hammer is a medieval melee weapon made from cast iron.",
					   "FR":"Le marteau à deux mains est une arme de contact médiévale fabriquée avec des lingots de fonte.",
					   "JP":"中世的な両手持ちの鈍器。石切や採鉱補助道具としても利用可能です。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":2.9},
				 "stonecutting":{"bluntWeapons":0.25},
				 "mining":{"bluntWeapons":0.25}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash", "scale":1.25,
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"bluntWeapons":1}
		},
		"xpSkill":{
			"stonecutting":{
				"xpSecondaryCharacteristic":{"strength":0.25},
				"xpSkill":{"bluntWeapons":0.5}
				},
			"mining":{
				"xpSecondaryCharacteristic":{"strength":0.25},
				"xpSkill":{"bluntWeapons":0.5}
				}
		},
		"equip":true
	},
	"twoHandedSword":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"twoHandedSword.atf"},
		"name":{"EN":"two-handed sword",
				"FR":"épée à deux mains",
				"JP":"両手大剣"},
		"description":{"EN":"The two-handed sword is a medieval melee weapon made from cast iron.",
					   "FR":"L'épée à deux mains est une arme de contact médiévale fabriquée avec des lingots de fonte.",
					   "JP":"中世的な両手持ちの刀剣。金床で鋳鉄から製造できます。"},
		"bonus":{"attack":{"edgedWeapons":1.6}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1,
		"anim":"slash", "scale":1.25,
		"effect":"blade",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"edgedWeapons":1}
		},
		"equip":true
	},
	"vouge":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"vouge.atf"},
		"name":{"EN":"vouge",
				"FR":"vouge",
				"JP":"ヴォウジェ"},
		"description":{"EN":"The vouge is a medieval two-handed melee weapon made from wood and cast iron.",
					   "FR":"La vouge est une arme de contact médiévale à deux mains fabriquée avec du bois et de la fonte.",
					   "JP":"中世的な両手持ちの長柄武器。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"polearms":4.2}},
		"damage":["closeCombat", "slashing"],
		"attackTime":2, "range":24,
		"anim":"slash", "scale":1.25,
		"effect":"axe",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":1},
			"xpSkill":{"polearms":1}
		},
		"equip":true
	},
	"warAxe":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"warAxe.atf"},
		"name":{"EN":"war axe",
				"FR":"hache de guerre",
				"JP":"戦斧"},
		"description":{"EN":"The war axe is a medieval one-handed melee weapon made from cast iron and wood.",
					   "FR":"La hache de guerre est une arme de contact médiévale à une main fabriquée en fonte et en bois.",
					   "JP":"中世的な片手持ちの斧。伐採補助道具としても利用可能です。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"axes":1.125},
				 "woodcutting":{"axes":0.125}},
		"damage":["closeCombat", "slashing"],
		"attackTime":1.25,
		"anim":"slash",
		"effect":"axe",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"axes":0.5}
		},
		"xpSkill":{
			"woodcutting":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"axes":0.25}
				}
		},
		"equip":true,
		"oneHand":true
	},
	"warHammer":{
		"type":"item",
		"age":"etherAge",
		"category":"weapon",
		"picture":{"file":"warHammer.atf"},
		"name":{"EN":"war hammer",
				"FR":"marteau de guerre",
				"JP":"戦槌"},
		"description":{"EN":"The war hammer is a medieval one-handed melee weapon made from wood and cast iron.",
					   "FR":"Le marteau de guerre est une arme de contact médiévale à une main fabriquée avec du bois et de la fonte.",
					   "JP":"中世的な片手持ちの鈍器。石切や採鉱補助道具としても利用可能です。金床で木材と鋳鉄から製造できます。"},
		"bonus":{"attack":{"bluntWeapons":1.45},
				 "mining":{"bluntWeapons":0.125}},
		"damage":["closeCombat", "crushing"],
		"attackTime":1.5,
		"anim":"slash",
		"effect":"shock",
		"xpAttack":{
			"xpSecondaryCharacteristic":{"strength":0.5},
			"xpSkill":{"bluntWeapons":0.5}
		},
		"xpSkill":{
			"stonecutting":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"bluntWeapons":0.25}
				},
			"mining":{
				"xpSecondaryCharacteristic":{"strength":0.125},
				"xpSkill":{"bluntWeapons":0.25}
				}
		},
		"equip":true,
		"oneHand":true
	}
}