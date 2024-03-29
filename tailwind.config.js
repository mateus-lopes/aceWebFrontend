/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'special': '300px',
        '3xl': '1600px',
      },
      colors: {
        'primary': '#003375',
        'primary-dark': '#004aad',
      },
    },
    plugins: [
    ],
  }
}

