const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f0f6fc',
          100: '#c9d1d9',
          200: '#b1bac4',
          300: '#8b949e',
          400: '#6e7681',
          500: '#484f58',
          600: '#30363d',
          700: '#21262d',
          800: '#161b22',
          900: '#0d1117'
        },
        blue: {
          50: '#cae8ff',
          100: '#a5d6ff',
          200: '#79c0ff',
          300: '#58a6ff',
          400: '#388bfd',
          500: '#1f6feb',
          600: '#1158c7',
          700: '#0d419d',
          800: '#0c2d6b',
          900: '#051d4d'
        },
        green: {
          50: '#aff5b4',
          100: '#7ee787',
          200: '#56d364',
          300: '#3fb950',
          400: '#2ea043',
          500: '#238636',
          600: '#196c2e',
          700: '#0f5323',
          800: '#033a16',
          900: '#04260f'
        },
        purple: {
          50: '#eddeff',
          100: '#e2c5ff',
          200: '#d2a8ff',
          300: '#bc8cff',
          400: '#a371f7',
          500: '#8957e5',
          600: '#6e40c9',
          700: '#553098',
          800: '#3c1e70',
          900: '#271052'
        }
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
