import {describe, it, expect} from "vitest"
import {
	findByName,
	findById,
	findByCategory,
	getAllEntries,
	getAllCategories,
	getCategoryName,
	convertTemperature,
	getSafeMinimumTemp,
	getDonenessTemp,
	getCookingMethods,
	getCookingInstruction,
	getQuickReference,
	search,
} from "./index"

describe("findByName", () => {
	it("should find an entry by exact name", () => {
		const result = findByName("Ribeye Steak")
		expect(result).toBeDefined()
		expect(result?.id).toBe("beef_steak_ribeye")
	})

	it("should find an entry by partial name (case insensitive)", () => {
		const result = findByName("ribeye")
		expect(result).toBeDefined()
		expect(result?.name).toBe("Ribeye Steak")
	})

	it("should find an entry by alias", () => {
		const result = findByName("hamburger")
		expect(result).toBeDefined()
		expect(result?.id).toBe("beef_ground")
	})

	it("should return undefined for non-existent entry", () => {
		const result = findByName("nonexistent food item")
		expect(result).toBeUndefined()
	})

	it("should handle whitespace in query", () => {
		const result = findByName("  ribeye  ")
		expect(result).toBeDefined()
		expect(result?.name).toBe("Ribeye Steak")
	})
})

describe("findById", () => {
	it("should find an entry by exact id", () => {
		const result = findById("beef_steak_ribeye")
		expect(result).toBeDefined()
		expect(result?.name).toBe("Ribeye Steak")
	})

	it("should return undefined for non-existent id", () => {
		const result = findById("nonexistent_id")
		expect(result).toBeUndefined()
	})
})

describe("findByCategory", () => {
	it("should find all entries in beef category", () => {
		const results = findByCategory("beef")
		expect(results.length).toBeGreaterThan(0)
		expect(results.every(entry => entry.category === "beef")).toBe(true)
	})

	it("should find all entries in poultry category", () => {
		const results = findByCategory("poultry")
		expect(results.length).toBeGreaterThan(0)
		expect(results.every(entry => entry.category === "poultry")).toBe(true)
	})

	it("should return empty array for category with no entries", () => {
		const results = findByCategory("lamb")
		expect(Array.isArray(results)).toBe(true)
	})
})

describe("getAllEntries", () => {
	it("should return all entries", () => {
		const entries = getAllEntries()
		expect(entries.length).toBeGreaterThan(0)
	})

	it("should return a copy (not the original array)", () => {
		const entries1 = getAllEntries()
		const entries2 = getAllEntries()
		expect(entries1).not.toBe(entries2)
	})
})

describe("getAllCategories", () => {
	it("should return unique categories", () => {
		const categories = getAllCategories()
		expect(categories.length).toBeGreaterThan(0)
		const uniqueCategories = [...new Set(categories)]
		expect(categories.length).toBe(uniqueCategories.length)
	})

	it("should include common categories", () => {
		const categories = getAllCategories()
		expect(categories).toContain("beef")
		expect(categories).toContain("poultry")
	})
})

describe("getCategoryName", () => {
	it("should return human-readable name for beef", () => {
		expect(getCategoryName("beef")).toBe("Beef")
	})

	it("should return human-readable name for poultry", () => {
		expect(getCategoryName("poultry")).toBe("Poultry")
	})

	it("should return human-readable name for pork", () => {
		expect(getCategoryName("pork")).toBe("Pork")
	})

	it("should return human-readable name for lamb", () => {
		expect(getCategoryName("lamb")).toBe("Lamb")
	})

	it("should return human-readable name for seafood_fish", () => {
		expect(getCategoryName("seafood_fish")).toBe("Fish")
	})

	it("should return human-readable name for seafood_shellfish", () => {
		expect(getCategoryName("seafood_shellfish")).toBe("Shellfish")
	})

	it("should return human-readable name for egg", () => {
		expect(getCategoryName("egg")).toBe("Eggs")
	})

	it("should return human-readable name for vegetable", () => {
		expect(getCategoryName("vegetable")).toBe("Vegetables")
	})

	it("should return human-readable name for grain", () => {
		expect(getCategoryName("grain")).toBe("Grains")
	})

	it("should return human-readable name for legume", () => {
		expect(getCategoryName("legume")).toBe("Legumes")
	})
})

describe("convertTemperature", () => {
	it("should return same temp when units are the same", () => {
		expect(convertTemperature(100, "F", "F")).toBe(100)
		expect(convertTemperature(100, "C", "C")).toBe(100)
	})

	it("should convert Fahrenheit to Celsius correctly", () => {
		expect(convertTemperature(32, "F", "C")).toBe(0)
		expect(convertTemperature(212, "F", "C")).toBe(100)
		expect(convertTemperature(145, "F", "C")).toBe(63) // rounded
	})

	it("should convert Celsius to Fahrenheit correctly", () => {
		expect(convertTemperature(0, "C", "F")).toBe(32)
		expect(convertTemperature(100, "C", "F")).toBe(212)
		expect(convertTemperature(63, "C", "F")).toBe(145) // rounded
	})
})

describe("getSafeMinimumTemp", () => {
	it("should return safe minimum temp for ribeye steak in F", () => {
		const result = getSafeMinimumTemp("beef_steak_ribeye", "F")
		expect(result).toBeDefined()
		expect(result?.temp).toBe(145)
		expect(result?.restMinutes).toBe(3)
	})

	it("should return safe minimum temp for ground beef in F", () => {
		const result = getSafeMinimumTemp("beef_ground", "F")
		expect(result).toBeDefined()
		expect(result?.temp).toBe(160)
		expect(result?.restMinutes).toBe(0)
	})

	it("should convert temperature when requesting different unit", () => {
		const result = getSafeMinimumTemp("beef_steak_ribeye", "C")
		expect(result).toBeDefined()
		expect(result?.temp).toBe(63) // 145F -> 63C (rounded)
	})

	it("should return undefined for non-existent ingredient", () => {
		const result = getSafeMinimumTemp("nonexistent_id")
		expect(result).toBeUndefined()
	})

	it("should default to Fahrenheit", () => {
		const result = getSafeMinimumTemp("beef_steak_ribeye")
		expect(result?.temp).toBe(145)
	})
})

describe("getDonenessTemp", () => {
	it("should return temperature for medium rare ribeye in F", () => {
		const result = getDonenessTemp("beef_steak_ribeye", "medium_rare", "F")
		expect(result).toBe(135)
	})

	it("should return temperature for rare ribeye in F", () => {
		const result = getDonenessTemp("beef_steak_ribeye", "rare", "F")
		expect(result).toBe(125)
	})

	it("should convert temperature when requesting Celsius", () => {
		const result = getDonenessTemp("beef_steak_ribeye", "medium_rare", "C")
		expect(result).toBe(57) // 135F -> 57C (rounded)
	})

	it("should return undefined for ingredient without doneness levels", () => {
		const result = getDonenessTemp("beef_ground", "medium_rare")
		expect(result).toBeUndefined()
	})

	it("should return undefined for non-existent ingredient", () => {
		const result = getDonenessTemp("nonexistent_id", "medium_rare")
		expect(result).toBeUndefined()
	})

	it("should return undefined for invalid doneness level", () => {
		const result = getDonenessTemp(
			"beef_steak_ribeye",
			"invalid" as "medium_rare"
		)
		expect(result).toBeUndefined()
	})
})

describe("getCookingMethods", () => {
	it("should return cooking methods for ribeye steak", () => {
		const methods = getCookingMethods("beef_steak_ribeye")
		expect(methods.length).toBeGreaterThan(0)
		expect(methods).toContain("pan_sear")
		expect(methods).toContain("grill")
	})

	it("should return cooking methods for ground beef", () => {
		const methods = getCookingMethods("beef_ground")
		expect(methods.length).toBeGreaterThan(0)
		expect(methods).toContain("pan_fry")
		expect(methods).toContain("grill")
	})

	it("should return empty array for non-existent ingredient", () => {
		const methods = getCookingMethods("nonexistent_id")
		expect(methods).toEqual([])
	})

	it("should return unique methods (no duplicates)", () => {
		const methods = getCookingMethods("beef_steak_ribeye")
		const uniqueMethods = [...new Set(methods)]
		expect(methods.length).toBe(uniqueMethods.length)
	})
})

describe("getCookingInstruction", () => {
	it("should return cooking instruction for ribeye pan_sear", () => {
		const result = getCookingInstruction("beef_steak_ribeye", "pan_sear")
		expect(result).toBeDefined()
		expect(result?.applianceTemp).toBe(500)
		expect(result?.applianceTempUnit).toBe("F")
		expect(result?.timeMinutes).toEqual({min: 3, max: 4})
	})

	it("should return instruction for specific portion when hint provided", () => {
		const result = getCookingInstruction(
			"beef_steak_ribeye",
			"pan_sear",
			"1.5 inches"
		)
		expect(result).toBeDefined()
		expect(result?.portionDescription).toBe("1.5 inches thick")
		expect(result?.timeMinutes).toEqual({min: 4, max: 5})
	})

	it("should return first portion when no hint matches", () => {
		const result = getCookingInstruction(
			"beef_steak_ribeye",
			"pan_sear",
			"nonexistent portion"
		)
		expect(result).toBeDefined()
		expect(result?.portionDescription).toBe("1 inch thick")
	})

	it("should return undefined for non-existent ingredient", () => {
		const result = getCookingInstruction("nonexistent_id", "pan_sear")
		expect(result).toBeUndefined()
	})

	it("should return undefined for non-existent method", () => {
		const result = getCookingInstruction("beef_steak_ribeye", "sous_vide")
		expect(result).toBeUndefined()
	})

	it("should include notes when available", () => {
		const result = getCookingInstruction("beef_steak_ribeye", "pan_sear")
		expect(result?.notes).toBeDefined()
		expect(result?.notes).toContain("medium-rare")
	})
})

describe("getQuickReference", () => {
	it("should return quick reference for ribeye steak", () => {
		const result = getQuickReference("ribeye")
		expect(result).toBeDefined()
		expect(result?.name).toBe("Ribeye Steak")
		expect(result?.safeMinimumTemp).toBe(145)
		expect(result?.tempUnit).toBe("F")
		expect(result?.restMinutes).toBe(3)
	})

	it("should include suggested method when specified", () => {
		const result = getQuickReference("ribeye", "pan_sear")
		expect(result?.suggestedMethod).toBeDefined()
		expect(result?.suggestedMethod?.method).toBe("pan_sear")
		expect(result?.suggestedMethod?.applianceTemp).toBe(500)
	})

	it("should convert temperatures when Celsius requested", () => {
		const result = getQuickReference("ribeye", "pan_sear", "C")
		expect(result?.tempUnit).toBe("C")
		expect(result?.safeMinimumTemp).toBe(63) // 145F -> 63C
		expect(result?.suggestedMethod?.applianceTemp).toBe(260) // 500F -> 260C
	})

	it("should return undefined for non-existent food", () => {
		const result = getQuickReference("nonexistent food")
		expect(result).toBeUndefined()
	})

	it("should include visual indicators", () => {
		const result = getQuickReference("ribeye")
		expect(result?.visualIndicators).toBeDefined()
		expect(Array.isArray(result?.visualIndicators)).toBe(true)
		expect(result?.visualIndicators?.length).toBeGreaterThan(0)
	})

	it("should handle when method is not available", () => {
		const result = getQuickReference("ribeye", "sous_vide")
		expect(result).toBeDefined()
		expect(result?.suggestedMethod).toBeUndefined()
	})

	it("should find by alias", () => {
		const result = getQuickReference("hamburger")
		expect(result).toBeDefined()
		expect(result?.name).toBe("Ground Beef")
	})
})

describe("search", () => {
  it("should return multiple matching entries", () => {
    const results = search("chicken");
    expect(results.length).toBeGreaterThan(1);
    expect(results.some((entry) => entry.id === "chicken_breast_boneless")).toBe(true);
    expect(results.some((entry) => entry.id === "chicken_thigh_boneless")).toBe(true);
  });

  it("should return empty array for empty query", () => {
    const results = search("");
    expect(results).toEqual([]);
  });

  it("should return empty array for whitespace-only query", () => {
    const results = search("   ");
    expect(results).toEqual([]);
  });

  it("should return empty array when no matches found", () => {
    const results = search("nonexistentingredient");
    expect(results).toEqual([]);
  });

  it("should be case insensitive", () => {
    const resultsLower = search("salmon");
    const resultsUpper = search("SALMON");
    const resultsMixed = search("SaLmOn");
    expect(resultsLower).toEqual(resultsUpper);
    expect(resultsLower).toEqual(resultsMixed);
  });

  it("should match against aliases", () => {
    const results = search("prawns"); // alias for shrimp
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((entry) => entry.id === "shrimp")).toBe(true);
  });

  it("should filter by category when specified", () => {
    const results = search("fillet", { category: "seafood_fish" });
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((entry) => entry.category === "seafood_fish")).toBe(true);
  });

  it("should return empty array when category filter excludes all matches", () => {
    const results = search("chicken", { category: "seafood_fish" });
    expect(results).toEqual([]);
  });

  it("should respect limit option", () => {
    const results = search("pork", { limit: 2 });
    expect(results.length).toBeLessThanOrEqual(2);
  });

  it("should return all results when limit is greater than matches", () => {
    const allResults = search("salmon");
    const limitedResults = search("salmon", { limit: 100 });
    expect(limitedResults.length).toBe(allResults.length);
  });

  it("should combine category and limit options", () => {
    const results = search("chop", { category: "pork", limit: 1 });
    expect(results.length).toBeLessThanOrEqual(1);
    expect(results.every((entry) => entry.category === "pork")).toBe(true);
  });

  it("should prioritize exact name matches", () => {
    const results = search("shrimp");
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].name.toLowerCase()).toBe("shrimp");
  });

  it("should prioritize name matches over alias-only matches", () => {
    const results = search("salmon");
    // First result should have "salmon" in name, not just in aliases
    expect(results[0].name.toLowerCase()).toContain("salmon");
  });

  it("should handle partial matches", () => {
    const results = search("sal"); // partial match for salmon
    expect(results.some((entry) => entry.name.toLowerCase().includes("sal"))).toBe(true);
  });

  it("should trim whitespace from query", () => {
    const resultsTrimmed = search("salmon");
    const resultsWithSpaces = search("  salmon  ");
    expect(resultsTrimmed).toEqual(resultsWithSpaces);
  });
});
