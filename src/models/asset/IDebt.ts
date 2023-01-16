import { IAssetBase } from './IAsset';

export interface IDebt extends IAssetBase {
  amount: number,
  type: DebtEnum
}

export enum DebtEnum {
  SISTER_IN_LOVE
}
