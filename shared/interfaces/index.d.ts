declare module "tic-tac-toe-interfaces" {
    
    export interface IBoard<T> {
       readonly  board: T[][];
    }
    
    export interface IPlayer<T> {
        name: string;
        character: T;
    }
}