import { Reducer } from 'redux';

import { IPlayersState, DEFAULT_PLAYERSTATE } from '../states';
import {
    IPlayersAction,
    UPDATE_OTHER_PLAYER_NAME,
    UPDATE_THIS_PLAYER_NAME,
    UPDATE_MOVING_PLAYER_NAME,
    UPDATE_PLAYER_NAMES_LIST,
    ADD_PLAYER_NAME,
    IPlayerNames,
} from '../actions/IPlayersAction';

/**
 * Reducer for the player.
 * @param state current state
 * @param action actions to perform on the current state
 * @return new state after the action is performed
 */
function playersReducer(
    state: IPlayersState = DEFAULT_PLAYERSTATE, 
    action: IPlayersAction): IPlayersState {
    
    switch(action.type) {
        case UPDATE_OTHER_PLAYER_NAME:
        {   
            const { otherPlayerName, ...others } = state;
            return { otherPlayerName: <string>action.payload, ...others };
        }
        case UPDATE_THIS_PLAYER_NAME:
        {
            const { thisPlayerName, ...others } = state; 
            return { thisPlayerName: <string>action.payload, ...others };
            
        }
        case UPDATE_PLAYER_NAMES_LIST:
        {   
            let { otherPlayerName, thisPlayerName, ...others } = state;
            
            let playerNames = <IPlayerNames>action.payload;
            
            if (playerNames.otherPlayerName) {
                otherPlayerName = playerNames.otherPlayerName;
            }
            
            if (playerNames.thisPlayerName) {
                thisPlayerName = playerNames.thisPlayerName;
            }
            
            return {
                thisPlayerName: thisPlayerName,
                otherPlayerName: otherPlayerName,
                ...others
            };
        }
        case ADD_PLAYER_NAME: 
        {
            let nameA = state.thisPlayerName;
            let nameB = state.otherPlayerName;
            
            let addedName = <string>action.payload;
            
            // If the added name is already there, then there is no need to 
            // add the name
            if (addedName == nameA || addedName == nameB) {
                return state;
            }
            
            // Fill empty names
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
            const { thisPlayerName, otherPlayerName } = state;
            
            // If there is only one player
            if (!thisPlayerName || !otherPlayerName) {
                return state;
            }
            
            return {
                thisPlayerName: thisPlayerName,
                otherPlayerName: otherPlayerName,
                movingPlayerName: <string>action.payload
            };
        }
        default:
            return state;
    }
}

export default <Reducer<IPlayersState, IPlayersAction>>playersReducer;