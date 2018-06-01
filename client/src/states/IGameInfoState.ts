/**
 * State to use with game info panel;
 */
export interface IGameInfoState {
    /**
     * The number of people viewing the game;
     */
    viewers: number;
    /**
     * The current progress of the game, in percentage format;
     */
    progress: number;
    /**
     * The url hosting the game, should be the ipv4 address of the host machine.
     */
    hostUrl: string;
}

export var DEFAULT_GAMEINFOSTATE: IGameInfoState = {
    viewers: 0,
    progress: 0,
    hostUrl: "http://localhost:3000/"  
};