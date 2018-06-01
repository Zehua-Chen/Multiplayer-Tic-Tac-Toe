import { Action } from 'redux';

export interface IGameInfoAction extends Action<string> {
    payload: string | number;
}

export const UPDATE_VIEWER = "UPDATE_VIEWER";
export const UPDATE_PROGRESS = "UPDATE_PROGRESS";
export const UPDATE_HOSTURL = "UPDATE_HOSTURL";