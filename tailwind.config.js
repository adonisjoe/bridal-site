/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
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
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
