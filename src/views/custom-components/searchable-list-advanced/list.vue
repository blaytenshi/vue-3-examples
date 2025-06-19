<script setup>
import ListItem from "./list-item.vue";
import { computed, reactive } from "vue";
import { LIST_COMPONENT_MODES } from "@/constants/options.js";

const props = defineProps({
  items: { type: Array, required: true },
  // label: string(),
  // value: string(),
  values: { type: Array, required: true },
  searchable: { type: Boolean, default: true },
  searchPlaceholderText: { type: String, default: "Search..." },
  maxItemsShown: { type: Number, default: 20 },
  mode: { type: String, default: LIST_COMPONENT_MODES.SINGLE_SELECT },
});

const emit = defineEmits([
  "handleListItemSelect",
]);

const state = reactive({
  searchValue: "",
  selectAll: false,
});

const filteredList = computed(() => {
  if (props.searchable && state.searchValue.length >= 2) {
    const lowercaseSearchValue = state.searchValue.toLowerCase();
    return props.items.filter(({ label }) => label.toLowerCase().includes(lowercaseSearchValue));
  }

  return props.items;
});

const checkedFilteredList = computed(() => filteredList.value.filter((item) => props.values.includes(item.value)).map((item) => ({
  ...item,
  checked: true,
})));

const uncheckedFilteredList = computed(() => {
  const untruncated = filteredList.value.filter((item) => !props.values.includes(item.value)).map((item) => ({
    ...item,
    checked: false,
  }));

  if (props.searchable) {
    return untruncated.slice(0, 20);
  }
  return untruncated;
});

const singleList = computed(() => {
  if (props.searchable) {
    return filteredList.value.slice(0, 20);
  }
  return filteredList.value;
});

const handleItemSelect = (emittedItemValue) => {
  if (props.mode === LIST_COMPONENT_MODES.SINGLE_SELECT) {
    return emit("handleListItemSelect", [emittedItemValue]);
  }

  if (props.values.includes(emittedItemValue)) {
    return emit("handleListItemSelect", props.values.filter(values => values !== emittedItemValue));
  }

  return emit("handleListItemSelect", [...props.values, emittedItemValue]);
};

const handleSearchValueUpdate = (emittedInputValue) => {
  state.searchValue = emittedInputValue.target.value;
};

const handleClearSearchValue = () => {
  state.searchValue = "";
};

const handleSelectAll = () => {
  if (state.selectAll) {
    state.selectAll = false;
    return emit("handleListItemSelect", []);
  }

  state.selectAll = true;
  const valuesToAdd = filteredList.value.map(item => item.value);
  return emit("handleListItemSelect", valuesToAdd);
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
    <div v-if="mode === LIST_COMPONENT_MODES.MULTI_SELECT">
      <button @click="handleSelectAll">
        {{ state.selectAll ? 'Unselect' : 'Select' }} All ({{ items.length }})
      </button>
    </div>
    <ul
      v-if="mode === LIST_COMPONENT_MODES.MULTI_SELECT"
      class="list-wrapper"
    >
      <!-- Checked Items List -->
      <ListItem
        v-for="item in checkedFilteredList"
        :key="item.value"
        :item="item"
        :show-checked="true"
        @on-item-select="handleItemSelect"
      />
      <hr v-if="checkedFilteredList.length">
      <!-- Unchecked Items List -->
      <ListItem
        v-for="item in uncheckedFilteredList"
        :key="item.value"
        :item="item"
        :show-checked="true"
        @on-item-select="handleItemSelect"
      />
    </ul>
    <ul
      v-if="mode === LIST_COMPONENT_MODES.SINGLE_SELECT"
      class="list-wrapper"
    >
      <ListItem
        v-for="item in singleList"
        :key="item.value"
        :item="item"
        @on-item-select="handleItemSelect"
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
