<script setup>
import Container from "../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../../constants/options.js";
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Sticky Element<h1 /></h1>
    <div class="container">
      <div class="content-element">
        <p>content element</p>
        <p>content element</p>
        <p>content element</p>
        <p>content element</p>
        <p>content element</p>
        <p>content element</p>
        <p>content element</p>
      </div>
      <div class="sticky-element">
        sticky element
      </div>
      <div class="content-element">
        <p>another content element</p>
        <p>another content element</p>
        <p>another content element</p>
        <p>another content element</p>
        <p>another content element</p>
        <p>another content element</p>
        <p>another content element</p>
      </div>
    </div>
  </Container>
</template>

<style scoped>
.container {
  height: 300px;
  background-color: peachpuff;
  overflow: auto;
}
.content-element {
  height: 300px;
  background-color: lightskyblue;
}

.sticky-element {
  top: 0px; /* this will be 0px from the top of the .container element */
  position: sticky;
  background-color: lightgreen;
}
</style>
