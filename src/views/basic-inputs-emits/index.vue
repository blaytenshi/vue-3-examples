<script setup>
import BasicInputEmits from "./basic-input-emits.vue";
import { reactive } from "vue";
import Container from "../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../constants/options.js";

const data = reactive({
  inputValue: "",
});

const handleInput = (emitValue) => {
  console.log(`emitValue: ${emitValue}`);
  data.inputValue = emitValue;
};
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Basic Input Emits</h1>
    <p>
      Vue has a way of indicating from the Child to the parent component that something has changed within the Child component.
      From within the Child component, you can use the $emit() function to invoke a function held in the Parent component.
      Typically this is used to broadcast the value of an input field as it changes up to the parent. In React, you would
      pass in a handling function (or a redux action) to the Child component and invoke it within the Child component to
      'handle' the change event. See basic-inputs example.
    </p>
    <p>
      An understanding of emits is required for when you build your own input fields that extend beyond the basic html
      input component or custom components that only emit values on certain events.
    </p>
    <p>
      In the &lt;BasicInputEmits/&gt; component below, the first four props (label, :input-value, :is-required and
      input-name) are basic props. @handle-input is the emit event handler and must be added to the defineEmits([]) array
      inside the &lt;BasicInputEmits/&gt; component.
    </p>
    <p />
    <BasicInputEmits
      label="First Name"
      :input-value="data.inputValue"
      :is-required="true"
      input-name="firstName"
      @handle-input="handleInput"
    />
  </Container>
</template>

<style scoped>

</style>
