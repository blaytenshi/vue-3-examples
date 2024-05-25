<template>
  <h1>Vbind Child</h1>
  VbindChildComponent props: {{ myProps }}
  <v-bind-grand-child />
</template>

<script>
import VBindGrandChild from "./VBindGrandChild.vue";

export default {
  name: "VbindChildComponent",
  components: {
    VBindGrandChild,
  },
  props: {
    myCustomProp: String,
  },
  computed: {
    myProps() {
      return this.$props;
    },
  },
};
</script>
