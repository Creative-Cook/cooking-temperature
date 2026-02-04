import {poultry} from "./data/poultry"
import {beef} from "./data/beef"
import {pork} from "./data/pork"
import {seafood} from "./data/seafood"
import {eggs} from "./data/eggs"
import {vegetables} from "./data/vegetables"
import {grains} from "./data/grains"
import type {
	CookingTemperatureEntry,
	CookingMethod,
	IngredientCategory,
	TemperatureUnit,
	DonenessLevel,
} from "./types"

const ALL_ENTRIES: CookingTemperatureEntry[] = [
	...poultry,
	...beef,
	...pork,
	...seafood,
	...eggs,
	...vegetables,
	...grains,
]

// Basic lookups
export const findByName = (
	query: string
): CookingTemperatureEntry | undefined => {
	const normalizedQuery = query.toLowerCase().trim()

	return ALL_ENTRIES.find(
		entry =>
			entry.name.toLowerCase().includes(normalizedQuery) ||
			entry.aliases.some(alias =>
				alias.toLowerCase().includes(normalizedQuery)
			)
	)
}

export const findById = (id: string): CookingTemperatureEntry | undefined => {
	return ALL_ENTRIES.find(entry => entry.id === id)
}

export const findByCategory = (
	category: IngredientCategory
): CookingTemperatureEntry[] => {
	return ALL_ENTRIES.filter(entry => entry.category === category)
}

export const getAllEntries = (): CookingTemperatureEntry[] => {
	return [...ALL_ENTRIES]
}

export const getAllCategories = (): IngredientCategory[] => {
	return [...new Set(ALL_ENTRIES.map(entry => entry.category))]
}

const CATEGORY_NAMES: Record<IngredientCategory, string> = {
	poultry: "Poultry",
	beef: "Beef",
	pork: "Pork",
	lamb: "Lamb",
	seafood_fish: "Fish",
	seafood_shellfish: "Shellfish",
	egg: "Eggs",
	vegetable: "Vegetables",
	grain: "Grains",
	legume: "Legumes",
}

export const getCategoryName = (category: IngredientCategory): string => {
	return CATEGORY_NAMES[category]
}

// Temperature utilities
export const convertTemperature = (
	temp: number,
	from_unit: TemperatureUnit,
	to_unit: TemperatureUnit
): number => {
	if (from_unit === to_unit) return temp
	return from_unit === "F"
		? Math.round((temp - 32) * (5 / 9))
		: Math.round(temp * (9 / 5) + 32)
}

export const getSafeMinimumTemp = (
	ingredientId: string,
	unit: TemperatureUnit = "F"
): {temp: number; restMinutes: number} | undefined => {
	const entry = ALL_ENTRIES.find(e => e.id === ingredientId)
	if (!entry) return undefined

	const temp =
		unit === entry.safeMinimumTempUnit
			? entry.safeMinimumTemp
			: convertTemperature(
					entry.safeMinimumTemp,
					entry.safeMinimumTempUnit,
					unit
				)

	return {
		temp,
		restMinutes: entry.restTimeMinutes ?? 0,
	}
}

export const getDonenessTemp = (
	ingredientId: string,
	doneness_level: DonenessLevel,
	unit: TemperatureUnit = "F"
): number | undefined => {
	const entry = ALL_ENTRIES.find(e => e.id === ingredientId)
	if (!entry || !entry.donenessLevels) return undefined

	const level = entry.donenessLevels.find(d => d.level === doneness_level)
	if (!level) return undefined

	return unit === level.internalTempUnit
		? level.internalTemp
		: convertTemperature(level.internalTemp, level.internalTempUnit, unit)
}

// Cooking instruction lookups
export const getCookingMethods = (ingredientId: string): CookingMethod[] => {
	const entry = ALL_ENTRIES.find(e => e.id === ingredientId)
	if (!entry) return []

	const methods = new Set<CookingMethod>()
	entry.cookingInstructions.forEach(portion => {
		portion.methods.forEach(method => methods.add(method.method))
	})

	return [...methods]
}

export const getCookingInstruction = (
	ingredientId: string,
	cooking_method: CookingMethod,
	portionHint?: string
):
	| {
			applianceTemp: number
			applianceTempUnit: TemperatureUnit
			timeMinutes: {min: number; max: number}
			notes?: string
			portionDescription: string
	  }
	| undefined => {
	const entry = ALL_ENTRIES.find(e => e.id === ingredientId)
	if (!entry) return undefined

	// Find matching portion
	const portion = portionHint
		? (entry.cookingInstructions.find(p =>
				p.portionDescription
					.toLowerCase()
					.includes(portionHint.toLowerCase())
			) ?? entry.cookingInstructions[0])
		: entry.cookingInstructions[0]

	if (!portion) return undefined

	const instruction = portion.methods.find(m => m.method === cooking_method)
	if (!instruction) return undefined

	return {
		applianceTemp: instruction.applianceTemp,
		applianceTempUnit: instruction.applianceTempUnit,
		timeMinutes: instruction.timeMinutes,
		notes: instruction.notes,
		portionDescription: portion.portionDescription,
	}
}

// Quick reference function - the main use case you described
export const getQuickReference = (
	query: string,
	cooking_method?: CookingMethod,
	unit: TemperatureUnit = "F"
):
	| {
			name: string
			safeMinimumTemp: number
			tempUnit: TemperatureUnit
			restMinutes: number
			suggestedMethod?: {
				method: CookingMethod
				applianceTemp: number
				timeMinutes: {min: number; max: number}
				notes?: string
			}
			visualIndicators: string[]
	  }
	| undefined => {
	const entry = findByName(query)
	if (!entry) return undefined

	const safeTemp =
		unit === entry.safeMinimumTempUnit
			? entry.safeMinimumTemp
			: convertTemperature(
					entry.safeMinimumTemp,
					entry.safeMinimumTempUnit,
					unit
				)

	let suggestedMethod:
		| {
				method: CookingMethod
				applianceTemp: number
				timeMinutes: {min: number; max: number}
				notes?: string
		  }
		| undefined

	if (cooking_method) {
		const instruction = getCookingInstruction(entry.id, cooking_method)
		if (instruction) {
			suggestedMethod = {
				method: cooking_method,
				applianceTemp:
					unit === instruction.applianceTempUnit
						? instruction.applianceTemp
						: convertTemperature(
								instruction.applianceTemp,
								instruction.applianceTempUnit,
								unit
							),
				timeMinutes: instruction.timeMinutes,
				notes: instruction.notes,
			}
		}
	}

	return {
		name: entry.name,
		safeMinimumTemp: safeTemp,
		tempUnit: unit,
		restMinutes: entry.restTimeMinutes ?? 0,
		suggestedMethod,
		visualIndicators: entry.visualIndicators ?? [],
	}
}

export const search = (
  query: string,
  options?: {
    category?: IngredientCategory;
    limit?: number;
  }
): CookingTemperatureEntry[] => {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) return [];

  let results = ALL_ENTRIES.filter(
    (entry) =>
      entry.name.toLowerCase().includes(normalizedQuery) ||
      entry.aliases.some((alias) =>
        alias.toLowerCase().includes(normalizedQuery)
      )
  );

  // Filter by category if specified
  if (options?.category) {
    results = results.filter((entry) => entry.category === options.category);
  }

  // Sort by relevance: exact matches first, then name matches, then alias matches
  results.sort((entryA, entryB) => {
    const aNameLower = entryA.name.toLowerCase();
    const bNameLower = entryB.name.toLowerCase();

    // Exact name match gets highest priority
    const aExact = aNameLower === normalizedQuery;
    const bExact = bNameLower === normalizedQuery;
    if (aExact && !bExact) return -1;
    if (bExact && !aExact) return 1;

    // Name starts with query
    const aStarts = aNameLower.startsWith(normalizedQuery);
    const bStarts = bNameLower.startsWith(normalizedQuery);
    if (aStarts && !bStarts) return -1;
    if (bStarts && !aStarts) return 1;

    // Name contains query (vs only alias contains)
    const aNameContains = aNameLower.includes(normalizedQuery);
    const bNameContains = bNameLower.includes(normalizedQuery);
    if (aNameContains && !bNameContains) return -1;
    if (bNameContains && !aNameContains) return 1;

    // Alphabetical as tiebreaker
    return aNameLower.localeCompare(bNameLower);
  });

  // Apply limit if specified
  if (options?.limit && options.limit > 0) {
    return results.slice(0, options.limit);
  }

  return results;
};

// Re-export types
export * from "./types"
