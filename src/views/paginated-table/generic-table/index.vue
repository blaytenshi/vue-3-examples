<script setup>
import { array, number, object, shape, string } from "vue-types";
import TableHead from "./table-head.vue";
import TableBody from "./table-body.vue";

defineProps({
  caption: string(),
  tableHeader: array(),
  tableData: object(),
  pagination: shape({
    page: number(),
    pageSize: number(),
    totalResults: number(),
  }),
});
</script>

<template>
  <table>
    <caption v-if="caption">
      {{ caption }}
    </caption>
    <TableHead
      :table-header="tableHeader"
    />
    <TableBody
      :table-data="tableData"
    />
  </table>
</template>

<style scoped>
table {
  width: 100%;
  /* border: 1px solid black; /* overridden by collapsed borders of the table */
  border-collapse: collapse;
}
caption {
  caption-side: bottom;
  padding-top: 10px;
}
</style>
