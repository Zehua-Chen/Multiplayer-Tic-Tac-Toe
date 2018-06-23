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
        passcode: string;
    }
    
    export interface ICreateGameResponse {
        success: boolean;
        message?: string;
    }

    type IHostAddress = string;
    type IViewersAmount = number;
}