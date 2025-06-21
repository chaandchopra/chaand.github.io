/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offWhite: 'var(--off-white)',
      },
      fontFamily: {
        shadows: ['"Shadows Into Light"', 'cursive'],
        inter: ['Inter', 'Arial', 'sans-serif'],
        soehne: ['Soehne', 'Arial', 'sans-serif'],
        arimo: ['Arimo', 'Arial', 'sans-serif'],
      },

    },
  },
  plugins: [],
}

