<script setup>
import { array } from "vue-types";

defineProps({
  userList: array(),
});
</script>

<template>
  <ul>
    <li
      v-for="user in userList"
      :key="user.label"
    >
      {{ user.label }}
    </li>
  </ul>
</template>

<style scoped>

</style>