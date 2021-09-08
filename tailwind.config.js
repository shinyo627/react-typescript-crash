module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
       'architect' : ['Architects Daughter', 'cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
