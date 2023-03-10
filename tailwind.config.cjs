/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-red': 'hsla(0, 100%, 74%, 1)',
        'c-green': 'hsla(154, 59%, 51%, 1)',
        'c-blue': 'hsla(248, 33%, 49%, 1)',
        'c-dark-blue': 'hsla(248, 9%, 26%, 1)',
        'c-grayish-blue': 'hsla(247, 25%, 77%, 1)',
        'c-grey': 'hsla(0, 0%, 87%, 1)'
      },
      fontSize: {
        50: ['50px', '55px'],
        28: ['28px', '36px'],
        16: ['16px', '26px'],
        15: ['15px', '26px'],
        14: ['14px', '26px'],
        11: ['11px', '26px'],
        'error': ['11px', '16px']
      },
      backgroundImage: {
        'desktop': "url('./images/bg-intro-desktop.png')",
        'mobile': "url('./images/bg-intro-mobile.png')",
      }
    },
  },
  plugins: [],
}