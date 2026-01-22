# cooking-temperature

A comprehensive library for safe cooking temperatures, doneness levels, and cooking instructions for various ingredients.

## Installation

```bash
npm install cooking-temperature
```

## Usage

```typescript
import {
  findByName,
  getQuickReference,
  getSafeMinimumTemp,
  getDonenessTemp,
  getCookingInstruction,
  convertTemperature,
} from "cooking-temperature"

// Quick reference lookup
const chicken = getQuickReference("chicken breast", "oven_bake")
// Returns: { name, safeMinimumTemp, tempUnit, restMinutes, suggestedMethod, visualIndicators }

// Find an ingredient by name or alias
const beef = findByName("ribeye")

// Get safe minimum temperature
const safeTemp = getSafeMinimumTemp("chicken-breast", "F")
// Returns: { temp: 165, restMinutes: 0 }

// Get doneness temperature for proteins
const mediumRare = getDonenessTemp("beef-ribeye", "medium_rare", "F")
// Returns: 135

// Get cooking instructions
const instructions = getCookingInstruction("salmon-fillet", "oven_bake")
// Returns: { applianceTemp, applianceTempUnit, timeMinutes, notes, portionDescription }

// Convert between Fahrenheit and Celsius
const celsius = convertTemperature(165, "F", "C")
// Returns: 74
```

## API

### Lookup Functions

- `findByName(query)` - Find an ingredient by name or alias
- `findById(id)` - Find an ingredient by its unique ID
- `findByCategory(category)` - Get all ingredients in a category
- `getAllEntries()` - Get all cooking temperature entries
- `getAllCategories()` - Get all available categories

### Temperature Functions

- `convertTemperature(temp, from, to)` - Convert between Fahrenheit and Celsius
- `getSafeMinimumTemp(ingredientId, unit?)` - Get USDA safe minimum temperature
- `getDonenessTemp(ingredientId, doneness, unit?)` - Get temperature for a specific doneness level

### Cooking Instructions

- `getCookingMethods(ingredientId)` - Get available cooking methods for an ingredient
- `getCookingInstruction(ingredientId, method, portionHint?)` - Get detailed cooking instructions
- `getQuickReference(query, method?, unit?)` - Get a quick reference with all relevant info

## Categories

- `poultry` - Chicken, turkey, duck
- `beef` - Steaks, roasts, ground beef
- `pork` - Chops, tenderloin, ribs
- `seafood_fish` - Salmon, tuna, cod
- `seafood_shellfish` - Shrimp, lobster, scallops
- `egg` - Various egg preparations
- `vegetable` - Common vegetables
- `grain` - Rice, pasta, quinoa

## Doneness Levels

For proteins that support doneness preferences:

- `rare`
- `medium_rare`
- `medium`
- `medium_well`
- `well_done`
- `safe_minimum` (USDA baseline)

## Cooking Methods

- `oven_roast`, `oven_bake`
- `pan_sear`, `pan_fry`
- `grill`, `broil`
- `poach`, `simmer`, `boil`, `steam`
- `sous_vide`
- `air_fry`, `deep_fry`
- `slow_cook`

## License

MIT
