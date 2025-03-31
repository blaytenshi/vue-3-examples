<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    default: "blue",
  },
});

const computedStyle = computed(() => ({
  backgroundColor: props.colour,
  color: "white",
}));
</script>

<template>
  <button :style="computedStyle">
    {{ label }}
  </button>
</template>

<style scoped>

</style>
