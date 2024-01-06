/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["inter"]
      },
      colors: {
        'dark' : '#21252b',
        'primary' : '#282c34',
      }
    },
  },
  plugins: [],
}

