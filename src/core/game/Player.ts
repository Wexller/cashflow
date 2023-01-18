import eventBus from '@/core/EventBus';
import {
  FinancialStatement,
  IFinancialStatementInit,
} from '@/core/game/financial-statemtnt/FinancialStatement';
import { PlayerEventsEnum } from '@/types/event-bus.types';
import { rndNumberRange } from '@/utils/number';

export interface PlayerInit {
  name: string;
  profession: IFinancialStatementInit;
}

export class Player {
  name: string;
  financialStatement: FinancialStatement;
  maxDices: number = 1;
  numberOfChildren: number = 0;
  currentPosition: number = -1;

  constructor({ name, profession }: PlayerInit) {
    this.name = name;
    this.financialStatement = new FinancialStatement(profession);
  }

  rollTheDice(numberOfDices: number): number {
    const dices =
      numberOfDices <= this.maxDices ? numberOfDices : this.maxDices;

    const rolled = rndNumberRange(dices, dices * 6);
    eventBus.emit(PlayerEventsEnum.ROLL_THE_DICE, rolled);
    return rolled;
  }

  borrowMoney(amount: number): number | void {
    return amount;
  }

  repayMoney(amount: number): number | void {
    return amount;
  }

  endTurn(): void {
    return;
  }
}
