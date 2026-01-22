import type {CookingTemperatureEntry} from "../types"

export const pork: CookingTemperatureEntry[] = [
	{
		id: "pork_chop_bone_in",
		name: "Pork Chop (Bone-In)",
		category: "pork",
		aliases: [
			"bone-in pork chop",
			"pork loin chop",
			"center cut pork chop",
		],

		safeMinimumTemp: 145,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 3,

		donenessLevels: [
			{
				level: "medium",
				internalTemp: 145,
				internalTempUnit: "F",
				description: "Slightly pink center, juicy (USDA recommended)",
			},
			{
				level: "well_done",
				internalTemp: 160,
				internalTempUnit: "F",
				description: "No pink, drier texture",
			},
		],

		cookingInstructions: [
			{
				portionDescription: "standard (1 inch thick)",
				methods: [
					{
						method: "pan_sear",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 4, max: 5},
						notes: "Per side. Let come to room temp before cooking.",
					},
					{
						method: "oven_bake",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 15, max: 20},
						notes: "Sear first for best crust, then finish in oven.",
					},
					{
						method: "grill",
						applianceTemp: 450,
						applianceTempUnit: "F",
						timeMinutes: {min: 4, max: 5},
						notes: "Per side. Direct heat.",
					},
					{
						method: "air_fry",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 12, max: 15},
						notes: "Flip halfway through.",
					},
				],
			},
			{
				portionDescription: "thick cut (1.5 inches)",
				methods: [
					{
						method: "pan_sear",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 5, max: 6},
						notes: "Per side. Finish in 400°F oven for 8-10 min.",
					},
					{
						method: "oven_bake",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 20, max: 25},
					},
					{
						method: "grill",
						applianceTemp: 450,
						applianceTempUnit: "F",
						timeMinutes: {min: 6, max: 8},
						notes: "Per side. Move to indirect heat if browning too fast.",
					},
				],
			},
		],

		visualIndicators: [
			"Juices run clear",
			"Slight pink in center is safe and desirable",
			"Firm to touch but not hard",
		],

		sources: ["USDA FSIS", "National Pork Board"],
	},

	{
		id: "pork_chop_boneless",
		name: "Pork Chop (Boneless)",
		category: "pork",
		aliases: ["boneless pork chop", "pork cutlet"],

		safeMinimumTemp: 145,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 3,

		donenessLevels: [
			{
				level: "medium",
				internalTemp: 145,
				internalTempUnit: "F",
				description: "Slightly pink center, juicy",
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
				portionDescription: "standard (3/4 inch thick)",
				methods: [
					{
						method: "pan_sear",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 3, max: 4},
						notes: "Per side.",
					},
					{
						method: "oven_bake",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 12, max: 15},
					},
					{
						method: "grill",
						applianceTemp: 450,
						applianceTempUnit: "F",
						timeMinutes: {min: 3, max: 4},
						notes: "Per side.",
					},
					{
						method: "air_fry",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 10, max: 12},
						notes: "Flip halfway.",
					},
				],
			},
			{
				portionDescription: "thick cut (1 inch)",
				methods: [
					{
						method: "pan_sear",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 4, max: 5},
						notes: "Per side.",
					},
					{
						method: "oven_bake",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 15, max: 18},
					},
				],
			},
		],

		visualIndicators: [
			"Juices run clear",
			"Internal temp is most reliable indicator",
		],

		sources: ["USDA FSIS"],
	},

	{
		id: "pork_tenderloin",
		name: "Pork Tenderloin",
		category: "pork",
		aliases: ["pork tender", "pork fillet"],

		safeMinimumTemp: 145,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 5,

		donenessLevels: [
			{
				level: "medium",
				internalTemp: 145,
				internalTempUnit: "F",
				description: "Slightly pink center, very juicy",
			},
			{
				level: "medium_well",
				internalTemp: 150,
				internalTempUnit: "F",
				description: "Barely pink, still moist",
			},
		],

		cookingInstructions: [
			{
				portionDescription: "whole tenderloin (1-1.5 lbs)",
				methods: [
					{
						method: "oven_roast",
						applianceTemp: 425,
						applianceTempUnit: "F",
						timeMinutes: {min: 20, max: 25},
						notes: "Sear all sides first, then roast.",
					},
					{
						method: "grill",
						applianceTemp: 450,
						applianceTempUnit: "F",
						timeMinutes: {min: 15, max: 20},
						notes: "Rotate every 5 minutes for even cooking. Use indirect heat.",
					},
					{
						method: "air_fry",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 18, max: 22},
						notes: "Turn halfway through.",
					},
				],
			},
		],

		visualIndicators: [
			"Firm when pressed",
			"Slightly pink center is ideal",
			"Let rest before slicing - very important for tenderloin",
		],

		sources: ["USDA FSIS", "National Pork Board"],
	},

	{
		id: "ground_pork",
		name: "Ground Pork",
		category: "pork",
		aliases: ["pork mince", "minced pork"],

		safeMinimumTemp: 160,
		safeMinimumTempUnit: "F",
		restTimeMinutes: 0,

		cookingInstructions: [
			{
				portionDescription: "loose/crumbled (1 lb)",
				methods: [
					{
						method: "pan_fry",
						applianceTemp: 375,
						applianceTempUnit: "F",
						timeMinutes: {min: 8, max: 12},
						notes: "Break into small pieces. Stir frequently.",
					},
				],
			},
			{
				portionDescription: "patty (4 oz, 3/4 inch thick)",
				methods: [
					{
						method: "pan_fry",
						applianceTemp: 375,
						applianceTempUnit: "F",
						timeMinutes: {min: 4, max: 5},
						notes: "Per side.",
					},
					{
						method: "grill",
						applianceTemp: 400,
						applianceTempUnit: "F",
						timeMinutes: {min: 5, max: 6},
						notes: "Per side.",
					},
				],
			},
		],

		visualIndicators: ["No pink remaining", "Juices run clear"],

		sources: ["USDA FSIS"],
	},
]
