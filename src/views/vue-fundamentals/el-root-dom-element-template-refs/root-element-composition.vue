<script setup>
import { ref } from "vue";

// you cannot use $el or $ref in composition API
// therefore you have to use template refs directly
const helloWorldEl = ref(null);
const divEl = ref(null);

const handleColorChange = () => {
  console.log("divEl", divEl.value);
  divEl.value.style.backgroundColor = "red";
  helloWorldEl.value.style.backgroundColor = "red";
};
</script>

<template>
  <div>
    <p
      ref="helloWorldEl"
      class="text"
    >
      Hello World Composition API
    </p>
    <div ref="divEl">
      div inside
    </div>
    <button @click="handleColorChange">
      Change BG Color
    </button>
  </div>
</template>

<style scoped>

</style>
