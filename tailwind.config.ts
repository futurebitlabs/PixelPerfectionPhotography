import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        ivory: "#FBF8F3",
        ink: "#1A1A1A",
        gold: "#C9A876",
        blush: "#D8A7A0",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Jost", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
};

export default config;
