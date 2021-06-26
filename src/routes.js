import { lazy } from "react";

export default [
  {
    path: "/",
    exact: true,
    component: lazy(() => {
      return import("./pages/Home");
    }),
  },
  {
    path: "/tests",
    exact: true,
    component: lazy(() => {
      return import("./pages/Tests");
    }),
  },
];