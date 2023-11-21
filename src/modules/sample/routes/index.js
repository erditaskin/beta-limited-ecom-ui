import { SampleDashboard, Sample } from "../containers";

const Routes = [
  {
    title: "Samples",
    path: "/samples",
    component: SampleDashboard,
    exact: true,
  },
  {
    title: "Create Sample",
    path: "/sample/:id",
    component: Sample,
    exact: true,
  },
];

export default Routes;
