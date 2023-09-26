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
        'azul-claro': '#17A2B8',
        'verde': '#28A745',
        'vermelho': '#DC3545',
        'azul-escuro': '#004AAD',
        'rosa': '#FFAEBC',
        'dark': '#222',
        'yellow': '#f1f100'
    },
    width: {
      'special': '300px',
    }
  },
  plugins: [
  ],
  }
}

