/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#fafafa',
        bgBar: '#f4f4f4',
        titleBlack: '#212529',
        allGray: '#7c7c7c',
        textGray: '#444444',
        outlineGray: '#ebebeb',
        iyellow: '#ffd43b'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}