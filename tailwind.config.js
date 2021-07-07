const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    '*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Build your palette here
        lightBlue: colors.lightBlue,
        orange: colors.orange,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
