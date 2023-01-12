import { IPriceRange } from './IPriceRange'
import { IAssetBase } from './IAsset'

export interface IInterest extends IAssetBase {
  type: StockTickerEnum
  tradingRange: IPriceRange
  currentPrice: number
  interestIncome: number
  netIncome: number
}

export enum StockTickerEnum {
  D_CD,
  D_2BIG
}
