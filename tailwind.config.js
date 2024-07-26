/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily:{
        lato:"Inter, sans-serif",
        poppins:" Poppins, sans-serif",
        robo:" Roboto, sans-serif"
      }
    },
  },
  plugins: [],
}

