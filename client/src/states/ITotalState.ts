import { IGameInfoState } from "./IGameInfoState";
import { IWelcomeState } from "./IWelcomeState";
import { IPlayersState } from "./IPlayersState";
import { IBoardState } from "./IBoardState";

export interface ITotalState {
  gameInfo: IGameInfoState;
  welcome: IWelcomeState;
  players: IPlayersState;
  board: IBoardState;
}
