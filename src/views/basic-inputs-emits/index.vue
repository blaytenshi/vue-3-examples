<script setup>
import BasicInputEmits from "./basic-input-emits.vue";
import { reactive } from "vue";

const data = reactive({
  inputValue: "",
});

const handleInput = () => {

};
</script>

<template>
  <BasicInputEmits
    label="First Name"
    :input-value="data.inputValue"
  />
</template>

<style scoped>

</style>
