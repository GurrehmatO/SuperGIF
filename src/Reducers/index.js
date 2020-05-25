import { combineReducers } from "redux";
import gifListReducer from "./gifList_reducer";
import trendsReducer from "./trendsList_reducer";
import autocompleteReducer from "./autocomplete_reducer";

export default combineReducers({
  gifList: gifListReducer,
  trends: trendsReducer,
  autocomplete: autocompleteReducer,
});
