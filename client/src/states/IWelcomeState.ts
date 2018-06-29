export interface IWelcomeState {
    mode: "join" | "create" | "hidden";
    errorMessage?: string;
}

export const DEFAULT_WELCOMESTATE: IWelcomeState = {
    mode: "join"
}