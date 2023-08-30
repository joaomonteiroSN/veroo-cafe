/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'main': ['Poppins', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'footer-shadow': '0px -8px 25px 0px rgba(0, 0, 0, 0.30)',
        'button-shadow':  '0px 2.481152296066284px 2.481152296066284px 0px rgba(0, 0, 0, 0.25)',
      },
      dropShadow: {
        'hover-button': '0 0 8px rgba(216, 166, 97, 0.8)',
      }
    },
  },
  plugins: [],
}

