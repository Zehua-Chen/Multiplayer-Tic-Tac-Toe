import { Action } from 'redux';

/**
 * Information about a cell
 */
export interface ICellInfo {
    /**
     * The location of a cell.
     */
    location: TicTacToe.ILocation;
    
    /**
     * The name of the player to be put inside the cell.
     */
    name: string;
}

/**
 * The actions sent to modify the board.
 */
export interface IBoardAction extends Action<string> {
    /**
     * ICellInfo:
     * - UPDATE_BOARD_AT: update the board at a specific location.
     * TicTacToe.IBoardResponse
     * - UPDATE_BOARD: update the entire board.
     */
    payload: TicTacToe.IBoardResponse | ICellInfo;
}

export const UPDATE_BOARD = "UPDATE_BOARD";
export const UPDATE_BOARD_AT = "UPDATE_BOARD_AT";