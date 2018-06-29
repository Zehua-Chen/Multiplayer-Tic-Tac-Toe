import { Reducer } from 'redux';
import { IWelcomeState, DEFAULT_WELCOMESTATE } from '../states';

import { 
    IWelcomeAction, 
    UPDATE_ERROR_MESSAGE, 
    UPDATE_WELCOME_MODE 
} from '../actions/IWelcomeAction';

function welcomeReducer(state: IWelcomeState = DEFAULT_WELCOMESTATE, action: IWelcomeAction): IWelcomeState {
    switch(action.type) {
        case UPDATE_ERROR_MESSAGE:
        {
            return { mode: state.mode, errorMessage: action.payload };
        }
        case UPDATE_WELCOME_MODE:
        {
            var mode = <"create" | "join" | "hidden">action.payload;
            return { mode: mode, errorMessage: undefined};
        }
        default:
            return state;
    }
}

export default <Reducer<IWelcomeState, IWelcomeAction>>welcomeReducer;