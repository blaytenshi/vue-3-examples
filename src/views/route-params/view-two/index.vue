<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Route Params View Two</h1>
    <p>You've arrived at Route Params View Two!</p>
    <p>The MyVariable value is: {{ $route.params.myVariable }}</p>
    <p>The car variable value is: {{ $route.params.car }}</p>
    <p>Route bound props from route params: {{ props.myVariable }}</p>
    <p>Route bound props from query params: {{ props.name }}</p>
  </Container>
</template>

<script setup>
import { string, object } from "vue-types";
import Container from "../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../../constants/options.js";

const props = defineProps({
  myVariable: string().def("default myValue"),
  name: string().def("default name"),
  car: object(), // won't be a string, this will throw a warning
});

console.log("car variable", typeof props.car); // can't put an object into the route params, it'll just get stringified
</script>
