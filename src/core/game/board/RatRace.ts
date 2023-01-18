import { ratRaceList } from '@/const';
import eventBus from '@/core/EventBus';
import { Player } from '@/core/game/Player';
import { IRaceField, RatRaceEnum } from '@/models/IRace';
import { BoardEventsEnum } from '@/types/event-bus.types';

interface IGetNewPosition {
  newPosition: number;
  numberOfPaychecks: number;
}

export type RatRaceList = IRaceField<RatRaceEnum>[];

export class RatRace {
  race: RatRaceList;

  constructor() {
    this.race = this.generateRace();
  }

  private generateRace(): RatRaceList {
    return ratRaceList.map((type) => ({ type, players: [] }));
  }

  getRace(): RatRaceList {
    return this.race.concat();
  }

  getNewPosition(currentPosition: number, movement: number): IGetNewPosition {
    const finish = currentPosition + movement;

    const newPosition =
      currentPosition + movement <= this.race.length - 1
        ? finish
        : finish - this.race.length;

    return {
      newPosition,
      numberOfPaychecks: this.getNumberOfPaychecks(currentPosition, finish),
    };
  }

  getNumberOfPaychecks(start: number, finish: number): number {
    const includedStart = start + 1;
    const includedFinish = finish + 1;

    const tmpRace = this.race.slice(includedStart, includedFinish);

    if (finish > this.race.length - 1) {
      tmpRace.push(...this.race.slice(0, includedFinish - this.race.length));
    }

    return tmpRace.filter(({ type }) => type === RatRaceEnum.PAYCHECK).length;
  }

  changePlayerPosition(player: Player): void {
    const field = this.race.find(({ players }) => players.includes(player));

    if (field) {
      field.players = field.players.filter((p) => p !== player);
    }

    this.race.at(player.currentPosition)?.players.push(player);

    eventBus.emit(BoardEventsEnum.RAT_RACE_CHANGE);
  }
}
