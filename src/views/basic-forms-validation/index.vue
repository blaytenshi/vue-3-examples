<script setup>
import InputGroup from "../../components/InputGroup.vue";
import { reactive } from "vue";

const state = reactive({
  inputValue: "",
  inputValueErrorMsg: "",
});

const handleInputChange = (event) => {
  console.log(event.target.value);
  state.inputValue = event.target.value;
};
</script>

<template>
  <h1>Basic Forms Validation</h1>
  <p>This is an example with basic form validation</p>
  <InputGroup
    input-name="name"
    input-label="Name"
    type="text"
    :input-value="state.inputValue"
    :handle-input-change="handleInputChange"
    :error-message="state.inputValueErrorMsg"
  />
</template>

<style scoped>

</style>
