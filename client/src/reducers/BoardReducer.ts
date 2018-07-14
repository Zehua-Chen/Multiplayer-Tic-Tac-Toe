import { Reducer } from 'redux';

import { IBoardState, DEFAULT_BOARDSTATE } from "../states";
import { IBoardAction } from '../actions/IBoardAction';

function boardReducer (
    state: IBoardState = DEFAULT_BOARDSTATE, 
    action: IBoardAction): IBoardState {
    
    return state;
}

export default <Reducer<IBoardState, IBoardAction>>boardReducer;