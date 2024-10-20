<script setup>
import Container from "../../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../../../constants/options.js";
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Nested Routes with Parent Component</h1>
    <p>This is actually a nested route. The route path itself is "" (empty).</p>
    <p>The parent route that holds all the child routes actually has no component that it renders (no component property)</p>
    <p>If you click on a user below, it will take you to their home page, ie '/nested-routes-with-parent/users/:userName/</p>
    <h2>User List</h2>
    <p>List of Users</p>
    <ul>
      <li>
        <RouterLink to="users/jimmy">
          Jimmy
        </RouterLink>
      </li>
      <li>
        <RouterLink to="users/ben">
          Ben
        </RouterLink>
      </li>
      <li>
        <RouterLink to="users/shirley">
          Shirley
        </RouterLink>
      </li>
    </ul>
  </Container>
</template>

<style scoped>

</style>
