import express from 'express';
import io from 'socket.io';

import * as http from 'http';
import * as path from 'path';
import * as msg from './Messages';

/* Configure Express */
const app = express();
var staticPath = path.resolve(path.join(".", "/"), path.join(".", "public"));
// console.log(staticPath);
app.use(express.static(staticPath));

/* Configure server and web sockiet */
const server = http.createServer(app);
const socketIO = io(server, { serveClient: false });

var userCount = 0;

/* Server */

server.listen(3000);

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

socketIO.on("connection", (socket) => {

    userCount++;
    socketIO.emit(msg.UPDATE_USER_AMOUNT, userCount);

    if (userCount >= 2) {
        socket.emit(msg.ENOUGH_PLAYER);
        console.log("Player Capacity Reached (max = 2)");
    } else {
        console.log(`New player, ${2 - userCount} remains`);
    }
    
    /* Listeners */

    socket.on("disconnect", () => {
        console.log("User disconnected");
        userCount--;
        socketIO.emit(msg.UPDATE_USER_AMOUNT, userCount);
    });

});
