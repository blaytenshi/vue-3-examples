<template>
  <h1>Vue 3 V-Model Custom Elements</h1>
  <p>In Vue 3, v-model for Custom Elements work differently now.</p>
  <p>
    The &lt;CustomComponent /&gt; will still accept the 'v-model' directive.
  </p>
  <CustomInput
    v-model="customInputData"
    input-label="My Custom Input"
  />
  <p>The value of customInputData: {{ customInputData }}</p>
</template>

<script>
import CustomInput from "../components/CustomInput.vue";

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
    handleInput(event) {
      console.log("event", event);
    },
  },
};
</script>