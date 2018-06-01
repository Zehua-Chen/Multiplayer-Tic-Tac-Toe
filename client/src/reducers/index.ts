import { combineReducers } from 'redux';

import gameInfoReducer from './GameInfoReducer';

export default combineReducers({
    gameInfo: gameInfoReducer
});