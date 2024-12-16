/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Anton: ["Anton", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
        Jaro: ["Jaro", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        aboutBg: "url('/assets/images/Banner.jpg')",
        manufactureBg: "url('/assets/images/manufacture.jpg')",
        awardsBg: "url('/assets/images/awards.png)",
      },
      // Custom clip-path utility
      clipPath: {
        triangle: "polygon(50% 0%, 0% 100%, 100% 100%)", // Define triangle clip
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Adding custom utility for clip-path
    function ({ addUtilities }) {
      addUtilities(
        {
          ".clip-triangle": {
            clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
