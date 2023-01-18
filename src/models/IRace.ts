import { Player } from '@/core/game/Player';

export interface IRaceField<T> {
  players: Player[];
  type: T;
}

interface IRace<T> {
  getNewPosition(movement: number): number;
  race: IRaceField<T>[];
}

export type RatRaceType = IRace<RatRaceEnum>;
export type FastRaceType = IRace<FastRaceEnum>;

export enum RatRaceEnum {
  BABY = 'BABY',
  CHARITY = 'CHARITY',
  DOODADS = 'DOODADS',
  DOWNSIZE = 'DOWNSIZE',
  MARKET = 'MARKET',
  OPPORTUNITY = 'OPPORTUNITY',
  PAYCHECK = 'PAYCHECK',
}

export enum FastRaceEnum {
  DREAM,
  BUSINESS,
  CHARITY,
  PAYCHECK,
  AUDIT,
}
