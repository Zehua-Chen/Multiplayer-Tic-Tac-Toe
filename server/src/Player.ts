import { IPlayer } from 'tic-tac-toe-interfaces';
import io from 'socket.io';

class Player implements IPlayer<string> {
    
    socket?: io.Socket;
    
    constructor(
        public name: string,
        public character: string
    ) {
    }
}