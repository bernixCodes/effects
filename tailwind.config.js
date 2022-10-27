/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerColor: "#111112",
        lanBg: "rgba(255, 255, 255, 0.08)",
        greenBtnColor: "#27B03F",
        yellowColor: "#f9dc38",
        creamColor: "#fefae1",
        slide: "rgba(17, 17, 18, 0.4)",
      },

      screens: {
        md: "768px",

        lg: "1024px",

        xl: "1280px",
      },
    },
  },
  plugins: [],
};
