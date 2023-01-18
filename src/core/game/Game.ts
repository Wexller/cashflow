import { CycledQueue } from '@/core/CycledQueue';
import eventBus from '@/core/EventBus';
import { Board } from '@/core/game/board/Board';
import { Player } from '@/core/game/Player';
import { PlayerEventsEnum } from '@/types/event-bus.types';

interface IGameInit {
  players: Player[];
}

export class Game {
  players: CycledQueue<Player>;
  currentPlayer: Player;
  board: Board;
  leader?: unknown;

  constructor({ players }: IGameInit) {
    this.board = new Board();
    this.players = new CycledQueue<Player>(players);
    this.currentPlayer = this.players.first();

    this.initListeners();
  }

  private initListeners(): void {
    eventBus.on(PlayerEventsEnum.ROLL_THE_DICE, this.onRollTheDice);
  }

  private onRollTheDice = (movement: number): void => {
    // player.financialStatement.isRatRace()

    const { currentPlayer: player } = this;

    const { newPosition, numberOfPaychecks } =
      this.board.ratRace.getNewPosition(player.currentPosition, movement);

    player.currentPosition = newPosition;

    eventBus.emit(PlayerEventsEnum.PLAYER_MOVEMENT, player);

    if (numberOfPaychecks > 0) {
      player.financialStatement.addCash(
        player.financialStatement.getPayday() * numberOfPaychecks,
      );
    }
  };

  addPlayer(player: Player): Player[] {
    this.players.addOne(player);
    return this.players.queue;
  }
}
