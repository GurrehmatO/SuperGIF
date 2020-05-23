import { combineReducers } from "redux";
import gifListReducer from "./gifList_reducer";

export default combineReducers({
  gifList: gifListReducer,
});
