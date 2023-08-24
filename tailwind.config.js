/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        display:["Fira Sans", "sans-serif"]
      },
      colors: {
        primary:"#E0DFD5" ,
        secondary:'#0d0a0b' ,
        ternary: "#f5f5f5",
      }
    },
  },
  plugins: [],
}

