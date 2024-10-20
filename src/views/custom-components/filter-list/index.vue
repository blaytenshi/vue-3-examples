<script setup>
import FilterBar from "./filter-bar/index.vue";
import { reactive } from "vue";
import Container from "../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../../constants/options.js";
// import excludeIndexFromArray from "../../utils/exclude-index-from-array.js";

const handleDeleteTag = (index) => {
  console.log(index);

  filterList.splice(index, 1);
};

const addFilter = (value) => {
  console.log(`val ${value}`);

  filterList.push({
    type: "NAME",
    label: "Name",
    handleDeleteTag,
  });
};

const filterList = reactive([
  {
    type: "NAME",
    label: "Name",
    handleDeleteTag,
  },
  {
    type: "YEAR",
    label: "Year",
    handleDeleteTag,
  },
  {
    type: "ZODIAC",
    label: "Zodiac",
    handleDeleteTag,
  },
]);

</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Filter Bar Example</h1>
    <p>Here we can add and remove elements from a list to be rendered</p>
    <FilterBar
      :filter-list="filterList"
      :add-filter="addFilter"
    />
  </Container>
</template>

<style scoped>

</style>
