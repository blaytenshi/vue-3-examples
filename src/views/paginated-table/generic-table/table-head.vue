<script setup>
import { array } from "vue-types";

defineProps({
  tableHeader: array(),
});
</script>

<template>
  <thead>
    <tr>
      <th v-for="{ title } in tableHeader">
        {{ title }}
      </th>
    </tr>
  </thead>
</template>

<style scoped>
th {
  /* border: 1px solid darkred; */
  background-color: darkred;
  color: whitesmoke;
  position: sticky;
  top: 0;
  height: 40px;
  text-align: left;
  padding: 10px 12px
}

th:first-child {
  border-top-left-radius: 10px;
}

th:last-child {
  border-top-right-radius: 10px;
}
</style>
