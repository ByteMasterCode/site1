/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {animation: {
        'spin-slow': 'spin 13s linear infinite',
      }},
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
