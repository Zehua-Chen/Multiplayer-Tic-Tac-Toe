declare namespace TicTacToe {
    
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
    
    interface IPlayersResponse<T> {
        players: IPlayer<T>[];
    }
    
    type IBoardResponse<T> = string[][] | undefined;
    
    interface ILocation {
        y: number;
        x: number;
    }
    
    interface IMoveRequest {
        name: string;
        invitationCode: string;
        location: ILocation;
    }
    
    interface INewMoveBroadcast {
        name: string;
        location: ILocation;
    }
}