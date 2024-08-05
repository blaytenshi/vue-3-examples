<script setup>
const model = defineModel({
  default: 0,
});

const update = () => {
  model.value++;
};
</script>

<template>
  <div>Parent bound v-model is: {{ model }}</div>
  <button @click="update">
    Increment
  </button>
</template>

<style scoped>

</style>
