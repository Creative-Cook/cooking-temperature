import type {CookingTemperatureEntry} from "../types"

export const beef: CookingTemperatureEntry[] = [
	{
		id: "beef_steak_ribeye",
		name: "Ribeye Steak",
		category: "beef",
		aliases: ["rib eye", "rib-eye", "delmonico"],

		safeMinimumTemp: 145,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 3,

		donenessLevels: [
			{
				level: "rare",
				internalTemp: 125,
				internalTempUnit: "F",
				description: "Cool red center",
			},
			{
				level: "medium_rare",
				internalTemp: 135,
				internalTempUnit: "F",
				description: "Warm red center",
			},
			{
				level: "medium",
				internalTemp: 145,
				internalTempUnit: "F",
				description: "Warm pink center",
			},
			{
				level: "medium_well",
				internalTemp: 150,
				internalTempUnit: "F",
				description: "Slightly pink center",
			},
			{
				level: "well_done",
				internalTemp: 160,
				internalTempUnit: "F",
				description: "No pink",
			},
		],

		cookingInstructions: [
			{
				portionDescription: "1 inch thick",
				methods: [
					{
						method: "pan_sear",
						applianceTemp: 500, // high heat
						applianceTempUnit: "F",
						timeMinutes: {min: 3, max: 4},
						notes: "Per side for medium-rare. Add 1 min per side for each doneness level.",
					},
					{
						method: "grill",
						applianceTemp: 450,
						applianceTempUnit: "F",
						timeMinutes: {min: 4, max: 5},
						notes: "Per side for medium-rare. Direct heat.",
					},
					{
						method: "broil",
						applianceTemp: 500,
						applianceTempUnit: "F",
						timeMinutes: {min: 4, max: 5},
						notes: "Per side for medium-rare. 4 inches from heat source.",
					},
				],
			},
			{
				portionDescription: "1.5 inches thick",
				methods: [
					{
						method: "pan_sear",
						applianceTemp: 500,
						applianceTempUnit: "F",
						timeMinutes: {min: 4, max: 5},
						notes: "Per side for medium-rare. Finish in 400°F oven for 5-7 min.",
					},
					{
						method: "grill",
						applianceTemp: 450,
						applianceTempUnit: "F",
						timeMinutes: {min: 5, max: 6},
						notes: "Per side for medium-rare.",
					},
				],
			},
		],

		visualIndicators: [
			"Use finger test: touch thumb to index finger, feel base of thumb = rare",
			"Crust should be deep brown",
		],

		sources: ["USDA FSIS", "Serious Eats"],
	},

	{
		id: "beef_ground",
		name: "Ground Beef",
		category: "beef",
		aliases: ["hamburger", "minced beef", "beef mince"],

		// Ground beef MUST reach 160°F - no exceptions
		safeMinimumTemp: 160,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		// No doneness levels - ground meat must be cooked through
		donenessLevels: undefined,

		cookingInstructions: [
			{
				portionDescription: "burger patty (4 oz, 3/4 inch thick)",
				methods: [
					{
						method: "pan_fry",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 4, max: 5},
						notes: "Per side. Do not press down on patty.",
					},
					{
						method: "grill",
						applianceTemp: 450,
						applianceTempUnit: "F",
						timeMinutes: {min: 4, max: 5},
						notes: "Per side. Direct heat.",
					},
				],
			},
		],

		visualIndicators: [
			"No pink remaining in center",
			"Juices run clear",
			"Internal temp must reach 160°F - color alone is not reliable",
		],

		sources: ["USDA FSIS"],
	},
]
