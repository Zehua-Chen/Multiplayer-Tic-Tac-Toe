import { IGameInfoState, DEFAULT_GAMEINFOSTATE } from './IGameInfoState';
import { IWelcomeState, DEFAULT_WELCOMESTATE } from './IWelcomeState';

export interface ITotalState {
    gameInfo: IGameInfoState;
    welcome: IWelcomeState
}

export {
    IGameInfoState, DEFAULT_GAMEINFOSTATE,
    IWelcomeState, DEFAULT_WELCOMESTATE
}