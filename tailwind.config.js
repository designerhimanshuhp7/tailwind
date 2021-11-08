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
        '0': '0',
        '33': '33px',
        'full': '100%',
      },
      minWidth: {
        '0': '0',
        '133': '133px',
        'full': '100%',
      },
      flex: {
        '100': '0 0 100%',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        cstmNavIndigo: {
          light: '#7c1fe1',
          DEFAULT: '#1b0632',
          dark: '#1b0632',
        },
        cstmNavGray: {
          light: '#eeeeee',
          DEFAULT: '#eeeeee',
          dark: '#4a4a4a',
        },
        cstmLogo: {
          DEFAULT: '#4942c9',
        },
        cstmbtnclr: {
          DEFAULT: '#4a42cd',
          badge1: '#044c84',
          badge2: '#3cccfe',
          badge3: '#9f64d5',
          border: '#647b89',
        },
      }
    },
  },
  variants: {
    extend: {}, 
  },
  plugins: [],
}
