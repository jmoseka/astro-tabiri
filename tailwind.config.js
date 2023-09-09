/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
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
        lightYellow: '#fef8de',
        darkBlue: '#041721',
        tagColor: 'rgb(29 56 72)',
        textLightGold: '#fdf1bd',
        darkGold: '#645824',
        btnBgColor: '#645824',
        babyBlue: '#49c0d1',

      },
    },
  }

}
