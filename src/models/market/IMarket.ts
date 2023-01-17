import { IBusinessMarket } from './IBusinessMarket';
import { ILandMarket } from './ILandMarket';
import { IPreciousMetalsMarket } from './IPreciousMetalsMarket';
import { IRealEstateMarket } from './IRealEstateMarket';

export interface IMarketBase {
  description: string;
  title: string;
}

export type MarketType =
  | IBusinessMarket
  | ILandMarket
  | IPreciousMetalsMarket
  | IRealEstateMarket;
