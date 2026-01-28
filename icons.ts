// Microsoft Fluent Emoji 3D via Lobehub CDN
// Beautiful 3D emoji - MIT licensed, no Twitter involved

const FLUENT_BASE = 'https://registry.npmmirror.com/@lobehub/fluent-emoji-3d/latest/files/assets';

const fluent = (codepoint: string): string => `${FLUENT_BASE}/${codepoint}.webp`;

// =============================================================================
// CATEGORY ICONS
// =============================================================================
export const CATEGORY_ICONS: Record<string, string> = {
  poultry: fluent('1f357'),           // 🍗 Poultry Leg
  beef: fluent('1f969'),              // 🥩 Cut of Meat
  pork: fluent('1f356'),              // 🍖 Meat on Bone
  seafood_fish: fluent('1f41f'),      // 🐟 Fish
  seafood_shellfish: fluent('1f990'), // 🦐 Shrimp
  egg: fluent('1f95a'),               // 🥚 Egg
  vegetable: fluent('1f966'),         // 🥦 Broccoli
  grain: fluent('1f35a'),             // 🍚 Cooked Rice
};

// =============================================================================
// INGREDIENT ICONS - Poultry
// =============================================================================
export const POULTRY_ICONS: Record<string, string> = {
  chicken_breast: fluent('1f357'),    // 🍗
  chicken_thigh: fluent('1f357'),     // 🍗
  chicken_breast_boneless: fluent('1f357'),    // 🍗
  chicken_thigh_boneless: fluent('1f357'),     // 🍗
  chicken_whole: fluent('1f414'),     // 🐔
  turkey_breast: fluent('1f983'),     // 🦃
  duck: fluent('1f986'),              // 🦆
};

// =============================================================================
// INGREDIENT ICONS - Beef
// =============================================================================
export const BEEF_ICONS: Record<string, string> = {
  beef_steak_ribeye: fluent('1f969'), // 🥩
  beef_ground: fluent('1f969'),       // 🥩
  beef_roast: fluent('1f969'),        // 🥩
};

// =============================================================================
// INGREDIENT ICONS - Pork
// =============================================================================
export const PORK_ICONS: Record<string, string> = {
  pork_chop: fluent('1f356'),         // 🍖
  pork_tenderloin: fluent('1f356'),   // 🍖
  pork_ribs: fluent('1f356'),         // 🍖
  bacon: fluent('1f953'),             // 🥓
};

// =============================================================================
// INGREDIENT ICONS - Seafood
// =============================================================================
export const SEAFOOD_ICONS: Record<string, string> = {
  salmon_fillet: fluent('1f41f'),     // 🐟
  tuna_steak: fluent('1f41f'),        // 🐟
  cod_fillet: fluent('1f41f'),        // 🐟
  shrimp: fluent('1f990'),            // 🦐
  lobster: fluent('1f99e'),           // 🦞
  scallops: fluent('1f41a'),          // 🐚
  crab: fluent('1f980'),              // 🦀
};

// =============================================================================
// INGREDIENT ICONS - Eggs
// =============================================================================
export const EGG_ICONS: Record<string, string> = {
  egg_fried: fluent('1f373'),         // 🍳
  egg_boiled: fluent('1f95a'),        // 🥚
  egg_scrambled: fluent('1f373'),     // 🍳
  egg_poached: fluent('1f373'),       // 🍳
  egg_omelette: fluent('1f373'),      // 🍳
};

// =============================================================================
// INGREDIENT ICONS - Vegetables
// =============================================================================
export const VEGETABLE_ICONS: Record<string, string> = {
  broccoli: fluent('1f966'),          // 🥦
  asparagus: fluent('1f96c'),         // 🥬 (leafy green, closest match)
  potato: fluent('1f954'),            // 🥔
  carrot: fluent('1f955'),            // 🥕
  corn: fluent('1f33d'),              // 🌽
  tomato: fluent('1f345'),            // 🍅
  onion: fluent('1f9c5'),             // 🧅
  garlic: fluent('1f9c4'),            // 🧄
  pepper: fluent('1fad1'),            // 🫑 Bell Pepper
  leafy_greens: fluent('1f96c'),      // 🥬
  mushroom: fluent('1f344'),          // 🍄
  eggplant: fluent('1f346'),          // 🍆
  cucumber: fluent('1f952'),          // 🥒
  avocado: fluent('1f951'),           // 🥑
};

// =============================================================================
// INGREDIENT ICONS - Grains
// =============================================================================
export const GRAIN_ICONS: Record<string, string> = {
  rice_white: fluent('1f35a'),        // 🍚
  rice_brown: fluent('1f35a'),        // 🍚
  pasta: fluent('1f35d'),             // 🍝
  bread: fluent('1f35e'),             // 🍞
  quinoa: fluent('1f35a'),            // 🍚
};

// =============================================================================
// COMBINED INGREDIENT ICONS
// =============================================================================
export const INGREDIENT_ICONS: Record<string, string> = {
  ...POULTRY_ICONS,
  ...BEEF_ICONS,
  ...PORK_ICONS,
  ...SEAFOOD_ICONS,
  ...EGG_ICONS,
  ...VEGETABLE_ICONS,
  ...GRAIN_ICONS,
};

// =============================================================================
// HELPER FUNCTION
// =============================================================================
/**
 * Get icon URL for a category or ingredient by ID
 * Falls back to category icon if no specific ingredient icon exists
 */
export const getIcon = (id: string, category?: string): string | undefined => {
  if (INGREDIENT_ICONS[id]) {
    return INGREDIENT_ICONS[id];
  }

  if (category && CATEGORY_ICONS[category]) {
    return CATEGORY_ICONS[category];
  }

  return undefined;
};
