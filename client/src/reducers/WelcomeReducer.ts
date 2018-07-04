import { Reducer } from 'redux';
import { IWelcomeState, DEFAULT_WELCOMESTATE } from '../states';

import { 
    IWelcomeAction, 
    UPDATE_ERROR_MESSAGE, 
    UPDATE_WELCOME_MODE 
} from '../actions/IWelcomeAction';

/**
 * Reducer for IWelcomeState
 * @param state current state
 * @param action action (manipulation) to perform on the current state
 */
function welcomeReducer(
    state: IWelcomeState = DEFAULT_WELCOMESTATE, 
    action: IWelcomeAction): IWelcomeState {
    
    switch(action.type) {
        // Update error message
        case UPDATE_ERROR_MESSAGE:
        {
            return { mode: state.mode, errorMessage: action.payload };
        }
        // Update the mode of the welcome panel
        case UPDATE_WELCOME_MODE:
        {
            var mode = <"create" | "join" | "hidden">action.payload;
            return { mode: mode, errorMessage: undefined};
        }
        // IMPORTANT! return the state if no action performed
        default:
            return state;
    }
}

export default <Reducer<IWelcomeState, IWelcomeAction>>welcomeReducer;