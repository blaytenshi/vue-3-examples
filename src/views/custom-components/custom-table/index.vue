<script setup>
import Container from "@/components/Container.vue";
import { reactive } from "vue";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";
import VsTable from "@/components/vs-table/vs-table.vue";
import VsTableHeaderData from "@/components/vs-table-header-data/vs-table-header-data.vue";
import VsTableBodyData from "@/components/vs-table-body-data/vs-table-body-data.vue";
import VsTableRow from "@/components/vs-table-row/vs-table-row.vue";

const state = reactive({
  tableData: [
    { id: 1, name: "Corn Flakes", category: "cereal" },
    { id: 2, name: "A2 milk", category: "dairy" },
    { id: 3, name: "Yopro", category: "dairy" },
    { id: 4, name: "Tomato Sauce", category: "sauces" },
  ],
});
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Custom Table</h1>
    <p>This is displaying our vs-table component</p>
    <vs-table
      :table-data="state.tableData"
    >
      <template #table-head>
        <vs-table-header-data title="Product Name" />
        <vs-table-header-data title="Product Category" />
      </template>
      <template #table-body="{ tableData }">
        <vs-table-row
          v-for="row in tableData"
          :key="row.id"
        >
          <vs-table-body-data variant="status">
            {{ row.name }}
          </vs-table-body-data>
          <vs-table-body-data>
            {{ row.category }}
          </vs-table-body-data>
        </vs-table-row>
      </template>
    </vs-table>
  </Container>
</template>

<style scoped>

</style>
