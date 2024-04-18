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
    component: () => import("../views/Vue3VModelNativeElements.vue"),
  },
  {
    path: "/vue-3-vmodel-custom-elements",
    name: "Vue3VModelCustomElements",
    displayName: "Vue 3 V-Model Custom Elements",
    component: () => import("../views/Vue3VModelCustomElements.vue"),
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
    name: "Reactivity Fundamentals",
    displayName: "Reactivity Fundamentals",
    component: () => import("../views/vue-reactivity-fundamentals/index.vue"),
  },
  {
    path: "/query-params",
    name: "Query Params",
    displayName: "Query Params",
    component: () => import("../views/query-params/index.vue"),
  },
];
