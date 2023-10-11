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
        'blue-light': '#17A2B8',
        'green': '#28A745',
        'red': '#8f1823',
        'blue-dark': '#004AAD',
        'pink': '#FFAEBC',
        'yellow': '#f1f100',
        'danger': '#dc3545',
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

