/*
  path - url to the view in router,
  name - name of the component, not important, just for uniqueness when rendering all the HomePage.vue
  displayName - what the link should show, not important either
  component: async load the component as needed, needs to be a path to the view itself
*/

export default [
  {
    path: "/",
    name: "HomePage",
    displayName: "Home Page",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/maska",
    name: "MaskaPage",
    displayName: "Maska Page",
    component: () => import("../views/MaskaPage.vue"),
  },
  {
    path: "/vue-3-vmodel-native-elements",
    name: "Vue3VModelNativeElements",
    displayName: "Vue 3 V-Model Native Inputs",
    component: () => import("../views/basic-vmodel/index.vue"),
  },
  {
    path: "/vue-3-vmodel-custom-elements",
    name: "Vue3VModelCustomElements",
    displayName: "Vue 3 V-Model Custom Elements",
    component: () => import("../views/custom-element-vmodel/index.vue"),
  },
  {
    path: "/composition-api-basics",
    name: "CompositionApiBasics",
    displayName: "Composition API Basics",
    component: () => import("../views/CompositionApiBasics.vue"),
  },
  {
    path: "/vbind-props-to-child",
    name: "VbindPropsToChild",
    displayName: "v-bind props to Child Components",
    component: () => import("../views/VbindPropsToChild.vue"),
  },
  {
    path: "/watchers",
    name: "WatchersExample",
    displayName: "Watchers",
    component: () => import("../views/Watchers.vue"),
  },
  {
    path: "/rxjs",
    name: "RxJS",
    displayName: "RxJS Example",
    component: () => import("../views/RxJS.vue"),
  },
  {
    path: "/svg-imports",
    name: "SvgImports",
    displayName: "SVG Imports",
    component: () => import("../views/SvgImports.vue"),
  },
  {
    path: "/template-basics",
    name: "TemplateBasics",
    displayName: "Template Basics",
    component: () => import("../views/template-basics/index.vue"),
  },
  {
    path: "/pinia-example",
    name: "PiniaExample",
    displayName: "Pinia Example",
    component: () => import("../views/pinia-example/index.vue"),
  },
  {
    path: "/filter-list",
    name: "FilerList",
    displayName: "Filter List",
    component: () => import("../views/filter-list/index.vue"),
  },
  {
    path: "/basic-inputs",
    name: "BasicInputs",
    displayName: "Basic Inputs",
    component: () => import("../views/basic-inputs/index.vue"),
  },
  {
    path: "/basic-inputs-emits",
    name: "BasicInputsEmits",
    displayName: "Basic Inputs Emits",
    component: () => import("../views/basic-inputs-emits/index.vue"),
  },
  {
    path: "/computed-edge-cases",
    name: "ComputedEdgeCases",
    displayName: "Computed Edge Cases",
    component: () => import("../views/computed-edge-cases/index.vue"),
  },
  {
    path: "/local-list-searching",
    name: "LocalListSearching",
    displayName: "Local List Searching",
    component: () => import("../views/local-list-searching/index.vue"),
  },
  {
    path: "/losing-reactivity",
    name: "LosingReactivity",
    displayName: "Losing Reactivity",
    component: () => import("../views/losing-reactivity/index.vue"),
  },
  {
    path: "/reactivity-fundamentals",
    name: "ReactivityFundamentals",
    displayName: "Reactivity Fundamentals",
    component: () => import("../views/vue-reactivity-fundamentals/index.vue"),
  },
  {
    path: "/query-params",
    name: "QueryParams",
    displayName: "Query Params",
    component: () => import("../views/query-params/index.vue"),
  },
  {
    path: "/basic-forms-validation",
    name: "BasicFormsValidation",
    displayName: "Basic Forms Validation",
    component: () => import("../views/basic-forms-validation/index.vue"),
  },
  {
    path: "/paginated-table",
    name: "PaginatedTable",
    displayName: "Paginated Table",
    component: () => import("../views/paginated-table/index.vue"),
  },
  {
    path: "/sticky-element",
    name: "StickyElement",
    displayName: "Sticky Element",
    component: () => import("../views/sticky-element/index.vue"),
  },
  {
    path: "/debounced-requests",
    name: "DebouncedRequests",
    displayName: "DebouncedRequests",
    component: () => import("../views/debounced-requests/index.vue"),
  },
  {
    path: "/axios-get-params",
    name: "AxiosGetParams",
    displayName: "Axios Get Params",
    component: () => import("../views/axios-get-params/index.vue"),
  },
  {
    path: "/route-params-view-one",
    name: "RouteParamsViewOne",
    displayName: "Route Params View One",
    component: () => import("../views/route-params/view-one/index.vue"),
  },
  {
    path: "/route-params-view-two/:myVariable?/:car?",
    name: "RouteParamsViewTwo",
    displayName: "Route Params View Two",
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
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    displayName: "Not Found",
    component: () => import("../views/not-found/index.vue"),
  },
];
