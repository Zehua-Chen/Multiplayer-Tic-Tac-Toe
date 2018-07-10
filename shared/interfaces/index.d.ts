declare namespace TicTacToe {
    
    export interface IBoard<T> {
        readonly board: T[][];
    }
    
    export interface IPlayer<T> {
        character: T;
        name: string;
    }

    export interface IProgress {
        readonly remaining: number;
        readonly total: number;
    }
    
    export interface ICreateGameRequest {
        name: string;
        invitationCode: string;
    }
    
    export interface ICreateGameResponse {
        success: boolean;
        message?: string;
    }
    
    export type IJoinGameRequest = ICreateGameRequest;
    export type IJoinGameResponse = ICreateGameResponse;

    type IHostAddress = string;
    type IViewersAmount = number;
    
    type IPlayerName = string | undefined;
    interface IPlayerNamesResponse {
        playerNames?: IPlayerName[];
    }
    
    interface IPlayersResponse<T> {
        players: IPlayer<T>[];
    }
}