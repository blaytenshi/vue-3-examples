<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>V-Model for Custom Elements (Vue 3)</h1>
    <p>
      It's not just raw html elements that can use the v-model directive. A custom component, a component created by
      you, can also use the v-model directive.
    </p>
    <p>
      Here we've created a &lt;CustomInput /&gt; that accepts the 'v-model' directive. The value passed to it will
      simply be mapped to the 'modelValue' prop inside the CustomComponent by default. If the modelValue inside the
      CustomInput component gets updated by the input html element, the value will be emitted out to this
      customInputData data value. Same for if the value is updated, say, through an API request, it will be reflected
      inside the input html element. Go inside the CustomInput component to see!
    </p>
    <CustomInput
      v-model="customInputData"
      input-label="My Custom Input"
    />

    <p>The value of customInputData: {{ customInputData }}</p>
    <button @click="handleInput">
      Change customInputData to 'Blah Blah'
    </button>
  </Container>
</template>

<script>
import CustomInput from "./custom-input.vue";
import Container from "../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../../constants/options.js";

export default {
  name: "VModelForCustomElementsVue3",
  components: {
    Container,
    CustomInput,
  },
  data() {
    return {
      customInputData: "Blah Blah",
    };
  },
  computed: {
    CONTAINER_DIRECTIONS() {
      return CONTAINER_DIRECTIONS;
    },
  },
  methods: {
    handleInput() {
      this.customInputData = "Blah Blah";
    },
  },
};
</script>
