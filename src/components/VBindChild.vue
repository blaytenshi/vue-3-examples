<template>
  <h1>Vbind Child</h1>
  VbindChildComponent props: {{ myProps }}
  <v-bind-grand-child />
</template>

<script>
import VBindGrandChild from "../components/VBindGrandChild";

export default {
  name: "VbindChildComponent",
  props: {
    myCustomProp: String,
  },
  computed: {
    myProps() {
      return this.$props;
    },
  },
  components: {
    VBindGrandChild,
  },
};
</script>