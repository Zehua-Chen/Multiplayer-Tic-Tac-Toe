import express from 'express';
import io from 'socket.io';

import * as http from 'http';
import * as path from 'path';
import * as os from 'os';
import * as msg from './messages';
import { findIpv4 } from './util';

/* Constants */

const PORT = 3001;
const IPV4 = findIpv4();
const PUBLIC_URL = `http://${IPV4}:${PORT}/`;

/* Configure Express */

const app = express();
var staticPath = path.resolve(path.join(".", "/"), path.join(".", "public"));
app.use(express.static(staticPath));

/* Configure server and web sockiet */

const server = http.createServer(app);
const socketIO = io(server, { serveClient: false });

var userCount = 0;

/* Server */

server.listen(PORT, () => {
    console.log(` Game hosted at http://localhost:${PORT}/`);
    console.log(` Game hosted at ${PUBLIC_URL}`);
    console.log();
    console.log("Game Logs:");
    console.log();
});

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

socketIO.on("connection", (socket) => {

    userCount++;
    socketIO.emit(msg.UPDATED_USER_AMOUNT, userCount);
    socket.emit(msg.UPDATED_HOST, PUBLIC_URL);
    

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
