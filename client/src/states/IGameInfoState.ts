/**
 * State to use with game info panel;
 */
export interface IGameInfoState {
    /**
     * The number of people viewing the game;
     */
    viewers: number;
    /**
     * The current progress of the game, out of 100;
     */
    progress: number;
    /**
     * The url hosting the game, should be the ipv4 address of the host machine.
     */
    hostUrl: string;
    /**
     * If the client is still connected
     */
    connected: boolean;
}

/**
 * Default game state, used to prevent crash in gameInfoReducer
 */
export var DEFAULT_GAMEINFOSTATE: IGameInfoState = {
    viewers: 0,
    progress: 0,
    hostUrl: "http://xxx:3000/",
    connected: true 
};