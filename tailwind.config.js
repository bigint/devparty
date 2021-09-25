const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        0: '#fafbfc',
        50: '#fafbfc',
        100: '#f6f8fa',
        200: '#e1e4e8',
        300: '#d1d5da',
        400: '#959da5',
        500: '#6a737d',
        600: '#586069',
        700: '#444d56',
        800: '#2f363d',
        900: '#24292e'
      },
      black: colors.black,
      white: colors.white,
      purple: colors.violet,
      pink: colors.pink,
      oragne: colors.oragne,
      yellow: colors.yellow,
      green: colors.green
    },
    extend: {
      colors: {
        brand: colors.violet
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
}
