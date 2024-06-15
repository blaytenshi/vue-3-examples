<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.params);
// should see the 'pathMatch' property here which will be an array of the path that doesn't match, eg:
// /no-matching-path/user/abcde12345 gives:
// [ "no-matching-path", "user", "abcde12345" ]
const mismatchedPath = route.params.pathMatch.join("/");
</script>

<template>
  <h1>Whoops! Page Not Found</h1>
  <p>Can't find the page you're looking for!</p>
  <p>Mismatched Path: {{ mismatchedPath }}</p>
  <p>
    This page matches any url that does not have a route specified in the route list. The route will also put the
    unmatched values into route.params so you can log it out.
  </p>
</template>

<style scoped>
</style>
