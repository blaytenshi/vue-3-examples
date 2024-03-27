<template>
  <h1>v-bind-ing props to Child Components</h1>
  <p>
    I wonder if i use `v-bind` to bind an object to the props of a child
    component, does it pass to Child and Grandchild components?
  </p>
  <v-bind-child v-bind="specialProps" />
</template>

<script>
import VBindChild from "../components/VBindChild";

export default {
  name: "VbindPropsToChild",
  components: {
    VBindChild,
  },
  data() {
    return {
      specialProps: {
        myCustomProp: "myCustomValue",
      },
    };
  },
};
</script>