/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': 14,
        'sm': 16,
        'md': 18,
        'lg': 20,
        'xl': 24,
        '2xl': 32
      },
      fontWeight: {},
      colors: {
        'transparent': 'transparent',
        'black': '#000000',
        'white': '#FFFFFF',
        gray: {
          900: '#121214',
          800: '#202024',
          400: '#7C7C8A',
          200: '#C4C4C6',
          100: '#E1E1E6',
        },
        cyan: {
          500: '#61DAFB',
          200: '#9BE1FB',
        }

      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
