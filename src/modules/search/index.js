import { defineModule } from "core/helpers";
import reducers from "./reducers";
import routes from "./routes";

export default defineModule("Search", reducers, routes);
