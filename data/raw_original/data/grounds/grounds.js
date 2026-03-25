{
	"deepWater":{
		"type":"ground",
		"no":0,
		"picture":{"file":"deepWater.png"},
		"color":1063789,
		"speed":0.25,
		"buildable":false,
		"mask":"mask.png",
		"level":-2,
		"effect":"waterEffect",
		"translateY":16
	},
	"middleWater":{
		"type":"ground",
		"no":1,
		"picture":{"file":"middleWater.png"},
		"color":1596069,
		"speed":0.5,
		"buildable":false,
		"mask":"mask.png",
		"level":-2,
		"effect":"waterEffect",
		"translateY":8
	},
	"swallowWater":{
		"type":"ground",
		"no":2,
		"picture":{"file":"swallowWater.png"},
		"random":[
			{"file":"random/rocksWater.png", "rate":0.05},
			{"file":"random/rocksWater2.png", "rate":0.05},
			{"file":"random/waterlily.png", "rate":0.05},
			{"file":"random/waterlily2.png", "rate":0.05}
		],
		"color":2591999,
		"speed":0.75,
		"buildable":false,
		"mask":"mask.png",
		"level":-2,
		"effect":"waterEffect",
		"translateY":4
	},
	"sand":{
		"type":"ground",
		"no":3,
		"picture":{"file":"sand.png"},
		"random":[
			{"file":"random/rocks.png", "rate":0.05},
			{"file":"random/rocks2.png", "rate":0.05},
			{"file":"random/starfish1.png", "rate":0.005},
			{"file":"random/starfish2.png", "rate":0.005},
			{"file":"random/shell1.png", "rate":0.005}
		],
		"color":16240260,
		"speed":0.8,
		"buildable":true,
		"mask":"mask.png",
		"level":-1,
		"translateY":0
	},
	"plain":{
		"type":"ground",
		"no":4,
		"picture":{"file":"plain.png"},
		"random":[
			{"file":"random/rocks.png", "rate":0.005},
			{"file":"random/rocks2.png", "rate":0.005},
			{"file":"random/plants.png", "rate":0.005},
			{"file":"random/plants2.png", "rate":0.005},
			{"file":"random/flower.png", "rate":0.005},
			{"file":"random/flower2.png", "rate":0.005},
			{"file":"random/grass.png", "rate":0.005},
			{"file":"random/mushrooms.png", "rate":0.005}
		],
		"color":4893960,
		"speed":1,
		"buildable":true,
		"mask":"mask.png",
		"level":0,
		"translateY":0
	},
	"grass":{
		"type":"ground",
		"no":5,
		"picture":{"file":"grass.png"},
		"random":[
			{"file":"random/plants.png", "rate":0.005},
			{"file":"random/plants2.png", "rate":0.005},
			{"file":"random/flower.png", "rate":0.005},
			{"file":"random/flower2.png", "rate":0.005},
			{"file":"random/rocks.png", "rate":0.005},
			{"file":"random/rocks2.png", "rate":0.005},
			{"file":"random/mushrooms.png", "rate":0.005}
		],
		"color":2720768,
		"speed":1,
		"buildable":true,
		"mask":"mask.png",
		"level":0,
		"translateY":0
	},
	"soil":{
		"type":"ground",
		"no":6,
		"picture":{"file":"soil.png"},
		"random":[
			{"file":"random/rocks.png", "rate":0.005},
			{"file":"random/rocks2.png", "rate":0.005},
			{"file":"random/mushrooms.png", "rate":0.005},
			{"file":"random/plants.png", "rate":0.005},
			{"file":"random/plants2.png", "rate":0.005}
		],
		"color":13016163,
		"speed":1,
		"buildable":true,
		"mask":"mask.png",
		"level":0,
		"translateY":0
	},
	"road":{
		"type":"ground",
		"no":7,
		"picture":{"file":"road.png"},
		"color":10851509,
		"speed":1.2,
		"buildable":true,
		"mask":"mask2.png",
		"level":0.5,
		"translateY":0
	},
	"snow":{
		"type":"ground",
		"no":8,
		"picture":{"file":"snow.png"},
		"random":[
			{"file":"random/rocksSnow.png", "rate":0.05},
			{"file":"random/rocksSnow2.png", "rate":0.05}
		],
		"color":16777215,
		"speed":0.7,
		"buildable":true,
		"mask":"mask.png",
		"level":1,
		"translateY":0
	},
	"rocks":{
		"type":"ground",
		"no":9,
		"picture":{"file":"rocks.png"},
		"color":9730873,
		"speed":0.4,
		"buildable":false,
		"mask":"mask.png",
		"level":2,
		"translateY":0
	}
}