import {
  AUTOCOMPLETE_LOADING,
  AUTOCOMPLETE_RESPONSE,
  CLEAR_AUTOCOMPLETE,
} from "../Constants/actionTypes";

const INITIAL_STATE = {
  loading: false,
  list: [],
  query: "",
};

const autompleteReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case AUTOCOMPLETE_LOADING:
      return {
        ...state,
        loading: true,
        list: [],
      };
    case AUTOCOMPLETE_RESPONSE:
      return {
        loading: false,
        list: payload.list,
        query: payload.query,
      };
    case CLEAR_AUTOCOMPLETE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default autompleteReducer;
