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
      keyframes: {
        wiggle: {
          '0%': {
            transform: 'rotate(0) scale(1) skew(1deg)',
          },
          '10%': {
            transform: 'rotate(-25deg) scale(1) skew(1deg)',
          },
          '20%': {
            transform: 'rotate(25deg) scale(1) skew(1deg)',
          },
          '30%': {
            transform: 'rotate(-25deg) scale(1) skew(1deg)',
          },
          '40%': {
            transform: 'rotate(25deg) scale(1) skew(1deg)',
          },
          '50%': {
            transform: 'rotate(0) scale(1) skew(1deg)',
          },
          '100%': {
            transform: 'rotate(0) scale(1) skew(1deg)',
          },
        },
      },
    },
  },
  plugins: [],
};
