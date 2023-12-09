/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Helvetica': ['HelveticaNeue'],
      'Open-Sans': ['Open Sans'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '0rem',
      },
    }, 
    extend: {
      colors: {
        'dark' : '#101010',
        'light' : '#707070',
        'light2' : '#6E6E6E',
        'secondary' : '#8A734D', 
        'lightBlue' : '#F3EFE8',
        'light3' : '#A5A5A5',
        'light4' : '#F7F7F7',
         'blackcolor2' : "#000",
      },
      backgroundImage: {
        'banner': "url('../src/img/banner.jpg')",
        'arrowwhite': "url('../src/img/arrow-white.svg')",
      }
    },
  },
  plugins: [],
}

