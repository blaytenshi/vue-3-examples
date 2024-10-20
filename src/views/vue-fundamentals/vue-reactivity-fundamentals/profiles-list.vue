<script setup>
import { array } from "vue-types";

defineProps({
  profilesList: array(),
});
</script>

<template>
  <p
    v-for="profile in profilesList"
    :key="profile.email"
  >
    {{ profile }}
  </p>
</template>

<style scoped>
</style>