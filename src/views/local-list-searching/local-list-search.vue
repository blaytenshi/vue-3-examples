<script setup>
import { array, func, string } from 'vue-types';
import UserList from "./user-list.vue";

defineProps({
  searchValue: string(),
  userList: array(),
  onSearchChange: func(),
})

</script>

<template>
  <label for="nameSearch">Name Search</label>
  <input
      v-bind="{
      id: 'nameSearch',
      name: 'nameSearch',
      type: 'text',
    }"
      @input="onSearchChange"
  >
  <p>Search Value: {{ searchValue }}</p>
  <UserList :user-list="userList"/>
</template>

<style scoped>

</style>