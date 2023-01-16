import { IBaseRace } from './IBaseRace';

export interface IRatRace extends IBaseRace {
  next: IRatRace,
  type: RatRaceEnum
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
