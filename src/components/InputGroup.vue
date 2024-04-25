<script setup>
import { func, string } from "vue-types";
import { noop } from "lodash";

defineProps({
  inputName: string().def("inputName"),
  inputLabel: string().def("Input Name"),
  type: string().def("text"),
  errorMessage: string().def(""),
  inputValue: string().def(""),
  handleInputChange: func().def(noop()),
});
</script>

<template>
  <div class="input-group-wrapper">
    <label :for="inputName">{{ inputLabel }}</label>
    <input
      :id="inputName"
      :type="type"
      :value="inputValue"
      @input="handleInputChange"
    >
    <div>{{ errorMessage }}</div>
  </div>
</template>

<style scoped>
.input-group-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
