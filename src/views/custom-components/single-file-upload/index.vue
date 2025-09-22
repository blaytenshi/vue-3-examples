<script setup>
import { ref } from "vue";
import Container from "@/components/Container.vue";
import LoadingBar from "@/views/custom-components/loading-bar/loading-bar.vue";
import axios from "axios";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";

const submitting = ref(false);
const progress = ref(0);
const file = ref(null);
const email = ref("");
const name = ref("");
const result = ref(null);

const onSubmit = async () => {
  console.log("submitting...");
  if (!file.value) {
    alert("Please pick an avatar file");
    return;
  }

  const formData = new FormData();
  // text fields
  formData.append("email", email.value);
  formData.append("name", name.value);
  // file must be appended under the same key 'avatar'
  formData.append("avatar", file.value);

  try {
    submitting.value = true;
    progress.value = 0;
    result.value = null;

    const res = await axios.post("http://localhost:9091/profile", formData, {
      onUploadProgress: (event) => {
        if (event.lengthComputable) {
          progress.value = Math.round((event.loaded * 100) / event.total);
        }
      },
    });

    result.value = res.data;
  } catch (error) {
    console.error(error);
    result.value = error.response?.data || error.message;
  }
};

const onFileChange = (event) => {
  file.value = event.target.files && event.target.files[0]
    ? event.target.files[0]
    : null;
};
</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Single File Upload Basic</h1>
    <p>This is a simple Single File Upload component. It requires the simple-middleware project in order to work.</p>
    <p>
      This example works by encoding both the field information (email and name) as well as the file data into a
      FormData object and sending it as a multipart/form-data payload.
    </p>
    <p>
      This isn't a great example of how file uploads should be done. It should ideally be separated such that the field
      information being submitted and the file data are sent in separate requests. This is because file uploads can
      take a long time and if the field information is sent in the same request, the user will have to wait for the
      file upload to complete before they can see any validation errors with the field information.
    </p>
    <h2>Create Profile</h2>
    <form @submit.prevent="onSubmit">
      <input
        v-model="email"
        type="text"
        placeholder="Email"
      >
      <input
        v-model="name"
        type="text"
        placeholder="Name"
      >
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
      >
      <div v-if="submitting">
        <loading-bar :progress="progress" />
      </div>
      <!-- Submit button -->
      <button>Submit</button>
    </form>
  </Container>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
