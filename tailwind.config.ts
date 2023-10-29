/** @type {import('tailwindcss').Config} */
const config: import('tailwindcss').Config = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

export default config;