/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'darkMainColor': 'linear-gradient(to right top, #020b1d, #061223, #081828, #081d2e, #092234, #0c2335, #0f2436, #122537, #162333, #19202f, #1b1e2b, #1c1c27)',
        'lightMainColor': 'linear-gradient(to right top, #e6e7e8, #e2e4e6, #dde0e3, #d9dde1, #d4dade, #d5dade, #d5dadf, #d6dadf, #dbdee2, #e0e1e5, #e5e5e7, #e9e9ea)',
      },
      // backgroundImage: {
      //   'darkMainColor': 'linear-gradient(to right top, #020b1d, #061223, #081828, #081d2e, #092234, #0c2335, #0f2436, #122537, #162333, #19202f, #1b1e2b, #1c1c27)'
      // },
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif'],
      },

      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))',
      },

      colors: {
        strongBlue: '#010413',
        strongBlueShade1: '#999ba1',
        strongBlueShade2: '#b3b4b8',
        lightBlue: '#e6e6e7',
        lightBlue1: '#fbdd59',
        lightBlue2: '#b3b4b8',
        blue: '#041925',
        yellow: '#FCDA54',

        darkBlue: '#041721',
        tagColor: 'rgb(29 56 72)',
        textLightGold: '#fdf1bd',
        darkGold: '#b0993b',
        btnBgColor: '#7e6d2a',

        darkGoldOverlay: 'rgba(176, 153, 59, 0.2)',

        // light and darkmode color group


        lightSecondMainColor: '#F7F7F8',
        darkTextGold: '#2F2B1A',
        lightOverlay: 'rgba(231, 235, 237, 0.87)',
        lightBtnOverlay: 'rgba(50, 44, 18, 0.47)',

        // darkMainColor: '#0A2D42',
        darkSecondMainColor: 'rgba(2, 11, 29, 0.2)',
        darkOverlay: 'rgba(2, 11, 29, 0.87)',
        darkBtnOverlay: 'rgba(2, 11, 29, 0.37)',
        lightYellow: '#fef8de',
        lightTextGold: '#fef8de'

      },
    },
  }



}

