import React from "react";

const Login = React.lazy(() => import("../views/admin/index"));
const Dashboard = React.lazy(() => import("../views/dashboard/index"));
const Os = React.lazy(() => import("../views/os/index"));

export const Routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   exact: true,
  //   layout: "/"
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/"
  },
  {
    path: "/os",
    name: "Os",
    component: Os,
    exact: true,
    layout: "/"
  },
  //   {
  //     path: "/cadastros/servicos",
  //     name: "Clientes",
  //     component: Servicos,
  //     layout: "/painel"
  //   },
  { path: "/login", name: "Login", component: Login, layout: "/auth" }
];
