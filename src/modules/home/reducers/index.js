import { combineReducers } from "redux";
import productList from "./productList";

const reducer = {
  home: combineReducers({
    productList,
  }),
};

export default reducer;
