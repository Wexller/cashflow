import { IAssetBase } from './IAsset';
import { IPriceRange } from './IPriceRange';

export interface IStock extends IAssetBase {
  currentPrice: number,
  priceRange: IPriceRange
  type: StockTickerEnum
}

export enum StockTickerEnum {
  OK4U,
  MYT4U,
  ON2U,
  GRO4US
}
