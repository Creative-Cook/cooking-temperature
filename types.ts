export type TemperatureUnit = "F" | "C"

export type CookingMethod =
	| "oven_roast"
	| "oven_bake"
	| "pan_sear"
	| "pan_fry"
	| "grill"
	| "broil"
	| "poach"
	| "simmer"
	| "boil"
	| "steam"
	| "sous_vide"
	| "air_fry"
	| "deep_fry"
	| "slow_cook"

export type DonenessLevel =
	| "rare"
	| "medium_rare"
	| "medium"
	| "medium_well"
	| "well_done"
	| "safe_minimum" // USDA baseline

export type IngredientCategory =
	| "poultry"
	| "beef"
	| "pork"
	| "lamb"
	| "seafood_fish"
	| "seafood_shellfish"
	| "egg"
	| "vegetable"
	| "grain"
	| "legume"

// The core cooking instruction for a specific method
export interface CookingInstruction {
	method: CookingMethod
	applianceTemp: number // oven/grill/pan temperature
	applianceTempUnit: TemperatureUnit
	timeMinutes: {min: number; max: number}
	notes?: string
}

// For proteins that support different doneness levels
export interface DonenessSpec {
	level: DonenessLevel
	internalTemp: number
	internalTempUnit: TemperatureUnit
	description: string // "pink center, warm throughout"
}

// The main ingredient entry
export interface CookingTemperatureEntry {
	id: string
	name: string
	category: IngredientCategory
	aliases: string[] // "chicken thigh", "bone-in thigh"

	// USDA safe minimum - the non-negotiable baseline
	safeMinimumTemp: number
	safeMinimumTempUnit: TemperatureUnit
	restTimeMinutes?: number // some meats need rest time

	// Optional doneness levels (mainly for beef, lamb)
	donenessLevels?: DonenessSpec[]

	// Cooking methods with instructions
	// Keyed by portion/cut size for practical lookup
	cookingInstructions: {
		portionDescription: string // "1 inch thick", "whole 4lb bird", "1 lb fillet"
		methods: CookingInstruction[]
	}[]

	// Visual/tactile doneness indicators
	visualIndicators?: string[]

	// Source attribution
	sources: string[]
}
