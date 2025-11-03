/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A3D62', // Deep Blue
        secondary: '#FFC312', // Golden Yellow
        accent: '#F5F5DC', // Light Cream
      },
      fontFamily: {
        sans: ['Inter', 'Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
