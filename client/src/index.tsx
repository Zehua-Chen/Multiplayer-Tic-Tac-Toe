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
 * Import redux dependencies
 */
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

import { 
  IGameInfoAction, 
  UPDATE_VIEWERS, UPDATE_HOSTURL, UPDATE_PROGRESS, UPDATE_CONNECTION_STATUS 
} from './actions';

import socket from './network';
import axios from 'axios';

var store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

/* Setup socket.io */

socket.on("updated-user__amount", (data: TicTacToe.IViewersAmount) => {
  store.dispatch<IGameInfoAction>({ type: UPDATE_VIEWERS, payload: data });
});

socket.on("updated_progress", (data: TicTacToe.IProgress) => {
  var { remaining, total } = data;
  store.dispatch<IGameInfoAction>({ type: UPDATE_PROGRESS, payload: (total - remaining) / total });
});

socket.on("connect", () => {
  store.dispatch<IGameInfoAction>({ type: UPDATE_CONNECTION_STATUS, payload: true });
});

socket.on("disconnect", () => {
  store.dispatch<IGameInfoAction>({ type: UPDATE_CONNECTION_STATUS, payload: false });
});

/* Set up axios */

axios.get<TicTacToe.IHostAddress>("/host_address").then((response) => {
  store.dispatch<IGameInfoAction>({ type: UPDATE_HOSTURL, payload: response.data });
});