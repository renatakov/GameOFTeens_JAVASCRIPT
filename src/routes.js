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
    path: "/testhtmlcss",
    exact: true,
    component: lazy(() => {
      return import("./pages/TestHtmlCss/TestHtmlCss");
    }),
  },
  {
    path: "/testjavascript",
    exact: true,
    component: lazy(() => {
      return import("./pages/TestJavascript/TestJavascript")
    }),
  },
  {
    path: "/testcplusplus",
    exact: true,
    component: lazy(() => {
      return import("./pages/TestCPlusPlus/TestCPlusPlus");
    }),
  },
]
