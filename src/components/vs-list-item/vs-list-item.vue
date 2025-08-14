<script setup lang="ts">
defineProps({
  value: {
    type: [String, Number, Boolean],
    required: true,
  },
  label: {
    type: String,
    default: "Item Label",
  },
  options: {
    type: Object,
  },
});

defineEmits([
  "handleClick",
]);
</script>

<template>
  <div @click="$emit('handleClick', value)">
    <span class="vs-list-item-label">{{ label }}</span>
  </div>
</template>

<style scoped>

</style>
