<script setup>
import Popper from "./Popper.vue";
import Container from "../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../../constants/options.js";

</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <Popper />
  </Container>
</template>

<style scoped>

</style>
