module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '.72rem',
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['50px', '61.25px'],
      xl: ['24px', '32px'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
          DEFAULT: '#ffffff',
      },
      green: {
          light: '#6fcf97',
          DEFAULT: '#27AE60',
          dark: '#219653',
          darker: '#1e874b',
      },
      red: {
          light: '#FFEAEA',
          DEFAULT: '#EB5757',
          dark: '#C20D0D',
      },
      orange: {
          light: '#FFEBDA',
          DEFAULT: '#F66A0A',
          dark: '#A04100',
      },
      gray: {
        DEFAULT: '#F9FBFD',
      },
      blue: {
        DEFAULT: '#0f4a7b',
      },
      primary: {
          DEFAULT: '#24292E',
      },
      warning: {
          DEFAULT: '#D1711C',
      }
  },
    extend: {
      
    },
  },
  plugins: [],
}