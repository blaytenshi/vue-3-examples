<script setup>
import { object } from "vue-types";

defineProps({
  items: object(),
});
</script>

<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.id"
    >
      <slot :item="item" />
    </li>
  </ul>
</template>

<style scoped>

</style>
