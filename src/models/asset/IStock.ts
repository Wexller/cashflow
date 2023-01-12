import { IPriceRange } from './IPriceRange'
import { IAssetBase } from './IAsset'

export interface IStock extends IAssetBase {
  type: StockTickerEnum
  priceRange: IPriceRange
  currentPrice: number
}

export enum StockTickerEnum {
  OK4U,
  MYT4U,
  ON2U,
  GRO4US
}
