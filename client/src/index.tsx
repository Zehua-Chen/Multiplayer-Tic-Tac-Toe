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

/**
 * Import redux dependencies
 */
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import { 
  IGameInfoAction, 
  UPDATE_HOSTURL, 
} from './actions';

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