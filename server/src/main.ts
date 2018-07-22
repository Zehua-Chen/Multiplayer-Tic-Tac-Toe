import express from 'express';
import socketIO from 'socket.io';
import bodyParser from 'body-parser';

import * as http from 'http';
import * as path from 'path';

import { findIpv4 } from './util';
import { Game, Logger } from './Game';

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

var game = new Game(io, new Logger());

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
    
    app.get("/players", game.getPlayers.bind(game));
    app.get("/progress", game.getProgress.bind(game));
    app.get("/winner", game.getWinner.bind(game));
    app.get("/board", game.getBoard.bind(game));
    
    app.post("/create_game", game.createGame.bind(game));
    app.post("/join_game", game.joinGame.bind(game))
    
    io.on("connection", (socket) => {
    
        game.connect();
        
        /* Listeners */
        
        socket.on("move", game.move.bind(game)); 
        socket.on("disconnect", game.disconnet.bind(game));
    
    });
    
});

