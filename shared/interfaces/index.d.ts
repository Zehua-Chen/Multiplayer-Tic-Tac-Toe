/**
 * http: A player in the game
 */
export interface IPlayer {
    /**
     * Name of the player.
     */
    name: string;
    /**
     * Password of the player
     */
    password: string;
}

/**
 * http: "/create_game"
 * 
 * The http request sent by the client to create a game.
 */
export interface ICreateGameRequest {
    /**
     * Name of the player who create the game.
     */
    name: string;
    /**
     * Password of the player who create the game
     */
    password: string;
    /**
     * The invitation code that the other player use to join the game.
     */
    invitationCode: string;
}

/**
 * http: "/create_game"
 * 
 * The response returned by the server in response to "/create_game"
 */
export interface ICreateGameResponse {
    /**
     * If the game creation is successful.
     */
    success: boolean;
    /**
     * Error message sent by the server, if the creation failed.
     */
    message?: string;
}

/**
 * http: "/join_game"
 * 
 * The http request sent by the client to join a game.
 */
export type IJoinGameRequest = ICreateGameRequest;
/**
 * http: "/join_game"
 * 
 * The response returned by the client in response to "/join_game"
 */
export type IJoinGameResponse = ICreateGameResponse;

/**
 * http: "/host_address"
 * 
 * The response returned by the server in response to "/host_address"
 */
type IHostAddressResponse = string;
// type IViewersAmountResponse = number;

/**
 * http: "/players"
 * 
 * The response returned by the server in response to "/players"
 */
interface IPlayersResponse {
    /**
     * An array containing the active players in the game.
     */
    players: IPlayer[];
}

/**
 * http: "/board"
 * 
 * The response returned by the server in response to "/board"
 */
type IBoardResponse = string[][] | undefined;

/**
 * A location in the board of the game.
 */
interface ILocation {
    /**
     * The y coordinate.
     */
    y: number;
    /**
     * The x coordinate.
     */
    x: number;
}

/**
 * websocket: "move"
 * 
 * The request sent by client to make a move on the board.
 */
interface IMoveRequest {
    /**
     * Name of the player who makes the move.
     */
    name: string;
    /**
     * Password of the player
     */
    password: string;
    /**
     * The invitation code that the player use to either join or create 
     * the game.
     */
    invitationCode: string;
    /**
     * The location of the new move.
     */
    location: ILocation;
}

/**
 * http: "/progress"
 * 
 * The response returned in response to "/progress"
 */
type IProgressResponse = IUpdateProgressBroadcast;

/**
 * http: "/winner"
 * 
 * The response returned in response to "/winner"
 */
type IWinnerResponse = IFoundWinnerBroadcast | undefined;


/**
 * http: "/moving_player_name"
 */
type IMovingPlayerNameResponse = string | undefined;

/**
 * websocket: "new_move"
 * 
 * The broadcast from the server to all users that a new move has just been
 * made.
 */
interface INewMoveBroadcast {
    /**
     * Name of the player who makes the move.
     */
    name: string;
    /**
     * The location of the move.
     */
    location: ILocation;
}

/**
 * websocket: "update_moving"
 * 
 * The broadcast from the server to all users that the player who is making a 
 * move has changed.
 */
type IUpdateMovingBroadcast = IPlayer;

/**
 * websocket: "update_progress"
 * 
 * The broadcast from the server to all users that the progress of the game
 * has changed.
 */
export interface IUpdateProgressBroadcast {
    /**
     * The remaining cells in the board.
     */
    remaining: number;

    /**
     * The total amount of cells in the board.
     */
    total: number;
}

/**
 * websocket: "found_winner"
 * 
 * The broadcast from the server to all users that a winner has been found.
 */
type IFoundWinnerBroadcast = IPlayer;

/**
 * websocket: "update_user#"
 * 
 * The broadcast from the server to all users that the amount of users has 
 * changed.
 */
type IUpdateUserAmount = number;