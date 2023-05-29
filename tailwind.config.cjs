const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans Condensed', ...defaultTheme.fontFamily.sans],
      },
      height: {
        '90-vh': '90vh',
        128: '32rem',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
