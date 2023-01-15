import { IRealEstate } from '../asset/IRealEstate'
import { IBusiness } from '../asset/IBusiness'

export interface ILiabilities {
  homeMortgage: number
  schoolLoan: number
  carLoan: number
  creditCard: number
  realEstateAndBusiness: (IRealEstate | IBusiness)[]
}
