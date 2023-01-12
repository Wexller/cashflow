import { IAssetBase } from './IAsset'

export interface IBusiness extends IAssetBase {
  type: BusinessEnum
  price: number
  liability: number
  downPay: number
  cashFlow: number
}

export enum BusinessEnum {
  IT,
  VEHICLE,
  PENSION,
  MARKET,
  CAR_WASH,
  PIZZA,
  FACTORY
}
