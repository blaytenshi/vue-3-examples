<script setup>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";

// validation rules are fairly simple: return true if value is valid
// otherwise return an error message. Usually good to keep the error message at the end.
function isRequired(value) {
  // you need to use if (value && ...) otherwise the value is undefined at the beginning and will throw errors
  if (value && value.trim()) {
    return true;
  }

  // if we don't return an error message and simply return false, Vee Validate will use the default error message:
  // "[field name] is not valid."
  return "This is required";
}

// we give the required() function a custom error message otherwise it will simply say
// "this is a required field" by default
// for other rules, check the defaults in the yup library documentation
const lastNameRules = yup.string().required("Please enter a value.").min(2);

const passwordRules = yup.string().required("Password is required.").min(8, "Password must be at least 8 characters long.");

</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Vee Validate Higher Order Component (HOC) Field Validation Example</h1>
    <p>
      This utilises Vee Validates HOC example to validate fields. It is a simple way to validate fields (or forms) and
      is useful if you want the validation to remain inside the template.
    </p>
    <p>
      This example uses Vee Validate's &lt;Form/&gt; and &lt;Field/&gt; components to handle form submission and field validation.
    </p>
    <Form>
      <!--
        By default the field validation triggers on blur (when you click away).
        Notice that there's no label for the <Field /> component, you need to add it manually.
        Also, any regular HTML input attributes can be passed to the Field component and into the underlying input element
        (e.g. placeholder, type, etc.). The Field component will render an <input /> element by default.
        As for the rules to check, you can pass a function that returns true if the value is valid, or a string with an error message.
      -->
      <label for="field">Required Field</label>
      <Field
        id="field"
        name="field"
        :rules="isRequired"
        placeholder="This field is required"
        type="text"
      />
      <ErrorMessage name="field" />

      <!--
        You can use the slot in the Field component to pass out certain values as well as to keep the label and input
        element all together in the same element. It may not look so useful here but you will need this functionality
        when you want to use custom components or creating radio and checkboxes.

        You can also use Vee Validate's Global Validator rules. You just need to import them. You can even define your
        own custom rules that are easy to import and use in the Field component.
      -->
      <Field
        id="email"
        v-slot="{ field }"
        name="email"
        type="email"
        rules="required|email"
      >
        <label for="email">Email</label>
        <input
          v-bind="field"
          placeholder="Email Address"
        >
      </Field>
      <ErrorMessage name="email" />

      <label for="firstName">First Name</label>
      <Field
        id="firstName"
        name="firstName"
        type="text"
        rules="required|alpha|minLength:3"
      />
      <ErrorMessage name="firstName" />

      <!--
        You can also use yup validator rules. The ErrorMessage component can also be modified to use a slot.
      -->
      <label for="lastName">Last Name</label>
      <Field
        id="lastName"
        name="lastName"
        type="text"
        :rules="lastNameRules"
      />
      <ErrorMessage
        v-slot="{ message }"
        name="lastName"
      >
        Error: {{ message }}
      </ErrorMessage>

      <!-- You can also use yup to set rules for a field -->
      <label for="password">Password</label>
      <Field
        id="password"
        name="password"
        type="password"
        :rules="passwordRules"
      />
      <ErrorMessage name="firstName" />
    </Form>
  </Container>
</template>

<style scoped>

</style>
