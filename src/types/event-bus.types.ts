import { Player } from '@/core/game/Player';

export enum PlayerEventsEnum {
  PLAYER_MOVEMENT = 'PLAYER_MOVEMENT',
  ROLL_THE_DICE = 'ROLL_THE_DICE',
}

type PlayerEventsType = {
  [PlayerEventsEnum.ROLL_THE_DICE]: (movement: number) => void;
  [PlayerEventsEnum.PLAYER_MOVEMENT]: (player: Player) => void;
};

export enum BoardEventsEnum {
  FAST_RACE_CHANGE = 'FAST_RACE_CHANGE',
  RAT_RACE_CHANGE = 'RAT_RACE_CHANGE',
}

type BoardEventsType = {
  [BoardEventsEnum.RAT_RACE_CHANGE]: () => void;
  [BoardEventsEnum.FAST_RACE_CHANGE]: () => void;
};

export enum StatementEventsEnum {
  STATEMENT_CHANGE = 'STATEMENT_CHANGE',
}

type StatementEventsType = {
  [StatementEventsEnum.STATEMENT_CHANGE]: () => void;
};

export type EventTypes = PlayerEventsType &
  BoardEventsType &
  StatementEventsType;
