import { IPlayer } from './IPlayer'

export interface IGame {
  players: IPlayer[]
  currentPlayer: IPlayer
}
