import { ROUTE_CATEGORY } from "../constants/options.js";

export const routingRoutes = [
  {
    path: "/query-params",
    name: "QueryParams",
    displayName: "Query Params",
    category: ROUTE_CATEGORY.ROUTING,
    component: () => import("../views/query-params/index.vue"),
  },
  {
    path: "/route-params-view-one",
    name: "RouteParamsViewOne",
    displayName: "Route Params View One",
    category: ROUTE_CATEGORY.ROUTING,
    component: () => import("../views/route-params/view-one/index.vue"),
  },
  {
    path: "/route-params-view-two/:myVariable?/:car?",
    name: "RouteParamsViewTwo",
    displayName: "Route Params View Two",
    category: ROUTE_CATEGORY.ROUTING,

    component: () => import("../views/route-params/view-two/index.vue"),
    props: (route) => {
      const props = {
        ...route.params,
        name: route.query.name,
      };

      return props;
    },
  },
  {
    path: "/nested-routes-with-parent/users",
    name: "NestedRoutesWithParentUserList",
    displayName: "Nested Routes With Parent User",
    category: ROUTE_CATEGORY.ROUTING,
    children: [
      {
        name: "NestedRoutesWithParentUserList",
        path: "",
        component: () => import("../views/nested-routes-with-parent/users-list/index.vue"),
      },
      {
        name: "NestedRoutesWithParentUserHome",
        path: ":userName",
        component: () => import("../views/nested-routes-with-parent/user-home/index.vue"),
      },
      {
        name: "NestedRoutesWithParentUserPosts",
        path: ":userName/posts",
        component: () => import("../views/nested-routes-with-parent/user-posts/index.vue"),
      },
      {
        name: "NestedRoutesWithParentUserProfile",
        path: ":userName/address",
        component: () => import("../views/nested-routes-with-parent/user-address/index.vue"),
      },
    ],
  },
];
