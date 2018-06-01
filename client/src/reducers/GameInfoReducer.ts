import { Reducer } from 'redux';

import { IGameInfoState, DEFAULT_GAMEINFOSTATE } from '../states';
import { IGameInfoAction, UPDATE_HOSTURL, UPDATE_PROGRESS, UPDATE_VIEWER } from '../actions';

function gameInfoReducer(state: IGameInfoState = DEFAULT_GAMEINFOSTATE, action: IGameInfoAction): IGameInfoState {
    switch(action.type) {
        case UPDATE_HOSTURL: 
        {
            const { hostUrl, ...others } = state;
            return { hostUrl: <string>action.payload, ...others };
        }
        case UPDATE_PROGRESS:
        {
            const { progress, ...others } = state;
            return { progress: <number>action.payload, ...others };
        }
        case UPDATE_VIEWER:
        {
            const { viewer, ...others } = state;
            return { viewer: <number>action.payload, ...others };
        }
        default:
            return state;
    }
}

export default <Reducer<IGameInfoState, IGameInfoAction>>gameInfoReducer;