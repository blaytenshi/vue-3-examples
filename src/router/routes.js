/*
  path - url to the view in router,
  name - name of the component, not important, just for uniqueness when rendering all the HomePage.vue
  displayName - what the link should show, not important either
  category - what category of topics the example belongs to
  component: async load the component as needed, needs to be a path to the view itself
*/
import { componentsRoutes } from "./components-routes.js";
import { fundamentalsRoutes } from "./fundamentals-routes.js";
import { vueInputsRoutes } from "./vue-inputs-routes.js";
import { librariesRoutes } from "./libraries-routes.js";
import { routingRoutes } from "./routing-routes.js";
import { ROUTE_CATEGORY } from "../constants/options.js";

export default [
  {
    path: "/",
    name: "HomePage",
    displayName: "Home Page",
    category: ROUTE_CATEGORY.ROOT,
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/svg-imports",
    name: "SvgImports",
    displayName: "SVG Imports",
    category: ROUTE_CATEGORY.ROOT,
    component: () => import("../views/SvgImports.vue"),
  },
  // {
  //   path: "/pinia-example-advanced",
  //   name: "PiniaExampleAdvanced",
  //   displayName: "Pinia Example Advanced",
  //   component: () => import("../views/pinia-example-advanced/index.vue"),
  // },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    displayName: "Not Found",
    category: ROUTE_CATEGORY.ROOT,
    component: () => import("../views/not-found/index.vue"),
  },
  ...vueInputsRoutes,
  ...librariesRoutes,
  ...componentsRoutes,
  ...fundamentalsRoutes,
  ...routingRoutes,
];
