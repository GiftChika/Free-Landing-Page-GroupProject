/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screen:{
      sm:"390px",
      md:'768px',
    },
    extend: {
      colors:{
        lightRed : 'hsba(3, 63%, 99%, 1)',



      }

    },

  },
  plugins: [],
}

