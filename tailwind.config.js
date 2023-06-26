/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgWhite: '#fafafa',
        titleBlack: '#212529',
        allGray: '#7c7c7c',
        textGray: '#444444',
        outlineGray: '#ebebeb'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}