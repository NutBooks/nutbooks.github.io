import daisyui from 'daisyui';
import { cupcake, synthwave } from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/tw-elements/js/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          cupcake,
          primary: '#65c3c8',
          secondary: '#ef9fbc',
          accent: '#eeaf3a',
          neutral: '#291334',
          'base-100': '#faf7f5',
          'base-200': '#efeae6',
          'base-content': '#291334',
        },
      },
      {
        dark: {
          synthwave,
          primary: '#65c3c8',
          secondary: '#ef9fbc',
          accent: '#eeaf3a',
          neutral: '#291334',
          'neutral-content': '#f9f7fd',
          'base-100': '#1a103d',
          'base-200': '#27374D',
          'base-300': '#526D82',
          'base-content': '#f9f7fd',
        },
      },
    ],
  },
};
