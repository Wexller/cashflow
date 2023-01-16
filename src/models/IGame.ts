import { IPlayer } from './IPlayer';

export interface IGame {
  currentPlayer: IPlayer,
  players: IPlayer[]
}
