import { ILiabilities } from 'models/financial-statement/ILiabilities'

export interface ILiabilitiesInit {
  homeMortgage: number
  schoolLoan: number
  carLoan: number
  creditCard: number
  retail: number
}

export class Liabilities implements ILiabilities {
  homeMortgage
  schoolLoan
  carLoan
  creditCard
  retail
  realEstate = []
  business = []

  constructor({
    homeMortgage,
    schoolLoan,
    carLoan,
    creditCard,
    retail
  }: ILiabilitiesInit) {
    this.homeMortgage = homeMortgage
    this.schoolLoan = schoolLoan
    this.carLoan = carLoan
    this.creditCard = creditCard
    this.retail = retail
  }
}
