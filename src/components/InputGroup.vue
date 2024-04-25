<script setup>
// This is the Input Field Group
// The label is optional and will not render if there's no label given
import { func, string } from "vue-types";
import { noop } from "lodash";

defineProps({
  inputName: string().def("inputName"),
  inputLabel: string(),
  type: string().def("text"),
  errorMessage: string().def(""),
  inputValue: string().def(""),
  handleInputChange: func().def(noop()),
  handleBlur: func().def(noop()),
  placeholder: string().def("Placeholder"),
});
</script>

<template>
  <div class="input-group-wrapper">
    <label
      v-if="inputLabel"
      :for="inputName"
    >{{ inputLabel }}</label>
    <input
      :id="inputName"
      :name="inputName"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleInputChange"
      @blur="handleBlur"
    >
    <div class="input-group-error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style scoped>
.input-group-wrapper {
  display: flex;
  flex-direction: column;
}
.input-group-error-message {
  color: red;
}
</style>
