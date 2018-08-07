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

/**
 * Update the mode of the welcome panel.
 */
export const UPDATE_WELCOME_MODE = "UPDATE_WELCOME_MODE";
/**
 * Update the error message displayed in the welcome panel.
 */
export const UPDATE_ERROR_MESSAGE = "UPDATE_ERROR_MESSAGE";

/**
 * Update the name of the player displayed in the welcome panel.
 */
export const UPDATE_PLAYER_NAME = "UPDATE_PLAYER_NAME";

/**
 * Update the invitation code displayed in the welcome panel.
 */
export const UPDATE_INVITATION_CODE = "UPDATE_INVITATION_CODE";

export const UPDATE_PASSWORD = "UPDATE_PASSWORD";