/**
 * Tic Tac Toe Gameboard
 * T is the type of value each item in the board holds
 * 
 * 2D array convention: board[y][x]
 */
export class Board {

    /**
     * board holding the current state of the board
     */
    protected _board: string[][];


    public get board(): string[][] {
        return this._board;
    }


    private playerA?: TicTacToe.IPlayer;
    private playerB?: TicTacToe.IPlayer;

    /**
     * Create a new gameboard
     * @param dimension the width and the height of the game board
     * @param defaultValue default value to assign to each position in the gameboard
     */
    constructor(
        protected dimension: number = 3,
        private defaultValue?: string
    ) {

        if (this.dimension == 0) {
            throw new Error("Dimension needs to be bigger than 0!");
        }

        this._board = new Array<Array<string>>(this.dimension);
        if (this._board) {

            for (var y = 0; y < this._board.length; y++) {
                this._board[y] = new Array<string>(this.dimension);

                for (var x = 0; x < this._board[y].length; x++) {
                    if (this.defaultValue) {
                        this._board[y][x] = this.defaultValue;
                    }

                }
            }
        }
    }

    /**
     * Generate string representation of the gameboard
     */
    toString(): string {
        var temp = "";
        if (this._board) {
            this._board.forEach((row) => {
                var rowString = "";
                row.forEach((item) => {
                    rowString += item + " ";
                });
                temp += rowString + "\n";
            });
        }


        return temp;
    }

    /**
     * Let a player set at the board's specified position
     * @param y y position
     * @param x x position
     * @param value player to set
     */
    setAt(y: number, x: number, value: TicTacToe.IPlayer): void {

        this._board[y][x] = value.name;

        if (!this.playerA) {
            this.playerA = value;
        } else if (this.playerA != value && !this.playerB) {
            this.playerB = value;
        }

    }

    /**
     * Given a name, find the matching player objects
     * @param name the name of the player
     */
    protected findMatchingPlayer(name: string): TicTacToe.IPlayer | null {
        if (this.playerA && name == this.playerA.name) {
            return this.playerA;
        } else if (this.playerB) {
            return this.playerB;
        } else {
            return null;
        }
    }

    /**
     * Find winner in columns (x)
     */
    protected findVerticalWinner(): TicTacToe.IPlayer | null {

        for (var x = 0; x < this.dimension; x++) {

            var playerAChar: string | undefined;
            var playerBChar: string | undefined;

            var playerACount = 0;
            var playerBCount = 0;

            for (var y = 0; y < this.dimension; y++) {
                var value = this._board[y][x];

                // If the position is not empty
                if (value && value != this.defaultValue) {

                    if (value == playerAChar) {
                        playerACount++;
                    } else if (value == playerBChar) {
                        playerBCount++;
                    }

                    if (!playerAChar) {
                        playerAChar = value;
                        playerACount++;

                    } else if (!playerBChar && playerAChar != value) {
                        playerBChar = value;
                        playerBCount++;
                    }
                }
            }

            if (playerACount == this.dimension && playerAChar) {
                return this.findMatchingPlayer(playerAChar);
            } else if (playerBCount == this.dimension && playerBChar) {
                return this.findMatchingPlayer(playerBChar);
            }
        }

        return null;
    }

    /**
     * Find winner in rows (y)
     */
    protected findHorizontalWinner(): TicTacToe.IPlayer | null {

        for (var y = 0; y < this.dimension; y++) {

            var playerAChar: string | undefined;
            var playerBChar: string | undefined;

            var playerACount = 0;
            var playerBCount = 0;

            for (var x = 0; x < this.dimension; x++) {
                var value = this._board[y][x];

                // If the position is not empty
                if (value && value != this.defaultValue) {

                    if (value == playerAChar) {
                        playerACount++;
                    } else if (value == playerBChar) {
                        playerBCount++;
                    }

                    // Assign players if the players have not been assigned
                    if (!playerAChar) {
                        playerAChar = value;
                        playerACount++;

                    } else if (!playerBChar && playerAChar != value) {
                        playerBChar = value;
                        playerBCount++;
                    }

                }
            }

            if (playerACount == this.dimension && playerAChar) {
                return this.findMatchingPlayer(playerAChar);
            } else if (playerBCount == this.dimension && playerBChar) {
                return this.findMatchingPlayer(playerBChar);
            }
        }

        return null;
    }

    /**
     * Find winner in diagnols
     */
    protected findDiagnolWinner(): TicTacToe.IPlayer | null {

        var winner: string | null;

        // Top left to bottom right
        winner = this.findDiagnolWinnerTopLeftToBottomRight();

        if (winner) {
            return this.findMatchingPlayer(winner);
        }

        // Top right to bottom left
        winner = this.findDiagnolWinnerTopRightToBottomLeft();

        if (winner) {
            return this.findMatchingPlayer(winner);
        }


        return null;
    }

    private findDiagnolWinnerTopLeftToBottomRight(): string | null {

        var playerAChar: string | undefined;
        var playerBChar: string | undefined;

        var playerACount = 0;
        var playerBCount = 0;

        var x = 0;
        var y = 0;

        while (x < this.dimension && y < this.dimension) {

            var value = this._board[y][x];

            if (value && value != this.defaultValue) {

                if (value == playerAChar) {
                    playerACount++;
                } else if (value == playerBChar) {
                    playerBCount++;
                }

                // Assign players if the players have not been assigned
                if (!playerAChar) {
                    playerAChar = value;
                    playerACount++;

                } else if (!playerBChar && playerAChar != value) {
                    playerBChar = value;
                    playerBCount++;
                }
            }

            x++;
            y++;
        }

        if (playerACount == this.dimension && playerAChar) {
            return playerAChar;
        } else if (playerBCount == this.dimension && playerBChar) {
            return playerBChar;
        }

        return null;
    }

    private findDiagnolWinnerTopRightToBottomLeft(): string | null {

        var playerAChar: string | undefined;
        var playerBChar: string | undefined;

        var playerACount = 0;
        var playerBCount = 0;

        var x = this.dimension - 1;
        var y = 0;

        while (x >= 0 && y < this.dimension) {

            var value = this._board[y][x];

            if (value && value != this.defaultValue) {

                if (value == playerAChar) {
                    playerACount++;
                } else if (value == playerBChar) {
                    playerBCount++;
                }

                // Assign players if the players have not been assigned
                if (!playerAChar) {
                    playerAChar = value;
                    playerACount++;

                } else if (!playerBChar && playerAChar != value) {
                    playerBChar = value;
                    playerBCount++;
                }
            }

            x--;
            y++;
        }

        if (playerACount == this.dimension && playerAChar) {
            return playerAChar;
        } else if (playerBCount == this.dimension && playerBChar) {
            return playerBChar;
        }

        return null;
    }

    /**
     * Find a winner
     * @returns the winner if there is a winner, null otherwise
     */
    findWinner(): TicTacToe.IPlayer | null {

        var player = this.findHorizontalWinner();
        if (player) {
            return player;
        }

        player = this.findVerticalWinner();
        if (player) {
            return player;
        }

        player = this.findDiagnolWinner();
        return player;
    }
}