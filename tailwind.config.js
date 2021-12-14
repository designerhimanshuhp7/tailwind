module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'f-42': '42px',
        'f-16': '16px',
        'f-74': '74px',
        'f-28': '28px',
      },
      backgroundImage: {
        'hero-pattern': "url('img/hero.jpg')",
      },
      lineHeight: {
        'extra-loose': '2.5',
        '68': '68px',
        '24': '24px',
      },
      fontFamily: {
        'nunito': 'Nunito Sans',
        'amiri' : 'Amiri'
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
        cstmCol: {
          bgCol1: '#f4f5f7',
          bgCol2: '#222222',
          textCol2: '#42cd8f',
          logocol: '#98c83c',
          footbrdr: '#979797'
        },
      }
    },
  },
  variants: {
    extend: {}, 
  },
  plugins: [],
}
