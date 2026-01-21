/**
 * Centralized TypeScript Types
 * All interfaces and types used across the application
 */

// ============================================================================
// LAYOUT & SECTION
// ============================================================================

export interface SectionProps {
  id: string;
  children: React.ReactNode;
  spacing?: "py" | "pb";
  className?: string;
}

// ============================================================================
// NAVIGATION
// ============================================================================

export interface NavLink {
  id: string;
  label: string;
}

// ============================================================================
// PROJECTS
// ============================================================================

export interface Project {
  title: string;
  type: string;
  role: string;
  tech: string[];
  image: string;
  reflection: string;
  links: {
    github: string;
    live: string;
  };
}

// ============================================================================
// CONTACT
// ============================================================================

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export type ContactFormStatus = "idle" | "sending" | "success";

// ============================================================================
// ANIMATIONS
// ============================================================================

export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
}

// ============================================================================
// ICON
// ============================================================================

export interface IconProps {
  name: string;
  size?: number | string;
  color?: string;
  className?: string;
  viewBox?: string;
}

// ============================================================================
// BUTTON
// ============================================================================

export interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  showArrow?: boolean;
  className?: string;
}

// ============================================================================
// COMPONENT PROPS
// ============================================================================

export interface ComponentBaseProps {
  className?: string;
  id?: string;
}
