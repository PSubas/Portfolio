/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Background */
        bg: {
          DEFAULT: "rgb(5, 5, 16)",
          alt: "rgb(10, 10, 26)",
          light: "rgb(15, 15, 37)",
        },
        /* Brand Colors */
        primary: "rgb(123, 97, 255)",
        "primary-light": "rgb(154, 133, 255)",
        "primary-dark": "rgb(90, 61, 153)",
        secondary: "rgb(0, 240, 255)",
        "secondary-light": "rgb(51, 247, 255)",
        "secondary-dark": "rgb(0, 179, 204)",
        /* Text Colors */
        text: {
          DEFAULT: "rgb(255, 255, 255)",
          strong: "rgb(255, 255, 255)",
          muted: "rgba(255, 255, 255, 0.7)",
          subtle: "rgba(255, 255, 255, 0.5)",
          faint: "rgba(255, 255, 255, 0.3)",
        },
        /* Glass Morphism */
        glass: "rgba(255, 255, 255, 0.03)",
        "glass-light": "rgba(255, 255, 255, 0.08)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
        "glass-border-light": "rgba(255, 255, 255, 0.15)",
      },
      fontFamily: {
        main: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      lineHeight: {
        tight: 1.2,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2,
      },
      letterSpacing: {
        tight: "-0.02em",
        normal: "0em",
        wide: "0.05em",
        wider: "0.1em",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "80px",
        "5xl": "120px",
      },
      width: {
        "size-sm": "24px",
        "size-md": "32px",
        "size-lg": "48px",
        "size-xl": "64px",
      },
      height: {
        "size-sm": "24px",
        "size-md": "32px",
        "size-lg": "48px",
        "size-xl": "64px",
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        full: "9999px",
      },
      scale: {
        105: "1.05",
        110: "1.10",
      },
      transitionTimingFunction: {
        "ease-out": "cubic-bezier(0.215, 0.61, 0.355, 1)",
        "ease-in": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
        "ease-in-out": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      transitionDuration: {
        fast: "0.2s",
        base: "0.3s",
        slow: "0.5s",
        slower: "0.8s",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
        "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
      },
      zIndex: {
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        60: "60",
        70: "70",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-reverse": "float 8s ease-in-out infinite reverse",
        fadeIn: "fadeIn 1.5s ease-out 0.2s forwards",
        rise: "rise 2s ease-in infinite",
        "gradient-x": "gradient-x 15s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        rise: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(-100px)", opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
