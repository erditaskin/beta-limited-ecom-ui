import { handleActions } from "redux-actions";
import {
  CART_VIEW_REQUEST,
  CART_VIEW_SUCCESS,
  CART_VIEW_FAILED,
  CART_ADD_REQUEST,
  CART_ADD_SUCCESS,
  CART_ADD_FAILED,
} from "../actions/cart";

const defaultState = {
  loading: false,
  items: [],
};

const reducer = handleActions(
  {
    [CART_VIEW_REQUEST]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [CART_VIEW_SUCCESS]: (state, action) => {
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    },
    [CART_VIEW_FAILED]: (state) => {
      return {
        ...state,
        items: [],
        loading: false,
      };
    },
    [CART_ADD_REQUEST]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [CART_ADD_SUCCESS]: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };
    },
    [CART_ADD_FAILED]: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
  },

  defaultState
);

export default reducer;
