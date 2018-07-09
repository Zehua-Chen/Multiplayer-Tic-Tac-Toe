import { IGameInfoState, DEFAULT_GAMEINFOSTATE } from './IGameInfoState';
import { IWelcomeState, DEFAULT_WELCOMESTATE } from './IWelcomeState';
import { IPlayersState, DEFAULT_PLAYERSTATE } from './IPlayersState';

export interface ITotalState {
    gameInfo: IGameInfoState;
    welcome: IWelcomeState,
    players: IPlayersState
}

export {
    IGameInfoState, DEFAULT_GAMEINFOSTATE,
    IWelcomeState, DEFAULT_WELCOMESTATE,
    IPlayersState, DEFAULT_PLAYERSTATE
}