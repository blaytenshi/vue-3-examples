import { ROUTE_CATEGORY } from "../constants/options.js";

export const fundamentalsRoutes = [
  {
    path: "/losing-reactivity",
    name: "LosingReactivity",
    displayName: "Losing Reactivity",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/losing-reactivity/index.vue"),
  },
  {
    path: "/reactivity-fundamentals",
    name: "ReactivityFundamentals",
    displayName: "Reactivity Fundamentals",
    display: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/vue-reactivity-fundamentals/index.vue"),
  },
  {
    path: "/computed-edge-cases",
    name: "ComputedEdgeCases",
    displayName: "Computed Edge Cases",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/computed-edge-cases/index.vue"),
  },
  {
    path: "/dynamic-component-with-dynamic-prop-values",
    name: "DynamicComponentWithDynamicPropValues",
    displayName: "Dynamic Component With Dynamic Prop Values",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/dynamic-component-with-dynamic-prop-values/index.vue"),
  },
  {
    path: "/template-basics",
    name: "TemplateBasics",
    displayName: "Template Basics",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/template-basics/index.vue"),
  },
  {
    path: "/composition-api-basics",
    name: "CompositionApiBasics",
    displayName: "Composition API Basics",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/CompositionApiBasics.vue"),
  },
  {
    path: "/vbind-props-to-child",
    name: "VbindPropsToChild",
    displayName: "v-bind props to Child Components",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/VbindPropsToChild.vue"),
  },
  {
    path: "/watchers",
    name: "WatchersExample",
    displayName: "Watchers",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/Watchers.vue"),
  },
  {
    path: "/el-root-dom-element-template-refs",
    name: "ElRootDomElement",
    displayName: "$el Root Dom Element and Template Refs",
    category: ROUTE_CATEGORY.FUNDAMENTALS,
    component: () => import("../views/el-root-dom-element-template-refs/index.vue"),
  },
];
