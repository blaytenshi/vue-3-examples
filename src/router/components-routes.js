import { ROUTE_CATEGORY } from "@/constants/options.js";

export const componentsRoutes = [
  {
    path: "/paginated-table",
    name: "PaginatedTable",
    displayName: "Paginated Table",
    category: ROUTE_CATEGORY.COMPONENTS,
    component: () => import("../views/custom-components/paginated-table/index.vue"),
  },
  {
    path: "/local-storage",
    name: "LocalStorage",
    displayName: "Local Storage",
    category: ROUTE_CATEGORY.COMPONENTS,
    component: () => import("../views/custom-components/local-storage/index.vue"),
  },
  {
    path: "/sticky-element",
    name: "StickyElement",
    displayName: "Sticky Element",
    category: ROUTE_CATEGORY.COMPONENTS,
    component: () => import("../views/custom-components/sticky-element/index.vue"),
  },
  {
    path: "/local-list-searching",
    name: "LocalListSearching",
    displayName: "Local List Searching",
    category: ROUTE_CATEGORY.COMPONENTS,
    component: () => import("../views/custom-components/local-list-searching/index.vue"),
  },
  {
    path: "/searchable-list-advanced",
    name: "SearchableListAdvanced",
    displayName: "Searchable List Advanced",
    category: ROUTE_CATEGORY.COMPONENTS,
    component: () => import("../views/custom-components/searchable-list-advanced/index.vue"),
  },
  {
    path: "/filter-list",
    name: "FilerList",
    displayName: "Filter List",
    category: ROUTE_CATEGORY.COMPONENTS,
    component: () => import("../views/custom-components/filter-list/index.vue"),
  },
  {
    path: "/custom-table",
    name: "CustomTable",
    displayName: "VS Table",
    category: ROUTE_CATEGORY.COMPONENTS,
    component: () => import("../views/custom-components/custom-table/index.vue"),
  },
  {
    path: "/bulk-assign-tasks",
    name: "BulkAssignTasks",
    displayName: "Bulk Assign Tasks",
    category: ROUTE_CATEGORY.COMPONENTS,
    component: () => import("../views/custom-components/bulk-assign-tasks/index.vue"),
  },
];
