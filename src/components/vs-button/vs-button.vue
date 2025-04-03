<script setup>
import { computed } from "vue";
import { BUTTON_COLOURS } from "@/constants/colours.js";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    default: "blue",
    validator: (value) => Object.values(BUTTON_COLOURS).includes(value),
  },
});

console.log("props", props);

const computedClasses = computed(() => ({
  success: props.colour === BUTTON_COLOURS.SUCCESS,
  primary: props.colour === BUTTON_COLOURS.PRIMARY,
  danger: props.colour === BUTTON_COLOURS.DANGER,
  warning: props.colour === BUTTON_COLOURS.WARNING,
}));
</script>

<template>
  <button :class="computedClasses">
    {{ label }}
  </button>
</template>

<style scoped>
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
