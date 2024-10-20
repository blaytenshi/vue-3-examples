<script setup>
import { bool, number, shape, string } from "vue-types";

defineProps({
  item: shape({
    id: number(),
    done: bool(),
    itemName: string(),
  }),
});
</script>

<template>
  <div class="shopping-item-wrapper">
    <input
      type="checkbox"
      :checked="item.done"
    >
    <div>{{ item.itemName }}</div>
  </div>
</template>

<style scoped>
.shopping-item-wrapper {
  padding: 5px;
  display: flex;
  flex-direction: row;
  gap: 5px;
}
</style>
