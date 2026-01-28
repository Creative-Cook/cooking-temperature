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
  findById,
  findByCategory,
  getAllEntries,
  getAllCategories,
  getCategoryName,
  getQuickReference,
  getSafeMinimumTemp,
  getDonenessTemp,
  getCookingMethods,
  getCookingInstruction,
  convertTemperature,
} from "cooking-temperature"

// Quick reference lookup
const chicken = getQuickReference("chicken breast", "oven_bake")
// Returns:
// {
//   name: "Chicken Breast",
//   safeMinimumTemp: 165,
//   tempUnit: "F",
//   restMinutes: 0,
//   suggestedMethod: {
//     method: "oven_bake",
//     applianceTemp: 400,
//     timeMinutes: { min: 22, max: 28 },
//     notes: "Let rest 5 minutes before slicing"
//   },
//   visualIndicators: ["No pink in center", "Juices run clear", "Firm to touch"]
// }

// Find an ingredient by name or alias
const beef = findByName("ribeye")
// Returns: CookingTemperatureEntry | undefined

// Get all available categories
const categories = getAllCategories()
// Returns: ["poultry", "beef", "pork", "seafood_fish", "seafood_shellfish", "egg", "vegetable", "grain"]

// Get human-readable category name
const name = getCategoryName("seafood_fish")
// Returns: "Fish"

// Get safe minimum temperature
const safeTemp = getSafeMinimumTemp("chicken-breast", "F")
// Returns: { temp: 165, restMinutes: 0 }

// Get doneness temperature for proteins
const mediumRare = getDonenessTemp("beef-steak-ribeye", "medium_rare", "F")
// Returns: 135

// Get available cooking methods
const methods = getCookingMethods("salmon-fillet")
// Returns: ["oven_bake", "pan_sear", "grill", "poach", "sous_vide"]

// Get cooking instructions
const instructions = getCookingInstruction("salmon-fillet", "oven_bake")
// Returns:
// {
//   applianceTemp: 400,
//   applianceTempUnit: "F",
//   timeMinutes: { min: 12, max: 15 },
//   notes: "Skin-side down",
//   portionDescription: "6 oz fillet, 1 inch thick"
// }

// Convert between Fahrenheit and Celsius
const celsius = convertTemperature(165, "F", "C")
// Returns: 74
```

## API

### Types

```typescript
type TemperatureUnit = "F" | "C"

type IngredientCategory =
  | "poultry" | "beef" | "pork" | "lamb"
  | "seafood_fish" | "seafood_shellfish"
  | "egg" | "vegetable" | "grain" | "legume"

type DonenessLevel =
  | "rare" | "medium_rare" | "medium"
  | "medium_well" | "well_done" | "safe_minimum"

type CookingMethod =
  | "oven_roast" | "oven_bake" | "pan_sear" | "pan_fry"
  | "grill" | "broil" | "poach" | "simmer" | "boil" | "steam"
  | "sous_vide" | "air_fry" | "deep_fry" | "slow_cook"
```

### Lookup Functions

#### `findByName(query: string): CookingTemperatureEntry | undefined`

Find an ingredient by name or alias (case-insensitive partial match).

```typescript
const entry = findByName("ribeye")
// Returns full CookingTemperatureEntry object or undefined
```

#### `findById(id: string): CookingTemperatureEntry | undefined`

Find an ingredient by its exact unique ID.

```typescript
const entry = findById("beef-steak-ribeye")
// Returns full CookingTemperatureEntry object or undefined
```

#### `findByCategory(category: IngredientCategory): CookingTemperatureEntry[]`

Get all ingredients in a category.

```typescript
const poultryItems = findByCategory("poultry")
// Returns: CookingTemperatureEntry[] (all poultry entries)
```

#### `getAllEntries(): CookingTemperatureEntry[]`

Get all cooking temperature entries in the library.

```typescript
const all = getAllEntries()
// Returns: CookingTemperatureEntry[] (all entries)
```

#### `getAllCategories(): IngredientCategory[]`

Get all available categories.

```typescript
const categories = getAllCategories()
// Returns: ["poultry", "beef", "pork", "seafood_fish", "seafood_shellfish", "egg", "vegetable", "grain"]
```

#### `getCategoryName(category: IngredientCategory): string`

Get the human-readable display name for a category.

```typescript
const name = getCategoryName("seafood_fish")
// Returns: "Fish"

const name2 = getCategoryName("seafood_shellfish")
// Returns: "Shellfish"
```

### Temperature Functions

#### `convertTemperature(temp: number, from_unit: TemperatureUnit, to_unit: TemperatureUnit): number`

Convert between Fahrenheit and Celsius.

```typescript
const celsius = convertTemperature(165, "F", "C")
// Returns: 74

const fahrenheit = convertTemperature(74, "C", "F")
// Returns: 165
```

#### `getSafeMinimumTemp(ingredientId: string, unit?: TemperatureUnit): { temp: number; restMinutes: number } | undefined`

Get USDA safe minimum internal temperature for an ingredient.

```typescript
const safeTemp = getSafeMinimumTemp("chicken-breast", "F")
// Returns: { temp: 165, restMinutes: 0 }

const beefTemp = getSafeMinimumTemp("beef-steak-ribeye", "F")
// Returns: { temp: 145, restMinutes: 3 }

const inCelsius = getSafeMinimumTemp("chicken-breast", "C")
// Returns: { temp: 74, restMinutes: 0 }
```

#### `getDonenessTemp(ingredientId: string, doneness_level: DonenessLevel, unit?: TemperatureUnit): number | undefined`

Get internal temperature for a specific doneness level.

```typescript
const rare = getDonenessTemp("beef-steak-ribeye", "rare", "F")
// Returns: 125

const mediumRare = getDonenessTemp("beef-steak-ribeye", "medium_rare", "F")
// Returns: 135

const medium = getDonenessTemp("beef-steak-ribeye", "medium", "C")
// Returns: 60
```

### Cooking Instructions

#### `getCookingMethods(ingredientId: string): CookingMethod[]`

Get available cooking methods for an ingredient.

```typescript
const methods = getCookingMethods("salmon-fillet")
// Returns: ["oven_bake", "pan_sear", "grill", "poach", "sous_vide"]

const chickenMethods = getCookingMethods("chicken-breast")
// Returns: ["oven_bake", "pan_sear", "grill", "poach", "sous_vide", "air_fry"]
```

#### `getCookingInstruction(ingredientId: string, cooking_method: CookingMethod, portionHint?: string): object | undefined`

Get detailed cooking instructions for a specific method.

```typescript
const instructions = getCookingInstruction("salmon-fillet", "oven_bake")
// Returns:
// {
//   applianceTemp: 400,
//   applianceTempUnit: "F",
//   timeMinutes: { min: 12, max: 15 },
//   notes: "Skin-side down",
//   portionDescription: "6 oz fillet, 1 inch thick"
// }

// With portion hint for specific cuts
const thickCut = getCookingInstruction("beef-steak-ribeye", "grill", "1.5 inch")
// Returns instructions for 1.5 inch thick steak
```

#### `getQuickReference(query: string, cooking_method?: CookingMethod, unit?: TemperatureUnit): object | undefined`

Get a quick reference with all relevant cooking info combined.

```typescript
const ref = getQuickReference("chicken breast", "oven_bake", "F")
// Returns:
// {
//   name: "Chicken Breast",
//   safeMinimumTemp: 165,
//   tempUnit: "F",
//   restMinutes: 0,
//   suggestedMethod: {
//     method: "oven_bake",
//     applianceTemp: 400,
//     timeMinutes: { min: 22, max: 28 },
//     notes: "Let rest 5 minutes before slicing"
//   },
//   visualIndicators: ["No pink in center", "Juices run clear", "Firm to touch"]
// }

// Without method - returns just temperature info
const tempOnly = getQuickReference("salmon", undefined, "C")
// Returns:
// {
//   name: "Salmon Fillet",
//   safeMinimumTemp: 63,
//   tempUnit: "C",
//   restMinutes: 0,
//   suggestedMethod: undefined,
//   visualIndicators: ["Flesh flakes easily", "Opaque throughout"]
// }
```

## Categories

| Category | Description | ID |
|----------|-------------|-----|
| Poultry | Chicken, turkey, duck | `poultry` |
| Beef | Steaks, roasts, ground beef | `beef` |
| Pork | Chops, tenderloin, ribs | `pork` |
| Lamb | Chops, leg, ground lamb | `lamb` |
| Fish | Salmon, tuna, cod | `seafood_fish` |
| Shellfish | Shrimp, lobster, scallops | `seafood_shellfish` |
| Eggs | Various egg preparations | `egg` |
| Vegetables | Common vegetables | `vegetable` |
| Grains | Rice, pasta, quinoa | `grain` |
| Legumes | Beans, lentils | `legume` |

## Doneness Levels

For proteins that support doneness preferences:

| Level | Description |
|-------|-------------|
| `rare` | Cool red center |
| `medium_rare` | Warm red center |
| `medium` | Warm pink center |
| `medium_well` | Slightly pink center |
| `well_done` | No pink, fully cooked |
| `safe_minimum` | USDA recommended baseline |

## Cooking Methods

| Method | Description |
|--------|-------------|
| `oven_roast` | Dry heat, uncovered, typically for larger cuts |
| `oven_bake` | Dry heat, may be covered |
| `pan_sear` | High heat, quick cooking |
| `pan_fry` | Medium heat, more oil |
| `grill` | Direct heat from below |
| `broil` | Direct heat from above |
| `poach` | Gentle simmering liquid |
| `simmer` | Low bubbling liquid |
| `boil` | Rolling boil |
| `steam` | Suspended over boiling water |
| `sous_vide` | Vacuum-sealed, precise temperature water bath |
| `air_fry` | Circulating hot air |
| `deep_fry` | Submerged in hot oil |
| `slow_cook` | Low temperature, long duration |

## Icons

The library includes SVG icons as base64-encoded data URLs for categories and common ingredients.

```typescript
import {
  CATEGORY_ICONS,
  INGREDIENT_ICONS,
  getIcon,
} from "cooking-temperature/icons"

// Get a category icon
const poultryIcon = CATEGORY_ICONS["poultry"]
// Returns: "data:image/svg+xml;base64,..."

// Get a specific ingredient icon
const salmonIcon = INGREDIENT_ICONS["salmon_fillet"]

// Use the helper function (falls back to category icon if no specific icon exists)
const icon = getIcon("salmon_fillet", "seafood_fish")
```

### Available Icon Exports

| Export | Description |
|--------|-------------|
| `CATEGORY_ICONS` | Icons for each food category (poultry, beef, pork, seafood_fish, seafood_shellfish, egg, vegetable, grain) |
| `POULTRY_ICONS` | Chicken breast, thigh, whole chicken, turkey breast |
| `BEEF_ICONS` | Ribeye steak, ground beef, beef roast |
| `SEAFOOD_ICONS` | Salmon fillet, shrimp, cod fillet, tuna steak |
| `EGG_ICONS` | Fried, boiled, scrambled, poached eggs |
| `VEGETABLE_ICONS` | Broccoli, asparagus, potato, carrot |
| `GRAIN_ICONS` | White rice, pasta, quinoa |
| `INGREDIENT_ICONS` | Combined export of all ingredient icons |
| `getIcon(id, category?)` | Helper function that returns an icon by ID, with optional category fallback |

## License

MIT
