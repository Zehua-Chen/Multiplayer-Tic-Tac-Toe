import { Response, Request } from 'express';

import { Board } from "./Board";

export interface IGameLogger {
    /**
     * Log get 
     * @param path path of http get
     * @param content additiona text
     */
    get(path: string, content?: any): void;
    /**
     * Log post 
     * @param path path of http post
     * @param content additiona text
     */
    post(path: string, content?: any): void;
    /**
     * Log websocket receive 
     * @param path path of websocket receive
     * @param content additiona text
     */
    websocketReceive(path: string, content?: any): void;
    /**
     * Log websocket emit 
     * @param path path of websocket emit
     * @param content additiona text
     */
    websocketEmit(path: string, content?: any): void;
    /**
     * Log board
     * @param board board
     */
    board(board: Board): void;
    /**
     * Log text
     * @param content text
     */
    text(content: any): void;
}

export class Game {
    
    protected userCount = 0;
    
    protected emptyCells = 9;
    protected totalCells = 9;
    
    protected winner?: TicTacToe.IPlayer;
    protected movingPlayer?: TicTacToe.IPlayer;
    
    protected playerA: TicTacToe.IPlayer = { name: "" };
    protected playerB: TicTacToe.IPlayer = { name: "" };
    
    protected invitationCode: string = "";
    
    protected board?: Board;
    
    public constructor(
        private io: SocketIO.Server,
        private logger?: IGameLogger
    ) {
    }
    
    public getPlayers(req: Request, res: Response) {
        
        var players = new Array<TicTacToe.IPlayer>(2);
        
        if (this.playerA.name != "") {
            players[0] = this.playerA;
        }
        
        if (this.playerB.name != "") {
            players[1] = this.playerB;
        }
        
        var response: TicTacToe.IPlayersResponse = {
            players: players
        }
        
        res.send(response);
        
        this.logGet("/players");
    }
    
    public getProgress(req: Request, res: Response) {
        
        var response: TicTacToe.IProgressResponse = {
            remaining: this.emptyCells,
            total: this.totalCells,
        };
        
        res.send(response);
        
        this.logGet("/progress")
    }
    
    public getWinner(req: Request, res: Response) {
        
        var response: TicTacToe.IWinnerResponse = undefined;
        
        if (this.movingPlayer && this.movingPlayer.name != "") {
            response = this.winner;    
        }
        
        res.send(response);
        
        this.logGet("/winner");
    }
    
    public getBoard(req: Request, res: Response) {
        
        var boardContent = undefined;
        if (this.board) {
            boardContent = this.board.board;
        }
        
        res.send(boardContent);
        
        this.logGet("/board");
    }
    
    public createGame(req: Request, res: Response) {
        
        var response: TicTacToe.ICreateGameResponse = { success: false };
        var body = <TicTacToe.ICreateGameRequest>req.body;
        
        // Check if name is emtpy;
        if (body.name == "") {
            response.success = false;
            response.message = "Name cannot be \"\" (empty)";
            res.send(response);
            
            return;
        }
        
        if (!this.board) {
            
            this.playerA.name = body.name;
            this.invitationCode = body.invitationCode;
            
            this.board = new Board(3, "?");
            
            if (!this.board) {
                response.message = "Unable to create board.";
                // console.log("'/create_board': Unable to create board;");
                this.logPost("/create_game", "Unable to create board");
            }
            
            
            response.success = true;
            // console.log(`'/create_game': new game created, creator = ${body.name}`);
            this.logPost("/create_game", `new game created, creator = ${body.name}`);
            
            // Notify clients that a new player has joined the game
            this.io.emit("new_player", this.playerA);
            
        // If the board is already created.
        } else {
            response.message = "There is a board already created.";
        }
        
        res.send(response);
    }
    
    public joinGame(req: Request, res: Response) {
        
        var body = <TicTacToe.IJoinGameRequest>req.body;
        var response: TicTacToe.IJoinGameResponse = {
            success: false
        };
        
        // Check if name is emtpy;
        if (body.name == "") {
            response.success = false;
            response.message = "Name cannot be \"\" (empty)";
            res.send(response);
            
            return;
        }
        
        // Determine if the second player is already in the game
        if (this.playerB.name == "") {
            
            // Determine if a game has been created
            if (this.board) {
            
                // Determine if the invitation code is correct
                if (body.invitationCode == this.invitationCode) {
                    
                    // Determine if there is a naming conflict
                    if (body.name != this.playerA.name) {
                        this.playerB.name = body.name;
                        response.success = true;
                        // console.log(`'/join_game': new player joined = ${this.playerB.name};`);
                        this.logPost("/join_game", `new player joined = ${this.playerB.name}`);
                        
                        // TODO: Action to perform after a new player has joined the game;
                        this.io.emit("new_player", this.playerB);
                        
                    } else {
                        // Tell the client that there is naming conflict
                        response.message = "Two players cannot have the same name.";
                        // console.log("/join_game': name conflict caused by the new player;");
                        this.logPost("/join_game", "name conflict caused by the new player");
                    }
                    
                } else {
                    // Tell the client that the invitation code is not right
                    response.message = "Incorrect invitation code;";
                    // console.log("'/join_game': incorrect invitation code;");
                    this.logPost("/join_game", "incorrect invitation code");
                }
                
            } else {
                // Tell the client that a game has not been created
                // console.log("'/join_game': a game has not been created;");
                this.logPost("/join_game", "a game has not been created");
                response.message = "A game has not been created.";
            }
        } else {
            // Tell the client that max players has already been reached.
            // console.log("'/join_game': already have two player, cannot take any more;");
            this.logPost("'/join_game", "already have two player, cannot take any more;");
            response.message = "Max of two player reached.";
        }
        
        res.send(response);
    }
    
    public move(data: any) {
        
        if (this.winner || !this.board) {
            return;
        }
        
        var moveData = <TicTacToe.IMoveRequest>data;
        
        var y = moveData.location.y;
        var x = moveData.location.x;
        
        const { 
            name, invitationCode
        } = moveData;
        
        // Make sure the user is authroized
        if (invitationCode == this.invitationCode) {
            
            if (!this.movingPlayer || this.movingPlayer.name == name) {
                
                if (name == this.playerA.name) {
                    this.board.setAt(y, x, this.playerA);
                    
                    this.movingPlayer = this.playerB;
                } else if (name == this.playerB.name) {
                    this.board.setAt(y, x, this.playerB);
                    
                    this.movingPlayer = this.playerA;
                }
                
                // console.log(`websocket: 'move': ${moveData.name} at (y: ${y}, x: ${x};`);
                this.logWebsocketReceive("move", `${moveData.name} at (y: ${y}, x: ${x}`);
                // console.log(this.board.board);
                this.logBoard(this.board);
                
                var broadCastData: TicTacToe.INewMoveBroadcast = {
                    name: name,
                    location: moveData.location
                };
                
                // Broadcast move message
                
                this.io.emit("new_move", broadCastData);
                this.logWebsocketEmit("new_move");
                
                // Update moving
                
                if (this.movingPlayer && this.movingPlayer.name != "") {
                    this.io.emit("update_moving", this.movingPlayer);
                    this.logWebsocketEmit("update_progress", `new moving = ${this.movingPlayer.name}`);
                }
                
                // Update progress
                
                this.emptyCells--;
                
                var updateProgressData: TicTacToe.IUpdateProgressBroadcast = {
                    remaining: this.emptyCells,
                    total: this.totalCells
                };
                
                this.io.emit("update_progress", updateProgressData);
                this.logWebsocketEmit("update_progress");
                
                // Update winner, if there is one.
                var winner = this.board.findWinner();
                if (winner) {
                    this.winner = winner;
                    this.io.emit("found_winner", <TicTacToe.IFoundWinnerBroadcast>winner);
                    this.logWebsocketEmit("found_winner", `winner = ${winner.name}`);
                }
            }
        }
    }
    
    public connect() {
        this.userCount++;
        this.io.emit("update_user#", this.userCount);
    }
    
    public disconnet() {
        
        this.logText("User disconnected");
        this.userCount--;
        this.io.emit("update_user#", this.userCount);
        
    }
    
    /**
     * Log get 
     * @param path path of http get
     * @param content additiona text
     */
    protected logGet(path: string, content?: any) {
        if (this.logger) {
            this.logger.get(path, content);
        }
    }
    
    /**
     * Log post 
     * @param path path of http post
     * @param content additiona text
     */
    protected logPost(path: string, content?: any) {
        if (this.logger) {
            this.logger.post(path, content);
        }
    }
    
    /**
     * Log websocket receive 
     * @param path path of websocket receive
     * @param content additiona text
     */
    protected logWebsocketReceive(path: string, content?: any) {
        if (this.logger) {
            this.logger.websocketReceive(path, content);
        }
    }
    
    /**
     * Log websocket emit 
     * @param path path of websocket emit
     * @param content additiona text
     */
    protected logWebsocketEmit(path: string, content?: any) {
        if (this.logger) {
            this.logger.websocketEmit(path, content);
        }
    }
    
    /**
     * Log board
     * @param board board
     */
    protected logBoard(board: Board) {
        if (this.logger) {
            this.logger.board(board);
        }
    }
    
    /**
     * Log text
     * @param content text
     */
    protected logText(content: any) {
        if (this.logger) {
            this.logger.text(content);
        }
    }
}