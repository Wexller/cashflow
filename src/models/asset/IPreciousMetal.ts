import { IAssetBase } from './IAsset'

export interface IPreciousMetal extends IAssetBase {
  type: PreciousMetalEnum
  amount: number
}

export enum PreciousMetalEnum {
  KRUGERRAND,
  COIN
}
