<script setup>
import { fetchPaginatedItems } from "../../api/index.js";
import { reactive } from "vue";
import GenericTable from "./generic-table/index.vue";
import { getTableProperties } from "../../utils/get-table-properties.js";
import Container from "../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../constants/options.js";

const state = reactive({
  tableData: [],
  paginationData: {
    page: 0,
    pageSize: 0,
    totalResults: 0,
  },
});

const { caption, columnData } = getTableProperties("products");

const getPaginatedProducts = async () => {
  const { results, page, pageSize, totalResults } = await fetchPaginatedItems("products", 0, 10);
  console.log("results", results);

  state.tableData = results;
  state.paginationData = {
    page,
    pageSize,
    totalResults,
  };
};

getPaginatedProducts();
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Paginated Table</h1>
    <div class="pseudo-layout-container">
      <div class="container">
        <GenericTable
          :table-header="columnData"
          :table-data="state.tableData"
          :pagination="state.paginationData"
          :caption="caption"
        />
        <div>Page: {{ state.paginationData.page }}</div>
        <div>Page Size: {{ state.paginationData.pageSize }}</div>
        <div>Total Rows: {{ state.paginationData.totalResults }}</div>
      </div>
    </div>
  </container>
</template>

<style scoped>
.pseudo-layout-container { /* this to emulate a layout wrapper that spans full width of the 'section' */
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
.container {
  overflow: auto;
  min-width: 720px;
  width: 100%;
  max-width: 980px;
  height: 300px;
}

</style>
