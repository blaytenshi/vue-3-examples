<script setup>
import { string, bool } from "vue-types";

defineProps({
  inputValue: string(),
  label: string(),
  inputName: string(),
  isRequired: bool(),
});

defineEmits([
  "handleInput",
]);
</script>

<template>
  <label :for="inputName">{{ label }}</label>
  <span v-if="isRequired">*</span>
  <input
    type="text"
    :value="inputValue"
    @input="$emit('handleInput', $event.target.value)"
  >
</template>

<style scoped>
  span {
    color: red;
  }
</style>
