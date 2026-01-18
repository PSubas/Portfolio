/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "rgb(5, 5, 16)",
          alt: "rgb(10, 10, 26)",
        },
        primary: "rgb(123, 97, 255)",
        secondary: "rgb(0, 240, 255)",
        text: {
          DEFAULT: "rgb(255, 255, 255)",
          muted: "rgba(255, 255, 255, 0.7)",
        },
        glass: "rgba(255, 255, 255, 0.03)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        main: ["Inter", "sans-serif"],
      },
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "32px",
        xl: "64px",
        "2xl": "120px",
      },
      scale: {
        105: "1.05",
        110: "1.10",
      },
      transitionTimingFunction: {
        "ease-out": "cubic-bezier(0.215, 0.61, 0.355, 1)",
      },
      transitionDuration: {
        fast: "0.3s",
        slow: "0.8s",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-reverse": "float 8s ease-in-out infinite reverse",
        fadeIn: "fadeIn 1.5s ease-out 0.2s forwards",
        rise: "rise 2s ease-in infinite",
      },
      keyframes: {
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
