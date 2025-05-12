<script setup>
import InnerAttrsComponent from "./inner-attrs-component.vue";
</script>

<template>
  <inner-attrs-component class="outter" />
</template>

<style scoped>
.outter {
  background-color: cornflowerblue;
  color: white;
  padding: 1rem;
}
</style>
