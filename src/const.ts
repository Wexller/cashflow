import { RatRaceEnum } from './models/race/IRatRace'

export const ratRaceList: { type: RatRaceEnum; idx: number }[] = [
  RatRaceEnum.OPPORTUNITY,
  RatRaceEnum.DOODADS,
  RatRaceEnum.OPPORTUNITY,
  RatRaceEnum.CHARITY,
  RatRaceEnum.OPPORTUNITY,
  RatRaceEnum.PAYCHECK,
  RatRaceEnum.OPPORTUNITY,
  RatRaceEnum.MARKET,
  RatRaceEnum.OPPORTUNITY,
  RatRaceEnum.DOODADS,
  RatRaceEnum.OPPORTUNITY,
  RatRaceEnum.BABY,
  RatRaceEnum.OPPORTUNITY,
  RatRaceEnum.DOWNSIZE
].map((type, idx) => ({ idx, type }))
