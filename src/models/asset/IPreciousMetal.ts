import { IAssetBase } from './IAsset';

export interface IPreciousMetal extends IAssetBase {
  amount: number,
  type: PreciousMetalEnum
}

export enum PreciousMetalEnum {
  KRUGERRAND,
  COIN
}
