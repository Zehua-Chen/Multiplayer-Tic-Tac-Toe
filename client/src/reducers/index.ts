import { combineReducers } from 'redux';

import gameInfoReducer from './GameInfoReducer';
import welcomeReducer from './WelcomeReducer';
import playersReducer from './PlayersReducer';

export default combineReducers({
    gameInfo: gameInfoReducer,
    welcome: welcomeReducer,
    players: playersReducer
});