import { IGameLogger } from "./Game";
import { Board } from "./Board";

export class Logger implements IGameLogger {
  get(path: string, content?: any): void {
    if (content) {
      console.log(`(get): '${path}', ${content};`);
    } else {
      console.log(`(get): '${path}';`);
    }
  }

  post(path: string, content?: any): void {
    if (content) {
      console.log(`(post): '${path}', ${content};`);
    } else {
      console.log(`(post): '${path}';`);
    }
  }

  websocketReceive(path: string, content?: any): void {
    if (content) {
      console.log(`(websocket-receive): '${path}', ${content};`);
    } else {
      console.log(`(websocket-receive): '${path}';`);
    }
  }

  websocketEmit(path: string, content?: any): void {
    if (content) {
      console.log(`(websocket-emit): '${path}', ${content};`);
    } else {
      console.log(`(websocket-emit): '${path}';`);
    }
  }

  board(board: Board): void {
    console.log(board.board);
  }

  text(content: any) {
    console.log(content);
  }
}
