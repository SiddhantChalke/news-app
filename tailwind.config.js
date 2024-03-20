/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '3/10': '30%',
      },
      screens:{
        'xs': '480px'
      }
    },
  },
  plugins: [],
}

