module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('img/hero.png')",
      },
      height: (theme) => ({
        fullpx: '41rem',
      }),
      minHeight: {
        pxMin: '41rem',
      },
      flex: {
        '100': '0 0 100%',
      },
      color: {
        custom1: '#4942c9',
      }
    },
  },
  variants: {
    extend: {}, 
  },
  plugins: [],
}
