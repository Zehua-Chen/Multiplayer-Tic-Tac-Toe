import { Action } from 'redux';

export interface IPlayerNames {
    thisPlayerName?: string;
    otherPlayerName?: string;
}

export interface IPlayersAction extends Action<string> {
    payload?: string | IPlayerNames;
}

export const UPDATE_OTHER_PLAYER_NAME = "UPDATE_OTHER_PLAYER_NAME";
export const UPDATE_THIS_PLAYER_NAME = "UPDATE_THIS_PLAYER_NAME";
export const UPDATE_PLAYER_NAMES = "UPDATE_PLAYER_NAMES";
export const UPDATE_MOVING_PLAYER_NAME = "UPDATE_MOVING_PLAYER_NAME";

export const ADD_PLAYER = "ADD_PLAYER";
