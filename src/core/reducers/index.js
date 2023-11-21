import { combineReducers } from "redux";
import { combineModuleReducers } from "core/helpers";
import modules from "modules";
import session from "./session";

export default combineReducers({
  ...combineModuleReducers(modules),
  session,
});
