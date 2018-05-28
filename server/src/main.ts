import express from 'express';
import io from 'socket.io';

import * as http from 'http';
import * as path from 'path';
import * as msg from './Messages';

/* Configure Express */
const app = express();
var staticPath = path.resolve(path.join(".", "/"), path.join(".", "public"));
// console.log(staticPath);
app.use(express.static("./public"));

/* Configure server and web sockiet */
const server = http.createServer(app);
const socketIO = io(server, { serveClient: false });

var playerCount = 0;

/* Server */

server.listen(3000);

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

socketIO.on("connection", (socket) => {
    
    console.log("User connected");
    
    if (playerCount >= 2) {
        socket.emit(msg.MSG_ENOUGH_PLAYER);
        console.log("User assigned to viewer since the server can only host two players");
    } else {
        playerCount++;
    }
    
    
    socket.on("disconnect", () => {
        console.log("User disconnected");
        playerCount--;
    });
    
});

