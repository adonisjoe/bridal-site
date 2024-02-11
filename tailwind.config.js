/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: '#ESF7FA',
        secondaryColor: '#F0EDDC',
        neutralDGrey: ' #4D4D4D',
        brandPrimary: '#F7347C',
        neutralGrey: '#717171',
        neutralGreyLight: '#919191',
        gray900: '#18191f',
        gray900Bg: 'rgba(0, 0, 0, .7)',
      },
      fontFamily: {
        fontScript: ['Dancing Script', 'cursive'],
        fontSans: ['Montserrat Alternates', 'cursive'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
