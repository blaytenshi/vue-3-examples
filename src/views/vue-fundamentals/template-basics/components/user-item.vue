<script setup>
import { number, shape, string } from "vue-types";

defineProps({
  user: shape({
    id: number(),
    initials: string(),
    name: string(),
  }),
});
</script>

<template>
  <div class="user-item-wrapper">
    <div class="initials">
      {{ user.initials }}
    </div>
    <div class="name">
      {{ user.name }}
    </div>
  </div>
</template>

<style scoped>
.user-item-wrapper {
  padding: 5px;
  display: flex;
  flex-direction: row;
  gap: 5px;
}
.initials {
  border-radius: 999px;
  padding: 5px;
  font-size: 14px;
  background-color: dodgerblue;
}
</style>
