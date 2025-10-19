/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D8F6C",
        secondary: "#F5A623",
        accent: "#FFF8F1",
        textPrimary: "#1F2937",
        textLight: "#FFFFFF",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
