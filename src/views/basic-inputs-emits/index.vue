<script setup>
import BasicInputEmits from "./basic-input-emits.vue";
import { reactive } from "vue";

const data = reactive({
  inputValue: "",
});

const handleInput = (emitValue) => {
  console.log(`emitValue: ${emitValue}`);
  data.inputValue = emitValue;
};
</script>

<template>
  <h1>Basic Input Emits</h1>
  <p>
    Vue has a way of indicating from the Child to the parent component that an input value has changed and propagate it
    upwards. This is through a method of using 'emit'. Below is an example of a custom component that can 'emit' values.
    Typically in React, you would call a handler (or a redux action) to 'handle' the change event.
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
</template>

<style scoped>

</style>
