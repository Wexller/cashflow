import { IRealEstate } from '../asset/IRealEstate'
import { IBusiness } from '../asset/IBusiness'

export interface ILiabilities {
  homeMortgage: number
  schoolLoan: number
  carLoan: number
  creditCard: number
  retail: number
  realEstate: IRealEstate[]
  business: IBusiness[]
}
