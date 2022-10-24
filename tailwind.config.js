/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-default': '#FF9C00',
        'theme-secondary': '#20A8FE',
        'body-text': '#879197',
        'heading-text': '#0F2253'
      }
    },
  },
  plugins: [],
}