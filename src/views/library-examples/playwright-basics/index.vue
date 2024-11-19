<script setup>
import { CONTAINER_DIRECTIONS } from "../../../constants/options.js";

const handleClick = () => {
  console.log("Hello!");
};
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Playwright Testing</h1>
    <p>My Own Paragraph</p>
    <button @click="handleClick">
      Click this!
    </button>
  </Container>
</template>
