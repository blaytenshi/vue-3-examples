<script setup>

import Child from "./Child.vue";
import { reactive } from "vue";
import Container from "../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../constants/options.js";

const state = reactive({
  countModel: 0,
});

console.log("CONTAINER_DIRECTIONS", CONTAINER_DIRECTIONS);
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Component VModel with defineModel in Vue 3.4+</h1>
    <p>
      Now with the defineModel() function that is placed inside of the Child component, you no longer have to even
      specify a handling function outside in the parent. Instead, you can put that function inside the Child, keeping all
      the logic inside and grouped together with the Child component.
    </p>
    <Child v-model="state.countModel" />
  </Container>
</template>

<style scoped>

</style>
