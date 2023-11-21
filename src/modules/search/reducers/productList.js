import { handleActions } from "redux-actions";
import {
  SEARCH_PRODUCT_LIST_REQUEST,
  SEARCH_PRODUCT_LIST_SUCCESS,
  SEARCH_PRODUCT_LIST_FAILED,
} from "../actions";

const defaultState = {
  loading: false,
  data: null,
};

const reducer = handleActions(
  {
    [SEARCH_PRODUCT_LIST_REQUEST]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [SEARCH_PRODUCT_LIST_SUCCESS]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    },
    [SEARCH_PRODUCT_LIST_FAILED]: (state) => {
      return {
        ...state,
        data: null,
        loading: false,
      };
    },
  },

  defaultState
);

export default reducer;
