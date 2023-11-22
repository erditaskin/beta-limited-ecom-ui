import { handleActions } from "redux-actions";
import {
  CART_VIEW_REQUEST,
  CART_VIEW_SUCCESS,
  CART_VIEW_FAILED,
  CART_ADD_REQUEST,
  CART_ADD_SUCCESS,
  CART_ADD_FAILED,
  CART_SHOW,
  CART_HIDE,
  CART_DELETE_PRODUCT,
} from "../actions/cart";

const defaultState = {
  loading: false,
  items: [],
  open: false,
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
    [CART_ADD_SUCCESS]: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    [CART_ADD_FAILED]: (state) => {
      return {
        ...state,
        loading: false,
      };
    },
    [CART_SHOW]: (state) => {
      return {
        ...state,
        open: true,
      };
    },
    [CART_HIDE]: (state) => {
      return {
        ...state,
        open: false,
      };
    },
    [CART_DELETE_PRODUCT]: (state, action) => {
      return {
        ...state,
        items: {
          ...state.items.reduce((item) => item.productId === action.payload),
        },
      };
    },
  },

  defaultState
);

export default reducer;
