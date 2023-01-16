import { IFinancialStatement } from './financial-statement/IFinancialStatement';

export interface IPlayer {
  borrowMoney(amount: number): void;
  endTurn(): void;
  financialStatement: IFinancialStatement;
  maxDices: number;
  repayMoney(amount: number): void;
  rollTheDice(numberOfDices: number): void;
}
