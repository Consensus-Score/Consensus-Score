/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {

    extend: {
      colors: {
        'lightBlack': '#362C49',
        'glassBGa': '#ffffff40',
        'glassBGb': '#ffffff30',
        'glassL': '#ffffff50',
        'mildWhite': '#E6E7F2',
        'form': '#8688AC50',
        'sendBGa': '#BC59C0',
        'sendBGb': '#01D3F6',
      },

      fontFamily: {
        'aktivGrotesk': ["aktiv-grotesk"],
      },

      fontSize: {
        '16em': '16em',
        '250': '250px',
      },

      lineHeight: {
        '112': '112px',
      },

      spacing: {
        '83px': '83px',
        '97px': '97px',
        '5%': '5%',
        '7.7%': '7.7%',
        '10%': '10%',
        '15%': '15%',
        '30%': '30%',
        '33%': '33%',
        '55%': '55%',
      },

      backgroundImage: {
        'indexBG': "url('../img/bg01.png')",
        'pageBG': "url('../img/bg02.png')",
        'icon01': "url('../img/icon01.png')",
        'icon02': "url('../img/icon02.png')",
        'icon03': "url('../img/icon03.png')",
        'star': "url('../img/star.svg')",
        'smallStar': "url('../img/smallStar.svg')",
      },

      width: {
        '50': '50px',
        '80': '80px',
        '262': '262px',
        '400': '400px',
        '524': '524px',
        '70%': '70%',
        '76%': '76%',
      },

      height: {
        '50': '50px',
        '75': '75px',
        '80': '80px',
        '112': '112px',
        '262': '262px',
        '524': '524px',
        '10%': '10%',
        '50%': '50%',
        '76%': '76%',
      },

      margin: {
        '46': '46px',
        '50': '50px',
        '5%': '5%',
        '7%': '7%',
        '10%': '10%',
        '11%': '11%',
        
      },

      padding: {
        '3%': '3%',
        '7%': '7%',
        '7.7%': '7.7%',
        '15%': '15%',
      },

      boxShadow: {
        'glassShadow': '0 0 20px 1px rgba(191, 166, 192, 0.5)',
      },
    },
  },
  plugins: [],
};