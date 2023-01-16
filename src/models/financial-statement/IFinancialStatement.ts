import { IAssets } from './IAssets';
import { IExpenses } from './IExpenses';
import { IIncomes } from './IIncomes';
import { ILiabilities } from './ILiabilities';

export interface IFinancialStatement {
  assets: IAssets,
  expenses: IExpenses,
  getPayday(): number,
  incomes: IIncomes,
  liabilities: ILiabilities,
  payday: number,
  professionName: string,
  totalExpenses: number,
  totalIncome: number
}
