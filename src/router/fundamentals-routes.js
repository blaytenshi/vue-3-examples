import { ROUTE_CATEGORY } from "../constants/options.js";

export const fundamentalsRoutes = [
  {
    path: "/losing-reactivity",
    name: "LosingReactivity",
    displayName: "Losing Reactivity",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/vue-fundamentals/losing-reactivity/index.vue"),
  },
  {
    path: "/reactivity-fundamentals",
    name: "ReactivityFundamentals",
    displayName: "Reactivity Fundamentals",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/vue-fundamentals/vue-reactivity-fundamentals/index.vue"),
  },
  {
    path: "/computed-edge-cases",
    name: "ComputedEdgeCases",
    displayName: "Computed Edge Cases",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/vue-fundamentals/computed-edge-cases/index.vue"),
  },
  {
    path: "/dynamic-component-with-dynamic-prop-values",
    name: "DynamicComponentWithDynamicPropValues",
    displayName: "Dynamic Component With Dynamic Prop Values",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/vue-fundamentals/dynamic-component-with-dynamic-prop-values/index.vue"),
  },
  {
    path: "/template-basics",
    name: "TemplateBasics",
    displayName: "Template Basics",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/vue-fundamentals/template-basics/index.vue"),
  },
  {
    path: "/composition-api-basics",
    name: "CompositionApiBasics",
    displayName: "Composition API Basics",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/vue-fundamentals/CompositionApiBasics.vue"),
  },
  {
    path: "/vbind-props-to-child",
    name: "VbindPropsToChild",
    displayName: "v-bind props to Child Components",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/vue-fundamentals/VbindPropsToChild.vue"),
  },
  {
    path: "/watchers",
    name: "WatchersExample",
    displayName: "Watchers",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/vue-fundamentals/Watchers.vue"),
  },
  {
    path: "/el-root-dom-element-template-refs",
    name: "ElRootDomElement",
    displayName: "$el Root Dom Element and Template Refs",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/vue-fundamentals/el-root-dom-element-template-refs/index.vue"),
  },
  {
    path: "/vue-props",
    name: "VueProps",
    displayName: "Vue Props",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/vue-fundamentals/vue-props/index.vue"),
  },
];
