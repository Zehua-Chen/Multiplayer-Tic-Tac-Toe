import express from 'express';
import socketIO from 'socket.io';
import bodyParser from 'body-parser';

import * as http from 'http';
import * as path from 'path';
import * as os from 'os';
import * as msg from './messages';
import { findIpv4 } from './util';

import { Board } from './Game';

/* Constants */

const PORT = 3001;
const IPV4 = findIpv4();
const PUBLIC_URL = `http://${IPV4}:${PORT}/`;

/* Configure Express */

const app = express();
var staticPath = path.resolve(path.join(".", "/"), path.join(".", "public"));
app.use(express.static(staticPath));
app.use(bodyParser.json());

/* Configure server and web sockiet */

const server = http.createServer(app);
const io = socketIO(server, { serveClient: false });

var gUserCount = 0;

var gEmptyCells = 9;
var gTotalCells = 9;

var gWinner: TicTacToe.IPlayer | undefined;

var gPlayerA: TicTacToe.IPlayer = { name: "" };
var gPlayerB: TicTacToe.IPlayer = {  name: "" };
var gBoard: Board;

var gMovingPlayer: TicTacToe.IPlayer | undefined;

var gInvitationCode: string;

/* Server */

server.listen(PORT, () => {
    console.log(` Game hosted at http://localhost:${PORT}/`);
    console.log(` Game hosted at ${PUBLIC_URL}`);
    console.log();
    console.log("Game Logs:");
    console.log();
    
    app.get("/", (req, res) => {
        res.sendFile("index.html");
    });
    
    app.get("/host_address", (req, res) => {
        res.send(PUBLIC_URL);
    });
    
    app.get("/players", (req, res) => {
        
        // Only return players whose names are not the default string: ""
        
        var players = new Array<TicTacToe.IPlayer>(2);
        
        if (gPlayerA.name != "") {
            players[0] = gPlayerA;
        }
        
        if (gPlayerB.name != "") {
            players[1] = gPlayerB;
        }
        
        var response: TicTacToe.IPlayersResponse<string> = {
            players: players
        }
        
        res.send(response);
        
    })
    
    app.get("/progress", (req, res) => {
        var response: TicTacToe.IProgressResponse = {
            remaining: gEmptyCells,
            total: gTotalCells,
        };
        res.send(response);
    });
    
    app.get("/winner", (req, res) => {
        
        var response: TicTacToe.IWinnerResponse = undefined;
        
        if (gMovingPlayer && gMovingPlayer.name != "") {
            response = gWinner;    
        }
        
        res.send(response);
    });
    
    app.get("/board", (req, res) => {
        
        var boardContent = undefined;
        if (gBoard) {
            boardContent = gBoard.board;
        }
        
        res.send(boardContent);
    });
    
    app.post("/create_game", (req, res) => {
        
        var response: TicTacToe.ICreateGameResponse = { success: false };
        var body = <TicTacToe.ICreateGameRequest>req.body;
        
        // Check if name is emtpy;
        if (body.name == "") {
            response.success = false;
            response.message = "Name cannot be \"\" (empty)";
            res.send(response);
            
            return;
        }
        
        if (!gBoard) {
            
        
            gPlayerA.name = body.name;
            gInvitationCode = body.invitationCode;
            
            gBoard = new Board(3, "?");
            
            if (!gBoard) {
                response.message = "Unable to create board.";
                console.log("'/create_board': Unable to create board;");
            }
            
            
            response.success = true;
            console.log(`'/create_game': new game created, creator = ${body.name}`);
            
            // Notify clients that a new player has joined the game
            io.emit("new_player", gPlayerA);
            
        // If the board is already created.
        } else {
            response.message = "There is a board already created.";
        }
        
        res.send(response);

    });
    
    app.post("/join_game", (req, res) => {
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
        if (gPlayerB.name == "") {
            
            // Determine if a game has been created
            if (gBoard) {
            
                // Determine if the invitation code is correct
                if (body.invitationCode == gInvitationCode) {
                    
                    // Determine if there is a naming conflict
                    if (body.name != gPlayerA.name) {
                        gPlayerB.name = body.name;
                        response.success = true;
                        console.log(`'/join_game': new player joined = ${gPlayerB.name};`);
                        
                        // TODO: Action to perform after a new player has joined the game;
                        io.emit("new_player", gPlayerB);
                        
                    } else {
                        // Tell the client that there is naming conflict
                        response.message = "Two players cannot have the same name.";
                        console.log("/join_game': name conflict caused by the new player;");
                    }
                    
                } else {
                    // Tell the client that the invitation code is not right
                    response.message = "Incorrect invitation code;";
                    console.log("'/join_game': incorrect invitation code;");
                }
                
            } else {
                // Tell the client that a game has not been created
                console.log("'/join_game': a game has not been created;");
                response.message = "A game has not been created.";
            }
        } else {
            // Tell the client that max players has already been reached.
            console.log("'/join_game': already have two player, cannot take any more;");
            response.message = "Max of two player reached.";
        }
        
        res.send(response);
    })
    
    io.on("connection", (socket) => {
    
        gUserCount++;
        io.emit("update_user#", gUserCount);
        
        /* Listeners */
        
        socket.on("move", (data) => {
            
            if (gWinner) {
                return;
            }
            
            var moveData = <TicTacToe.IMoveRequest>data;
            
            var y = moveData.location.y;
            var x = moveData.location.x;
            
            const { 
                name, invitationCode
            } = moveData;
            
            // Make sure the user is authroized
            if (invitationCode == gInvitationCode) {
                
                if (!gMovingPlayer || gMovingPlayer.name == name) {
                    
                    if (name == gPlayerA.name) {
                        gBoard.setAt(y, x, gPlayerA);
                        
                        gMovingPlayer = gPlayerB;
                    } else if (name == gPlayerB.name) {
                        gBoard.setAt(y, x, gPlayerB);
                        
                        gMovingPlayer = gPlayerA;
                    }
                    
                    console.log(`websocket: 'move': ${moveData.name} at (y: ${y}, x: ${x};`);
                    console.log(gBoard.board);
                    
                    var broadCastData: TicTacToe.INewMoveBroadcast = {
                        name: name,
                        location: moveData.location
                    };
                    
                    // Broadcast move message
                    
                    io.emit("new_move", broadCastData);
                    
                    // Update moving
                    
                    if (gMovingPlayer && gMovingPlayer.name != "") {
                        io.emit("update_moving", gMovingPlayer);
                    }
                    
                    // Update progress
                    
                    gEmptyCells--;
                    
                    var updateProgressData: TicTacToe.IUpdateProgressBroadcast = {
                        remaining: gEmptyCells,
                        total: gTotalCells
                    };
                    
                    io.emit("update_progress", updateProgressData);
                    
                    // Update winner, if there is one.
                    var winner = gBoard.findWinner();
                    if (winner) {
                        gWinner = winner;
                        io.emit("found_winner", <TicTacToe.IFoundWinnerBroadcast>winner);
                    }
                }
            }
        }); 
    
        socket.on("disconnect", () => {
            console.log("User disconnected");
            gUserCount--;
            io.emit(msg.UPDATED_USER_AMOUNT, gUserCount);
        });
    
    });
    
});

