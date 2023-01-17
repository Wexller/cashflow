import { IAssetBase } from './IAsset';

export interface ILand extends IAssetBase {
  cashFlow: number;
  downPay: number;
  mortgage: number;
  price: number;
  type: LandEnum;
}

export enum LandEnum {
  ACRES_10,
  ACRES_20,
}
