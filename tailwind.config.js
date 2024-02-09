/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: '#ESF7FA',
        secondaryColor: '#F0EDDC',
        neutralDGrey: ' #4D4D4D',
        brandPrimary: '#E4857A',
        neutralGrey: '#717171',
        gray900: '#18191f',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
