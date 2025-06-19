<script setup>
defineProps({
  item: { type: Object, required: true },
  // label: string().isRequired,
  // value: string().isRequired,
  // checked: bool().isRequired,
  showChecked: { type: Boolean, default: false },
});

defineEmits([
  "onItemSelect",
]);
</script>

<template>
  <li
    class="list-item-wrapper"
    @click="$emit('onItemSelect', item.value)"
  >
    <div
      v-if="showChecked"
      class="checked-status-wrapper"
    >
      <span v-if="item.checked">✅</span>
      <span v-else>️⬜️</span>
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
  height: 2rem;
  align-items: center;
  padding: 0 1rem;
}

.list-item-wrapper:hover {
  background-color: powderblue;
  cursor: pointer;
}

.checked-status-wrapper {
  height: 2rem;
  padding-right: 0.5rem;
  display: flex;
  align-items: center;
}
</style>
