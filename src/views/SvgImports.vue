<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>SVG Imports</h1>
    <Icon name="bananas" />
  </Container>
</template>

<script>
import Icon from "../components/Icon.vue";
import Container from "../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../constants/options.js";

export default {
  name: "SvgImports",
  components: {
    Container,
    Icon,
  },
  computed: {
    CONTAINER_DIRECTIONS() {
      return CONTAINER_DIRECTIONS;
    },
  },
};
</script>
