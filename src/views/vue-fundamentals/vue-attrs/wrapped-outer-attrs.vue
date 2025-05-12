<script setup>
import InnerAttrsComponent from "./inner-attrs-component.vue";
</script>

<template>
  <div>
    <!-- the testProp will not automatically pass to InnerAttrsComponent! -->
    <inner-attrs-component class="outter" />
  </div>
  <!-- Nor will this, because it's not the ONLY child component -->
  <inner-attrs-component class="outter" />
</template>

<style scoped>
.outter {
  background-color: cornflowerblue;
  color: white;
  padding: 1rem;
}
</style>
