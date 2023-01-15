import { IBaseRace } from './IBaseRace'

export interface IRatRace extends IBaseRace {
  type: RatRaceEnum
  next: IRatRace
}

export enum RatRaceEnum {
  OPPORTUNITY,
  MARKET,
  CHARITY,
  DOODADS,
  PAYCHECK,
  DOWNSIZE,
  BABY
}
