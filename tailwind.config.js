/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm':'320px',
      'md': '650px',
      'lg': '1095px',
    },
    extend: {
      fontFamily: {
        sans: "'Source Sans 3'",
        poppins: "'Poppins'",

      },
      colors:{
        primary:"#3498db",
        secondary:"#e74c3c",
        text:"#ecf0f1",
        highlight:"#f39c12",
        link:"#1abc9c"
      },
    },
  },
  plugins: [],
}