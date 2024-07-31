import { defineStore } from "pinia";

export const useFilterStore = defineStore("filters", {
  state: () => ({
    caseManagement: {
      filterList: [
        {
          name: "NAME",
          value: "jimmy",
        },
      ],
      selectableFilters: [
        "NAME",
        "YEAR",
        "ZODIAC",
      ],
    },
  }),
  actions: {
    handleDeleteTag(filterBarName, filterTagName) {

    },
    handleAddFilter(filterBarName, filterTagName) {

    },
  },
});
