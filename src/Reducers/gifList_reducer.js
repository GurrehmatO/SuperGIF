import {
  GIF_LIST_LOADING,
  GIF_LIST_RESPONSE,
  CLEAR_GIF_LIST,
} from "../Constants/actionTypes";

const INITIAL_STATE = {
  loading: false,
  list: [],
  pagination: {},
};

const gifListReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case GIF_LIST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GIF_LIST_RESPONSE:
      return {
        loading: false,
        list: [...state.list, ...payload.data],
        pagination: payload.pagination,
      };
    case CLEAR_GIF_LIST:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default gifListReducer;
