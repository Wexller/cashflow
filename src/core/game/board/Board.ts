import { FastRace } from '@/core/game/board/FastRace';
import { RatRace } from '@/core/game/board/RatRace';
import { IBoard } from '@/models/board/IBoard';

export class Board implements IBoard {
  ratRace: RatRace;
  fastRace: FastRace;

  constructor() {
    this.ratRace = new RatRace();
    this.fastRace = new FastRace();
  }
}
