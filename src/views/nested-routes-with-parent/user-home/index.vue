<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const { userName } = route.params;
</script>

<template>
  <h1>User Home {{ userName }}</h1>
  <p>This is the User's home page component. Each of the links below take you to yet another child route of '/nested-routes-with-parent/users'</p>
  <p>Hover over the links to see the routes they will take you to.</p>
  <ul>
    <li>
      <RouterLink :to="`${userName}/posts`">
        Posts
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="`${userName}/address`">
        Address
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>

</style>
