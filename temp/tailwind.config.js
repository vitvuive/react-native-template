const colors = require('./src/ui/theme/colors');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sansSemiBold: ['OpenSans-SemiBold'],
        sansRegular: ['OpenSans-Regular'],
      },
      colors,
    },
  },
  plugins: [],
};
