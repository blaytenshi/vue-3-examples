<script setup>
import { required } from "@vee-validate/rules";
import { Form, Field, ErrorMessage, defineRule } from "vee-validate";
import * as yup from "yup";

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
    <button>Submit Login</button>
  </Form>
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
    <button>Submit Profile</button>
  </Form>
</template>

<style scoped>

</style>
