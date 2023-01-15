import { IFinancialStatementInit } from 'core/game/financial-statemtnt/FinancialStatement'

export const profession: IFinancialStatementInit = {
  professionName: 'Врач',
  salary: 13200,
  savings: 400,
  expenses: {
    taxes: 3420,
    homeMortgage: 1900,
    schoolLoan: 750,
    carLoan: 380,
    creditCard: 270,
    retail: 50,
    otherExpenses: 2880,
    perChildExpense: 640
  },
  liabilities: {
    homeMortgage: 202000,
    schoolLoan: 150000,
    carLoan: 19000,
    creditCard: 9000,
    retail: 1000
  }
}
