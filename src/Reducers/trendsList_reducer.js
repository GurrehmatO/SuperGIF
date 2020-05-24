import {
  TRENDS_LIST_LOADING,
  TRENDS_LIST_RESPONSE,
} from "../Constants/actionTypes";

const INITIAL_STATE = {
  loading: false,
  list: [],
};

const trendsReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case TRENDS_LIST_LOADING:
      return {
        loading: true,
        list: [],
      };
    case TRENDS_LIST_RESPONSE:
      return {
        loading: false,
        list: payload.data,
      };
    default:
      return state;
  }
};

export default trendsReducer;
