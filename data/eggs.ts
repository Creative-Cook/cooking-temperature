import type {CookingTemperatureEntry} from "../types"

export const eggs: CookingTemperatureEntry[] = [
	{
		id: "egg_fried",
		name: "Fried Egg",
		category: "egg",
		aliases: ["sunny side up", "over easy", "over medium", "over hard"],

		safeMinimumTemp: 160,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		donenessLevels: [
			{
				level: "rare",
				internalTemp: 145,
				internalTempUnit: "F",
				description: "Runny yolk, barely set white (sunny side up)",
			},
			{
				level: "medium_rare",
				internalTemp: 150,
				internalTempUnit: "F",
				description: "Runny yolk, fully set white (over easy)",
			},
			{
				level: "medium",
				internalTemp: 155,
				internalTempUnit: "F",
				description: "Jammy yolk, set white (over medium)",
			},
			{
				level: "safe_minimum",
				internalTemp: 160,
				internalTempUnit: "F",
				description: "Fully set yolk and white (over hard)",
			},
		],

		cookingInstructions: [
			{
				portionDescription: "single egg",
				methods: [
					{
						method: "pan_fry",
						applianceTemp: 325,
						applianceTempUnit: "F",
						timeMinutes: {min: 2, max: 4},
						notes: "Low-medium heat. Sunny side up: 2-3 min. Over easy: flip at 2 min, cook 30 sec more.",
					},
				],
			},
		],

		visualIndicators: [
			"Sunny side up: white is set, yolk jiggles",
			"Over easy: white fully set on both sides, yolk runny",
			"Over medium: yolk slightly thickened but still flows",
			"Over hard: yolk fully set",
		],

		sources: ["USDA FSIS", "American Egg Board"],
	},

	{
		id: "egg_scrambled",
		name: "Scrambled Eggs",
		category: "egg",
		aliases: ["scrambled egg"],

		safeMinimumTemp: 160,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		donenessLevels: [
			{
				level: "medium",
				internalTemp: 145,
				internalTempUnit: "F",
				description: "Soft, creamy curds with slight shine",
			},
			{
				level: "safe_minimum",
				internalTemp: 160,
				internalTempUnit: "F",
				description: "Fully set, no wet spots",
			},
		],

		cookingInstructions: [
			{
				portionDescription: "2-3 eggs",
				methods: [
					{
						method: "pan_fry",
						applianceTemp: 300,
						applianceTempUnit: "F",
						timeMinutes: {min: 3, max: 5},
						notes: "Low heat. Stir constantly with spatula. Remove from heat while slightly underdone - carryover cooking will finish them.",
					},
				],
			},
		],

		visualIndicators: [
			"Soft curds: glossy, barely holds shape",
			"Medium curds: matte surface, holds shape",
			"Hard curds: dry appearance, firm texture",
		],

		sources: ["American Egg Board"],
	},

	{
		id: "egg_hard_boiled",
		name: "Hard Boiled Egg",
		category: "egg",
		aliases: ["hard cooked egg", "boiled egg"],

		safeMinimumTemp: 160,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		cookingInstructions: [
			{
				portionDescription: "large egg",
				methods: [
					{
						method: "boil",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 10, max: 12},
						notes: "Start in cold water, bring to boil, then cover and remove from heat. Let sit 10-12 min. Ice bath immediately.",
					},
					{
						method: "steam",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 12, max: 14},
						notes: "Add eggs to steamer basket over boiling water. Easier to peel than boiled.",
					},
				],
			},
		],

		visualIndicators: [
			"Yolk is fully set and pale yellow throughout",
			"No green ring around yolk (green = overcooked)",
		],

		sources: ["American Egg Board"],
	},

	{
		id: "egg_soft_boiled",
		name: "Soft Boiled Egg",
		category: "egg",
		aliases: ["soft cooked egg", "jammy egg", "ramen egg"],

		safeMinimumTemp: 145,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		donenessLevels: [
			{
				level: "rare",
				internalTemp: 145,
				internalTempUnit: "F",
				description: "Runny yolk, just-set white",
			},
			{
				level: "medium",
				internalTemp: 150,
				internalTempUnit: "F",
				description: "Jammy yolk, firm white",
			},
		],

		cookingInstructions: [
			{
				portionDescription: "large egg",
				methods: [
					{
						method: "boil",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 6, max: 7},
						notes: "Lower eggs into already boiling water. 6 min = runny, 7 min = jammy. Ice bath immediately.",
					},
					{
						method: "steam",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 6, max: 8},
						notes: "6-7 min for runny, 8 min for jammy.",
					},
				],
			},
		],

		visualIndicators: [
			"White is fully set",
			"Yolk ranges from liquid to jammy depending on time",
		],

		sources: ["American Egg Board", "Serious Eats"],
	},

	{
		id: "egg_poached",
		name: "Poached Egg",
		category: "egg",
		aliases: ["poach egg"],

		safeMinimumTemp: 145,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		donenessLevels: [
			{
				level: "medium_rare",
				internalTemp: 145,
				internalTempUnit: "F",
				description: "Runny yolk, just-set white",
			},
			{
				level: "medium",
				internalTemp: 155,
				internalTempUnit: "F",
				description: "Jammy yolk, firm white",
			},
		],

		cookingInstructions: [
			{
				portionDescription: "single egg",
				methods: [
					{
						method: "poach",
						applianceTemp: 180,
						applianceTempUnit: "F",
						timeMinutes: {min: 3, max: 4},
						notes: "Water should be barely simmering with small bubbles. Add splash of vinegar. Swirl water before adding egg.",
					},
				],
			},
		],

		visualIndicators: [
			"White is fully opaque and set",
			"Yolk should jiggle when touched",
		],

		sources: ["American Egg Board"],
	},

	{
		id: "egg_omelette",
		name: "Omelette",
		category: "egg",
		aliases: ["omelet", "french omelette"],

		safeMinimumTemp: 160,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		donenessLevels: [
			{
				level: "medium",
				internalTemp: 145,
				internalTempUnit: "F",
				description: "French style - creamy, barely set interior",
			},
			{
				level: "safe_minimum",
				internalTemp: 160,
				internalTempUnit: "F",
				description: "American style - fully set throughout",
			},
		],

		cookingInstructions: [
			{
				portionDescription: "2-3 eggs",
				methods: [
					{
						method: "pan_fry",
						applianceTemp: 325,
						applianceTempUnit: "F",
						timeMinutes: {min: 2, max: 4},
						notes: "French style: constant movement, 90 seconds. American style: let set, fold at 2-3 min.",
					},
				],
			},
		],

		visualIndicators: [
			"French: pale yellow exterior, creamy interior",
			"American: light golden exterior, fully set",
		],

		sources: ["American Egg Board"],
	},
]
