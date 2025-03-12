<script setup>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

// validation rules are fairly simple. return true if value is acceptable
// otherwise return an error message. Usually good to keep the error message at the end.
function isRequired(value) {
  // you need to use if (value && ...) otherwise the value is undefined at the beginning and will throw errors
  if (value && value.trim()) {
    return true;
  }

  return "This is required";
}

const passwordRules = yup.string().required().min(8);

</script>

<template>
  <Form>
    <!-- This renders a text input by default -->
    <!-- By default the field validation triggers on blur -->
    <Field
      name="field"
      :rules="isRequired"
    />
    <ErrorMessage name="field" />
    <!-- You can pass a type into the Field component that will give it a type underneath -->
    <!-- You can also use yup to set rules for a field -->
    <Field
      name="email"
      type="password"
      :rules="passwordRules"
    />
    <ErrorMessage name="email" />
  </Form>
</template>

<style scoped>

</style>
