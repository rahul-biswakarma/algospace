let tailwindConfiger = require("/tailwind.config.js");
let tailwindColors = tailwindConfiger.theme.colors;

export const DEFAULT_BG_COLOR = tailwindColors["green-bg"];
export const SELECTED_BG_COLOR = tailwindColors["blue-bg"];
export const FOUND_BG_COLOR = tailwindColors["green"];
export const TARGET_BG_COLOR = tailwindColors["red-bg"];

export const DEFAULT_BORDER_COLOR = tailwindColors["green"];
export const SELECTED_BORDER_COLOR = tailwindColors["blue"];
export const FOUND_BORDER_COLOR = tailwindColors["green"];
export const TARGET_BORDER_COLOR = tailwindColors["red"];
