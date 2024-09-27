<script setup>
import { oneOf } from "vue-types";
import { COLOUR } from "../constants/colours.js";

defineProps({
  color: oneOf(Object.keys(COLOUR)),
});
</script>

<template>
  <div class="">
    <slot />
  </div>
</template>

<style scoped>

</style>
