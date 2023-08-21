/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary:"#c0bda5" ,
        secondary:'#0d0a0b' ,
        ternary: "#f5f5f5",
      }
    },
  },
  plugins: [],
}

