import type {CookingTemperatureEntry} from "../types"

export const poultry: CookingTemperatureEntry[] = [
	{
		id: "chicken_breast_boneless",
		name: "Chicken Breast (Boneless, Skinless)",
		category: "poultry",
		aliases: ["chicken breast", "boneless chicken", "chicken fillet"],

		safeMinimumTemp: 165,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 3,

		// Poultry doesn't have doneness levels - it's either safe or not
		donenessLevels: undefined,

		cookingInstructions: [
			{
				portionDescription: "standard (6-8 oz, 1 inch thick)",
				methods: [
					{
						method: "oven_bake",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 22, max: 26},
						notes: "Let rest 5 minutes before slicing",
					},
					{
						method: "pan_sear",
						applianceTemp: 400, // represents "medium-high"
						applianceTempUnit: "F",
						timeMinutes: {min: 6, max: 8},
						notes: "Per side. Flatten to even thickness for best results.",
					},
					{
						method: "grill",
						applianceTemp: 450,
						applianceTempUnit: "F",
						timeMinutes: {min: 6, max: 8},
						notes: "Per side. Direct heat.",
					},
					{
						method: "poach",
						applianceTemp: 170,
						applianceTempUnit: "F",
						timeMinutes: {min: 15, max: 20},
						notes: "Liquid should be barely simmering, not boiling.",
					},
					{
						method: "air_fry",
						applianceTemp: 375,
						applianceTempUnit: "F",
						timeMinutes: {min: 18, max: 22},
						notes: "Flip halfway through.",
					},
				],
			},
			{
				portionDescription: "thick cut (10-12 oz, 1.5 inches)",
				methods: [
					{
						method: "oven_bake",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 26, max: 32},
					},
					{
						method: "pan_sear",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 8, max: 10},
						notes: "Per side. Consider finishing in oven.",
					},
				],
			},
		],

		visualIndicators: [
			"Juices run clear, not pink",
			"Flesh is opaque white throughout",
			"No pink remaining at thickest part",
		],

		sources: ["USDA FSIS", "America's Test Kitchen"],
	},

	{
		id: "chicken_thigh_boneless",
		name: "Chicken Thigh (Boneless)",
		category: "poultry",
		aliases: ["boneless thigh", "chicken thigh meat"],

		safeMinimumTemp: 165,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 3,

		cookingInstructions: [
			{
				portionDescription: "standard (4-6 oz)",
				methods: [
					{
						method: "oven_bake",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 20, max: 25},
					},
					{
						method: "pan_sear",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 5, max: 7},
						notes: "Per side. Start skin-side down if skin-on.",
					},
					{
						method: "grill",
						applianceTemp: 450,
						applianceTempUnit: "F",
						timeMinutes: {min: 5, max: 7},
						notes: "Per side.",
					},
				],
			},
		],

		visualIndicators: [
			"Internal temp reaches 165°F",
			"Thighs are more forgiving - can go to 175-180°F for better texture",
		],

		sources: ["USDA FSIS"],
	},
]
