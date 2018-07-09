import { Action } from 'redux';

export interface IPlayersAction extends Action<string> {
    payload: string;
}

export const ADD_OTHER_PLAYER = "ADD_OTHER_PLAYER";
export const ADD_THIS_PLAYER = "ADD_THIS_PLAYER";
export const UPDATE_MOVING_PLAYER_NAME = "UPDATE_MOVING_PLAYER_NAME";