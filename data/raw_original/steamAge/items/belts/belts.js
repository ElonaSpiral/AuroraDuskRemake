{
	"beltOfAgility":{
		"type":"item",
		"age":"ironAge",
		"category":"belt",
		"picture":{"file":"beltOfAgility.atf"},
		"name":{"EN":"belt of agility",
				"FR":"ceinture d'agilité",
				"JP":"敏捷のベルト"},
		"description":{"EN":"The belt of agility increases your rapidity.",
					   "FR":"La ceinture d'agilité augmente votre rapidité.",
					   "JP":"着用者の敏捷性を向上させるベルト。革工房でなめし革と鋳鉄から製造できます。"},
		"bonus":{"rapidity":{"belts":0.125}},
		"xpSecondaryCharacteristic":{
			"rapidity":{
				"xpSecondaryCharacteristic":{"endurance":0.125},
				"xpSkill":{"belts":1}
				}
		},
		"equip":true
	},
	"beltOfFortitude":{
		"type":"item",
		"age":"ironAge",
		"category":"belt",
		"picture":{"file":"beltOfFortitude.atf"},
		"name":{"EN":"belt of fortitude",
				"FR":"ceinture de résistance",
				"JP":"頑健のベルト"},
		"description":{"EN":"The belt of fortitude increases your endurance.",
					   "FR":"La ceinture de résistance augmente votre endurance.",
					   "JP":"着用者の耐久力を向上させるベルト。革工房でなめし革と鋳鉄から製造できます。"},
		"bonus":{"endurance":{"belts":0.125}},
		"xpSecondaryCharacteristic":{
			"endurance":{
				"xpSecondaryCharacteristic":{"endurance":0.125},
				"xpSkill":{"belts":1}
				}
		},
		"equip":true
	},
	"beltOfGiantStrength":{
		"type":"item",
		"age":"etherAge",
		"category":"belt",
		"picture":{"file":"beltOfGiantStrength.atf"},
		"name":{"EN":"belt of giant strength",
				"FR":"ceinture de force de géant",
				"JP":"筋力増強のベルト"},
		"description":{"EN":"The belt of giant strength increases your strength.",
					   "FR":"La ceinture de force de géant augmente votre force.",
					   "JP":"着用者の筋力を向上させるベルト。革工房でなめし革と水晶から製造できます。"},
		"bonus":{"strength":{"belts":0.125}},
		"xpSecondaryCharacteristic":{
			"strength":{
				"xpSecondaryCharacteristic":{"endurance":0.125},
				"xpSkill":{"belts":1}
				}
		},
		"equip":true
	},
	"beltOfThePerformer":{
		"type":"item",
		"age":"goldenAge",
		"category":"belt",
		"picture":{"file":"beltOfThePerformer.atf"},
		"name":{"EN":"belt of the perfomer",
				"FR":"ceinture de l'interprète",
				"JP":"役者のベルト"},
		"description":{"EN":"The belt of the perfomer increases your charisma.",
					   "FR":"La ceinture de l'interprète augmente votre charisme.",
					   "JP":"着用者の魅力を向上させるベルト。革工房でなめし革と棒金から製造できます。"},
		"bonus":{"charisma":{"belts":0.125}},
		"xpSecondaryCharacteristic":{
			"charisma":{
				"xpSecondaryCharacteristic":{"endurance":0.125},
				"xpSkill":{"belts":1}
				}
		},
		"equip":true
	},
	"leatherBelt":{
		"type":"item",
		"age":"stoneAge",
		"category":"belt",
		"picture":{"file":"leatherBelt.atf"},
		"name":{"EN":"leather belt",
				"FR":"ceinture de cuir",
				"JP":"革のベルト"},
		"description":{"EN":"The leather belt is a rudimentary belt.",
					   "FR":"La ceinture de cuir est une ceinture rudimentaire.",
					   "JP":"着用者の持久力を向上させる原始的なベルト。革工房でなめし革から製造できます。"},
		"bonus":{"stamina":{"belts":0.15}},
		"xpPrimaryCharacteristic":{
			"stamina":{
				"xpSecondaryCharacteristic":{"endurance":0.125},
				"xpSkill":{"belts":1}
				}
		},
		"equip":true,
		"upgrade":[{
				"workshop":"leatherGoodsWorkshop",
				"time":1.5,
				"gainItem":{"beltOfFortitude":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"castIron":1},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"address":3},
				"xpSkill":{"leatherwork":3},
				"quantity":-3
			},{
				"workshop":"leatherGoodsWorkshop",
				"time":1.5,
				"gainItem":{"beltOfAgility":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"castIron":1},
				"costPrimaryCharacteristic":{"stamina":3},
				"xpSecondaryCharacteristic":{"address":3},
				"xpSkill":{"leatherwork":3},
				"quantity":-3
			},{
				"workshop":"leatherGoodsWorkshop",
				"time":2,
				"gainItem":{"beltOfGiantStrength":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"crystals":1},
				"costPrimaryCharacteristic":{"stamina":4},
				"xpSecondaryCharacteristic":{"address":4},
				"xpSkill":{"leatherwork":4},
				"quantity":-4
			},{
				"workshop":"leatherGoodsWorkshop",
				"time":5,
				"gainItem":{"beltOfThePerformer":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"goldBar":1},
				"costPrimaryCharacteristic":{"stamina":10},
				"xpSecondaryCharacteristic":{"address":10},
				"xpSkill":{"leatherwork":10},
				"quantity":-10
			},{
				"workshop":"shamanicAltar",
				"time":8,
				"gainItem":{"snowflakeBelt":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"crystals":4},
				"costPrimaryCharacteristic":{"stamina":16},
				"xpSecondaryCharacteristic":{"address":16},
				"xpSkill":{"leatherwork":16},
				"quantity":-16
			}]
	},
	"snowflakeBelt":{
		"type":"item",
		"age":"steamAge",
		"category":"belt",
		"picture":{"file":"snowflakeBelt.atf"},
		"name":{"EN":"snowflake belt",
				"FR":"ceinture de flocon de neige",
				"JP":"雪結晶のベルト"},
		"description":{"EN":"The snowflake belt can throw a slow ice attack spell.",
					   "FR":"La ceinture de flocon de neige projette une attaque lente de magie de glace.",
					   "JP":"当たった標的の移動速度を一時的に下げる雪結晶を放つ妖術の発動体となるベルト。祈祷所でなめし革と水晶から製造できます。"},
		"bonus":{"attack":{"druidicMagic":2}},
		"attackTime":4, "range":300, "missile":"snowflake",
		"attacks":[{"range":300, "damage":["magic", "ice"], "missile":"snowflake", "selfGuided":0.05, "penality":{"id":"slowdown", "time":5}}],
		"damage":["magic", "ice"],
		"resistance":{"ice":-0.1},
		"attack":{
			"costPrimaryCharacteristic":{"mana":4}
		},
		"xpAttack":{
			"xpSecondaryCharacteristic":{"intelligence":0.25},
			"xpSkill":{"druidicMagic":0.5}
		},
		"equip":true,
		"produce":[{
				"workshop":"shamanicAltar",
				"no":18,
				"time":10,
				"gainItem":{"snowflakeBelt":1},
				"bonusTimeSkill":"leatherwork",
				"costRessource":{"leather":4, "crystals":4},
				"costPrimaryCharacteristic":{"stamina":20},
				"xpSecondaryCharacteristic":{"address":20},
				"xpSkill":{"leatherwork":20},
				"quantity":-20
		}]
	},
	"steelBelt":{
		"type":"item",
		"age":"steamAge",
		"category":"belt",
		"picture":{"file":"steelBelt.atf"},
		"name":{"EN":"steel belt",
				"FR":"ceinture d'acier",
				"JP":"鋼鉄のベルト"},
		"description":{"EN":"The steel belt increases your endurance.",
					   "FR":"La ceinture de résistance augmente votre endurance.",
					   "JP":"着用者の体力を向上させるベルト。電気属性にわずかに弱くなります。革工房でなめし革と鋼鉄から製造できます。"},
		"bonus":{"health":{"belts":0.25}},
		"resistance":{"electricity":0.1},
		"xpPrimaryCharacteristic":{
			"health":{
				"xpSecondaryCharacteristic":{"endurance":0.125},
				"xpSkill":{"belts":1}
				}
		},
		"equip":true
	}
}