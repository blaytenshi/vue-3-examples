<template>
  <h1>Vue 3 V-Model Native Elements</h1>
  <p>
    This is the most basic example of v-model's two-way binding. It uses Native
    Elements, ie the `input` element
  </p>
  <p>
    The reason it is called two-way binding is because if you update the value
    in the input field you will also update the value stored in data(). If you
    update the value in data(), it will also update the value in the input
    field.
  </p>
  <input v-model="inputValue">
  <div>Value of `inputValue`: {{ inputValue }}</div>
  <button @click="updateData">
    Change Value
  </button>
</template>

<script>
export default {
  name: "Vue3VModelNativeElementsPage",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    updateData() {
      this.inputValue = "Changed Value!";
    },
  },
};
</script>