<script setup>
import {reactive} from "vue";

defineOptions({
  name: "BasicInputsExample"
})

const data = reactive({
  inputValue: ""
})

const handleInput = (event) => {
  console.log(event.target.value);
  data.inputValue = event.target.value;
}

const handleClick = () => {
  data.inputValue = "Hello!"
}
</script>

<template>
  <h1>Basic Inputs</h1>
  <p>This example demonstrates how to build an input field without relying on the v-model syntax.</p>
  <input
    :value="data.inputValue"
    @input="handleInput"
  >
  <button @click="handleClick">
    Change Input to "Hello!"
  </button>
</template>

<style scoped>
</style>