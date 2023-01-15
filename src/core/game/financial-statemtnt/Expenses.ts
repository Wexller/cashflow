import { IExpenses } from 'models/financial-statement/IExpenses'

export interface IExpensesInit {
  taxes: number
  homeMortgage: number
  schoolLoan: number
  carLoan: number
  creditCard: number
  retail: number
  otherExpenses: number
  perChildExpense: number
}

export class Expenses implements IExpenses {
  taxes
  homeMortgage
  schoolLoan
  carLoan
  creditCard
  retail
  otherExpenses
  perChildExpense
  loan = null

  constructor({
    taxes,
    homeMortgage,
    schoolLoan,
    carLoan,
    creditCard,
    retail,
    otherExpenses,
    perChildExpense
  }: IExpensesInit) {
    this.taxes = taxes
    this.homeMortgage = homeMortgage
    this.schoolLoan = schoolLoan
    this.carLoan = carLoan
    this.creditCard = creditCard
    this.retail = retail
    this.otherExpenses = otherExpenses
    this.perChildExpense = perChildExpense
  }

  getTotalExpenses(): number {
    return 0
  }
}
