import type {CookingTemperatureEntry} from "../types"

export const vegetables: CookingTemperatureEntry[] = [
	{
		id: "broccoli",
		name: "Broccoli",
		category: "vegetable",
		aliases: ["broccoli florets", "broccoli crowns"],

		safeMinimumTemp: 135,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		cookingInstructions: [
			{
				portionDescription: "florets (bite-sized)",
				methods: [
					{
						method: "steam",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 5, max: 7},
						notes: "Tender-crisp at 5 min, soft at 7 min.",
					},
					{
						method: "oven_roast",
						applianceTemp: 425,
						applianceTempUnit: "F",
						timeMinutes: {min: 20, max: 25},
						notes: "Toss with oil. Edges should be charred.",
					},
					{
						method: "pan_sear",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 6, max: 8},
						notes: "High heat, don't stir too often. Let it char.",
					},
					{
						method: "boil",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 3, max: 5},
						notes: "Blanch in salted water, then ice bath to stop cooking.",
					},
					{
						method: "air_fry",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 8, max: 10},
						notes: "Toss with oil. Shake basket halfway.",
					},
				],
			},
		],

		visualIndicators: [
			"Bright green color (overcooked = olive/army green)",
			"Fork tender but not mushy",
			"Stems should have slight resistance",
		],

		sources: ["USDA"],
	},

	{
		id: "asparagus",
		name: "Asparagus",
		category: "vegetable",
		aliases: ["asparagus spears"],

		safeMinimumTemp: 135,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		cookingInstructions: [
			{
				portionDescription: "standard spears (trimmed)",
				methods: [
					{
						method: "oven_roast",
						applianceTemp: 425,
						applianceTempUnit: "F",
						timeMinutes: {min: 10, max: 15},
						notes: "Thin spears: 10 min. Thick spears: 15 min. Single layer.",
					},
					{
						method: "grill",
						applianceTemp: 450,
						applianceTempUnit: "F",
						timeMinutes: {min: 6, max: 10},
						notes: "Perpendicular to grates. Turn once.",
					},
					{
						method: "pan_sear",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 5, max: 8},
						notes: "High heat, occasional turning.",
					},
					{
						method: "steam",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 3, max: 5},
						notes: "Stand upright in steamer if possible.",
					},
					{
						method: "boil",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 2, max: 4},
						notes: "Blanch briefly, ice bath immediately.",
					},
				],
			},
		],

		visualIndicators: [
			"Bright green, tips intact",
			"Slight bend when lifted from middle",
			"Tender when pierced with knife",
		],

		sources: ["USDA"],
	},

	{
		id: "potato_russet",
		name: "Russet Potato",
		category: "vegetable",
		aliases: ["baking potato", "idaho potato"],

		safeMinimumTemp: 185,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		cookingInstructions: [
			{
				portionDescription: "whole (medium, 8 oz)",
				methods: [
					{
						method: "oven_bake",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 50, max: 60},
						notes: "Pierce with fork. Place directly on rack.",
					},
					{
						method: "boil",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 20, max: 30},
						notes: "Start in cold salted water. For mashed potatoes.",
					},
					{
						method: "air_fry",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 40, max: 50},
						notes: "Pierce and rub with oil.",
					},
				],
			},
			{
				portionDescription: "cubed (1 inch)",
				methods: [
					{
						method: "oven_roast",
						applianceTemp: 425,
						applianceTempUnit: "F",
						timeMinutes: {min: 30, max: 40},
						notes: "Toss with oil, single layer. Flip halfway.",
					},
					{
						method: "boil",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 10, max: 15},
						notes: "Start in cold water for even cooking.",
					},
					{
						method: "pan_fry",
						applianceTemp: 375,
						applianceTempUnit: "F",
						timeMinutes: {min: 15, max: 20},
						notes: "For home fries. Don't crowd the pan.",
					},
				],
			},
		],

		visualIndicators: [
			"Fork slides in easily with no resistance",
			"Internal temp reaches 185-210°F for fluffy texture",
		],

		sources: ["USDA", "Idaho Potato Commission"],
	},

	{
		id: "carrots",
		name: "Carrots",
		category: "vegetable",
		aliases: ["carrot", "baby carrots"],

		safeMinimumTemp: 135,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		cookingInstructions: [
			{
				portionDescription: "sliced or baby carrots",
				methods: [
					{
						method: "oven_roast",
						applianceTemp: 425,
						applianceTempUnit: "F",
						timeMinutes: {min: 25, max: 35},
						notes: "Toss with oil. Caramelization develops at edges.",
					},
					{
						method: "steam",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 7, max: 10},
						notes: "Sliced: 7-8 min. Whole baby carrots: 10 min.",
					},
					{
						method: "boil",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 5, max: 10},
						notes: "Sliced: 5-7 min. Whole: 10 min.",
					},
					{
						method: "pan_sear",
						applianceTemp: 375,
						applianceTempUnit: "F",
						timeMinutes: {min: 10, max: 15},
						notes: "Add splash of water and cover to steam-sauté.",
					},
				],
			},
			{
				portionDescription: "whole (medium)",
				methods: [
					{
						method: "oven_roast",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 35, max: 45},
						notes: "Halve lengthwise for faster cooking.",
					},
				],
			},
		],

		visualIndicators: [
			"Fork tender",
			"Vibrant orange color",
			"Slight caramelization when roasted",
		],

		sources: ["USDA"],
	},

	{
		id: "green_beans",
		name: "Green Beans",
		category: "vegetable",
		aliases: ["string beans", "snap beans", "haricots verts"],

		safeMinimumTemp: 135,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		cookingInstructions: [
			{
				portionDescription: "trimmed",
				methods: [
					{
						method: "steam",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 5, max: 7},
						notes: "Tender-crisp at 5 min.",
					},
					{
						method: "boil",
						applianceTemp: 212,
						applianceTempUnit: "F",
						timeMinutes: {min: 4, max: 6},
						notes: "Blanch in well-salted water.",
					},
					{
						method: "oven_roast",
						applianceTemp: 425,
						applianceTempUnit: "F",
						timeMinutes: {min: 15, max: 20},
						notes: "Toss with oil. Some charring is good.",
					},
					{
						method: "pan_sear",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 8, max: 10},
						notes: "High heat, let them blister.",
					},
					{
						method: "air_fry",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 8, max: 10},
						notes: "Shake basket halfway.",
					},
				],
			},
		],

		visualIndicators: [
			"Bright green color",
			"Crisp-tender texture",
			"Snaps when bent (not limp)",
		],

		sources: ["USDA"],
	},

	{
		id: "zucchini",
		name: "Zucchini",
		category: "vegetable",
		aliases: ["courgette", "summer squash"],

		safeMinimumTemp: 135,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		cookingInstructions: [
			{
				portionDescription: "sliced (1/2 inch rounds or half-moons)",
				methods: [
					{
						method: "pan_sear",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 4, max: 6},
						notes: "High heat, single layer. Don't stir too much.",
					},
					{
						method: "oven_roast",
						applianceTemp: 425,
						applianceTempUnit: "F",
						timeMinutes: {min: 15, max: 20},
						notes: "Single layer. Salt before roasting to draw out moisture.",
					},
					{
						method: "grill",
						applianceTemp: 450,
						applianceTempUnit: "F",
						timeMinutes: {min: 3, max: 4},
						notes: "Per side. Cut lengthwise for grill marks.",
					},
					{
						method: "air_fry",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 10, max: 12},
						notes: "Shake halfway.",
					},
				],
			},
		],

		visualIndicators: [
			"Golden brown spots",
			"Tender but not mushy",
			"Should still have some structure",
		],

		sources: ["USDA"],
	},

	{
		id: "bell_pepper",
		name: "Bell Pepper",
		category: "vegetable",
		aliases: ["sweet pepper", "capsicum", "red pepper", "green pepper"],

		safeMinimumTemp: 135,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		cookingInstructions: [
			{
				portionDescription: "sliced or diced",
				methods: [
					{
						method: "pan_sear",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 5, max: 8},
						notes: "High heat for char, medium for soft.",
					},
					{
						method: "oven_roast",
						applianceTemp: 425,
						applianceTempUnit: "F",
						timeMinutes: {min: 20, max: 25},
					},
					{
						method: "grill",
						applianceTemp: 450,
						applianceTempUnit: "F",
						timeMinutes: {min: 4, max: 6},
						notes: "Per side.",
					},
				],
			},
			{
				portionDescription: "whole (for roasting/charring)",
				methods: [
					{
						method: "broil",
						applianceTemp: 500,
						applianceTempUnit: "F",
						timeMinutes: {min: 15, max: 20},
						notes: "Turn every 5 min until charred all over. Steam in bag to peel.",
					},
					{
						method: "grill",
						applianceTemp: 500,
						applianceTempUnit: "F",
						timeMinutes: {min: 10, max: 15},
						notes: "Direct flame, turn until charred all over.",
					},
				],
			},
		],

		visualIndicators: [
			"Softened but not collapsed",
			"Slight char marks when roasted",
			"Skin blisters and blackens when charring",
		],

		sources: ["USDA"],
	},

	{
		id: "onion",
		name: "Onion",
		category: "vegetable",
		aliases: ["yellow onion", "white onion", "red onion", "sweet onion"],

		safeMinimumTemp: 135,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		cookingInstructions: [
			{
				portionDescription: "sliced or diced",
				methods: [
					{
						method: "pan_sear",
						applianceTemp: 350,
						applianceTempUnit: "F",
						timeMinutes: {min: 8, max: 12},
						notes: "Medium heat for softened. Stir occasionally.",
					},
					{
						method: "pan_sear",
						applianceTemp: 275,
						applianceTempUnit: "F",
						timeMinutes: {min: 45, max: 60},
						notes: "Low and slow for caramelized. Stir every 10 min.",
					},
					{
						method: "oven_roast",
						applianceTemp: 425,
						applianceTempUnit: "F",
						timeMinutes: {min: 25, max: 35},
						notes: "Toss with oil. Edges will char.",
					},
					{
						method: "grill",
						applianceTemp: 450,
						applianceTempUnit: "F",
						timeMinutes: {min: 8, max: 12},
						notes: "Thick slices or wedges to prevent falling through.",
					},
				],
			},
		],

		visualIndicators: [
			"Softened: translucent, no bite",
			"Caramelized: deep golden brown, sweet aroma",
			"Charred: blackened edges, sweet interior",
		],

		sources: ["USDA"],
	},
]
