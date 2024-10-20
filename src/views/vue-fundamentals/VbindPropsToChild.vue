<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>v-bind-ing props to Child Components</h1>
    <p>
      I wonder if i use `v-bind` to bind an object to the props of a child
      component, does it pass to Child and Grandchild components?
    </p>
    <v-bind-child v-bind="specialProps" />
  </Container>
</template>

<script>
import Container from "../../components/Container.vue";
import VBindChild from "../../components/VBindChild.vue";
import { CONTAINER_DIRECTIONS } from "../../constants/options.js";

export default {
  name: "VbindPropsToChild",
  components: {
    Container,
    VBindChild,
  },
  data() {
    return {
      specialProps: {
        myCustomProp: "myCustomValue",
      },
    };
  },
  computed: {
    CONTAINER_DIRECTIONS() {
      return CONTAINER_DIRECTIONS;
    },
  },
};
</script>
