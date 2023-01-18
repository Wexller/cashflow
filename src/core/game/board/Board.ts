import eventBus from '@/core/EventBus';
import { FastRace } from '@/core/game/board/FastRace';
import { RatRace } from '@/core/game/board/RatRace';
import { Player } from '@/core/game/Player';
import { PlayerEventsEnum } from '@/types/event-bus.types';

export class Board {
  ratRace: RatRace;
  fastRace: FastRace;

  constructor() {
    this.ratRace = new RatRace();
    this.fastRace = new FastRace();
    this.initListeners();
  }

  private initListeners(): void {
    eventBus.on(PlayerEventsEnum.PLAYER_MOVEMENT, this.onPlayerMovement);
  }

  private onPlayerMovement = (player: Player): void => {
    if (player.financialStatement.isRatRace()) {
      this.ratRace.changePlayerPosition(player);
    }
  };
}
