# Code Organization & Scalability Guide

## Overview

This portfolio has been refactored for better maintainability, scalability, and consistency. All design decisions are centralized to make future updates easier.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Shared layout components
│   │   └── Section.tsx  # Reusable section wrapper
│   ├── UI/              # Reusable UI components
│   │   ├── Button/
│   │   │   └── PrimaryButton.tsx
│   │   └── Icon/
│   │       ├── Icon.tsx
│   │       └── icons.ts
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Projects/
│   ├── Contact/
│   ├── Footer/
│   └── Layout/          # Main page layout wrapper
├── constants/
│   ├── constants.ts     # Content & animation constants
│   └── tokens.ts        # **NEW** Design system tokens
├── types/
│   └── index.ts         # **NEW** Centralized TypeScript types
├── styles/
└── App.tsx
```

---

## 🎨 Design Tokens (`src/constants/tokens.ts`)

All spacing, sizing, and styling is now centralized. **Never hardcode values again!**

### Usage Examples:

```tsx
import { SPACING, LAYOUT, TYPOGRAPHY } from "../../constants/tokens";

// Spacing
className={`pb-24`}        // ❌ BEFORE
className={SPACING.SECTION_BOTTOM}  // ✅ AFTER

// Layout
className="max-w-7xl"      // ❌ BEFORE
className={LAYOUT.MAX_WIDTH_LARGE}  // ✅ AFTER

// Typography
className="text-3xl sm:text-4xl md:text-5xl"  // ❌ BEFORE
className={TYPOGRAPHY.HEADING_XL}             // ✅ AFTER
```

### Available Tokens:

- **SPACING**: Section gaps, component padding, internal spacing
- **LAYOUT**: Container sizing, padding, section base classes
- **TYPOGRAPHY**: Font sizes, weights, colors
- **ANIMATIONS**: Duration, transitions
- **COMPONENTS**: Button, card, glass effect classes
- **HERO**: Hero-specific spacing and sizing

---

## 📝 Centralized Types (`src/types/index.ts`)

All TypeScript interfaces are in one place. Add new types here!

```tsx
// Example: Adding a new component type
export interface MyNewComponentProps {
  title: string;
  items: string[];
  className?: string;
}
```

---

## 🔄 Section Wrapper Component

Replaces repetitive section markup:

```tsx
// ❌ BEFORE: Repetitive markup in each section
<section
  className="relative w-full pb-24 flex flex-col overflow-hidden"
  id="about"
  data-scroll-section
>

// ✅ AFTER: Clean, consistent wrapper
<Section id="about">
  {/* Content */}
</Section>
```

### Props:

- **id** (required): Section identifier for navigation
- **children** (required): Section content
- **spacing** (optional): `"py"` for vertical, `"pb"` for bottom only (default: "pb")
- **className** (optional): Additional CSS classes

---

## 🚀 How to Scale

### Adding a New Section:

1. Create component in `src/components/`
2. Use `<Section id="newSection">` wrapper
3. Use token constants for styling
4. Add types to `src/types/index.ts` if needed

### Updating Spacing Globally:

1. Edit values in `src/constants/tokens.ts`
2. All components automatically update! ✨

### Adding New Design Tokens:

```tsx
// In src/constants/tokens.ts
export const SPACING = {
  // Add new token here
  MY_CUSTOM_SPACING: "py-32",
} as const;

// Use in components
className={SPACING.MY_CUSTOM_SPACING}
```

---

## 📋 Component Checklist

When adding new components, ensure:

- [ ] Uses tokens from `SPACING`, `LAYOUT`, `TYPOGRAPHY`
- [ ] Types defined in `src/types/index.ts`
- [ ] Sections wrapped with `<Section>` component
- [ ] No hardcoded spacing/sizing values
- [ ] Consistent with existing patterns

---

## 🔍 Migration Notes

**What Changed:**

- ✅ Removed `px-6 lg:px-12` from individual sections (Layout handles it)
- ✅ Removed `max-w-7xl mx-auto` from section content (Layout handles it)
- ✅ Replaced `<section>` tags with `<Section>` wrapper
- ✅ Created centralized token system
- ✅ Moved types to single location

**What Stays the Same:**

- Content and functionality unchanged
- Same visual appearance
- Same animations and interactions

---

## 📚 Next Steps

When the portfolio grows, consider:

1. Extract form logic to `src/hooks/useContactForm.ts`
2. Create `src/utils/` for helper functions
3. Add animation hooks in `src/hooks/`
4. Organize components by feature if sections grow
5. Create component-specific style tokens if needed

---

**Remember:** Edit tokens, not hardcoded values. The design system is your friend! 🎨
