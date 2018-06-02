import { Action } from 'redux';

/**
 * The action to send to edit gameInfo
 */
export interface IGameInfoAction extends Action<string> {
    /**
     * For actions:
     * - UPDATE_VIEWER: payload should be the number of viewers;
     * - UPDATE_PROGRESS: payload should be the progress out of 100;
     * For actions:
     * - UPDATE_HOSTURL: this should be the new host url
     */
    payload: string | number;
}

export const UPDATE_VIEWERS = "UPDATE_VIEWER";
export const UPDATE_PROGRESS = "UPDATE_PROGRESS";
export const UPDATE_HOSTURL = "UPDATE_HOSTURL";