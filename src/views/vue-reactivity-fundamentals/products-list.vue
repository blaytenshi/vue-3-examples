<script setup>
import { array } from "vue-types";

defineProps({
  productsList: array(),
});
</script>

<template>
  <p
    v-for="product in productsList"
    :key="product.id"
  >
    {{ product }}
  </p>
</template>

<style scoped>
</style>