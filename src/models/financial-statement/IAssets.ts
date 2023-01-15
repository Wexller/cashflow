import { IPreciousMetal } from '../asset/IPreciousMetal'
import { IStock } from '../asset/IStock'
import { IRealEstate } from '../asset/IRealEstate'
import { IBusiness } from 'models/asset/IBusiness'

export interface IAssets {
  savings: number
  preciousMetals: IPreciousMetal[]
  stocks: IStock[]
  realEstate: IRealEstate[]
  business: IBusiness[]
}
