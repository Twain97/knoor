/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,vue,css}"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      width:{
        wd05:"5vw",
        wd1:"10vw",
        wd2:"20vw",
        wd3:"30vw",
        wd4:"40vw",
        wd5:"50vw",
        wd6:"60vw",
        wd7:"70vw",
        wd8:"80vw",
        wd9:"90vw",
        98:"98vw",
        wdFull:"100vw"
      }
    },
  },
  plugins: [],
}

