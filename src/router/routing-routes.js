import { ROUTE_CATEGORY } from "../constants/options.js";

export const routingRoutes = [
  {
    path: "/query-params",
    name: "QueryParams",
    displayName: "Query Params",
    category: ROUTE_CATEGORY.ROUTING,
    component: () => import("../views/routing-examples/query-params/index.vue"),
  },
  {
    path: "/route-params-view-one",
    name: "RouteParamsViewOne",
    displayName: "Route Params View One",
    category: ROUTE_CATEGORY.ROUTING,
    component: () => import("../views/routing-examples/route-params/view-one/index.vue"),
  },
  {
    path: "/route-params-view-two/:myVariable?/:car?",
    name: "RouteParamsViewTwo",
    displayName: "Route Params View Two",
    category: ROUTE_CATEGORY.ROUTING,

    component: () => import("../views/routing-examples/route-params/view-two/index.vue"),
    props: (route) => {
      const props = {
        ...route.params,
        name: route.query.name,
      };

      return props;
    },
  },
  {
    name: "NestedRoutesUserList",
    category: ROUTE_CATEGORY.ROUTING,
    path: "/nested-routes-with-parent/users",
    displayName: "Nested Routes With Parent User",
    component: () => import("../views/routing-examples/nested-routes-with-parent/users-list/index.vue"),
  },
  {
    name: "NestedRoutesUser",
    path: "/nested-routes-with-parent/users/:username",
    component: () => import("../views/routing-examples/nested-routes-with-parent/user/index.vue"),
    children: [
      {
        name: "NestedRoutesWithParentUserHome",
        path: "",
        component: () => import("../views/routing-examples/nested-routes-with-parent/user-home/index.vue"),
      },
      {
        name: "NestedRoutesWithParentUserPosts",
        path: "posts",
        component: () => import("../views/routing-examples/nested-routes-with-parent/user-posts/index.vue"),
      },
      {
        name: "NestedRoutesWithParentUserAddress",
        path: "address",
        component: () => import("../views/routing-examples/nested-routes-with-parent/user-address/index.vue"),
      },
    ],
  },
];
