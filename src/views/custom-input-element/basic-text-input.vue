<script setup>
import { string } from "vue-types";

defineProps({
  label: string(),
  name: string(),
  modelValue: string(),
});
</script>

<template>
  <label :for="name">{{ label }}</label>
  <input
    :name="name"
    type="text"
    :value="modelValue"
  >
</template>
