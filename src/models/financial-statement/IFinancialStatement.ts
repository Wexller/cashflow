import { IAssets } from './IAssets'
import { IIncomes } from './IIncomes'
import { IExpenses } from './IExpenses'
import { ILiabilities } from './ILiabilities'

export interface IFinancialStatement {
  professionName: string
  totalIncome: number
  totalExpenses: number
  payday: number
  incomes: IIncomes
  expenses: IExpenses
  assets: IAssets
  liabilities: ILiabilities
  getPayday(): number
}
