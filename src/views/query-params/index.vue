<script setup>
import { useRoute, useRouter } from "vue-router";
import { reactive } from "vue";
import Container from "../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../constants/options.js";

const route = useRoute();
const router = useRouter();

const filterState = reactive({
  count: +route.query.count ?? 0, // unary operator
  userName: route.query.user_name,
  colours: route.query.colours ?? [],
});

function handleCountUpdate() {
  const nextValue = filterState.count + 1;
  filterState.count = nextValue;
  updateQueryParams("count", nextValue);
}

function handleUserNameUpdate(event) {
  const updatedUserName = event.target.value;
  filterState.userName = updatedUserName;
  updateQueryParams("user_name", updatedUserName);
}

function handleColorChange(event) {
  const { value: colour } = event.target;

  const hasEmittedValue = filterState.colours.includes(colour);
  if (hasEmittedValue) {
    filterState.colours = filterState.colours.filter(checkboxValue => checkboxValue !== colour);
  } else {
    // this needs a new array and not a simple push() because reactive() does not detect
    // changes in the array but can detect whole new value assignment
    filterState.colours = [ ...filterState.colours, colour ];
  }
  updateQueryParams("colours", filterState.colours);
}

function updateQueryParams(queryParam, updatedValue) {
  router.push({
    query: {
      ...route.query,
      [queryParam]: updatedValue,
    },
  });
}

function navigate() {
  const myObject = {
    hello: "2ae8b54a-6dcc-42bb-9b6a-ec0480e80dfa",
  };
  // UI doesn't update when we try to nagivate...
  router.push({
    path: "/query-params",
    query: {
      colours: ["blue", "red"],
      myObject,
    },
  });
}
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <button @click="handleCountUpdate">
      ParamCount: {{ $route.query.count }}
    </button>
    <input
      :value="filterState.userName"
      type="text"
      @input="handleUserNameUpdate"
    >
    <div>
      <h1>Colours</h1>
      <input
        id="red"
        type="checkbox"
        name="colours"
        value="red"
        :checked="filterState.colours.includes('red')"
        @change="handleColorChange"
      >
      <label for="red">Red</label>
      <input
        id="blue"
        type="checkbox"
        name="colours"
        value="blue"
        :checked="filterState.colours.includes('blue')"
        @change="handleColorChange"
      >
      <label for="blue">Blue</label>
      <input
        id="green"
        type="checkbox"
        name="colours"
        value="green"
        :checked="filterState.colours.includes('green')"
        @change="handleColorChange"
      >
      <label for="green">Green</label>
    </div>
    <button @click="navigate">
      Add Colours Array to Query Params
    </button>
  </container>
</template>
