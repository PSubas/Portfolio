# Design System & Standardization Guide

This document outlines the standardized spacing, typography, and color palette for the portfolio project.

## Color Palette

### Background Colors

- `--color-bg`: `#050510` - Primary dark background
- `--color-bg-alt`: `#0a0a1a` - Alternative darker background
- `--color-bg-light`: `#0f0f25` - Light background variant

### Brand Colors

- **Primary (Violet)**: `#7b61ff`
  - Light: `#9a85ff`
  - Dark: `#5a3d99`
- **Secondary (Cyan)**: `#00f0ff`
  - Light: `#33f7ff`
  - Dark: `#00b3cc`

### Text Colors

- `--color-text`: `#ffffff` - Primary text
- `--color-text-muted`: `rgba(255, 255, 255, 0.7)` - Secondary text
- `--color-text-subtle`: `rgba(255, 255, 255, 0.5)` - Tertiary text
- `--color-text-faint`: `rgba(255, 255, 255, 0.3)` - Disabled/faint text

### Glass Morphism

- `--color-glass`: `rgba(255, 255, 255, 0.03)` - Base glass effect
- `--color-glass-light`: `rgba(255, 255, 255, 0.08)` - Elevated glass effect
- `--color-glass-border`: `rgba(255, 255, 255, 0.1)` - Glass borders
- `--color-glass-border-light`: `rgba(255, 255, 255, 0.15)` - Elevated glass borders

## Typography System

### Font Family

- Primary: `Inter`, sans-serif

### Font Sizes

| Variable      | Size            | Usage                  |
| ------------- | --------------- | ---------------------- |
| `--font-xs`   | 12px (0.75rem)  | Small labels, captions |
| `--font-sm`   | 14px (0.875rem) | Secondary text, tags   |
| `--font-base` | 16px (1rem)     | Body text, default     |
| `--font-lg`   | 18px (1.125rem) | Subheadings            |
| `--font-xl`   | 20px (1.25rem)  | Section subheadings    |
| `--font-2xl`  | 24px (1.5rem)   | Small headings         |
| `--font-3xl`  | 30px (1.875rem) | Medium headings        |
| `--font-4xl`  | 36px (2.25rem)  | Large headings         |
| `--font-5xl`  | 48px (3rem)     | Hero/Major headings    |
| `--font-6xl`  | 60px (3.75rem)  | Extra large headings   |

### Font Weights

- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800

### Line Heights

- Tight: 1.2 (24% line height increase)
- Snug: 1.375 (37.5% increase)
- Normal: 1.5 (50% increase) - default
- Relaxed: 1.625 (62.5% increase)
- Loose: 2 (100% increase)

### Letter Spacing

- Tight: -0.02em
- Normal: 0em (default)
- Wide: 0.05em
- Wider: 0.1em (for uppercase text)

## Spacing Scale

Consistent spacing based on 8px base unit:

| Variable      | Value | Usage                 |
| ------------- | ----- | --------------------- |
| `--space-xs`  | 4px   | Tight spacing         |
| `--space-sm`  | 8px   | Small gaps, padding   |
| `--space-md`  | 16px  | Default padding, gaps |
| `--space-lg`  | 24px  | Medium spacing        |
| `--space-xl`  | 32px  | Large padding         |
| `--space-2xl` | 48px  | Large section spacing |
| `--space-3xl` | 64px  | Section padding       |
| `--space-4xl` | 80px  | Large section padding |
| `--space-5xl` | 120px | Extra large padding   |

## Border Radius

| Variable        | Value          | Usage                  |
| --------------- | -------------- | ---------------------- |
| `--radius-sm`   | 6px (0.375rem) | Small elements         |
| `--radius-md`   | 8px (0.5rem)   | Medium elements        |
| `--radius-lg`   | 16px (1rem)    | Cards, containers      |
| `--radius-xl`   | 24px (1.5rem)  | Larger containers      |
| `--radius-2xl`  | 32px (2rem)    | Extra large containers |
| `--radius-full` | 9999px         | Pills, circles         |

## Animations & Transitions

### Easing Functions

- `--ease-out`: `cubic-bezier(0.215, 0.61, 0.355, 1)` - Decelerate (default)
- `--ease-in`: `cubic-bezier(0.55, 0.055, 0.675, 0.19)` - Accelerate
- `--ease-in-out`: `cubic-bezier(0.645, 0.045, 0.355, 1)` - Accelerate then decelerate
- `--ease-linear`: `linear` - Constant speed

### Transition Durations

- `--transition-fast`: 0.2s - Quick interactions
- `--transition-base`: 0.3s - Default transitions (default)
- `--transition-slow`: 0.5s - Slow animations
- `--transition-slower`: 0.8s - Very slow animations

### Animation Easing

Used with transitions: `var(--ease-out)` (default)

```css
transition: all 0.3s var(--ease-out);
```

## Shadows

| Variable       | Value                             |
| -------------- | --------------------------------- |
| `--shadow-sm`  | `0 1px 2px rgba(0, 0, 0, 0.05)`   |
| `--shadow-md`  | `0 4px 6px rgba(0, 0, 0, 0.1)`    |
| `--shadow-lg`  | `0 10px 15px rgba(0, 0, 0, 0.1)`  |
| `--shadow-xl`  | `0 20px 25px rgba(0, 0, 0, 0.1)`  |
| `--shadow-2xl` | `0 25px 50px rgba(0, 0, 0, 0.25)` |

## Z-Index Scale

| Variable       | Value | Usage              |
| -------------- | ----- | ------------------ |
| `--z-base`     | 0     | Default stacking   |
| `--z-dropdown` | 10    | Dropdown menus     |
| `--z-sticky`   | 20    | Sticky elements    |
| `--z-fixed`    | 30    | Fixed navigation   |
| `--z-modal-bg` | 40    | Modal backdrop     |
| `--z-modal`    | 50    | Modal content      |
| `--z-popover`  | 60    | Popovers, tooltips |
| `--z-tooltip`  | 70    | Tooltips           |

## Usage Examples

### Using CSS Variables in Components

```jsx
<section className="py-3xl px-md">
  <h2 className="text-5xl font-bold mb-lg text-text">Heading</h2>
  <p className="text-base text-text-muted leading-normal">Body text</p>
</section>
```

### In Tailwind CSS

```jsx
<div className="px-md py-lg bg-glass border border-glass-border rounded-lg gap-md">
  {/* Content */}
</div>
```

### Direct CSS Variable Reference

```css
.custom-element {
  padding: var(--space-md);
  font-size: var(--font-lg);
  color: var(--color-text-muted);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}
```

## Consistency Guidelines

1. **Always use spacing scale** - Never use arbitrary padding/margin values
2. **Use typography variables** - Reference font sizes from the scale
3. **Apply consistent colors** - Use CSS variables for all colors
4. **Standardize transitions** - Use defined durations and easing functions
5. **Maintain glass morphism** - Use appropriate glass color variants
6. **Follow naming conventions** - Variables follow `--category-subcategory` pattern

## Files Modified

- `src/styles/variables.css` - Core design tokens
- `src/styles/global.css` - Global styles using variables
- `tailwind.config.js` - Extended Tailwind configuration
- `src/components/About/About.tsx` - Standardized colors and spacing
- `src/components/Hero/Hero.tsx` - Standardized typography and spacing
- `src/components/Projects/Projects.tsx` - Standardized component spacing
- `src/components/Contact/Contact.tsx` - Standardized form and section spacing
- `src/components/Footer/Footer.tsx` - Standardized footer spacing
- `src/components/Navbar/Navbar.tsx` - Standardized navigation spacing
