import { IAssetBase } from './IAsset'

export interface IDebt extends IAssetBase {
  type: DebtEnum
  amount: number
}

export enum DebtEnum {
  SISTER_IN_LOVE
}
