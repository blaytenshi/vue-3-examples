<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "text",
    validator: (value) => ["text", "subtitle"].includes(value),
  },
  bold: {
    type: Boolean,
    default: false,
  },
  emphasis: {
    type: Boolean,
    default: false,
  },
});

const computedClasses = computed(() => ({
  bold: props.bold === true,
  emphasis: props.emphasis === true,
}));
</script>

<template>
  <p :class="computedClasses">
    <slot />
  </p>
</template>

<style scoped>
p {
  padding: 8px;
}
.emphasis {
  font-style: italic;
}
.bold {
  font-weight: bold;
}
</style>
