import { BusinessEnum } from '../asset/IBusiness';
import { IMarketBase } from './IMarket';

export interface IBusinessMarket extends IMarketBase {
  haveToSell?: boolean,
  increaseCashFlow?: boolean,
  price: number,
  type: BusinessEnum[]
}
