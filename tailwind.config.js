/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#141824',
        secondary: '#F05314',
        text: '#F4F3F0',
      },
      fontFamily: {
        bambino: ['BambinoNew-Regular'],
        'bambino-bold': ['BambinoNew-Bold'],
      },
    },
  },
  plugins: [],
};
