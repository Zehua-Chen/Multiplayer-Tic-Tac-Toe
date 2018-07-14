export interface IBoardState {
    board: string[][];
}

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