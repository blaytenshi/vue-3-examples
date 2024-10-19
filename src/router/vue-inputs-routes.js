import { ROUTE_CATEGORY } from "../constants/options.js";

export const vueInputsRoutes = [
  {
    path: "/basic-forms-validation",
    name: "BasicFormsValidation",
    displayName: "Basic Forms Validation",
    category: ROUTE_CATEGORY.VUE_INPUTS,
    component: () => import("../views/basic-forms-validation/index.vue"),
  },
  {
    path: "/basic-inputs",
    name: "BasicInputs",
    displayName: "Basic Inputs",
    category: ROUTE_CATEGORY.VUE_INPUTS,
    component: () => import("../views/basic-inputs/index.vue"),
  },
  {
    path: "/basic-inputs-vmodel",
    name: "BasicInputsVModel",
    displayName: "Basic Inputs VModel",
    category: ROUTE_CATEGORY.VUE_INPUTS,
    component: () => import("../views/basic-inputs-vmodel/index.vue"),
  },
  {
    path: "/basic-inputs-emits",
    name: "BasicInputsEmits",
    displayName: "Basic Inputs Emits",
    category: ROUTE_CATEGORY.VUE_INPUTS,
    component: () => import("../views/basic-inputs-emits/index.vue"),
  },
  {
    path: "/vue-3-vmodel-native-elements",
    name: "Vue3VModelNativeElements",
    displayName: "Vue 3 V-Model Native Inputs",
    category: ROUTE_CATEGORY.VUE_INPUTS,
    component: () => import("../views/basic-vmodel/index.vue"),
  },
  {
    path: "/vue-3-vmodel-custom-elements",
    name: "Vue3VModelCustomElements",
    displayName: "Vue 3 V-Model Custom Elements",
    category: ROUTE_CATEGORY.VUE_INPUTS,
    component: () => import("../views/component-vmodel/index.vue"),
  },
  {
    path: "/component-vmodel-define-model",
    name: "ComponentVModelDefineModel",
    displayName: "Component VModel with defineModel() for Vue 3.4+",
    category: ROUTE_CATEGORY.VUE_INPUTS,
    component: () => import("../views/component-vmodel-define-model/index.vue"),
  },
];
