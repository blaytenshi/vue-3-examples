<script setup>
import routes from "../router/routes.js";
import Container from "./Container.vue";
import { CONTAINER_DIRECTIONS } from "../constants/options.js";
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h2>Examples Menu</h2>
    <ul>
      <router-link
        v-for="{ name, path, displayName } in routes"
        :key="name"
        :to="{ path }"
      >
        <li>{{ displayName }}</li>
      </router-link>
    </ul>
  </Container>
</template>

<style scoped>
ul {
  width: 200px;
}

li {
  padding: 5px 5px;
}
</style>
