import { Action } from 'redux';

/**
 * The action to send to edit IWelcomeState
 */
export interface IWelcomeAction extends Action<string> {
    /**
     * string:
     * - UPDATE_ERROR_MESSAGE: payload should be the error message returned from
     * the server
     * "join" | "create" | "hidden":
     * - UPDATE_WELCOME_MODE: payload should be the next mode welcome panel
     * should transition into
     */
    payload: string | "join" | "create" | "hidden";
}

export const UPDATE_WELCOME_MODE = "UPDATE_WELCOME_MODE";
export const UPDATE_ERROR_MESSAGE = "UPDATE_ERROR_MESSAGE";