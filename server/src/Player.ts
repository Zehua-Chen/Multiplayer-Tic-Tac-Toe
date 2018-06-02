import io from 'socket.io';

class Player implements TicTacToe.IPlayer<string> {
    
    socket?: io.Socket;
    
    constructor(
        public name: string,
        public character: string
    ) {
    }
}