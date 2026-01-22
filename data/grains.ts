import type {CookingTemperatureEntry} from "../types"

export const grains: CookingTemperatureEntry[] = [
	{
		id: "white_rice_long_grain",
		name: "White Rice (Long Grain)",
		category: "grain",
		aliases: [
			"white rice",
			"long grain rice",
			"jasmine rice",
			"basmati rice",
		],

		safeMinimumTemp: 165,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 5,

		cookingInstructions: [
			{
				portionDescription: "1 cup dry (serves 2-3)",
				methods: [
					{
						method: "simmer",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 15, max: 18},
						notes: "1:1.5 rice to water ratio. Bring to boil, reduce to low, cover. Rest 5 min off heat.",
					},
					{
						method: "oven_bake",
						applianceTemp: 350,
						applianceTempUnit: "F",
						timeMinutes: {min: 25, max: 30},
						notes: "1:1.5 ratio. Boiling water, covered tightly with foil.",
					},
				],
			},
		],

		visualIndicators: [
			"All water absorbed",
			"Grains are separate, not mushy",
			"Small steam holes on surface",
		],

		sources: ["USA Rice Federation"],
	},

	{
		id: "brown_rice",
		name: "Brown Rice",
		category: "grain",
		aliases: ["whole grain rice"],

		safeMinimumTemp: 165,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 5,

		cookingInstructions: [
			{
				portionDescription: "1 cup dry",
				methods: [
					{
						method: "simmer",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 40, max: 50},
						notes: "1:2 rice to water ratio. Bring to boil, reduce to low, cover.",
					},
					{
						method: "oven_bake",
						applianceTemp: 375,
						applianceTempUnit: "F",
						timeMinutes: {min: 60, max: 75},
						notes: "1:2.5 ratio. Boiling water, covered tightly.",
					},
				],
			},
		],

		visualIndicators: [
			"Grains are tender but slightly chewy",
			"All water absorbed",
		],

		sources: ["USA Rice Federation"],
	},

	{
		id: "quinoa",
		name: "Quinoa",
		category: "grain",
		aliases: ["white quinoa", "red quinoa", "tricolor quinoa"],

		safeMinimumTemp: 165,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 5,

		cookingInstructions: [
			{
				portionDescription: "1 cup dry (serves 3-4)",
				methods: [
					{
						method: "simmer",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 15, max: 20},
						notes: "1:2 quinoa to water ratio. Rinse well first. Bring to boil, reduce to low, cover.",
					},
				],
			},
		],

		visualIndicators: [
			"Germ separates and forms a visible spiral",
			"Translucent with white ring",
			"Slight pop when bitten",
		],

		sources: ["USDA"],
	},

	{
		id: "pasta_dried",
		name: "Pasta (Dried)",
		category: "grain",
		aliases: ["spaghetti", "penne", "rigatoni", "fusilli", "farfalle"],

		safeMinimumTemp: 165,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		cookingInstructions: [
			{
				portionDescription: "standard shapes (penne, fusilli)",
				methods: [
					{
						method: "boil",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 8, max: 12},
						notes: "Well-salted water. Check 2 min before package time for al dente. Reserve pasta water.",
					},
				],
			},
			{
				portionDescription: "long pasta (spaghetti, linguine)",
				methods: [
					{
						method: "boil",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 8, max: 11},
						notes: "Don't break pasta. Stir during first minute to prevent sticking.",
					},
				],
			},
			{
				portionDescription: "thin pasta (angel hair, capellini)",
				methods: [
					{
						method: "boil",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 3, max: 5},
						notes: "Cooks very quickly. Watch carefully.",
					},
				],
			},
		],

		visualIndicators: [
			"Al dente: firm bite, tiny white dot in center",
			"Fully cooked: no white center, softer texture",
			"Overcooked: mushy, falls apart",
		],

		sources: ["Barilla"],
	},

	{
		id: "oatmeal_rolled",
		name: "Rolled Oats",
		category: "grain",
		aliases: ["oatmeal", "old fashioned oats", "porridge oats"],

		safeMinimumTemp: 165,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 2,

		cookingInstructions: [
			{
				portionDescription: "1/2 cup dry (1 serving)",
				methods: [
					{
						method: "simmer",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 5, max: 7},
						notes: "1:2 oats to water/milk ratio. Bring liquid to boil, add oats, reduce heat.",
					},
				],
			},
		],

		visualIndicators: [
			"Creamy consistency",
			"Oats are soft but not mushy",
			"Liquid is absorbed",
		],

		sources: ["Quaker Oats"],
	},

	{
		id: "couscous",
		name: "Couscous",
		category: "grain",
		aliases: ["moroccan couscous", "instant couscous"],

		safeMinimumTemp: 165,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 5,

		cookingInstructions: [
			{
				portionDescription: "1 cup dry",
				methods: [
					{
						method: "steam",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 5, max: 5},
						notes: "1:1.5 ratio. Pour boiling water over couscous, cover, let sit 5 min. Fluff with fork.",
					},
				],
			},
		],

		visualIndicators: [
			"Fluffy, separate grains",
			"All liquid absorbed",
			"Light and airy texture",
		],

		sources: ["USDA"],
	},

	{
		id: "farro",
		name: "Farro",
		category: "grain",
		aliases: ["emmer wheat", "pearled farro"],

		safeMinimumTemp: 165,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		cookingInstructions: [
			{
				portionDescription: "1 cup dry (pearled)",
				methods: [
					{
						method: "simmer",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 20, max: 30},
						notes: "Cook like pasta in plenty of salted water. Drain when tender.",
					},
				],
			},
			{
				portionDescription: "1 cup dry (whole grain)",
				methods: [
					{
						method: "simmer",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 35, max: 45},
						notes: "Soak overnight to reduce cooking time. Cook in salted water.",
					},
				],
			},
		],

		visualIndicators: [
			"Tender but chewy",
			"Slightly nutty texture",
			"Grains should not be mushy",
		],

		sources: ["USDA"],
	},
]
