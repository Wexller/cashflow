import { IAssetBase } from './IAsset';

export interface IRealEstate extends IAssetBase {
  cashFlow: number;
  downPay: number;
  flats: number;
  mortgage: number;
  price: number;
  type: RealEstateEnum;
}

export enum RealEstateEnum {
  RE_3BR_2BA,
  RE_2BR_1BA,
  RE_2PLEX,
  RE_4PLEX,
  RE_8PLEX,
  RE_APARTMENT,
}
