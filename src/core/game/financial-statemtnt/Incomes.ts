import { IIncomes } from 'models/financial-statement/IIncomes'

export class Incomes implements IIncomes {
  interests = []
  realEstate = []
  business = []

  constructor(public salary = 0) {}

  getTotalIncome(): number {
    return 0
  }
}
