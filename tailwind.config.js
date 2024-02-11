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
        tertiaryColor: '#EF6236',
        secondaryColor: '#2F7155',
        primaryColorLight: '#f5f3e9',
        primaryColor: '#F0EDDD',
        colorFrame: '#B6A8CC',
        colorGrey: '#4D4D4D',
        neutralGreyLight: '#919191',
        colorWhite: '#fff',
        colorDark: '#000',
      },
      fontFamily: {
        fontScript: ['Dancing Script', 'cursive'],
        fontSans: ['Montserrat Alternates', 'cursive'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
