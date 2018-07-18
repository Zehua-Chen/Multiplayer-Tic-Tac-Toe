import { Reducer } from 'redux';

import { IGameInfoState, DEFAULT_GAMEINFOSTATE } from '../states';
import { 
    IGameInfoAction, 
    UPDATE_HOSTURL, 
    UPDATE_PROGRESS, 
    UPDATE_VIEWERS,
    UPDATE_CONNECTION_STATUS,
    UPDATE_WINNER,
} from '../actions/IGameInfoAction';

/**
 * Reducer for IGameInfoState
 * @param state current state
 * @param action action (manipulation) to perform on the current state
 */
function gameInfoReducer(
    state: IGameInfoState = DEFAULT_GAMEINFOSTATE, 
    action: IGameInfoAction): IGameInfoState {
    
    switch(action.type) {
        // Update url
        case UPDATE_HOSTURL: 
        {
            const { hostUrl, ...others } = state;
            return { hostUrl: <string>action.payload, ...others };
        }
        // Update progress
        case UPDATE_PROGRESS:
        {
            const { progress, ...others } = state;
            return { progress: <number>action.payload, ...others };
        }
        // Update the number of viewers
        case UPDATE_VIEWERS:
        {
            const { viewers, ...others } = state;
            return { viewers: <number>action.payload, ...others };
        }
        // Update the connection status
        case UPDATE_CONNECTION_STATUS:
        {
            const { connected, ...others  } = state;
            return { connected: <boolean>action.payload, ...others };
        }
        // Update the winner.
        case UPDATE_WINNER:
        {
            
            let winnerData = <string | undefined>action.payload;
            
            if (!winnerData) {
                return state;
            }
            
            const { winner, ...others } = state;
            
            return { winner: <string>action.payload, ...others };
            
        }
        // IMPORTANT! return the state if no action performed
        default:
            return state;
    }
}

export default <Reducer<IGameInfoState, IGameInfoAction>>gameInfoReducer;