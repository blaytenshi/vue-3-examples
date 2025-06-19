import { defineStore } from "pinia";

export const useSearchListStore = defineStore("searchable-list-advanced", {
  state: () => ({
    selectedValues: [],
  }),
  actions: {
    handleListItemSelect(emittedItemValue) {
      this.selectedValues = emittedItemValue;
    },
  },
});
