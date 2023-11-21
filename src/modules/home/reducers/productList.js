import { handleActions } from "redux-actions";
import {
  HOME_PRODUCT_LIST_REQUEST,
  HOME_PRODUCT_LIST_SUCCESS,
  HOME_PRODUCT_LIST_FAILED,
} from "../actions";

const defaultState = {
  loading: false,
  data: [],
};

const reducer = handleActions(
  {
    [HOME_PRODUCT_LIST_REQUEST]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [HOME_PRODUCT_LIST_SUCCESS]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    },
    [HOME_PRODUCT_LIST_FAILED]: (state) => {
      return {
        ...state,
        data: [],
        loading: false,
      };
    },
  },

  defaultState
);

export default reducer;
