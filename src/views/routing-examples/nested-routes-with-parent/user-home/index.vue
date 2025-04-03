<script setup>
import { useRoute } from "vue-router";
import Container from "@/components/Container.vue";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";

const route = useRoute();

const { username } = route.params;
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <p>This is the {{ username }}'s home page component. Each of the links below take you to yet another child route of '/nested-routes-with-parent/users'</p>
    <p>Hover over the links to see the routes they will take you to.</p>
  </Container>
</template>

<style scoped>

</style>
