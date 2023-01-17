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
          0: '#87C266',
          1: '#37baff',
          2: '#ff9068',
          3: '#C49DB2',
          4: '#E9CB59',
          5: '#a166af',
          6: '#a166af',
        }
      },
    },
  },
  plugins: [],
}
