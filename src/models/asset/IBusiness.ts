import { IAssetBase } from './IAsset';

export interface IBusiness extends IAssetBase {
  cashFlow: number,
  downPay: number,
  liability: number
  price: number,
  type: BusinessEnum
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
