import { combineReducers } from "redux";
import gifListReducer from "./gifList_reducer";
import trendsReducer from "./trendsList_reducer";

export default combineReducers({
  gifList: gifListReducer,
  trends: trendsReducer,
});
