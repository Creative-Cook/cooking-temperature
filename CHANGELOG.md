# Changelog

## [1.0.5] - 2025-01-28
### Changed
- Updated icons to use microsoft icons for better consistency.

## [1.0.4] - 2025-01-28
### Changed
- Updated icons in the icons module to improve visual clarity.

## [1.0.3] - 2025-01-28

### Added
- Icons module (`cooking-temperature/icons`) with SVG icons as base64 data URLs
  - `CATEGORY_ICONS` - Icons for all food categories
  - `POULTRY_ICONS`, `BEEF_ICONS`, `SEAFOOD_ICONS`, `EGG_ICONS`, `VEGETABLE_ICONS`, `GRAIN_ICONS` - Ingredient-specific icons
  - `INGREDIENT_ICONS` - Combined export of all ingredient icons
  - `getIcon(id, category?)` - Helper function with category fallback

### Changed
- Renamed function parameters for consistency:
  - `convertTemperature`: `from` → `from_unit`, `to` → `to_unit`
  - `getDonenessTemp`: `doneness` → `doneness_level`
  - `getCookingInstruction`: `method` → `cooking_method`
  - `getQuickReference`: `method` → `cooking_method`

### Documentation
- Expanded README with comprehensive API documentation
  - Added Types section with all type definitions
  - Added full typed signatures for all functions
  - Added detailed return value examples with JSON
  - Converted Categories, Doneness Levels, and Cooking Methods to tables
  - Added Icons section with usage examples

## [1.0.2] - 2025-01-26

### Added
- `getCategoryName` function for retrieving human-readable category names

## [1.0.1] - 2025-01-23

### Fixed
- Initial bugfixes...

## [1.0.0] - 2025-01-22

- Initial release
