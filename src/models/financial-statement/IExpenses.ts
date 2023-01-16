export interface IExpenses {
  carLoan: number,
  creditCard: number,
  getTotalExpenses(): number,
  homeMortgage: number,
  loan: number | null,
  otherExpenses: number,
  perChildExpense: number,
  retail: number,
  schoolLoan: number,

  taxes: number
}
