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

export class Expenses {
  taxes: number;
  homeMortgage: number;
  schoolLoan: number;
  carLoan: number;
  creditCard: number;
  retail: number;
  otherExpenses: number;
  childrenExpenses: number;
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
    this.childrenExpenses = 0;
    this.perChildExpense = perChildExpense;
  }

  getTotalExpenses(): number {
    return (
      this.taxes +
      this.homeMortgage +
      this.schoolLoan +
      this.carLoan +
      this.creditCard +
      this.retail +
      this.otherExpenses
    );
  }
}
