<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Maska Page</h1>
  </Container>
</template>

<script>
import Container from "../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../constants/options.js";

export default {
  name: "MaskaPage",
  components: { Container },
  computed: {
    CONTAINER_DIRECTIONS() {
      return CONTAINER_DIRECTIONS;
    },
  },
};
</script>
