import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TicTacToe from 'interfaces';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

/**
 * Bootstrap dependencies
 */
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Network dependencies
 */
import axios from 'axios';

import { 
  IGameInfoAction, 
  UPDATE_HOSTURL,
  UPDATE_WINNER,
  UPDATE_PROGRESS, 
} from './actions/IGameInfoAction';

import {
  IPlayersAction,
  UPDATE_PLAYER_NAMES_LIST
} from './actions/IPlayersAction';

/**
 * Import redux dependencies
 */
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { IBoardAction, UPDATE_BOARD } from './actions/IBoardAction';



var store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

/* Set up axios */

axios.get<TicTacToe.IHostAddressResponse>("/host_address").then((response) => {
  store.dispatch<IGameInfoAction>({ type: UPDATE_HOSTURL, payload: response.data });
});

// Get existing players 
axios.get<TicTacToe.IPlayersResponse>("/players").then((response) => {
  
  var nameA;
  var nameB;
  
  var players = response.data.players;
  
  if (players.length >= 2) {
    
    var playerA = players[0];
    var playerB = players[1];
    
    if (playerA) {
      nameA = playerA.name;
    }
    
    if (playerB) {
      nameB = playerB.name;
    }
  }
  store.dispatch<IPlayersAction>({ 
    type: UPDATE_PLAYER_NAMES_LIST, 
    payload: {
      thisPlayerName: nameA,
      otherPlayerName: nameB
    } 
  });
});

axios.get<TicTacToe.IBoardResponse>("/board").then((response) => {
  
  var board = response.data;
  
  if (board) {
    store.dispatch<IBoardAction>({
      type: UPDATE_BOARD,
      payload: board
    });
    
    console.log(board);
  }
});

axios.get<TicTacToe.IWinnerResponse>("/winner").then((response) => {
  var data = response.data;
  if (data) {
    store.dispatch<IGameInfoAction>({
      type: UPDATE_WINNER,
      payload: data.name
    });
  }
});
axios.get<TicTacToe.IProgressResponse>("/progress").then((response) => {
  var data = response.data;
  store.dispatch<IGameInfoAction>({
    type: UPDATE_PROGRESS,
    payload: (1 - data.remaining / data.total) * 100
  });
});