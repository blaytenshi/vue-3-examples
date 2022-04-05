<template>
  <h1>Vbind Grandchild</h1>
  VbindGrandChildComponent props: {{ myProps }}
</template>

<script>
export default {
  name: "VBindGrandChildComponent",
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