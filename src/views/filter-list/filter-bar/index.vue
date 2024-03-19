<script setup>
import { arrayOf, func, shape, string } from "vue-types";
import Name from "../filter-tag-name/index.vue";
import Year from "../filter-tag-year/index.vue";
import Zodiac from "../filter-tag-zodiac/index.vue";
import { computed } from "vue";
import Flyout from '../../../components/Flyout.vue';

defineOptions({
  name: "FilterBar"
})

const props = defineProps({
  filterList: arrayOf(
    shape({
      type: string(),
      label: string(),
      handleDeleteTag: func(),
    })
  ),
  addFilter: func(),
})

console.log('props', props);

const modifiedFilterList = computed(() => {
  const modified = props.filterList.map(({ handleDeleteTag, ...filterProps }, index) => {
    return {
      ...filterProps,
      handleDeleteTag: () => handleDeleteTag(index),
    }
  })

  console.log('modified', modified);
  return modified;
})

const FILTER_TYPES = {
  "NAME": Name,
  "YEAR": Year,
  "ZODIAC": Zodiac,
}
</script>

<template>
  <div class="filter-bar-container">
    <div class="filter-controls">
      <Flyout>
        <button @click="addFilter('sup')">
          Add Filter
        </button>
      </Flyout>
    </div>
    <div class="filters">
      <component
        :is="FILTER_TYPES[type] ?? FILTER_TYPES.name"
        v-for="({ type, label, handleDeleteTag }, index) in modifiedFilterList"
        :key="index"
        :label="label"
        :handle-delete-tag="handleDeleteTag"
      />
    </div>
  </div>
</template>

<style scoped>
.filter-bar-container {
  display: flex;
  flex-direction: column;
}
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem;
  flex-direction: row;
}
.filter-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>