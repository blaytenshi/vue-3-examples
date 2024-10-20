<script setup>
import Container from "./Container.vue";
import { CONTAINER_DIRECTIONS, ROUTE_CATEGORY, ROUTE_CATEGORY_OPTIONS } from "../constants/options.js";

import routes from "../router/routes.js";

console.log("routes", routes.filter(route => route.category === ROUTE_CATEGORY.FUNDAMENTALS));

</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h2>Examples Menu</h2>
    <section
      v-for="category in Object.values(ROUTE_CATEGORY)"
      :key="category"
    >
      <h3>{{ ROUTE_CATEGORY_OPTIONS[category] }}</h3>
      <ul>
        <router-link
          v-for="{ name, path, displayName } in routes.filter(route => route.category === category)"
          :key="name"
          :to="{ path }"
        >
          <li>{{ displayName }}</li>
        </router-link>
      </ul>
    </section>
  </Container>
</template>

<style scoped>
ul {
  width: 250px;
}

li {
  padding: 5px 5px;
}
</style>
