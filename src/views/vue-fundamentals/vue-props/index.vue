<script setup>
import MyComponentA from "@/views/vue-fundamentals/vue-props/my-component-a.vue";
</script>

<template>
  <my-component-a required-prop="Required!" />
  <my-component-a
    required-prop="Required!"
    non-required-prop
  />
</template>

<style scoped>

</style>
