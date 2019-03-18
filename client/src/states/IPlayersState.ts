/**
 * State to use with players panel
 */
export interface IPlayersState {
  /**
   * the name given to this player
   */
  thisPlayerName?: string;
  /**
   * the name given to the opponent player / other player
   */
  otherPlayerName?: string;
  /**
   * the name of the moving player
   */
  movingPlayerName?: string;
}

/**
 * Default IPlayersState, used with the players reducer
 * (empty)
 */
export const DEFAULT_PLAYERSTATE: IPlayersState = {};
