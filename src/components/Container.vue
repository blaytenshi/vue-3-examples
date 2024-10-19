<script setup>
import { oneOf } from "vue-types";
import { CONTAINER_DIRECTIONS } from "../constants/options.js";

const props = defineProps({
  direction: oneOf(Object.values(CONTAINER_DIRECTIONS)).def(CONTAINER_DIRECTIONS.ROW),
});
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: v-bind('props.direction');
}
</style>
