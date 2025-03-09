<script setup>
import { arrayOf, shape, string } from "vue-types";

defineProps({
  list: arrayOf(shape({
    id: string(),
    label: string(),
  })).def([]),
  secondaryPropSlot: string(),
});
</script>

<template>
  <div
    v-for="{ id, label } in list"
    :key="id"
  >
    {{ secondaryPropSlot + label }}
  </div>
</template>

<style scoped>

</style>
