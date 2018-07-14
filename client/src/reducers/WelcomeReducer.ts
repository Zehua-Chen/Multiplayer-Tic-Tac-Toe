import { Reducer } from 'redux';
import { IWelcomeState, DEFAULT_WELCOMESTATE } from '../states';

import { 
    IWelcomeAction, 
    UPDATE_ERROR_MESSAGE, 
    UPDATE_WELCOME_MODE, 
    UPDATE_PLAYER_NAME,
    UPDATE_INVITATION_CODE
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
            let { errorMessage, ...others } = state;
            return { errorMessage: action.payload, ...others };
        }
        // Update the mode of the welcome panel
        case UPDATE_WELCOME_MODE:
        {
            var newMode = <"create" | "join" | "hidden">action.payload;
            let { mode, ...others } = state;
            return { mode: newMode, ...others};
        }
        case UPDATE_PLAYER_NAME:
        {
            let { playerName, ...others } = state;
            return { playerName: action.payload, ...others };
        }
        case UPDATE_INVITATION_CODE:
        {
            let { invitationCode, ...others } = state;
            return { invitationCode: action.payload, ...others };
        }
        // IMPORTANT! return the state if no action performed
        default:
            return state;
    }
}

export default <Reducer<IWelcomeState, IWelcomeAction>>welcomeReducer;