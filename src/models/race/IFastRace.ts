import { IBaseRace } from './IBaseRace';

export interface IFastRace extends IBaseRace {
  type: FastRaceEnum
}

export enum FastRaceEnum {
  DREAM,
  BUSINESS,
  CHARITY,
  PAYCHECK,
  AUDIT
}
