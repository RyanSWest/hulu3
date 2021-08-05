module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {
     extend: {
       screens: {
         "3xl": "2000px"
       }
     },
   },
   plugins: [require('tailwind-scrollbar-hide')],
 }