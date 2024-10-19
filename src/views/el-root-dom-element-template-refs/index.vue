<script setup>
import RootElementOptions from "./root-element-options.vue";
import RootElementComposition from "./root-element-composition.vue";
import Container from "../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../constants/options.js";
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>this.$el in Options API and template refs</h1>
    <p>
      Below are examples on how to use this.$el and template refs. They are achieve the same thing (changing the
      background color of some elements inside their component) but they are implemented in their own respective
      Options API and Composition API methods.
    </p>
    <p>
      this.$el and $this.refs are only accessible in Options API where-as refs in general are available in both.
    </p>
    <RootElementOptions />
    <RootElementComposition />
  </Container>
</template>

<style scoped>

</style>
