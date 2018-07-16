declare namespace TicTacToe {
    
    export interface IPlayer {
        name: string;
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
        players: IPlayer[];
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
    
    type IProgressResponse = IUpdateProgressBroadcast;
    type IWinnerResponse = IFoundWinnerBroadcast | undefined;
    
    interface INewMoveBroadcast {
        name: string;
        location: ILocation;
    }
    
    type IUpdateMovingBroadcast = IPlayer;
    
    export interface IUpdateProgressBroadcast {
        readonly remaining: number;
        readonly total: number;
    }
    
    type IFoundWinnerBroadcast = IPlayer;
}