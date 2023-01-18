const ratRace = [
  'BABY',
  'CHARITY',
  'DOODADS',
  'DOWNSIZE',
  'MARKET',
  'OPPORTUNITY',
  'PAYCHECK'
]

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    ...ratRace.map((v) => `bg-race-${v}`),
    ...ratRace.map((v) => `text-race-${v}`)
  ],
  theme: {
    extend: {
      colors: {
        race: {
          OPPORTUNITY: '#87C266',
          MARKET: '#37baff',
          CHARITY: '#ff9068',
          DOODADS: '#C49DB2',
          PAYCHECK: '#E9CB59',
          BABY: '#a166af',
          DOWNSIZE: '#a166af',
        }
      },
    },
  },
  plugins: [],
}
