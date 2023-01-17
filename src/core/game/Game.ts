import { CycledQueue } from '@/core/CycledQueue';
import { Board } from '@/core/game/board/Board';
import { Player } from '@/core/game/Player';

export class Game {
  players: CycledQueue<Player>;
  currentPlayer: Player | null = null;
  board: Board;
  leader?: unknown;

  constructor({ player }:{player: Player}) {
    this.board = new Board();
    this.players = new CycledQueue<Player>([player]);
    this.currentPlayer = this.players.first();
  }

  addPlayer(player: Player): Player[] {
    this.players.addOne(player);
    return this.players.queue;
  }
}
