<script setup>
import { bool, func, shape, string } from "vue-types";

defineProps({
  item: shape({
    label: string().isRequired,
    value: string().isRequired,
    checked: bool().isRequired,
  }),
  onItemSelect: func(),
});

</script>

<template>
  <li
    class="list-item-wrapper"
    @click="() => onItemSelect(item.value)"
  >
    <div class="checked-status-wrapper">
      <span v-if="item.checked">✅</span>
    </div>
    <p>
      {{ item.label }}
    </p>
  </li>
</template>

<style scoped>
.list-item-wrapper {
  display: flex;
  flex-direction: row;
  gap: 4px;
  cursor: pointer;
}
.list-item-wrapper:hover {
  background-color: powderblue;
}

.checked-status-wrapper {
  width: 16px;
}
</style>
