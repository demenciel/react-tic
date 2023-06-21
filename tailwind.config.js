/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    important: true,
    container: false,
    screens: {
      xsm: '500px',
      sm: '790px',
      md: '800px',
      lg: '1000px',
      xl: '1200px',
    },
  },
  plugins: [],
}

