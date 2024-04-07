/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "logo-green": "#4fb88c",
        "logo-green-hover": "#3c906d",
        "page-bg": "#e9edea;",
      },
      maxWidth: {
        logomax: "200px",
        "search-cart-max": "525px",
        "lg-search-cart-max": "645px",
        "home-hero-max": "600px",
      },
      headerFontFamily: ["Inter", "sans-serif"],
      boxShadow: {
        header: "4px 7px 12px 0px rgb(158 162 159 / 85%);",
      },
    },
  },
  plugins: [],
};
