import { Action } from 'redux';

export interface ICellInfo {
    location: TicTacToe.ILocation;
    name: string;
}

export interface IBoardAction extends Action<string> {
    payload: TicTacToe.IBoardResponse | ICellInfo;
}

export const UPDATE_BOARD = "UPDATE_BOARD";
export const UPDATE_BOARD_AT = "UPDATE_BOARD_AT";