<template>
  <h1>Vue 3 V-Model Custom Elements</h1>
  <p>In Vue 3, v-model for Custom Elements work differently now.</p>
  <p>
    The &lt;CustomInput /&gt; will still accept the 'v-model' directive. It will simply be mapped to the 'modelValue' prop
    inside the CustomComponent by default. See inside CustomInput.vue's props list  to see!
  </p>
  <CustomInput
    v-model="customInputData"
    input-label="My Custom Input"
  />

  <p>The value of customInputData: {{ customInputData }}</p>
  <button @click="handleInput">
    Change customInputData to 'Blah Blah'
  </button>
</template>

<script>
import CustomInput from "./custom-input.vue";

export default {
  name: "Vue3VModelCustomElementsPage",
  components: {
    CustomInput,
  },
  data() {
    return {
      customInputData: "Blah Blah",
    };
  },
  methods: {
    handleInput() {
      this.customInputData = "Blah Blah";
    },
  },
};
</script>
