import { Action } from 'redux';

export interface IWelcomeAction extends Action<string> {
    payload: string | "join" | "create" | "hidden";
}

export const UPDATE_WELCOME_MODE = "UPDATE_WELCOME_MODE";
export const UPDATE_ERROR_MESSAGE = "UPDATE_ERROR_MESSAGE";