import { Reducer } from 'redux';

import { IGameInfoState, DEFAULT_GAMEINFOSTATE } from '../states';
import { 
    IGameInfoAction, 
    UPDATE_HOSTURL, 
    UPDATE_PROGRESS, 
    UPDATE_VIEWERS,
    UPDATE_CONNECTION_STATUS,
} from '../actions/IGameInfoAction';

function gameInfoReducer(state: IGameInfoState = DEFAULT_GAMEINFOSTATE, action: IGameInfoAction): IGameInfoState {
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
        case UPDATE_CONNECTION_STATUS:
        {
            const { connected, ...others  } = state;
            return { connected: <boolean>action.payload, ...others };
        }
        // IMPORTANT! return the state if no action performed
        default:
            return state;
    }
}

export default <Reducer<IGameInfoState, IGameInfoAction>>gameInfoReducer;