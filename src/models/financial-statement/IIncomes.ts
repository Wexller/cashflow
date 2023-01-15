import { IInterest } from '../asset/IInterest'
import { IRealEstate } from '../asset/IRealEstate'
import { IBusiness } from '../asset/IBusiness'

export interface IIncomes {
  salary: number
  interests: IInterest[]
  realEstateAndBusiness: (IRealEstate | IBusiness)[]
}
