/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        display:["Fira Sans", "sans-serif"]
      },
      colors: {
        primary:"#fafaff" ,
        secondary:'#04080f' ,
        ternary: "#8a4fff",
        fourth: "#623cea"
      }
    },
  },
  plugins: [],
}

