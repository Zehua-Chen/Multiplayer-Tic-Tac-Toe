import io from 'socket.io-client';

export class Websocket {
    
    socket: SocketIOClient.Socket;
    
    private static webSocket: Websocket;
    private constructor() {
        this.socket = io();
    }
    
    public static getSharedSocket(): Websocket {
        if (Websocket.webSocket) {
            return Websocket.webSocket;
        } else {
            Websocket.webSocket = new Websocket();
            return Websocket.webSocket;
        }
    }
    
    public subsribe<T>(event: string, callback: (data: T) => void): void {
        this.socket.on(event, callback);
    }
    
    public post<T>(event: string, data: T) {
        this.socket.emit(event, data);
    }
}
