export interface IRaceField<T> {
  type: T;
}

interface IRace<T> {
  getNewPosition(movement: number): number;
  race: IRaceField<T>[];
}

export type RatRaceType = IRace<RatRaceEnum>;
export type FastRaceType = IRace<FastRaceEnum>;

export enum RatRaceEnum {
  OPPORTUNITY,
  MARKET,
  CHARITY,
  DOODADS,
  PAYCHECK,
  DOWNSIZE,
  BABY,
}

export enum FastRaceEnum {
  DREAM,
  BUSINESS,
  CHARITY,
  PAYCHECK,
  AUDIT,
}
