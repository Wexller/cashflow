import { RealEstateEnum } from '../asset/IRealEstate'
import { IMarketBase } from './IMarket'

export interface IRealEstateMarket extends IMarketBase {
  type: typeof RealEstateEnum[]
  pricePerEach: number
  minFlatNumber?: boolean
  addToPrice?: boolean
}
