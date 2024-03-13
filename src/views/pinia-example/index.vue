<template>
  <h1>Pinia</h1>
  <div class="counter">
    <button @click="incrementCount({ increaseValue: 1 })">
      Increment
    </button>
    <p class="count">
      {{ currentCount }}
    </p>
    <button @click="decrementCount({ decreaseValue: 1 })">
      Decrement
    </button>
  </div>
  <div>
    <button @click="resetCount">
      Reset
    </button>
  </div>
</template>

<script setup>
import { useCounterStore } from "../../stores/counter.js";
import { storeToRefs } from "pinia";

// in order to actually use the store, we need to actually call the store
// but you can't just destructure from it otherwise you'll break reactivity
// https://pinia.vuejs.org/core-concepts/#Using-the-store
const counterStore = useCounterStore();

// also have to be careful when we're destructuring from the store too
// https://pinia.vuejs.org/core-concepts/#Destructuring-from-a-Store
const { currentCount } = storeToRefs(counterStore);
// you can just destructure actions from the store directly through
const { incrementCount, decrementCount, resetCount } = counterStore;
</script>

<script>
export default {
  name: "PiniaExample",
}
</script>

<style>
div {
  margin-bottom: 1rem;
}
button {
  height: 2.5rem;
}
.counter {
  display: flex;
  flex-direction: row;
}

.count {
  font-size: 2rem;
  margin: 0 1rem;
}
</style>