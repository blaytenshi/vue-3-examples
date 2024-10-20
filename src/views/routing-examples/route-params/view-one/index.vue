<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Route Params View One</h1>
    <p>How does route params work?</p>
    <ul>
      <li>You must have a matching route param defined in route's path in order for the params to work</li>
      <li>You cannot put an object into route params. It will just get turned into a string of "[Object object]"</li>
      <li>You can bind the route and query params to the props of the component being rendered for that route to decouple the route and component</li>
      <li>You can probably recurse through all query param values and put them into props (see src/router/index.js) but you should be explicit about which query param get set to which prop for security reasons (no unexpected query params)</li>
    </ul>
    <RouterLink
      :to="{ name: 'RouteParamsViewTwo', params: { myVariable: 'myValue', car: { doors: 4 } }, query: { name: 'Jimmy' } }"
    >
      To Route Params View Two!
    </RouterLink>
  </Container>
</template>

<script setup>
import Container from "../../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../../../constants/options.js";
</script>
