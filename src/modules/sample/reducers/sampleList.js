import { handleActions } from "redux-actions";
import {
  SAMPLE_LIST_REQUEST,
  SAMPLE_LIST_SUCCESS,
  SAMPLE_LIST_FAILED,
} from "../actions";

const defaultState = {
  loading: true,
  data: [],
};

const reducer = handleActions(
  {
    [SAMPLE_LIST_REQUEST]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [SAMPLE_LIST_SUCCESS]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    },
    [SAMPLE_LIST_FAILED]: (state) => {
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
