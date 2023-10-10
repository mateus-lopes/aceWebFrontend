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
        'darkin': '#343a40',
        'dark': '#111',
    },
    width: {
      'special': '300px',
      '3xl': '1600px',
    }
  },
  plugins: [
  ],
  }
}

