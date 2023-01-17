import { LandEnum } from '../asset/ILand';
import { IMarketBase } from './IMarket';

export interface ILandMarket extends IMarketBase {
  price: number;
  type: LandEnum;
}
