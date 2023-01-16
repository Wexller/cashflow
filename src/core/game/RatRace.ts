import { ratRaceList } from '@/const';
import { RatRaceEnum } from '@/models/race/IRatRace';
import { LinkedList } from '../linked-list/LinkedList';
import { LinkedListNode } from '../linked-list/LinkedListNode';

interface RaceField {
  idx: number;
  type: RatRaceEnum;
}

export class RatRace {
  raceList: LinkedList<RaceField>;
  current: LinkedListNode<RaceField> | null;

  constructor() {
    this.raceList = new LinkedList<RaceField>(true);
    this.raceList.fromArray(ratRaceList);
    this.current = this.raceList.head;
  }

  next(step = 1): LinkedListNode<RaceField> | null {
    if (!this.current || !this.current.next) {
      return this.current;
    }

    for (let i = 0; i < step; i++) {
      if (!this.current) {
        continue;
      }

      this.current = this.current.next;
    }

    return this.current;
  }
}
