import { IAssetBase } from './IAsset'

export interface ILand extends IAssetBase {
  type: LandEnum
  price: number
  mortgage: number
  downPay: number
  cashFlow: number
}

export enum LandEnum {
  ACRES_10,
  ACRES_20
}
