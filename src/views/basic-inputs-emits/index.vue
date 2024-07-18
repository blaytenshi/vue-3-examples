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
    Below is an example of a custom component that can 'emit' values. An understanding of emits is required for when
    you build your own input fields that extend beyond the basic html input component or custom components that only
    emit values on certain events.
  </p>
  <BasicInputEmits
    label="First Name"
    :input-value="data.inputValue"
    :is-required="true"
    @handle-input="handleInput"
  />
</template>

<style scoped>

</style>
