import { defineStore } from "pinia";

export const useSearchListStore = defineStore("searchable-list-advanced", {
  state: () => ({
    selectedValues: [],
  }),
  actions: {
    handleItemSelect(emittedItemValue) {
      if (this.selectedValues.includes(emittedItemValue)) {
        return this.selectedValues = this.selectedValues.filter(values => values !== emittedItemValue);
      }

      return this.selectedValues.push(emittedItemValue);
    },
  },
});
