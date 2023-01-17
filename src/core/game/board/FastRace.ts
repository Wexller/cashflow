import { fastRaceList } from '@/const';
import { FastRaceEnum, FastRaceType, IRaceField } from '@/models/IRace';

export class FastRace implements FastRaceType {
  race;

  constructor() {
    this.race = this.generateRace();
  }

  private generateRace(): IRaceField<FastRaceEnum>[] {
    return fastRaceList.map((type) => ({ type }));
  }

  getNewPosition(movement: number): number {
    return movement;
  }
}
