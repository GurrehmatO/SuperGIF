import Axios from "axios";
import { BASE_URL, API_KEY, ENDPOINTS } from "../Constants/apiConstants";
import { makeQueryString } from "../utils";
import {
  TRENDS_LIST_LOADING,
  TRENDS_LIST_RESPONSE,
} from "../Constants/actionTypes";

export const getTrendsList = () => {
  const paramsWithKey = {
    api_key: API_KEY,
  };
  const request = Axios.get(
    `${BASE_URL}${ENDPOINTS.trends}?${makeQueryString(paramsWithKey)}`
  );
  return (dispatch) => {
    dispatch({ type: TRENDS_LIST_LOADING });
    request.then(({ data }) => {
      dispatch({ type: TRENDS_LIST_RESPONSE, payload: data });
    });
  };
};

export const a = "";
