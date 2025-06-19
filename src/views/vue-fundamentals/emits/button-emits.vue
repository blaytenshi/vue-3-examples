<script setup lang="ts">
defineProps({
  label: { type: String, default: "Click Me!" },
});

defineEmits([
  "handle-click",
]);

const emitValue = "Button clicked in emits example!"; // This is the value that will be emitted when the button is clicked
</script>

<template>
  <button @click="$emit('handle-click', emitValue)">
    {{ label }}
  </button>
</template>

<style scoped>

</style>
