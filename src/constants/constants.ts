/**
 * Centralized Constants for Portfolio
 * All app-wide constants, configuration, and data
 */

// ============================================================================
// NAVIGATION CONSTANTS
// ============================================================================

export const NAV_LINKS = [
  { label: "Home", id: "#hero" },
  { label: "About", id: "#about" },
  { label: "Projects", id: "#projects" },
  { label: "Contact", id: "#contact" },
] as const;

export const BRAND_NAME = "Subas";

// ============================================================================
// PROJECTS CONSTANTS
// ============================================================================

export interface Project {
  title: string;
  type: string;
  image: string;
  tech: string[];
  role: string;
  reflection: string;
  links: {
    github: string;
    live: string;
  };
}

export const PROJECTS: Project[] = [
  {
    title: "Project Alpha",
    type: "E-commerce Platform",
    image: "https://placehold.co/600x400/1a1a1a/FFF",
    tech: ["React", "Node", "Stripe"],
    role: "Frontend development & Stripe integration",
    reflection: "Built a scalable payment system serving 10k+ users",
    links: { github: "#", live: "#" },
  },
  {
    title: "Project Beta",
    type: "Social Dashboard",
    image: "https://placehold.co/600x400/2a2a2a/FFF",
    tech: ["Vue", "Firebase", "D3"],
    role: "Full-stack development & data visualization",
    reflection: "Designed real-time analytics dashboard for 500+ creators",
    links: { github: "#", live: "#" },
  },
  {
    title: "Project Gamma",
    type: "AI Chat Interface",
    image: "https://placehold.co/600x400/3a3a3a/FFF",
    tech: ["Next.js", "OpenAI", "Tailwind"],
    role: "Frontend & API integration",
    reflection: "Optimized chat latency from 2s to 200ms using streaming",
    links: { github: "#", live: "#" },
  },
];

// ============================================================================
// CONTACT CONSTANTS
// ============================================================================

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "Email", url: "#", icon: "Envelope" },
  { platform: "LinkedIn", url: "#", icon: "LinkedinLogo" },
  { platform: "GitHub", url: "#", icon: "GithubLogo" },
];

export const CONTACT_MESSAGES = {
  SEND_IDLE: "Send Message",
  SENDING: "Sending...",
  SUCCESS: "Message Sent!",
} as const;

// ============================================================================
// ANIMATION CONSTANTS
// ============================================================================

export const ANIMATIONS = {
  NAVBAR_ENTRANCE: {
    duration: 1,
    delay: 2.8,
    ease: "power3.out",
  },
  TITLE_ANIMATION: {
    duration: 1,
  },
  SUBTITLE_ANIMATION: {
    duration: 0.8,
    offset: "-=0.5",
  },
  CTA_ANIMATION: {
    duration: 0.5,
    ease: "back.out(1.7)",
    offset: "-=0.3",
  },
  ORB_ANIMATION: {
    y: -30,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    stagger: 0.5,
  },
  FORM_SUBMIT_DELAY: 1500,
  FORM_SUCCESS_RESET_DELAY: 3000,
} as const;

// ============================================================================
// RESPONSIVE BREAKPOINTS
// ============================================================================

export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280,
} as const;

// ============================================================================
// MOBILE DETECTION
// ============================================================================

export const MOBILE_USER_AGENTS =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

// ============================================================================
// SECTION IDS
// ============================================================================

export const SECTION_IDS = {
  HERO: "#hero",
  ABOUT: "#about",
  PROJECTS: "#projects",
  CONTACT: "#contact",
} as const;

// ============================================================================
// TEXT CONTENT
// ============================================================================

export const TEXT_CONTENT = {
  HERO: {
    TITLE: "Frontend Developer with a focus on end-to-end features",
    GREETING:
      "I build reliable interfaces and thoughtful features. I connect frontend and backend systems to deliver real, user-focused functionality",
    CTA: "Learn more about how I work",
  },
  PROJECTS: {
    HEADING: "Selected Works",
    SUBHEADING: "Explore some of my selected works",
  },
  CONTACT: {
    HEADING: "Let's Build the Future",
    DESCRIPTION: "Open for collaborations and new opportunities.",
  },
  ABOUT: {
    HEADING: "About Me",
  },
} as const;

// ============================================================================
// FORM CONSTANTS
// ============================================================================

export const FORM_PLACEHOLDERS = {
  NAME: "Name",
  EMAIL: "Email",
  MESSAGE: "Message",
} as const;

export const FORM_CONFIG = {
  MESSAGE_ROWS: 5,
} as const;
