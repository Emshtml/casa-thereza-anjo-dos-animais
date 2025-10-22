/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D8F6C",       // Verde suave — natureza e cuidado
        secondary: "#F5A623",     // Laranja quente — alegria e energia
        accent: "#FFF8F1",        // Fundo claro e acolhedor
        neutral: "#FDFCF9",       // Branco com toque quente
        textPrimary: "#1F2937",   // Cinza escuro — legibilidade
        textLight: "#FFFFFF",     // Branco puro
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        title: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)",
        card: "0 6px 16px rgba(0,0,0,0.1)",
        glow: "0 0 20px rgba(245,166,35,0.3)",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
      },
    },
  },
  plugins: [],
};

