<script setup lang="ts">
defineProps({
  label: { type: String, default: "Click Me!" },
  handleClick: {
    type: Function,
    required: true,
  },
});

const emitValue = "Button clicked in prop function example!"; // This is the value that will be emitted when the button is clicked
</script>

<template>
  <button @click="handleClick(emitValue)">
    {{ label }}
  </button>
</template>

<style scoped>

</style>
