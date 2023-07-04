import { lazy } from "solid-js";

export const routes = [
  {
    path: "/",
    component: lazy(() => import("../components/layouts/PublicLayout")),
    children: [
      { path: "/", component: lazy(() => import("../pages/landing")) },
    ],
  },
  {
    path: "/login",
    component: lazy(() => import("../pages/login.jsx")),
  },
  {
    path: "/register",
    component: lazy(() => import("../pages/register.jsx")),
  },
  {
    path: "*",
    component: lazy(() => import("../pages/404")),
  },
];
