<script setup>
// If we're writing SFCs then this is the preferred way of writing them instead of using the export default format as
// in previous examples. Here in between this script tag is the entire setup hook.
import { ref } from "vue";

let unrefdValue = "unrefd value";
const refdValue = ref("refd value");

const updateValues = () => {
  unrefdValue = "updated unrefd value";
  refdValue.value = "updated refd value";
};
</script>

<template>
  <h2>Using Setup in Script</h2>
  <p>
    Usually we're writing SFCs then we'll usually prefer to use the script setup template.
    This is where everything in the script tag is a part of the setup hook and nothing needs
    to be returned to be accessible by the template.
  </p>
  <p>unrefdValue: {{ unrefdValue }}</p>
  <p>refdValue: {{ refdValue }}</p>
  <button @click="updateValues">
    Update Values
  </button>
</template>

<style scoped>
</style>