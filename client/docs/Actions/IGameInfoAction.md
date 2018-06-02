# `IGameInfoAction`

Actions of type `IGameInfoAction` are used to modify the gameInfo property of the state managed by
redux. 

## File(s)

* Defined in `src/actions/IGameInfoAction.ts`
* Can be accessed via `import {}` from either `src/actions/IGameInfoAction.ts` or `src/actions/`;

## Properties

* `type: string`: a string identifying the type of action;
* `payload: string | number | boolean`: either a string or a number, as the data passed with the action:
    * `string` if it is `UPDATE_HOSTURL` action that you are dispatching;
    * `number` if it is `UPDATE_PROGRESS` or `UPDATE_VIEWER` actions that you are dispatching;
    
        * `UPDATE_PROGRESS` should have a payload between 0 and 100;
        * `UPDATE_VIEWER` should have a payload representing how many players are there.
        
    * `boolean` if it is `UPDATE_CONNECTION_STATUS` action that you are dispatching
        
### Types of action

* `UPDATE_HOSTURL`: update the host url, which is displayed in `GameInfoPanel`
* `UPDATE_PROGRESS`: update the progress of the game, which is displayed in `GameInfoPanel`
* `UPDATE_VIEWER`: update the number of people viewiing the game, which is displayed in `GameInfoPanel`.
* `UPDATE_CONNECTION_STATUS`: update the connection status of the client.