/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    ...Array(9).fill(0).map((_, idx) => `bg-race-${idx}`),
    ...Array(9).fill(0).map((_, idx) => `text-race-${idx}`)
  ],
  theme: {
    extend: {
      colors: {
        race: {
          0: '#13ce66',
          1: '#1fb6ff',
          2: '#ff7849',
          3: '#ff49db',
          4: '#ffc82c',
          5: '#7e5bef',
          6: '#7e5bef',
        }
      },
    },
  },
  plugins: [],
}
