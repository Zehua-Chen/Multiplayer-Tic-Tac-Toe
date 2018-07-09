import { Reducer } from 'redux';

import { IPlayersState, DEFAULT_PLAYERSTATE } from '../states';
import {
    IPlayersAction,
    ADD_OTHER_PLAYER,
    ADD_THIS_PLAYER,
    UPDATE_MOVING_PLAYER_NAME,
    ADD_PLAYERS,
    ADD_PLAYER,
} from '../actions/IPlayersAction';

function playersReducer(state: IPlayersState = DEFAULT_PLAYERSTATE, action: IPlayersAction): IPlayersState {
    switch(action.type) {
        case ADD_OTHER_PLAYER:
        {   
            const { otherPlayerName, ...others } = state;
            return { otherPlayerName: <string>action.payload, ...others };
        }
        case ADD_THIS_PLAYER:
        {
            const { thisPlayerName, ...others } = state; 
            return { thisPlayerName: <string>action.payload, ...others };
            
        }
        case ADD_PLAYERS:
        {
            var newState = state;
            
            var names = <TicTacToe.IPlayerName[]>action.payload;
            if (names.length >= 2) {
                var nameA = names[0];
                var nameB = names[1];
                
                if (nameA) {
                    newState.thisPlayerName = nameA;
                } 
                
                if (nameB) {
                    newState.otherPlayerName = nameB;
                }
            }
            
            return newState;
        }
        case ADD_PLAYER: 
        {
            var nameA = state.thisPlayerName;
            var nameB = state.otherPlayerName;
            
            var addedName = <string>action.payload;
            
            if (!nameA) {
                nameA = addedName;
            } else if (!nameB) {
                nameB = addedName;
            }
            
            return {
                thisPlayerName: nameA,
                otherPlayerName: nameB,
                movingPlayerName: state.movingPlayerName
            };
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