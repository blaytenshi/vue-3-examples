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

const computedClasses = computed(() => ({
  success: props.colour === BUTTON_COLOURS.SUCCESS,
  primary: props.colour === BUTTON_COLOURS.PRIMARY,
  danger: props.colour === BUTTON_COLOURS.DANGER,
  warning: props.colour === BUTTON_COLOURS.WARNING,
  medium: true,
}));
</script>

<template>
  <button :class="computedClasses">
    {{ label }}
  </button>
</template>

<style scoped>
button {
  box-sizing: border-box;
}
button:hover {
  cursor: pointer;
}
.medium {
  padding: 8px 16px;
  font-size: 16px;
}
.success {
  background-color: #1A8E30;
  color: white;
}
.primary {
  background-color: var(--ds-primary-500);
  color: white;
}
.primary:hover {
  background-color: #0089F2;
  color: white;
}
.primary:active {
  background-color: #005CA2;
}
.danger {
  background-color: #BD0500;
  color: white;
}
.danger:hover {
  background-color: #F20800;
  color: white;
}
.danger:active {
  background-color: #870400;
}
.warning {
  background-color: #FFB700;
}
</style>
