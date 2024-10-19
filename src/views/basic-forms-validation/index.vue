<script setup>
import InputGroup from "../../components/InputGroup.vue";
import { computed, reactive } from "vue";
import { z, ZodError } from "zod";
import Container from "../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../constants/options.js";

const state = reactive({
  formData: {
    name: "",
    email: "",
  },
  formErrors: {
    name: "",
    email: "",
  },
});

const userSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be longer than 1 character" }),
  email: z
    .string()
    .email({ message: "Invalid email address" }),
});

const handleInputChange = (event) => {
  const { name, value } = event.target;

  state.formData[name] = value;
  if (state.formErrors[name]) {
    state.formErrors[name] = "";
  }
};

const handleBlur = (event) => {
  const { name, value } = event.target;
  try {
    validateField(name, value, userSchema);
  } catch(error) {
    console.log("thrown error", error);
    state.formErrors = getMappedErrorMessages(error, state.formErrors);
  }
};

const validateField = (fieldName, fieldValue, schema) => {
  // In order to validate a single field from the userSchema, we're using the .pick()
  // 'build' a new schema to use and validate.
  const fieldSchema = schema.pick({ [fieldName]: true });

  // because the schema is still expecting to validate against an object, we must
  // provide an object to validate hence, creating an object with a single key/value pair
  const fieldObject = { [fieldName]: fieldValue };

  try {
    const result = fieldSchema.parse(fieldObject);
    return result;
  } catch (error) {
    if (error instanceof ZodError) {
      // by using .flatten() on the error Zod error object, we can get back
      // an object with fieldName as key and a string-array as value/error message of the error
      const { fieldErrors } = error.flatten();
      throw fieldErrors;
    }
  }
};

// flattened Zod Error messages look like this: { fieldName: ["errorMessage"], fieldName: ["errorMessage"] }
// this function will iterate through each formError and apply the message in the array into a new formError object.
const getMappedErrorMessages = (error, formErrors) => Object.keys(error).reduce((previousValue, currentErrorName) => ({
  ...previousValue,
  [currentErrorName]: error[currentErrorName][0],
}), formErrors);

const isSubmitDisabled = computed(() => Object.keys(state.formErrors)
  .map(inputName => state.formErrors[inputName])
  .some(errorMsg => errorMsg.length > 0), // check if there's actual content in the error message
);

const validateForm = (formData, formSchema) => {
  try {
    return formSchema.parse(formData);
  } catch (error) {
    throw error.flatten().fieldErrors;
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  try {
    const success = validateForm(state.formData, userSchema);
  } catch(error) {
    state.formErrors = getMappedErrorMessages(error, state.formErrors);
  }
};
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Basic Forms Validation</h1>
    <p>This is an example with basic form validation</p>
    <p>
      The form validation is done with a library called Zod. By building a schema to validate against, we can
      make things easier for ourselves.
    </p>
    <p>
      This form also has onBlur validation, that is, if a field is 'touched' and then left, it will error but
      only that field. This is because we don't want to error the entire form when the user hasn't even finished
      filling out the rest of the form. This required a unique separation of logic. Will be building more
      advanced validation logic in other examples.
    </p>
    <InputGroup
      input-name="name"
      input-label="Name"
      type="text"
      :input-value="state.formData.name"
      :handle-input-change="handleInputChange"
      :handle-blur="handleBlur"
      :error-message="state.formErrors.name"
      placeholder="Your name"
    />
    <InputGroup
      input-name="email"
      input-label="Email"
      type="text"
      :input-value="state.formData.email"
      :handle-input-change="handleInputChange"
      :handle-blur="handleBlur"
      :error-message="state.formErrors.email"
      placeholder="Your email"
    />
    <button
      :disabled="isSubmitDisabled"
      type="button"
      @click="handleSubmit"
    >
      Submit
    </button>
  </Container>
</template>

<style scoped>

</style>
