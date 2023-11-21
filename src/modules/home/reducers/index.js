import { combineReducers } from "redux";
import sampleList from "./sampleList";
import sample from "./sample";

const reducer = {
  sample: combineReducers({
    sampleList,
    sample,
  }),
};

export default reducer;
