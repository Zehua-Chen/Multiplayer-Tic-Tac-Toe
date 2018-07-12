import { Action } from 'redux';

/**
 * The action to send to edit IGameInfoState
 */
export interface IGameInfoAction extends Action<string> {
    /**
     * number:
     * - UPDATE_VIEWER: payload should be the number of viewers;
     * - UPDATE_PROGRESS: payload should be the progress out of 100;
     * string:
     * - UPDATE_HOSTURL: this should be the new host url
     * 
     * boolean:
     * - UPDATE_CONNECTION_STATUS: payload should be whether the client is still 
     * connected to the server.
     */
    payload: string | number | boolean;
}

/**
 * Update the number of viewers active at the momemtn.
 */
export const UPDATE_VIEWERS = "UPDATE_VIEWER";
/**
 * Update the progress of the game.
 */
export const UPDATE_PROGRESS = "UPDATE_PROGRESS";
/**
 * Update the url at which the game can be accessed on other machines connected
 * to the same WiFi.
 */
export const UPDATE_HOSTURL = "UPDATE_HOSTURL";
/**
 * Update connection status
 */
export const UPDATE_CONNECTION_STATUS = "UPDATE_CONNECTION_STATUS";