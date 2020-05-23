import Axios from "axios";
import { BASE_URL, API_KEY, ENDPOINTS } from "../Constants/apiConstants";
import { makeQueryString } from "../utils";
import {
  GIF_LIST_LOADING,
  GIF_LIST_RESPONSE,
  CLEAR_GIF_LIST,
} from "../Constants/actionTypes";

export const getGifList = (endpointKey, params) => {
  const paramsWithKey = {
    ...params,
    api_key: API_KEY,
  };
  const request = Axios.get(
    `${BASE_URL}${ENDPOINTS[endpointKey]}?${makeQueryString(paramsWithKey)}`
  );
  return (dispatch) => {
    dispatch({ type: GIF_LIST_LOADING });
    request.then(({ data }) => {
      dispatch({ type: GIF_LIST_RESPONSE, payload: data });
    });
  };
};

export const clearGifList = () => (dispatch) =>
  dispatch({ type: CLEAR_GIF_LIST });
