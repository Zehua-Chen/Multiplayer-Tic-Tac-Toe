import { Action } from 'redux';

export interface IPlayersAction extends Action<string> {
    payload?: string | TicTacToe.IPlayerName[];
}

export const ADD_OTHER_PLAYER = "ADD_OTHER_PLAYER";
export const ADD_THIS_PLAYER = "ADD_THIS_PLAYER";
export const ADD_PLAYERS = "ADD_PLAYERS";
export const ADD_PLAYER = "ADD_PLAYER";

export const UPDATE_MOVING_PLAYER_NAME = "UPDATE_MOVING_PLAYER_NAME";