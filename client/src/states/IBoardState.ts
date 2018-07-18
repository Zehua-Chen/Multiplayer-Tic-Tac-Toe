/**
 * State to use with the board panel
 */
export interface IBoardState {
    /**
     * A 2d string array representing the board.
     * 
     * Each cell is filled with the name of the player.
     */
    board: string[][];
}

// Create a default 3x3 board filled with '?'
var defaultBoard: string[][] = new Array<Array<string>>(3);

for (var y = 0; y < defaultBoard.length; y++) {
    defaultBoard[y] = new Array<string>(3);
    
    for (var x = 0; x < defaultBoard[y].length; x++) {
        defaultBoard[y][x] = "?";
    }
}

export const DEFAULT_BOARDSTATE: IBoardState = {
    board: defaultBoard
}