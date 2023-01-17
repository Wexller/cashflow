import { ratRaceList } from '@/const';
import { IRaceField, RatRaceEnum, RatRaceType } from '@/models/IRace';

export class RatRace implements RatRaceType {
  race: IRaceField<RatRaceEnum>[];

  constructor() {
    this.race = this.generateRace();
  }

  private generateRace(): IRaceField<RatRaceEnum>[] {
    return ratRaceList.map((type) => ({ type }));
  }

  getNewPosition(movement: number): number {
    return movement;
  }
}
