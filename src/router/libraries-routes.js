import { ROUTE_CATEGORY } from "../constants/options.js";

export const librariesRoutes = [
  {
    path: "/floating-ui-example",
    name: "FloatingUiExample",
    displayName: "Floating UI Example",
    category: ROUTE_CATEGORY.LIBRARIES,
    component: () => import("../views/library-examples/floating-ui/index.vue"),
  },
  {
    path: "/humanize-duration",
    name: "HumanizeDuration",
    displayName: "HumanizeDuration",
    category: ROUTE_CATEGORY.LIBRARIES,
    component: () => import("../views/library-examples/humanize-duration/index.vue"),
  },
  {
    path: "/debounced-requests",
    name: "DebouncedRequests",
    displayName: "DebouncedRequests",
    category: ROUTE_CATEGORY.LIBRARIES,
    component: () => import("../views/library-examples/debounced-requests/index.vue"),
  },
  {
    path: "/axios-get-params",
    name: "AxiosGetParams",
    displayName: "Axios Get Params",
    category: ROUTE_CATEGORY.LIBRARIES,
    component: () => import("../views/library-examples/axios-get-params/index.vue"),
  },
  {
    path: "/maska",
    name: "MaskaPage",
    displayName: "Maska Page",
    category: ROUTE_CATEGORY.LIBRARIES,
    component: () => import("../views/library-examples/MaskaPage.vue"),
  },
  {
    path: "/rxjs",
    name: "RxJS",
    displayName: "RxJS Example",
    category: ROUTE_CATEGORY.LIBRARIES,
    component: () => import("../views/library-examples/RxJS.vue"),
  },
  {
    path: "/pinia-example",
    name: "PiniaExample",
    displayName: "Pinia Example",
    category: ROUTE_CATEGORY.LIBRARIES,
    component: () => import("../views/library-examples/pinia-example/index.vue"),
  },
  {
    path: "/playwright-basics",
    name: "PlaywrightBasics",
    displayName: "Playwright Basics",
    category: ROUTE_CATEGORY.LIBRARIES,
    component: () => import("../views/library-examples/playwright-basics/index.vue"),
  },
];
