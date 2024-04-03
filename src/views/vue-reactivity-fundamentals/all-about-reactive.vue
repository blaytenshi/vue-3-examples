<script setup>
import { reactive } from "vue";

// reactive() can't be used on primitive values, only objects. ref() actually uses reactive()
// underneath to wrap objects.
// reactive values can be used in a very similar way to objects. In a comparison to ref()s, you
// don't need to use the .value in access the value. eg, normally in a ref, the below object needs
// state.value.count in order ot be accessed.
const state = reactive({
  count: 0,
});
// note: reactivity can be lost! If you destructure from the state object above, and modify the
// value, you won't receive updates to the property. See 'Losing Reactivity' for an example.

// functions inside setup can directly access the reactive() state object.
const increment = () => {
  state.count++;
};

const decrement = ()=> {
  state.count--;
};
</script>

<template>
  <h2>All About Reactive</h2>
  <p>
    All about reactive(). Check out the code to see the comments on its usages!
  </p>
  <button @click="decrement">
    Decrement
  </button>
  <p>{{ state.count }}</p>
  <button @click="increment">
    Increment
  </button>
</template>

<style scoped>
</style>