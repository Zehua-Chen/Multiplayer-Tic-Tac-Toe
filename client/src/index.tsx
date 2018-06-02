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

import { IGameInfoAction, UPDATE_VIEWERS, UPDATE_HOSTURL, UPDATE_PROGRESS } from './actions';
import { Websocket } from './network';

var store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

/* Setup socket.io */

// var socket = io();

// socket.on("updated-user__amount", (newCount: number) => {
//   store.dispatch<IGameInfoAction>({ type: UPDATE_VIEWERS, payload: newCount });
// });

// socket.on("updated_host", (host: string) => {
//   store.dispatch<IGameInfoAction>({ type: UPDATE_HOSTURL, payload: host });
// });

// socket.on("updated_progress", (remaining: number, total: number) => {
//   store.dispatch<IGameInfoAction>({ type: UPDATE_PROGRESS, payload: (total - remaining) / total });
// })
var webSocket = Websocket.getSharedSocket();

webSocket.subsribe<TicTacToe.IViewersAmount>("updated-user__amount", (data) => {
  store.dispatch<IGameInfoAction>({ type: UPDATE_VIEWERS, payload: data });
});

webSocket.subsribe<TicTacToe.IHostAddress>("updated_host", (data) => {
  store.dispatch<IGameInfoAction>({ type: UPDATE_HOSTURL, payload: data });
});

webSocket.subsribe<TicTacToe.IProgress>("updated_progress", (data) => {
  var { remaining, total } = data;
  store.dispatch<IGameInfoAction>({ type: UPDATE_PROGRESS, payload: (total - remaining) / total });
});