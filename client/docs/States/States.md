# States

There is an `ITotalState` that represents the state contained in the store, produced by 
the `connect({...})` function.

There are also individual substates that defines each property of `ITotalState`:

* `IGameInfoState`: the sub state storing the number of viewers, the host address and the progress
of the game.

## ITotalState

`ITotalState` contains the following properties (substates):

* `gameInfo: IGameInfoState`