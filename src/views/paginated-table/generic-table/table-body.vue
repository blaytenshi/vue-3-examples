<script setup>
import { object } from "vue-types";

const props = defineProps({
  tableData: object(),
});

</script>

<template>
  <tbody>
    <tr v-for="tableRow in tableData">
      <td v-for="value in Object.values(tableRow)">
        {{ value }}
      </td>
    </tr>
  </tbody>
</template>

<style scoped>
tr {
  height: 40px;
}
td {
  /* border: 1px solid darkred; */
  padding: 10px 12px;
}

tr:nth-child(even) {
  background-color: #ffdfe1;
}
</style>
