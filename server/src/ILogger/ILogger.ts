import Board from '../Board';

export interface IGameLogger {
  /**
   * Log get
   * @param path path of http get
   * @param content additiona text
   */
  get(path: string, content?: any): void;
  /**
   * Log post
   * @param path path of http post
   * @param content additiona text
   */
  post(path: string, content?: any): void;
  /**
   * Log websocket receive
   * @param path path of websocket receive
   * @param content additiona text
   */
  websocketReceive(path: string, content?: any): void;
  /**
   * Log websocket emit
   * @param path path of websocket emit
   * @param content additiona text
   */
  websocketEmit(path: string, content?: any): void;
  /**
   * Log board
   * @param board board
   */
  board(board: Board): void;
  /**
   * Log text
   * @param content text
   */
  text(content: any): void;
}

export default IGameLogger;