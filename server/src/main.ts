import express from 'express';
import io from 'socket.io';
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
const socketIO = io(server, { serveClient: false });

var userCount = 0;

/* Server */
var playerA: TicTacToe.IPlayer<string> = { name: "", character: "X" };
var playerB: TicTacToe.IPlayer<string> = {  name: "", character: "Y"  };
var board: Board<string>;

var invitationCode: string;

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
        
        var players = new Array<TicTacToe.IPlayer<string>>(2);
        
        if (playerA.name != "") {
            players[0] = playerA;
        }
        
        if (playerB.name != "") {
            players[1] = playerB;
        }
        
        var response: TicTacToe.IPlayersResponse<string> = {
            players: players
        }
        
        res.send(response);
        
    })
    
    app.post("/create_game", (req, res) => {
        
        var response: TicTacToe.ICreateGameResponse = { success: false };
        
        if (!board) {
            var body = <TicTacToe.ICreateGameRequest>req.body;
        
            playerA.name = body.name;
            invitationCode = body.invitationCode;
            
            board = new Board<string>(3, "?");
            
            if (!board) {
                response.message = "Unable to create board.";
                console.log("'/create_board': Unable to create board;");
            }
            
            
            response.success = true;
            console.log(`'/create_game': new game created, creator = ${body.name}`);
            
            // Notify clients that a new player has joined the game
            socketIO.emit("new_player", playerA);
            
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
        
        // Determine if the second player is already in the game
        if (playerB.name == "") {
            
            // Determine if a game has been created
            if (board) {
            
                // Determine if the invitation code is correct
                if (body.invitationCode == invitationCode) {
                    
                    // Determine if there is a naming conflict
                    if (body.name != playerA.name) {
                        playerB.name = body.name;
                        response.success = true;
                        console.log(`'/join_game': new player joined = ${playerB.name};`);
                        
                        // TODO: Action to perform after a new player has joined the game;
                        socketIO.emit("new_player", playerB);
                        
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
    
    socketIO.on("connection", (socket) => {
    
        userCount++;
        socketIO.emit(msg.UPDATED_USER_AMOUNT, userCount);
        
        /* Listeners */
    
        socket.on("disconnect", () => {
            console.log("User disconnected");
            userCount--;
            socketIO.emit(msg.UPDATED_USER_AMOUNT, userCount);
        });
    
    });
    
});

