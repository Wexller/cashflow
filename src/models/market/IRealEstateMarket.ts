import { RealEstateEnum } from '../asset/IRealEstate';
import { IMarketBase } from './IMarket';

export interface IRealEstateMarket extends IMarketBase {
  addToPrice?: boolean;
  minFlatNumber?: boolean;
  pricePerEach: number;
  type: (typeof RealEstateEnum)[];
}
