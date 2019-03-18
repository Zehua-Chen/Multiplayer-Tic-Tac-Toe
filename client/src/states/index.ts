// Typescript 3 + Babel 7 does not allow import somehting and export them again
// has to use export * from '' to get rid of compiler errors
export * from "./IGameInfoState";
export * from "./IWelcomeState";
export * from "./IPlayersState";
export * from "./IBoardState";
export * from "./ITotalState";
