import { Reducer } from "redux";

import { IBoardState, DEFAULT_BOARDSTATE } from "../states";
import {
  IBoardAction,
  ICellInfo,
  UPDATE_BOARD,
  UPDATE_BOARD_AT
} from "../actions/IBoardAction";

/**
 * Reducer for IBoardState
 * @param state existing state
 * @param action action sent
 * @return the new state.
 */
function boardReducer(
  state: IBoardState = DEFAULT_BOARDSTATE,
  action: IBoardAction
): IBoardState {
  switch (action.type) {
    case UPDATE_BOARD: {
      let board = <string[][]>action.payload;
      return { board: board };
    }
    case UPDATE_BOARD_AT: {
      let payload = <ICellInfo>action.payload;
      let { y, x } = payload.location;

      let board = state.board;
      board[y][x] = payload.name;

      // copy board
      var newBoard: string[][] = new Array<Array<string>>(board.length);

      for (let y = 0; y < board.length; y++) {
        newBoard[y] = new Array<string>(board[y].length);
        for (let x = 0; x < board[y].length; x++) {
          newBoard[y][x] = board[y][x];
        }
      }

      return {
        board: newBoard
      };
    }
    default:
      return state;
  }
}

export default <Reducer<IBoardState, IBoardAction>>boardReducer;
