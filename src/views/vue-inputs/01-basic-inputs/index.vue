<script setup>
import { reactive } from "vue";
import Container from "../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../../constants/options.js";

defineOptions({
  name: "BasicInputsExample",
});

const data = reactive({
  inputValue: "",
  radioValue: "",
  checkedBoxesValue: [],
  selectedValue: "",
});

const handleInput = (event) => {
  console.log("handleInput", event.target.value);
  data.inputValue = event.target.value;
};

const handleRadioInput = (event) => {
  const { name, value } = event.target;
  console.log("handleRadioInput", name, value);
  data.radioValue = value;
};

const handleCheckboxInput = (event) => {
  const hasEmittedValue = data.checkedBoxesValue.includes(event.target.value);
  if (hasEmittedValue) {
    data.checkedBoxesValue = data.checkedBoxesValue.filter(checkboxValue => checkboxValue !== event.target.value);
  } else {
    data.checkedBoxesValue.push(event.target.value);
  }
  console.log(data.checkedBoxesValue);
};

const handleSelectInput = (event) => {
  console.log("select", event.target.value);
  data.selectedValue = event.target.value;
};

const handleFillForm = () => {
  data.inputValue = "Jimmy!";
  data.radioValue = "green";
  data.checkedBoxesValue = ["apple", "banana", "blueberry"];
  data.selectedValue = "B";
};
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Basic Inputs using value and handling functions</h1>
    <p>This example demonstrates how to build an input field without relying on the v-model syntax or emits syntax.</p>
    <p>
      We directly bind the value and the @input event (or in some cases the checked and the @change event) directly
      to a value prop and a handling function.
    </p>
    <p>This is a very ReactJS approach to controlling the inputs values (sometimes known as Controlled components in React).</p>
    <p>
      If you compare this to the basic-inputs-vmodel examples further on, you will be able to see how the v-model
      directive replaces the value prop and the handling function.
    </p>
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
        id="banana"
        type="checkbox"
        name="fruits"
        value="banana"
        :checked="data.checkedBoxesValue.includes('banana')"
        @change="handleCheckboxInput"
      >
      <label for="banana">Banana</label>
      <input
        id="blueberry"
        type="checkbox"
        name="fruits"
        value="blueberry"
        :checked="data.checkedBoxesValue.includes('blueberry')"
        @change="handleCheckboxInput"
      >
      <label for="blueberry">Blueberry</label>
    </div>
    <div>
      <h2>Select Input</h2>
      <select
        :value="data.selectedValue"
        @change="handleSelectInput"
      >
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
    <div>
      <button @click="handleFillForm">
        Fill Form!
      </button>
    </div>
  </Container>
</template>

<style scoped>
div {
  margin-bottom: 2rem;
}
</style>
