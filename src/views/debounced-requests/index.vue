<script setup>
import { reactive } from "vue";
import { getRestfulObjects } from "../../api/service-restful-api.js";
import Container from "../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../constants/options.js";

const state = reactive({
  products: [],
  requestTimerId: null,
  searchValue: "",
});

const fetchRestfulObjects = async () => {
  await getRestfulObjects();
};

const fireRequest = () => {
  console.log("fireRequest");
  if (state.requestTimerId) {
    console.log("current timeoutId", state.requestTimerId);
    clearTimeout(state.requestTimerId);
  }
  const timeoutId = setTimeout(() => {
    fetchRestfulObjects();
  }, 1000);
  console.log("newTimeoutId", timeoutId);
  state.requestTimerId = timeoutId;
};

fetchRestfulObjects();

const handleInput = (event) => {
  console.log("event", event.target.value);
  fireRequest();
};
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Debounced Requests</h1>
    <input
      type="text"
      placeholder="Search Term"
      :value="state.searchValue"
      @input="handleInput"
    >
    <button @click="fireRequest">
      Get Products!
    </button>
  </Container>
</template>

<style scoped>

</style>
