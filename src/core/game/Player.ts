import { FinancialStatement, IFinancialStatementInit } from '@/core/game/financial-statemtnt/FinancialStatement';

export interface PlayerInit {
  profession: IFinancialStatementInit
}

export class Player {
  financialStatement: FinancialStatement;
  maxDices: number = 1;
  children: number = 0;

  constructor({ profession }: PlayerInit) {
    this.financialStatement = new FinancialStatement(profession);
  }

  rollTheDice(numberOfDices: number): void {}

  borrowMoney(amount: number): void {}

  repayMoney(amount: number): void {}

  endTurn(): void {}
}
