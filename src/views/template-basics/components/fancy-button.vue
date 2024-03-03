<script setup>
</script>

<template>
  <button>
    <!-- This Submit text is fallback content! If nothing is provided in the slot, we will see submit instead-->
    <slot>Submit</slot>
  </button>
</template>

<style scoped>
button {
  padding: 0.5rem 1rem;
  border: 1px solid dodgerblue;
  border-radius: 0.25rem;
  background-color: lightskyblue;
  color: #2c2c2c;
  cursor: pointer;
  &:hover {
    background-color: #2793fd;
    color: #eaeaea;
  }
  &:active {
    background-color: #2684e3;
    color: #eaeaea;
  }
}
</style>