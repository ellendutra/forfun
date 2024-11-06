/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#B1B9D8',
        blueViolet: '#5D43E5',
        customBlue: '#1A2036',
        deepBlue: '#2E3650',
        shadowBlue: '#242B42',
        darkBlue: '#151A27',
        customPurple: '#4A32C9',
        customWhite: '#FAFBFA',
        customGradient: '#1E2638'
      },
      fontFamily: {
        dm: ['var(--font-dm)'],
        montserrat: ['var(--font-montserrat)'],
      },
      screens: {
        xs: '374px'
      }
    },
  },
  plugins: [],
};
