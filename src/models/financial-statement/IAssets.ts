import { IPreciousMetal } from '../asset/IPreciousMetal'
import { IStock } from '../asset/IStock'
import { IRealEstate } from '../asset/IRealEstate'

export interface IAssets {
  savings: number
  preciousMetals: IPreciousMetal[]
  stocks: IStock[]
  realEstate: IRealEstate[]
}
