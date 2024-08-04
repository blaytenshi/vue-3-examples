<script setup>

import Child from "./Child.vue";
</script>

<template>
  <h1>Component VModel with defineModel in Vue 3.4+</h1>
  <Child v-model="countModel" />
</template>

<style scoped>

</style>
