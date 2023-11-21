import { combineReducers } from "redux";
import productList from "./productList";

const reducer = {
  search: combineReducers({
    productList,
  }),
};

export default reducer;
