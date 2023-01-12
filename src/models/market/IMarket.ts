import { IBusinessMarket } from './IBusinessMarket'
import { ILandMarket } from './ILandMarket'
import { IPreciousMetalsMarket } from './IPreciousMetalsMarket'
import { IRealEstateMarket } from './IRealEstateMarket'
import { BusinessEnum } from '../asset/IBusiness'

export interface IMarketBase {
  title: string
  description: string
}

export type MarketType =
  | IBusinessMarket
  | ILandMarket
  | IPreciousMetalsMarket
  | IRealEstateMarket
