import { IExpenses } from '@/models/financial-statement/IExpenses';

export interface IExpensesInit {
  carLoan: number;
  creditCard: number;
  homeMortgage: number;
  otherExpenses: number;
  perChildExpense: number;
  retail: number;
  schoolLoan: number;
  taxes: number;
}

export class Expenses implements IExpenses {
  taxes;
  homeMortgage;
  schoolLoan;
  carLoan;
  creditCard;
  retail;
  otherExpenses;
  perChildExpense;
  loan = null;

  constructor({
    taxes,
    homeMortgage,
    schoolLoan,
    carLoan,
    creditCard,
    retail,
    otherExpenses,
    perChildExpense,
  }: IExpensesInit) {
    this.taxes = taxes;
    this.homeMortgage = homeMortgage;
    this.schoolLoan = schoolLoan;
    this.carLoan = carLoan;
    this.creditCard = creditCard;
    this.retail = retail;
    this.otherExpenses = otherExpenses;
    this.perChildExpense = perChildExpense;
  }

  getTotalExpenses(): number {
    return 0;
  }
}
