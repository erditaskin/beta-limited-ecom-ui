import { Search } from "../containers";

const Routes = [
  {
    title: "Search",
    path: "/search/:query",
    component: Search,
    exact: true,
  },
];

export default Routes;
