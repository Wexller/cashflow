import { PreciousMetalEnum } from '../asset/IPreciousMetal';
import { IMarketBase } from './IMarket';

export interface IPreciousMetalsMarket extends IMarketBase {
  pricePerEach: number,
  type: PreciousMetalEnum
}
