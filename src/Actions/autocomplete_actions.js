import Axios from "axios";
import { BASE_URL, API_KEY, ENDPOINTS } from "../Constants/apiConstants";
import { makeQueryString } from "../utils";
import {
  AUTOCOMPLETE_LOADING,
  AUTOCOMPLETE_RESPONSE,
  CLEAR_AUTOCOMPLETE,
} from "../Constants/actionTypes";

export const getAutocompleteSuggestions = (query) => {
  const paramsWithKey = {
    q: query,
    api_key: API_KEY,
  };
  const request = Axios.get(
    `${BASE_URL}${ENDPOINTS.autocomplete}?${makeQueryString(paramsWithKey)}`
  );
  return (dispatch) => {
    dispatch({ type: AUTOCOMPLETE_LOADING });
    request.then(({ data }) => {
      dispatch({
        type: AUTOCOMPLETE_RESPONSE,
        payload: { list: data.data, query },
      });
    });
  };
};

export const clearAutocomplete = () => (dispatch) =>
  dispatch({ type: CLEAR_AUTOCOMPLETE });
