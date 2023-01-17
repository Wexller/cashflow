import { IAssetBase } from './IAsset';
import { IPriceRange } from './IPriceRange';

export interface IInterest extends IAssetBase {
  currentPrice: number;
  interestIncome: number;
  netIncome: number;
  tradingRange: IPriceRange;
  type: StockTickerEnum;
}

export enum StockTickerEnum {
  D_CD,
  D_2BIG,
}
