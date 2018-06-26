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
var playerA: TicTacToe.IPlayer<string> = { name: "", character: "" };
var playerB: TicTacToe.IPlayer<string> = {  name: "", character: ""  };
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
    
    app.post("/create_game", (req, res) => {
        var body = <TicTacToe.ICreateGameRequest>req.body;
        
        playerA.character = body.name;
        invitationCode = body.invitationCode;
        
        board = new Board<string>(3, "?");
        
        var response: TicTacToe.ICreateGameResponse = { success: true };
        
        if (!board) {
            response.success = false;
            response.message = "Unable to create board";
            console.log("'/create_board': Unable to create board");
        }
        
        console.log("'/create_game': new game created");
        
        res.send(response);
    });
    
    app.post("/join_game", (req, res) => {
        var body = <TicTacToe.IJoinGameRequest>req.body;
        var response: TicTacToe.IJoinGameResponse = {
            success: false
        };
        
        if (board) {
            
            if (body.invitationCode == invitationCode) {
                playerB.name = body.name;
                response.success = true;
                
                console.log(`'/join_game': new player joined = ${playerB.name}`);
            } else {
                response.message = "Incorrect invitation code";
                console.log("'/join_game': incorrect invitation code");
            }
            
        } else {
            console.log("'/join_game': a game has not been created");
            response.message = "A game has not been created";
        }
        
        res.send(response);
    })
    
    socketIO.on("connection", (socket) => {
    
        userCount++;
        socketIO.emit(msg.UPDATED_USER_AMOUNT, userCount);
        
    
        if (userCount >= 2) {
            socket.emit(msg.HAD_ENOUGH_PLAYER);
            console.log("Player Capacity Reached (max = 2)");
        } else {
            console.log(`New player, ${2 - userCount} remains`);
        }
        
        /* Listeners */
    
        socket.on("disconnect", () => {
            console.log("User disconnected");
            userCount--;
            socketIO.emit(msg.UPDATED_USER_AMOUNT, userCount);
        });
    
    });
    
});

