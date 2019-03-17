import { IGameInfoState, DEFAULT_GAMEINFOSTATE } from "./IGameInfoState";
import { IWelcomeState, DEFAULT_WELCOMESTATE } from "./IWelcomeState";
import { IPlayersState, DEFAULT_PLAYERSTATE } from "./IPlayersState";
import { IBoardState, DEFAULT_BOARDSTATE } from "./IBoardState";

export interface ITotalState {
  gameInfo: IGameInfoState;
  welcome: IWelcomeState;
  players: IPlayersState;
  board: IBoardState;
}

export {
  IGameInfoState,
  DEFAULT_GAMEINFOSTATE,
  IWelcomeState,
  DEFAULT_WELCOMESTATE,
  IPlayersState,
  DEFAULT_PLAYERSTATE,
  IBoardState,
  DEFAULT_BOARDSTATE
};
