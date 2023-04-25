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
    component: () => import("../views/HomePage.vue")
  },
  {
    path: "/maska",
    name: "MaskaPage",
    displayName: "Maska Page",
    component: () => import("../views/MaskaPage.vue")
  },
  {
    path: "/vue-3-vmodel-native-elements",
    name: "Vue3VModelNativeElements",
    displayName: "Vue 3 V-Model Native Inputs",
    component: () => import("../views/Vue3VModelNativeElements.vue")
  },
  {
    path: "/vue-3-vmodel-custom-elements",
    name: "Vue3VModelCustomElements",
    displayName: "Vue 3 V-Model Custom Elements",
    component: () => import("../views/Vue3VModelCustomElements.vue")
  },
  {
    path: "/composition-api-basics",
    name: "CompositionApiBasics",
    displayName: "Composition API Basics",
    component: () => import("../views/CompositionApiBasics.vue")
  },
  {
    path: "/vbind-props-to-child",
    name: "VbindPropsToChild",
    displayName: "v-bind props to Child Components",
    component: () => import("../views/VbindPropsToChild.vue")
  },
  {
    path: "/watchers",
    name: "WatchersExample",
    displayName: "Watchers",
    component: () => import("../views/Watchers.vue")
  },
  {
    path: "/rxjs",
    name: "RxJS",
    displayName: "RxJS Example",
    component: () => import("../views/RxJS.vue")
  },
  {
    path: "/svg-imports",
    name: "SvgImports",
    displayName: "SVG Imports",
    component: () => import("../views/SvgImports.vue")
  }
];
