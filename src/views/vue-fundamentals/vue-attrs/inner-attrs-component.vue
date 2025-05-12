<script setup>
defineProps({
  testProp: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="inner">
    {{ testProp }} there!
  </div>
  <button>Click Me!</button>
</template>

<style scoped>
.inner {
  background-color: lightcoral;
  padding: 1rem;
}
</style>
