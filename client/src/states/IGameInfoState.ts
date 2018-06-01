/**
 * State to use with game info panel;
 */
export interface IGameInfoState {
    /**
     * The number of people viewing the game;
     */
    viewer: number;
    /**
     * The current progress of the game, in percentage format;
     */
    progress: number;
    /**
     * The url hosting the game, should be the ipv4 address of the host machine.
     */
    hostUrl: string;
}