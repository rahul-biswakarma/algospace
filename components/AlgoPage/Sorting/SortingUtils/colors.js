let tailwindConfiger = require("/tailwind.config.js");
let tailwindColors = tailwindConfiger.theme.colors;

export const DEFAULT_BG_COLOR = tailwindColors["green-bg"];
export const SELECTED_BG_COLOR = tailwindColors["blue-bg"];
export const SWAPED_BG_COLOR = tailwindColors["purple-bg"];
export const FINAL_BG_COLOR = tailwindColors["green"];
export const RED_BG_COLOR = tailwindColors["red-bg"];

export const DEFAULT_BORDER_COLOR = tailwindColors["green"];
export const SELECTED_BORDER_COLOR = tailwindColors["blue"];
export const SWAPED_BORDER_COLOR = tailwindColors["purple"];
export const FINAL_BORDER_COLOR = tailwindColors["green"];
export const RED_BORDER_COLOR = tailwindColors["red"];
