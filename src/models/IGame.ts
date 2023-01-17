import { Player } from '@/core/game/Player';
import { IBoard } from '@/models/board/IBoard';
import { IPlayer } from './IPlayer';

export interface IGame {
  addPlayer(player: Player): IPlayer[],
  board: IBoard;
  currentPlayer: IPlayer | null;
  players: IPlayer[];
}
