import { combineReducers } from "redux";
import statisticsReducer from "./statisticsReducer";

export default combineReducers({
  statistics: statisticsReducer
});
