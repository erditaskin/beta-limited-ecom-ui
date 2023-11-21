import { handleActions } from "redux-actions";
import { SAMPLE_REQUEST, SAMPLE_SUCCESS, SAMPLE_FAILED } from "../actions";

const defaultState = {
  loading: true,
  sampleForm: {},
};

const reducer = handleActions(
  {
    [SAMPLE_REQUEST]: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    [SAMPLE_SUCCESS]: (state, action) => {
      return {
        ...state,
        sampleForm: action.payload,
        loading: false,
      };
    },
    [SAMPLE_FAILED]: (state) => {
      return {
        ...state,
        sampleForm: [],
        loading: false,
      };
    },
  },

  defaultState
);

export default reducer;
