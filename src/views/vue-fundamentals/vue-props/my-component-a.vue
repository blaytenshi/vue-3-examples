<script setup>
defineProps({
  requiredProp: {
    type: String,
    required: true,
    default: "Hello",
  },
  nonRequiredProp: { // basically an optional prop, it will be false if you
    type: Boolean,
  },
});
</script>

<template>
  <div class="outter">
    {{ requiredProp }}
    <div
      v-if="nonRequiredProp"
      class="inner"
    >
      I'm the non required prop!
    </div>
  </div>
</template>

<style scoped>
.outter {
  background-color: cornflowerblue;
}
.inner {
  background-color: lightcoral;
}
</style>
