/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // nuevos valores principales
        primary: '#006FB9',
        accent:  '#FFDC35',

        // escala de colores azules
        primary50:  '#FAFBFC',
        primary100: '#F1F4FA',
        primary150: '#D9E3F2',
        primary200: '#A1B8DE',
        primary300: '#006FB9',
        primary400: '#145B97',
        primary500: '#194B7B',
        primary600: '#103151',

        // escala de colores amarillos
        accent100: '#FFF9E0',
        accent200: '#FFEC99',
        accent300: '#FFDC35',
        accent400: '#D3B318',
        accent500: '#847220',
        
        // escala de colores semánticos
        success400:    '#2E8241',
        error400:      '#BA4B44',
        warning400:    '#AB5C00',
        info400:       '#0076A9',
        visited400:    '#5548E9',
        aprove400:     '#E5FFEB',
        error100:      '#FFF0EF',
        warning100:    '#FFF4E8',
        info100:       '#E4F7FF',
        visited100:    '#5548E9',

        // escala de colores grises
        white0:      '#FFFFFF',
        gray100:    '#EEDEDD',
        gray200:    '#BEBEBD',
        gray300:    '#9B9A98',
        gray400:    '#777673',
        gray500:    '#595955',
        gray600:    '#3B3A37',
        gray700:    '#1B1A16',
        transparent:'rgba(255,255,255,0.01)',

        // escala de colores Overlay
        overlay700: '#1B1A1628',

        textPrimary:   '#1B1A16',
        textSecondary: '#595955',
        textDisabled:  '#A1B8DE',
      },

      spacing: {
        1:  '4px',
        2:  '8px',
        3:  '12px',
        4:  '16px',
        5:  '20px',
        6:  '24px',
        8:  '32px',
        10: '40px',
        14: '56px',
        18: '72px',
      },

      borderWidth: {
        DEFAULT: '1px',
        2:       '2px',
      },

      borderRadius: {
        sm:  '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
      },

      fontSize: {
        base:  ['16px', { lineHeight: '24px' }],
        lg:    ['18px', { lineHeight: '28px' }],
        xl:    ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['28px', { lineHeight: '36px' }],
        '4xl': ['32px', { lineHeight: '40px' }],
        '5xl': ['40px', { lineHeight: '47px' }],
      },
    },
  },
  plugins: [],
};
