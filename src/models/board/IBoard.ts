import { IFastRace } from '../race/IFastRace'
import { IRatRace } from '../race/IRatRace'

export interface IBoard {
  ratRace: IRatRace
  fastRace: IFastRace
}
