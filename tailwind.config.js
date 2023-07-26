/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#8323FF',
          'purple-light': '#9F55FF',
          pink: '#FF2DAF',
          'pink-light': '#FF46B9',
          yellow: '#FEEA35',
          'gray-dark': '#1E1F28',
          gray: '#2B2B37',
          'gray-medium': '#373745',
          'gray-light': '#8B8D9B'
        }
      }
    },
  },
  plugins: [],
}
