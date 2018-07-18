import { combineReducers } from 'redux';

import gameInfoReducer from './GameInfoReducer';
import welcomeReducer from './WelcomeReducer';
import playersReducer from './PlayersReducer';
import boardReducer from './BoardReducer';

export default combineReducers({
    gameInfo: gameInfoReducer,
    welcome: welcomeReducer,
    players: playersReducer,
    board: boardReducer
});