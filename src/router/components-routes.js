export const componentsRoutes = [
  {
    path: "/paginated-table",
    name: "PaginatedTable",
    displayName: "Paginated Table",
    category: "components",
    component: () => import("../views/custom-components/paginated-table/index.vue"),
  },
  {
    path: "/local-storage",
    name: "LocalStorage",
    displayName: "Local Storage",
    category: "components",
    component: () => import("../views/custom-components/local-storage/index.vue"),
  },
  {
    path: "/sticky-element",
    name: "StickyElement",
    displayName: "Sticky Element",
    category: "components",
    component: () => import("../views/custom-components/sticky-element/index.vue"),
  },
  {
    path: "/local-list-searching",
    name: "LocalListSearching",
    displayName: "Local List Searching",
    category: "components",
    component: () => import("../views/custom-components/local-list-searching/index.vue"),
  },
  {
    path: "/searchable-list-advanced",
    name: "SearchableListAdvanced",
    displayName: "Searchable List Advanced",
    category: "components",
    component: () => import("../views/custom-components/searchable-list-advanced/index.vue"),
  },
  {
    path: "/filter-list",
    name: "FilerList",
    displayName: "Filter List",
    category: "components",
    component: () => import("../views/custom-components/filter-list/index.vue"),
  },
];
