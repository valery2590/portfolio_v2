/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'switch-on': '#8177AD', // Color para el estado activado del switch
        'switch-off': '#b7abe4', // Color para el estado desactivado del switch
        'toggle-light': '#F5F5F5',  // Color para el modo claro
        'toggle-dark': '#333333',   // Color para el modo oscuro
      },
    },
  },
  plugins: [],
};
