import { LandEnum } from '../asset/ILand'
import { IMarketBase } from './IMarket'

export interface ILandMarket extends IMarketBase {
  type: LandEnum
  price: number
}
