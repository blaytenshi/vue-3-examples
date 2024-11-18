import { ROUTE_CATEGORY } from "../constants/options.js";

export const vueInputsRoutes = [
  {
    path: "/basic-inputs",
    name: "BasicInputs",
    displayName: "Basic Inputs",
    category: ROUTE_CATEGORY.VUE_INPUTS,
    component: () => import("../views/vue-inputs/01-basic-inputs/index.vue"),
  },
  {
    path: "/basic-inputs-events",
    name: "BasicInputsEvents",
    displayName: "Basic Inputs Events",
    category: ROUTE_CATEGORY.VUE_INPUTS,
    component: () => import("../views/vue-inputs/02-basic-inputs-events/index.vue"),
  },
  {
    path: "/basic-inputs-vmodel",
    name: "BasicInputsVModel",
    displayName: "Basic Inputs VModel",
    category: ROUTE_CATEGORY.VUE_INPUTS,
    component: () => import("../views/vue-inputs/03-basic-inputs-vmodel/index.vue"),
  },
  {
    path: "/basic-inputs-emits",
    name: "BasicInputsEmits",
    displayName: "Basic Inputs Emits",
    category: ROUTE_CATEGORY.VUE_INPUTS,
    component: () => import("../views/vue-inputs/basic-inputs-with-emits/index.vue"),
  },
  {
    path: "/vue-3-vmodel-native-elements",
    name: "Vue3VModelNativeElements",
    displayName: "Vue 3 V-Model Native Inputs",
    category: ROUTE_CATEGORY.VUE_INPUTS,
    component: () => import("../views/vue-inputs/04-basic-vmodel-options-api/index.vue"),
  },
  {
    path: "/vue-3-vmodel-custom-elements",
    name: "Vue3VModelCustomElements",
    displayName: "Vue 3 V-Model Custom Elements",
    category: ROUTE_CATEGORY.VUE_INPUTS,
    component: () => import("../views/vue-inputs/05-component-vmodel/index.vue"),
  },
  {
    path: "/component-vmodel-define-model",
    name: "ComponentVModelDefineModel",
    displayName: "Component VModel with defineModel() for Vue 3.4+",
    category: ROUTE_CATEGORY.VUE_INPUTS,
    component: () => import("../views/vue-inputs/component-vmodel-define-model/index.vue"),
  },
  {
    path: "/basic-forms-validation",
    name: "BasicFormsValidation",
    displayName: "Basic Forms Validation",
    category: ROUTE_CATEGORY.VUE_INPUTS,
    component: () => import("../views/vue-inputs/forms-validation/index.vue"),
  },
];
