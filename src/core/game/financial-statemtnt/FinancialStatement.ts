import { Assets } from '@/core/game/financial-statemtnt/Assets';
import {
  Expenses,
  IExpensesInit,
} from '@/core/game/financial-statemtnt/Expenses';
import { Incomes } from '@/core/game/financial-statemtnt/Incomes';
import {
  ILiabilitiesInit,
  Liabilities,
} from '@/core/game/financial-statemtnt/Liabilities';

export interface IFinancialStatementInit {
  expenses: IExpensesInit;
  liabilities: ILiabilitiesInit;
  professionName: string;
  salary: number;
  savings: number;
}

export class FinancialStatement {
  professionName;
  totalIncome;
  totalExpenses;
  payday;
  incomes: Incomes;
  assets: Assets;
  liabilities: Liabilities;
  expenses: Expenses;
  cash;

  constructor({
    professionName,
    salary,
    savings,
    liabilities,
    expenses,
  }: IFinancialStatementInit) {
    this.professionName = professionName;

    this.assets = new Assets(savings);
    this.liabilities = new Liabilities(liabilities);
    this.incomes = new Incomes(salary);
    this.expenses = new Expenses(expenses);

    this.totalIncome = this.incomes.getTotalIncome();
    this.totalExpenses = this.expenses.getTotalExpenses();

    this.payday = this.getPayday();
    this.cash = this.assets.savings + this.payday;
  }

  getPayday(): number {
    return this.totalIncome - this.totalExpenses;
  }
}
