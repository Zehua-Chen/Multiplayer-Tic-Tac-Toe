# `IGameInfoState`

`IGameInfoState` is the sub state in `ITotlaState` (created with `connect({...})`) 
storing the number of viewers, the host address and the progress

## File(s)

* Defined in `src/states/IGameInfoState.ts`
* Can be accessed via `import {}` from either `src/states/IGameInfoState.ts` or `src/states/`;

## Properties

* `viewers: number`: the number of viewers of the game;
* `progress: number`: the progress of the game (how many blocks have been clicked?);
* `hostUrl: string`: the ipv4 address of the server;
* `connected: boolean`: whether the client is connected to the server;