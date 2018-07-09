import { Reducer } from 'redux';

import { IPlayersState, DEFAULT_PLAYERSTATE } from '../states';
import {
    IPlayersAction,
    ADD_OTHER_PLAYER,
    ADD_THIS_PLAYER,
    UPDATE_MOVING_PLAYER_NAME,
} from '../actions/IPlayersAction';

function playersReducer(state: IPlayersState = DEFAULT_PLAYERSTATE, action: IPlayersAction): IPlayersState {
    switch(action.type) {
        case ADD_OTHER_PLAYER:
        {
            const thisPlayerName = window.sessionStorage.getItem("this-player-name");
            console.log(`thisPlayerName = ${thisPlayerName}`);
            
            if (thisPlayerName && thisPlayerName == action.payload) {
                return state;
            }
            
            const { hostilePlayerName, ...others } = state;
            return { hostilePlayerName: action.payload, ...others };
        }
        case ADD_THIS_PLAYER:
        {
            const { thisPlayerName, ...others } = state; 
            return { thisPlayerName: action.payload, ...others };
            
        }
        case UPDATE_MOVING_PLAYER_NAME:
        {
            return state;
        }
        default:
            return state;
    }
}

export default <Reducer<IPlayersState, IPlayersAction>>playersReducer;