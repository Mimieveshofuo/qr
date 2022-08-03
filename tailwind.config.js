/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    screens:{
      'sm':'576px',
      'md': '600px',
      'lg':'720px',
      'xl': '1024px',
      '2xl': '1280px'
    },
    extend: {
      fontFamily:{
        Outfit:["Outfit", "sans-serif"]
      }
    },
  },
  plugins: [],
}
