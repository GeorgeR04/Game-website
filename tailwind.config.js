/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': '#070606',
        'Secondmaincolor':'#1e1d1d',
        'Secondarycolor':'#808080',
        'thirdcolor':'#484848',
        'textcolor':'#ff0000',
        'textcolor2':'#9801fc',
      },

      spacing:{
        'home':'85vh',
        'homebox':'30rem',
        'homeboxh':'40rem',
        'homeboxtop':'4.5rem',
        'homeboxleft':'10rem',

        'footeritemsmr':'6rem',
        'textitems':'180vh',
        'navitems':'13vh',
        'dropdown':'6rem',

        'logofw':'14.5rem',
        'footerh':'15rem',

        'footeritems':'2vh',
        'footerfontsize':'1.1rem',
      },

      fontFamily:{
        'body':['Bebas Neue','cursive'],

      },
    },
  },
  plugins: [],
}
