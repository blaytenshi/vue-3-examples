import { ROUTE_CATEGORY } from "../constants/options.js";

export const librariesRoutes = [
  {
    path: "/floating-ui-example",
    name: "FloatingUiExample",
    displayName: "Floating UI Example",
    category: ROUTE_CATEGORY.LIBRARIES,
    component: () => import("../views/floating-ui/index.vue"),
  },
  {
    path: "/humanize-duration",
    name: "HumanizeDuration",
    displayName: "HumanizeDuration",
    category: ROUTE_CATEGORY.LIBRARIES,
    component: () => import("../views/humanize-duration/index.vue"),
  },
  {
    path: "/debounced-requests",
    name: "DebouncedRequests",
    displayName: "DebouncedRequests",
    display: ROUTE_CATEGORY.LIBRARIES,
    component: () => import("../views/debounced-requests/index.vue"),
  },
  {
    path: "/axios-get-params",
    name: "AxiosGetParams",
    displayName: "Axios Get Params",
    category: ROUTE_CATEGORY.LIBRARIES,
    component: () => import("../views/axios-get-params/index.vue"),
  },
  {
    path: "/maska",
    name: "MaskaPage",
    displayName: "Maska Page",
    category: ROUTE_CATEGORY.LIBRARIES,
    component: () => import("../views/MaskaPage.vue"),
  },
  {
    path: "/rxjs",
    name: "RxJS",
    displayName: "RxJS Example",
    category: ROUTE_CATEGORY.LIBRARIES,
    component: () => import("../views/RxJS.vue"),
  },
  {
    path: "/pinia-example",
    name: "PiniaExample",
    displayName: "Pinia Example",
    category: ROUTE_CATEGORY.LIBRARIES,
    component: () => import("../views/pinia-example/index.vue"),
  },
];
