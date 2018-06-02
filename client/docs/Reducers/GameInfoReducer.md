# `gameInfoReducer(gameInfoState, actions)`

`gameInfoReducer` updates the following properties of `IGameInfoState` based on the information contained in `IGameInfoAction`:

* `hostUrl` if `UPDATE_HOSTURL` is dispatched
* `progress` if `UPDATE_PROGRESS` is dispatched
* `viewers` if `UPDATE_VIEWERS` is dispatched
* `connected` if `UPDATE_CONNECTION_STATUS` is dispatched