<script setup>
import BasicTextInput from "./basic-text-input.vue";
import { reactive } from "vue";

const data = reactive({
  email: "",
});
</script>

<template>
  <BasicTextInput
    v-model="data.email"
    label="Email"
    name="email"
  />
</template>

<style scoped>

</style>
