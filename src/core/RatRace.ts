import { RatRaceEnum } from '../models/race/IRatRace'
import { LinkedList } from './linked-list/LinkedList'
import { LinkedListNode } from './linked-list/LinkedListNode'
import { ratRaceList } from '../const'

interface RaceField {
  type: RatRaceEnum
  idx: number
}

export class RatRace {
  raceList: LinkedList<RaceField>
  current: LinkedListNode<RaceField> | null

  constructor() {
    this.raceList = new LinkedList<RaceField>(true)
    this.raceList.fromArray(ratRaceList)
    this.current = this.raceList.head
  }

  next(step = 1): void {
    if (!this.current || !this.current.next) return

    for (let i = 0; i < step; i++) {
      if (!this.current) continue

      this.current = this.current.next
    }
  }
}
