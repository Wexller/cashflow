import { FinancialStatement } from '@/core/game/financial-statemtnt/FinancialStatement';
import { profession } from '@/mock/profession';
import { IPlayer } from '@/models/IPlayer';

export class Player implements IPlayer {
  financialStatement: FinancialStatement;
  maxDices = 1;

  constructor() {
    this.financialStatement = new FinancialStatement(profession);
  }

  rollTheDice(numberOfDices: number): void {}

  borrowMoney(amount: number): void {}

  repayMoney(amount: number): void {}

  endTurn(): void {}
}
