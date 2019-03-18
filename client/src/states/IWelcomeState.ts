/**
 * State to use with welcome panel
 */
export interface IWelcomeState {
  /**
   * the mode of the welcome panel
   * - join: join a session already created
   * - create: create a new session
   * - hidden: not showing the welcome panel. Will transition
   * to this mode after either "join" or "create"
   */
  mode: "join" | "create" | "hidden";

  /**
   * Error message returned from the server.
   */
  errorMessage?: string;

  /**
   * The name of the player that is trying to create or join the game.
   */
  playerName: string;

  /**
   * The invitation code of the player that is trying to create or join the game.
   */
  invitationCode: string;

  password: string;
}

/**
 * Default IWelcomeState, used with the welcome reducer
 * - mode: "join"
 */
export const DEFAULT_WELCOMESTATE: IWelcomeState = {
  mode: "join",
  playerName: "",
  invitationCode: "",
  password: ""
};
