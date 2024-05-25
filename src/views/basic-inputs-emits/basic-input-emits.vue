<script setup>
import { string } from "vue-types";

defineProps({
  inputValue: string(),
  label: string(),
  inputName: string(),
});

defineEmits([
  "handleInput",
]);
</script>

<template>
  <label :for="inputName">{{ label }}</label>
  <input
    type="text"
    :value="inputValue"
    @input="$emit('handleInput', $event.target.value)"
  >
</template>

<style scoped />
