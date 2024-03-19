<script setup>
import { func } from "vue-types";

defineOptions({
  name: "CloseButton",
})

defineProps({
  handleClose: func(),
})
</script>

<template>
  <button @click="handleClose">
    x
  </button>
</template>

<style scoped>
button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0.25rem;
  border: 0;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
}
button:hover {
  background-color: #e5e5e5;
}
</style>