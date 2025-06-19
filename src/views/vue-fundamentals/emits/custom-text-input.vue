<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: "Input Text Label",
  },
});
</script>

<template>
  <div>
    <label for="custom-input">{{ label }}</label>
    <input
      id="custom-input"
      v-model="inputValue"
      type="text"
      @input="emitInput"
    >
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>
