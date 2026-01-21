/**
 * Design System Tokens
 * Centralized styling constants for consistent, scalable design
 */

export const SPACING = {
  // Section vertical spacing
  SECTION_TOP: "pt-24",
  SECTION_BOTTOM: "pb-24",
  SECTION_VERTICAL: "py-24",
  FOOTER_VERTICAL: "py-12",

  // Internal component spacing
  HEADING_BOTTOM: "pb-4",
  HEADING_BOTTOM_LG: "pb-4 sm:pb-6",
  CONTENT_BOTTOM: "pb-8",
  CONTENT_BOTTOM_LG: "pb-8 sm:pb-12",

  // Button spacing
  BUTTON_TOP: "pt-8",

  // List/Item spacing
  LIST_BOTTOM: "pb-6",
  ITEM_BOTTOM: "pb-2",

  // Gaps between elements
  ELEMENT_GAP: "gap-8 sm:gap-10 lg:gap-16",
  ELEMENT_GAP_SMALL: "gap-5",
} as const;

export const LAYOUT = {
  // Container sizing
  MAX_WIDTH: "max-w-10xl",
  MAX_WIDTH_CONTENT: "max-w-2xl",
  MAX_WIDTH_LARGE: "max-w-7xl",

  // Padding
  SECTION_PADDING_X: "px-6 lg:px-12",
  SECTION_PADDING_Y: "py-24",

  // Common section classes
  SECTION_BASE: "relative w-full flex flex-col overflow-hidden",
  SECTION_CENTERED:
    "relative w-full flex flex-col items-center justify-center overflow-hidden",
} as const;

export const TYPOGRAPHY = {
  // Heading sizes
  HEADING_XL: "text-3xl sm:text-4xl md:text-5xl",
  HEADING_2XL: "text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl",

  // Text sizes
  TEXT_BASE: "text-base",
  TEXT_LG: "text-lg",
  TEXT_XL: "text-xl md:text-2xl",

  // Font weights
  FONT_BOLD: "font-bold",
  FONT_SEMIBOLD: "font-semibold",
  FONT_MEDIUM: "font-medium",

  // Colors
  TEXT_PRIMARY: "text-text",
  TEXT_MUTED: "text-text-muted",
  TEXT_SECONDARY: "text-secondary",
} as const;

export const ANIMATIONS = {
  // Duration
  DURATION_FAST: "duration-300",
  DURATION_BASE: "duration-base",
  DURATION_SLOW: "duration-1000",

  // Common transitions
  TRANSITION_ALL: "transition-all duration-base",
  TRANSITION_SCALE: "transition-transform duration-300",
} as const;

export const COMPONENTS = {
  // Button classes
  BUTTON_PRIMARY:
    "rounded-xl px-8 py-4 text-base font-bold transition-all duration-300",
  BUTTON_ICON:
    "w-size-sm h-size-sm flex justify-center items-center bg-white/8 border border-white/12 rounded-md transition-all duration-fast hover:scale-110",

  // Card classes
  CARD_BASE:
    "bg-glass border border-glass-border rounded-xl overflow-hidden transition-all duration-base hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40 hover:border-glass-border-light hover:bg-glass-light",

  // Glass effect
  GLASS_BASE:
    "bg-glass-light/60 backdrop-blur-lg border border-glass-border-light",
} as const;

export const HERO = {
  // Hero specific spacing
  HEIGHT: "h-[90dvh]",
  PADDING: "py-24",
  CONTAINER_GAP: "gap-12 lg:gap-16",
} as const;
