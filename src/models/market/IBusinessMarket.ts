import { BusinessEnum } from '../asset/IBusiness'
import { IMarketBase } from './IMarket'

export interface IBusinessMarket extends IMarketBase {
  type: typeof BusinessEnum[]
  price: number
  haveToSell?: boolean
  increaseCashFlow?: boolean
}
