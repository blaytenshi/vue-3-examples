<script setup>
import { useRoute, useRouter } from "vue-router";
import { reactive } from "vue";

const route = useRoute();
const router = useRouter();

console.log(route.query);

const filterState = reactive({
  count: +route.query.count || 0, // unary operator
  userName: route.query.user_name,
  colours: route.query.colours || [],
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
  const hasEmittedValue = filterState.colours.includes(event.target.value);
  if (hasEmittedValue) {
    filterState.colours = filterState.colours.filter(checkboxValue => checkboxValue !== event.target.value);
  } else {
    filterState.colours.push(event.target.value);
  }
  console.log(filterState.colours);
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
  // UI doesn't update when we try to nagivate...
  router.push({
    path: "/query-params",
    query: {
      colours: ["blue", "red"],
    },
  });
}
</script>

<template>
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
</template>
