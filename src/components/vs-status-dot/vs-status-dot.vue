<script setup>
import { BUTTON_COLOURS } from "@/constants/colours.js";
import { computed } from "vue";

const props = defineProps({
  colour: {
    type: String,
    required: true,
    validator: (value) => Object.values(BUTTON_COLOURS).includes(value),
  },
});

const computedClasses = computed(() => ({
  [props.colour]: true,
}));
</script>

<template>
  <div
    :class="computedClasses"
  />
</template>

<style scoped>
div {
  border-radius: 999px;
  height: 8px;
  width: 8px;
}
.success {
  background-color: #1A8E30;
}
.primary {
  background-color: #2251BB;
}
.danger {
  background-color: #CD1E05;
}
.warning {
  background-color: #FFB700;
}
</style>
