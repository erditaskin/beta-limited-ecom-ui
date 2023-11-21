import { handleActions } from "redux-actions";
import {
  SESSION_REQUEST,
  SESSION_SUCCESS,
  SESSION_FAILED,
} from "../actions/session";

const defaultState = {
  loading: false,
  id: null,
};

const reducer = handleActions(
  {
    [SESSION_REQUEST]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [SESSION_SUCCESS]: (state, action) => {
      return {
        ...state,
        id: action.payload,
        loading: false,
      };
    },
    [SESSION_FAILED]: (state) => {
      return {
        ...state,
        id: null,
        loading: false,
      };
    },
  },

  defaultState
);

export default reducer;
