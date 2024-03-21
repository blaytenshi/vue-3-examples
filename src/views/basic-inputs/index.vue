<script setup>
import { reactive } from "vue";

defineOptions({
  name: "BasicInputsExample"
})

const data = reactive({
  inputValue: "",
  radioValue: "",
  checkedBoxesValue: [],
})

const handleInput = (event) => {
  console.log('handleInput', event.target.value);
  data.inputValue = event.target.value;
}

const handleRadioInput = (event) => {
  const { name, value } = event.target;
  console.log('handleRadioInput', name, value);
  data.radioValue = value
}

const handleFillForm = () => {
  data.inputValue = "Jimmy!";
  data.radioValue = "green";
  data.checkedBoxesValue = ["apple", "banana", "blueberry"];
}

const handleCheckboxInput = (event) => {
  data.checkedBoxesValue.push(event.target.value);
}
</script>

<template>
  <h1>Basic Inputs</h1>
  <p>This example demonstrates how to build an input field without relying on the v-model syntax.</p>
  <div>
    <h2>Text Input</h2>
    <label for="personName">Person Name:</label>
    <input
      id="personName"
      name="personName"
      type="text"
      :value="data.inputValue"
      @input="handleInput"
    >
  </div>
  <div>
    <h2>Radio Input</h2>
    <input
      id="red"
      type="radio"
      name="favouriteColors"
      value="red"
      :checked="data.radioValue === 'red'"
      @change="handleRadioInput"
    >
    <label for="red">Red</label>
    <input
      id="green"
      type="radio"
      name="favouriteColors"
      value="green"
      :checked="data.radioValue === 'green'"
      @change="handleRadioInput"
    >
    <label for="green">Green</label>
    <input
      id="blue"
      type="radio"
      name="favouriteColors"
      value="blue"
      :checked="data.radioValue === 'blue'"
      @change="handleRadioInput"
    >
    <label for="blue">Blue</label>
  </div>
  <div>
    <h2>Checkboxes Input</h2>
    <input
      id="apple"
      type="checkbox"
      name="fruits"
      value="apple"
      :checked="data.checkedBoxesValue.includes('apple')"
      @change="handleCheckboxInput"
    >
    <label for="apple">Apple</label>
    <input
      id="apple"
      type="checkbox"
      name="fruits"
      value="banana"
      :checked="data.checkedBoxesValue.includes('banana')"
      @change="handleCheckboxInput"
    >
    <label for="apple">Banana</label>
    <input
      id="apple"
      type="checkbox"
      name="fruits"
      value="blueberry"
      :checked="data.checkedBoxesValue.includes('blueberry')"
      @change="handleCheckboxInput"
    >
    <label for="apple">Blueberry</label>
  </div>
  <div>
    <button @click="handleFillForm">
      Fill Form!
    </button>
  </div>
</template>

<style scoped>
div {
  margin-bottom: 2rem;
}
</style>