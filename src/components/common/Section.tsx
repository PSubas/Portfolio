import { forwardRef } from "react";
import { SPACING, LAYOUT } from "../../constants/tokens";
import type { SectionProps } from "../../types";

/**
 * Section Wrapper Component
 * Provides consistent spacing and styling for all page sections
 * Reduces code duplication and ensures consistency across sections
 *
 * @param id - Section identifier (used for navigation)
 * @param children - Section content
 * @param spacing - "py" for vertical padding, "pb" for bottom padding only (default: "pb")
 * @param className - Additional CSS classes
 */
const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children, spacing = "pb", className = "" }, ref) => {
    const spacingClass =
      spacing === "py" ? SPACING.SECTION_VERTICAL : SPACING.SECTION_BOTTOM;

    return (
      <section
        ref={ref}
        id={id}
        data-scroll-section
        className={`${LAYOUT.SECTION_BASE} ${spacingClass} ${className}`}
      >
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";

export default Section;
