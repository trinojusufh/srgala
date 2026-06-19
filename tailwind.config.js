/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],

  theme: {
    extend: {
      colors: {
        srgala: {
          orange: '#f97316',
          dark: '#020617',
          black: '#000000'
        }
      },

      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      }
    }
  },

  plugins: []
}