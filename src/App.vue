<template>
  <Container>
    <MainMenu />
    <router-view />
  </Container>
</template>

<script setup>
import MainMenu from "./components/MainMenu.vue";
import Container from "./components/Container.vue";
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  scrollbar-width: thin;
  scrollbar-color: #5f5f5f #ffffff;
}

body {
  margin: 0;
  box-sizing: border-box;
}

ul {
  margin: 0;
  list-style-type: none;
  padding-inline-start: unset;
}

p {
  margin: 0;
}
</style>
