import { combineReducers } from "redux";
import { combineModuleReducers } from "core/helpers/module";
import modules from "modules";
import session from "./session";
import cart from "./cart";

export default combineReducers({
  ...combineModuleReducers(modules),
  session,
  cart,
});
