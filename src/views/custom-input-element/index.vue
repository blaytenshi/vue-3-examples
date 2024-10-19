<script setup>
import BasicTextInput from "./basic-text-input.vue";
import { reactive } from "vue";
import Container from "../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../constants/options.js";

const data = reactive({
  email: "",
});
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <BasicTextInput
      v-model="data.email"
      label="Email"
      name="email"
    />
  </Container>
</template>

<style scoped>

</style>
