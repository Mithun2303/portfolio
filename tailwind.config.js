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
      dropShadow: {
        '3xl': '8px 8px 4px #FF8B36',
        '2xl': '2px 2px 4px #FF8B36',
        'image': '2px 2px 4px #000',
      },
      colors:{
        primary:"#FF8B36",
        primaryText:"#FF8B36",
        textColor:"#000"
      },
      transitionProperty:{
        
      }
    },
  },
  plugins: [],
}
