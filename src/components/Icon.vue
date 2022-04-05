<template>
  <component :is="bananas" />
</template>

<script>
import bananas from "../assets/bananas.svg";

export default {
  name: "Icon",
  components: {
    bananas,
  },
  props: {
    name: String(),
  },
  setup() {
    return { bananas };
  },
};
</script>