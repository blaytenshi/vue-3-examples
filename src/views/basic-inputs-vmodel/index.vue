<script setup>
import { ref } from "vue";

const inputValue = ref("hello");
const checkedNames = ref([]);
const picked = ref();
const selected = ref();
const multiSelected = ref([]);

</script>

<template>
  <h1>Basic Input V-Model</h1>
  <p>
    Besides passing in a prop and having a handling function handle the change on the input, you can use the v-model
    directive on the html element itself.
  </p>
  <div>
    <h2>General Text or Number Input</h2>
    <p>For a general text input, you just put the v-model directive on the input html element.</p>
    <input v-model="inputValue">
  </div>
  <div>
    <h2>Checkboxes</h2>
    <p>
      For a checkbox component, in order to use vmodel, you need to first group every input that is part of the checkbox
      under a value, eg "checkedNames"
    </p>
    <input
      v-model="checkedNames"
      value="jimmy"
      type="checkbox"
    >
    <label for="jimmy">Jimmy</label>
    <input
      v-model="checkedNames"
      value="ben"
      type="checkbox"
    >
    <label for="ben">Ben</label>
    <input
      v-model="checkedNames"
      value="shirley"
      type="checkbox"
    >
    <label for="shirley">Shirley</label>
    <div>People coming to party! {{ checkedNames }}</div>
  </div>
  <div>
    <h2>Radio Buttons</h2>
    <p>
      For radio buttons they're similar to the checkboxes, however the v-model points to a single ref value (not an array).
      Only the value of the input will be put in the ref.
    </p>
    <div>Picked: {{ picked }}</div>
    <input
      id="one"
      v-model="picked"
      type="radio"
      value="One"
    >
    <label for="one">One</label>
    <input
      id="two"
      v-model="picked"
      type="radio"
      value="Two"
    >
    <label for="two">Two</label>
  </div>
  <div>
    <h2>Select</h2>
    <p>
      For the select element you can attach the vmodel directly onto it and whatever option is chosen will have its content
      put into the ref'd value (A, B or C). You can provide a custom value specifying a value prop on the option tag.
    </p>
    <div>Selected: {{ selected }}</div>
    <select v-model="selected">
      <option
        disabled
        value=""
      >
        Please select one
      </option>
      <option value="1">
        A
      </option>
      <option value="2">
        B
      </option>
      <option value="3">
        C
      </option>
    </select>
  </div>
  <div>
    <h2>Multi Select</h2>
    <p>
      For a multi select element you can do the same as a regular select element. Attach the vmodel directly onto it
      however the difference is the values are put into an array and whatever values are in the array get matched with
      whatever selected option you've chosen.
    </p>
    <div>Selected: {{ multiSelected }}</div>
    <select
      v-model="multiSelected"
      multiple
    >
      <option value="Apple">
        Apple
      </option>
      <option value="Banana">
        Banana
      </option>
      <option value="Cantaloupe">
        Cantaloupe
      </option>
    </select>
  </div>
</template>

<style scoped>

</style>
