<script setup>
import { arrayOf, func, shape, string } from "vue-types";
import { noop } from "lodash";

defineProps({
  list: arrayOf(shape({
    id: string(),
    label: string(),
  })).def([]),
  handleOnClick: func().def(noop),
  passedSlotProp: string(),
});
</script>

<template>
  <div
    v-for="{ id, label } in list"
    :key="id"
    @click="() => handleOnClick(id)"
  >
    {{ passedSlotProp + label }}
  </div>
</template>

<style scoped>

</style>
