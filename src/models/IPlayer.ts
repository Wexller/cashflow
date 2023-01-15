import { IFinancialStatement } from './financial-statement/IFinancialStatement'

export interface IPlayer {
  financialStatement: IFinancialStatement
  maxDices: number
  rollTheDice(): void
  borrowMoney(amount: number): void
  repayMoney(amount: number): void
  endTurn(): void
}
