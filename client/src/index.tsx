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
import io from 'socket.io-client';
import { IGameInfoAction, UPDATE_VIEWERS, UPDATE_HOSTURL, UPDATE_PROGRESS } from './actions';

var store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

/* Setup socket.io */

var socket = io();

socket.on("updated-user__amount", (newCount: number) => {
  store.dispatch<IGameInfoAction>({ type: UPDATE_VIEWERS, payload: newCount });
});

socket.on("updated_host", (host: string) => {
  store.dispatch<IGameInfoAction>({ type: UPDATE_HOSTURL, payload: host });
});

socket.on("updated_progress", (remaining: number, total: number) => {
  store.dispatch<IGameInfoAction>({ type: UPDATE_PROGRESS, payload: (total - remaining) / total });
})
