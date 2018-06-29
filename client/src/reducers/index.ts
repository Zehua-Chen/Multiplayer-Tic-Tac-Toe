import { combineReducers } from 'redux';

import gameInfoReducer from './GameInfoReducer';
import welcomeReducer from './WelcomeReducer';

export default combineReducers({
    gameInfo: gameInfoReducer,
    welcome: welcomeReducer,
});