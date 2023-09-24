/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#004AAD',
        'secondary': '#343a40',
        'dark': '#222',
        'yellow': '#f1f100'
    },
  },
  plugins: [
  ],
  }
}