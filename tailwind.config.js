/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/UI/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['var(--font-poppins)']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '1rem'
      }
    },
    extend: {
      keyframes: {
        stripes: {
          '0%': {
            backgroundPosition: '0 0'
          },
          '100%': {
            backgroundPosition: '160px 0'
          }
        }
      },
      colors: {
        brand: {
          DEFAULT: 'var(--brand-color)',
          hover: 'var(--brand-color-hover)',
          secondary: '#1A3AA1',
          light: '#2C67FF33'
        },
        white: {
          DEFAULT: '#FFF',
          light: '#FBFAFF'
        },
        bar: {
          blue: '#021457',
          orange: '#f25100',
          purple: '#8532a8'
        },
        yellow: {
          DEFAULT: '#FFAB00',
          light: {
            DEFAULT: '#FFF1D4',
            disabled: '#fff1d480'
          },
          disabled: '#ffab0080'
        },
        red: {
          DEFAULT: '#FE475B',
          light: {
            DEFAULT: '#FFDADE',
            disabled: '#FE475BB2'
          }
        },
        green: {
          DEFAULT: '#0CAA1B',
          hover: 'var(--green-color-hover)',
          light: '#DAF2DC',
          soft: 'rgba(12, 170, 27, 0.05)'
        },
        blue: {
          DEFAULT: '#44A9F1',
          border: '#2C67FF',
          mini: '#DAEEFC',
          light: {
            DEFAULT: '#E3F2FD',
            800: '#C0CCEA'
          },
          soft: '#EDECFE'
        },
        teal: {
          DEFAULT: '#00B8D9'
        },
        gray: {
          DEFAULT: '#F3F4F8',
          blues: '#EDECFE',
          deep: {
            DEFAULT: '#8F99AD',
            600: '#798296'
          },
          light: '#EEF0F3'
        },
        border: {
          DEFAULT: '#8D91A5',
          light: '#D8E0ED'
        },
        orange: {
          DEFAULT: '#FF834D',
          light: '#FF834D40',
          mini: '#FFE7D5',
          soft: 'rgba(255, 133, 45, 0.05)'
        },
        seagreen: {
          DEFAULT: '#00B8D9',
          light: '#00B8D933'
        },
        purple: {
          light: '#EDECFE'
        },
        regular: {
          DEFAULT: '#5C5D76',
          disabled: '#5c5d7680'
        },
        dark: '#21214E',
        disabled: '#F8F9FB',
        perple: '#5A49B4',
        meganta: '#B43490',
        brown: '#9B6546',
        deepblue: '#2B82B4',
        lighterBlue: '#DFE8FF',
        strokeColor: '#74777B',
        lightPurpleBG: '#E4E8FD',
        lightBlueBG: '#2C67FF26',
        lightGrayBG: 'rgba(95, 97, 135, 0.50)',
        cardBgBlue: 'rgba(44, 103, 255, 0.15)'
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800'
      },
      fontSize: {
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
        40: '40px',
        44: '44px',
        48: '48px'
      },
      placeholderColor: {
        gray: '#D8E0ED'
      },
      borderColor: {
        gray: '#D8E0ED'
      },
      width: {
        540: '540px',
        265: '265px',
        7.2: '34px',
        307: '307px',
        292: '292px'
      },
      height: {
        590: '590px',
        7.2: '34px',
        76: '19rem'
      },
      zIndex: {
        120: '120',
        110: '110',
        100: '100',
        90: '90',
        80: '80',
        70: '70',
        60: '60'
      },
      boxShadow: {
        'box-shadow': '0px 0px 15px 0px rgba(0, 0, 0, 0.06)'
      }
    },
    plugins: [],
    corePlugins: {
      preflight: false
    }
  }
};
