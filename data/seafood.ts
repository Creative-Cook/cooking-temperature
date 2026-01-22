import type {CookingTemperatureEntry} from "../types"

export const seafood: CookingTemperatureEntry[] = [
	{
		id: "salmon_fillet",
		name: "Salmon Fillet",
		category: "seafood_fish",
		aliases: [
			"salmon",
			"atlantic salmon",
			"sockeye salmon",
			"salmon steak",
		],

		safeMinimumTemp: 145,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 2,

		donenessLevels: [
			{
				level: "medium_rare",
				internalTemp: 120,
				internalTempUnit: "F",
				description: "Translucent center, very moist",
			},
			{
				level: "medium",
				internalTemp: 130,
				internalTempUnit: "F",
				description: "Slightly translucent center, moist",
			},
			{
				level: "safe_minimum",
				internalTemp: 145,
				internalTempUnit: "F",
				description: "Fully opaque, flakes easily",
			},
		],

		cookingInstructions: [
			{
				portionDescription: "standard fillet (6 oz, 1 inch thick)",
				methods: [
					{
						method: "oven_bake",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 12, max: 15},
						notes: "Skin-side down on parchment. No flipping needed.",
					},
					{
						method: "pan_sear",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 3, max: 4},
						notes: "Skin-side down first for 3-4 min, flip for 1-2 min.",
					},
					{
						method: "grill",
						applianceTemp: 450,
						applianceTempUnit: "F",
						timeMinutes: {min: 3, max: 4},
						notes: "Per side. Oil grates well to prevent sticking.",
					},
					{
						method: "broil",
						applianceTemp: 500,
						applianceTempUnit: "F",
						timeMinutes: {min: 8, max: 10},
						notes: "6 inches from heat source. No flipping needed.",
					},
					{
						method: "poach",
						applianceTemp: 170,
						applianceTempUnit: "F",
						timeMinutes: {min: 10, max: 15},
						notes: "Liquid should be barely simmering.",
					},
					{
						method: "air_fry",
						applianceTemp: 380,
						applianceTempUnit: "F",
						timeMinutes: {min: 7, max: 10},
						notes: "No flipping needed.",
					},
				],
			},
			{
				portionDescription: "thick cut (8 oz, 1.5 inches)",
				methods: [
					{
						method: "oven_bake",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 15, max: 18},
					},
					{
						method: "pan_sear",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 4, max: 5},
						notes: "Skin-side first, then flip. May need to finish in oven.",
					},
				],
			},
		],

		visualIndicators: [
			"Flesh turns from translucent to opaque",
			"Flakes easily with fork",
			"White albumin proteins appear on surface (normal)",
		],

		sources: ["USDA FSIS", "Serious Eats"],
	},

	{
		id: "shrimp",
		name: "Shrimp",
		category: "seafood_shellfish",
		aliases: ["prawns", "large shrimp", "jumbo shrimp", "tiger shrimp"],

		safeMinimumTemp: 145,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		cookingInstructions: [
			{
				portionDescription: "medium (41-50 count per lb)",
				methods: [
					{
						method: "pan_sear",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 1, max: 2},
						notes: "Per side. Do not overcrowd pan.",
					},
					{
						method: "boil",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 2, max: 3},
						notes: "Add to boiling water, remove when pink and opaque.",
					},
					{
						method: "grill",
						applianceTemp: 450,
						applianceTempUnit: "F",
						timeMinutes: {min: 2, max: 3},
						notes: "Per side. Use skewers to prevent falling through grates.",
					},
					{
						method: "steam",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 4, max: 6},
					},
				],
			},
			{
				portionDescription: "large (31-40 count per lb)",
				methods: [
					{
						method: "pan_sear",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 2, max: 3},
						notes: "Per side.",
					},
					{
						method: "boil",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 3, max: 4},
					},
					{
						method: "grill",
						applianceTemp: 450,
						applianceTempUnit: "F",
						timeMinutes: {min: 2, max: 3},
						notes: "Per side.",
					},
				],
			},
			{
				portionDescription: "jumbo (21-25 count per lb)",
				methods: [
					{
						method: "pan_sear",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 2, max: 3},
						notes: "Per side.",
					},
					{
						method: "boil",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 4, max: 5},
					},
					{
						method: "grill",
						applianceTemp: 450,
						applianceTempUnit: "F",
						timeMinutes: {min: 3, max: 4},
						notes: "Per side.",
					},
				],
			},
		],

		visualIndicators: [
			"Turns from grey/translucent to pink and opaque",
			"Curls into a loose C shape (tight curl = overcooked)",
			"Flesh is firm but not rubbery",
		],

		sources: ["USDA FSIS", "America's Test Kitchen"],
	},

	{
		id: "cod_fillet",
		name: "Cod Fillet",
		category: "seafood_fish",
		aliases: ["cod", "atlantic cod", "pacific cod", "white fish"],

		safeMinimumTemp: 145,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 2,

		cookingInstructions: [
			{
				portionDescription: "standard fillet (6 oz, 1 inch thick)",
				methods: [
					{
						method: "oven_bake",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 10, max: 12},
					},
					{
						method: "pan_sear",
						applianceTemp: 375,
						applianceTempUnit: "F",
						timeMinutes: {min: 3, max: 4},
						notes: "Per side. Cod is delicate - use a fish spatula.",
					},
					{
						method: "poach",
						applianceTemp: 170,
						applianceTempUnit: "F",
						timeMinutes: {min: 8, max: 10},
					},
					{
						method: "steam",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 8, max: 10},
					},
				],
			},
		],

		visualIndicators: [
			"Flesh turns opaque white",
			"Flakes easily with fork",
		],

		sources: ["USDA FSIS"],
	},
]
