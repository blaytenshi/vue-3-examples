<script setup>
import { reactive } from "vue";
import { getRestfulObjects } from "../../api/service-restful-api.js";

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
</template>

<style scoped>

</style>
