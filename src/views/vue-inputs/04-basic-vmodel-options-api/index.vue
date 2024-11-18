<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Basic v-model using Options API</h1>
    <p>
      This example also shows the use of the v-model direction on raw html input element.
    </p>
    <p>
      However the main difference with other earlier examples is that there's a button that allows you to change
      the value of the input directly (not through input) and see the v-model two-way binding working.
    </p>
    <input v-model="inputValue">
    <div>Value of `inputValue`: {{ inputValue }}</div>
    <button @click="updateData">
      Change Value
    </button>
  </Container>
</template>

<script>
import Container from "../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../../constants/options.js";

export default {
  name: "Vue3VModelNativeElementsPage",
  components: { Container },
  data() {
    return {
      inputValue: "",
    };
  },
  computed: {
    CONTAINER_DIRECTIONS() {
      return CONTAINER_DIRECTIONS;
    },
  },
  methods: {
    updateData() {
      this.inputValue = "Changed Value!";
    },
  },
};
</script>
