<script setup>
import { ref } from "vue";
import Container from "../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../../constants/options.js";

const inputValue = ref("hello");
const checkedNames = ref([]);
const picked = ref();
const selected = ref();
const multiSelected = ref([]);

</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Basic Input V-Model</h1>
    <p>
      In the Basic Inputs example, you saw how you can make the raw input element respond to input change and update its
      value in a similar pattern to ReactJS with handling functions and value props. This is a fairly manual process
      that requires you to know what input events (change or input) to respond to.
    </p>
    <p>
      In order to simplify things, you can use the v-model directive on the html element itself. The v-model directive is
      for binding the value in the ref/data (what people from React would refer to as 'state') to the 'value' of the
      raw input element and vice-versa.
    </p>
    <p>
      The v-model directive is a two-way binding meaning that if you update the state, the value automatically gets updated
      and reflected in the input value of the input element. This is useful in that now you don't have to know the
      specific events to listen for, all you need to do now is to simply read the new value from the state.
    </p>
    <div>
      <h2>General Text or Number Input</h2>
      <p>
        For a general text input, you just put the v-model directive on the input html element. Notice there is no
        @change or @input or anything like that. Once the value changes, v-model will simply update the state.
      </p>
      <input v-model="inputValue">
    </div>
    <div>
      <h2>Checkboxes</h2>
      <p>
        For a checkbox component, in order to use vmodel, you need to first group every input that is part of the checkbox
        under a value, eg "checkedNames". If you add to the checkedNames array ref with a corresponding value, it will
        'check' those checkboxes.
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
        Only the value of the selected radio button will be set in the ref.
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
        For the select element you attach the vmodel directly onto the select element (not on the option). By default,
        whatever option is chosen will have be set in the ref (A, B or C). Optionally, if you add a value attribute to
        the option element, you can set a custom value in the ref. This is default select behaviour.
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
        For a multi select element you can do the same as a regular select element. Attach the vmodel directly on to the
        select element. However, the difference is that the selected values are put into an array instead of a single
        value. Whatever values are in the array get matched with whatever selected option you've chosen.
      </p>
      <div>Selected: {{ multiSelected }}</div>
      <select
        v-model="multiSelected"
        multiple
      >
        <!-- The case of the value matters! "apple" is NOT the same as "Apple"! -->
        <option value="apple">
          Apple
        </option>
        <option value="banana">
          Banana
        </option>
        <option value="cantaloupe">
          Cantaloupe
        </option>
      </select>
    </div>
  </Container>
</template>

<style scoped>

</style>
