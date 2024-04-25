<script setup>
import InputGroup from "../../components/InputGroup.vue";
import { computed, reactive } from "vue";

const state = reactive({
  form: {
    name: {
      inputValue: "",
      inputValueErrorMsg: "",
      placeholder: "Your name",
    },
    email: {
      inputValue: "",
      inputValueErrorMsg: "",
      placeholder: "Your email",
    },
  },
});

const handleInputChange = (event) => {
  const { name, value } = event.target;

  state.form[name].inputValue = value;
  if (state.form[name].inputValueErrorMsg) {
    state.form[name].inputValueErrorMsg = "";
  }
};

const handleBlur = (event) => {
  const { name } = event.target;
  state.form[name].inputValueErrorMsg = validateInput(state.form[name].inputValue, name);
};

// This can be improved on so we're not validating by the field name each time.
// replace with yup or zod
const validateInput = (inputValue, inputName) => {
  if (inputName === "email" && !inputValue.includes("@")) {
    return "Must be an email!";
  }

  if (inputName === "name" && inputValue.length <= 1) {
    return "Input must be longer than 1 character!";
  }
};

const isSubmitDisabled = computed(() => Object.keys(state.form)
  .map(inputName => state.form[inputName].inputValueErrorMsg)
  .some(errorMsg => errorMsg.length > 0), // check if there's actual content in the error message
);

const handleSubmit = (event) => {
  event.preventDefault();
};
</script>

<template>
  <h1>Basic Forms Validation</h1>
  <p>This is an example with basic form validation</p>
  <InputGroup
    input-name="name"
    input-label="Name"
    type="text"
    :input-value="state.form.name.inputValue"
    :handle-input-change="handleInputChange"
    :handle-blur="handleBlur"
    :error-message="state.form.name.inputValueErrorMsg"
    :placeholder="state.form.name.placeholder"
  />
  <InputGroup
    input-name="email"
    input-label="Email"
    type="text"
    :input-value="state.form.email.inputValue"
    :handle-input-change="handleInputChange"
    :handle-blur="handleBlur"
    :error-message="state.form.email.inputValueErrorMsg"
    :placeholder="state.form.email.placeholder"
  />
  <button
    :disabled="isSubmitDisabled"
    type="button"
    @click="handleSubmit"
  >
    Submit
  </button>
</template>

<style scoped>

</style>
