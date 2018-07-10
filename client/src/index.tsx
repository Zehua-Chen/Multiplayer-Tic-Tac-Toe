import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
} from './actions/IGameInfoAction';

import {
  IPlayersAction,
  ADD_PLAYERS
} from './actions/IPlayersAction';

/**
 * Import redux dependencies
 */
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';



var store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

/* Set up axios */

axios.get<TicTacToe.IHostAddress>("/host_address").then((response) => {
  store.dispatch<IGameInfoAction>({ type: UPDATE_HOSTURL, payload: response.data });
});

// Get existing players 
axios.get<TicTacToe.IPlayersResponse<string>>("/players").then((response) => {
  store.dispatch<IPlayersAction>({ 
    type: ADD_PLAYERS, 
    payload: response.data.players });
});