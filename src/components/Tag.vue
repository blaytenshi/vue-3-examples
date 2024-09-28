<script setup>
import { oneOf } from "vue-types";
import { COLOUR } from "../constants/colours.js";

defineProps({
  color: oneOf(Object.keys(COLOUR)),
});
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style scoped>
div {
  background-color: v-bind(color);
  width: max-content;
  padding: 0.5rem 1rem;
}
</style>
