<script setup>
import { array, arrayOf, bool, func, string } from "vue-types";
import ListItem from "./list-item.vue";
import { computed, reactive } from "vue";

const props = defineProps({
  items: arrayOf({
    label: string(),
    value: string(),
  }).isRequired,
  values: array().isRequired,
  searchable: bool().def(true),
  searchPlaceholderText: string(),
  handleItemSelect: func(),
});

const state = reactive({
  searchValue: "",
});

const showSearchList = computed(() => !!(props.searchable && state.searchValue));

const computedItemsList = computed(() => {
  const valuesSet = new Set(props.values);

  return props.items.map((item) => (valuesSet.has(item.value)
    ? { ...item, checked: true }
    : { ...item, checked: false }));
});

const searchedItemsList = computed(() => {
  const lowercaseSearchValue = state.searchValue.toLowerCase();

  return computedItemsList.value.filter(({ label }) => label.toLowerCase().includes(lowercaseSearchValue));
});

const handleSearchValueUpdate = (emittedInputValue) => {
  state.searchValue = emittedInputValue.target.value;
};

const handleClearSearchValue = () => {
  state.searchValue = "";
};

</script>

<template>
  <div class="list-container">
    <div v-if="searchable">
      <input
        type="text"
        :placeholder="searchPlaceholderText"
        :value="state.searchValue"
        @input="handleSearchValueUpdate"
      >
      <button @click="handleClearSearchValue">
        Clear
      </button>
    </div>
    <ul class="list-wrapper">
      <ListItem
        v-for="item in showSearchList ? searchedItemsList : computedItemsList"
        :key="item.value"
        :item="item"
        :on-item-select="handleItemSelect"
      />
    </ul>
  </div>
</template>

<style scoped>
.list-container {
  max-width: max-content;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 8px 0px;
}
.list-wrapper {
  max-height: 100px;
  overflow: auto;
  margin-top: 8px;
}
</style>
