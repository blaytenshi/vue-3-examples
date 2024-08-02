<script setup>
import { computed } from "vue";

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

console.log("fruitlist prop", props.list);

const computedSpecialFruitList = computed(() => props.list.map(fruit => `${fruit} + 2`));
</script>

<template>
  <div
    v-for="fruit in computedSpecialFruitList"
    :key="fruit"
  >
    {{ fruit }}
  </div>
</template>

<style scoped>

</style>
