/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: colors.emerald,
      base: colors.slate,
      success: colors.green,
      warning: colors.red
    },
    extend: {}
  },
  plugins: []
}
