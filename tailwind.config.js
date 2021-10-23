// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      accent: {
        DEFAULT: "#397f85",
      },
      alternative: {
        DEFAULT: "#731DD8",
      },
      dark: {
        DEFAULT: "#1C0F13",
      },
      light: {
        DEFAULT: "#FbF5F3",
      },
      gray: {
        DEFAULT: "#7A7375",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
      backgroundColor: ["hover", "focus", "disabled"],
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [],
};
