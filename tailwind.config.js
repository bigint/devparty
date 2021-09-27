const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
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
        blue: {
          50: '#f1f8ff',
          100: '#dbedff',
          200: '#c8e1ff',
          300: '#79b8ff',
          400: '#2188ff',
          500: '#0366d6',
          600: '#005cc5',
          700: '#044289',
          800: '#032f62',
          900: '#05264c'
        },
        green: {
          50: '#f0fff4',
          100: '#dcffe4',
          200: '#bef5cb',
          300: '#85e89d',
          400: '#34d058',
          500: '#28a745',
          600: '#22863a',
          700: '#176f2c',
          800: '#165c26',
          900: '#144620'
        },
        purple: {
          50: '#f5f0ff',
          100: '#e6dcfd',
          200: '#d1bcf9',
          300: '#b392f0',
          400: '#8a63d2',
          500: '#6f42c1',
          600: '#5a32a3',
          700: '#4c2889',
          800: '#3a1d6e',
          900: '#29134e'
        },
        yellow: {
          50: '#f8e3a1',
          100: '#f2cc60',
          200: '#e3b341',
          300: '#d29922',
          400: '#bb8009',
          500: '#9e6a03',
          600: '#845306',
          700: '#693e00',
          800: '#4b2900',
          900: '#341a00'
        },
        orange: {
          50: '#ffdfb6',
          100: '#ffc680',
          200: '#ffa657',
          300: '#f0883e',
          400: '#db6d28',
          500: '#bd561d',
          600: '#9b4215',
          700: '#762d0a',
          800: '#5a1e02',
          900: '#3d1300'
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
