<script setup>
import { required } from "@vee-validate/rules";
import { Form, Field, ErrorMessage, defineRule } from "vee-validate";
import * as yup from "yup";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";
import Container from "@/components/Container.vue";

defineRule("required", required);

const loginSchema = {
  email(value) {
    if (value && value.includes("@")) {
      return true;
    }

    return "Must be a valid email";
  },
  name(value) {
    if (value && value.length >= 8) {
      return true;
    }

    return "Must be at least 8 characters";
  },
  password: "required|min:8", // if you are using a rule defined in text, you must import it with defineRule()
};

function onLoginSubmit(values) {
  console.log("login schema", values);
}

const profileSchema = yup.object({
  firstName: yup.string().required().min(3),
  lastName: yup.string().required().min(2),
});

function onProfileSubmit(values) {
  console.log("profile schema", values);
}

</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Vee Validate Higher Order Component (HOC) Form Validation Example</h1>
    <p>
      This page contains example of using Vee Validate's Higher Order Component (HOC) to validate forms by placing the
      validation directly on the form itself instead of on invidividual fields.
    </p>
    <h2>Example One - Basic Validation using Form schema</h2>
    <p>
      When using the Form component from Vee Validate, the @submit event is triggered when the form is submitted and
      the validation schema is applied to all fields within the form.
    </p>
    <p>
      You can define the schema as an object with the names of each field as the key and the rule as a function to
      check as the value that is passed into the validation function. The rule function, like validation rules for
      fields must match the property name.
    </p>
    <Form
      :validation-schema="loginSchema"
      @submit="onLoginSubmit"
    >
      <Field
        name="email"
        placeholder="Email"
      />
      <ErrorMessage name="email" />
      <Field
        name="name"
        placeholder="Name"
      />
      <ErrorMessage name="name" />
      <Field
        name="password"
        type="password"
        placeholder="Password"
      />
      <ErrorMessage name="password" />
      <!--
        By HTML defaults, a button within the <form> tag means it will automatically be a submit button (type="submit")
        unless declared otherwise.
      -->
      <button type="submit">
        Submit Login
      </button>
    </Form>
    <h2>Example Two - Validating Form with Yup validation schema</h2>
    <!-- Form that uses yup validation schema instead -->
    <Form
      :validation-schema="profileSchema"
      @submit="onProfileSubmit"
    >
      <Field
        name="firstName"
        placeholder="First Name"
      />
      <ErrorMessage name="firstName" />
      <Field
        name="lastName"
        placeholder="Last Name"
      />
      <ErrorMessage name="lastName" />
      <button type="submit">
        Submit Profile
      </button>
    </Form>
  </Container>
</template>

<style scoped>

</style>
