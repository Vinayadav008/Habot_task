/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:"#FFFFFF33",
        white:"#ffff",
        primary:"#123557",
        secondary:"#E8FBFF",
        success:"#00732F",
        orange:"#E7760D",
        blue:"#072F57"

      },
      backgroundImage:{
        "Homebg":"url('/src/assets/Images/Homebg.png')",
        "bg2":"url('https://img.freepik.com/premium-vector/beautiful-landscape-nature-background-images-free-download-freepik-vector_1305309-83.jpg')"
      }
    },
  },
  plugins: [],
}