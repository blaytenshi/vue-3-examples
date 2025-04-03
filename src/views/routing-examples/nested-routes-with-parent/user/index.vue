<script setup>
import { useRoute } from "vue-router";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";
import Container from "@/components/Container.vue";

const route = useRoute();

const { username } = route.params;
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>
      User {{ username }}
    </h1>
    <Container>
      <ul>
        <li>
          <RouterLink :to="{ name: 'NestedRoutesWithParentUserHome' }">
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'NestedRoutesWithParentUserPosts' }">
            Posts
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'NestedRoutesWithParentUserAddress' }">
            Address
          </RouterLink>
        </li>
      </ul>
      <div>
        <p>Below this is the router-view!</p>
        <router-view />
      </div>
    </Container>
  </Container>
</template>

<style scoped>

</style>
