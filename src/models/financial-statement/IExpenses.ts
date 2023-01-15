export interface IExpenses {
  taxes: number
  homeMortgage: number
  schoolLoan: number
  carLoan: number
  creditCard: number
  retail: number
  otherExpenses: number
  perChildExpense: number
  loan: number | null

  getTotalExpenses(): number
}
