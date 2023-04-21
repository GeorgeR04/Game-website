/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': '#000000',
        'Secondmaincolor':'#1e1d1d',
        'Secondarycolor':'#808080',
        'thirdcolor':'#484848',
        'textcolor':'#ff0000',
        'textcolor2':'#9801fc',

      },

      spacing:{
        'home':'65vh',
        'homebox':'30rem',
        'homeboxh':'40rem',
        'homeboxtop':'4.5rem',
        'homeboxleft':'10rem',

        'footeritemsmr':'6rem',
        'textitems':'180vh',
        'navitems':'13vh',
        'dropdown':'6rem',

        'logofw':'14.5rem',
        'footerhmain':'10rem',
        'footerhText':'8rem',


        'footeritems':'2vh',
        'footerfontsize':'1.1rem',

        'earthheightsize':'100vh',

        'Mapsitem':'150vh',
      },

      fontFamily:{
        'body':['Bebas Neue','cursive'],

      },
    },
  },
  plugins: [],
}
