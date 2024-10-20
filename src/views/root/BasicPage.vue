<script>
import Container from "../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../constants/options.js";

export default {
  components: {
    Container,
  },
  data() {
    return {
      message: "Hello World!",
    };
  },
  computed: {
    CONTAINER_DIRECTIONS() {
      return CONTAINER_DIRECTIONS;
    },
  },
};
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>{{ message }}</h1>
  </Container>
</template>
