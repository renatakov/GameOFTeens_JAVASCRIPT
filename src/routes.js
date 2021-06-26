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
<<<<<<< HEAD
];
=======
]
>>>>>>> f0f71941a4ee726e861f7ceec20e58152cd34a43
