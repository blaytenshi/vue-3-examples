<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
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
      <p>Special Array: {{ specialArray }}</p>
      <p>Current Count Doubled: {{ countDoubled }}</p>
    </div>
    <div>
      <button @click="counterStore.$reset">
        Reset
      </button>
      <button @click="addCountToSpecialArray">
        Add Current Count to Special Array
      </button>
    </div>
  </container>
</template>

<script setup>
import { useCounterStore } from "../../../stores/counter.js";
import { storeToRefs } from "pinia";
import Container from "../../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../../../constants/options.js";

// in order to actually use the store, we need to actually call the store
// but you can't just destructure from it otherwise you'll break reactivity
// https://pinia.vuejs.org/core-concepts/#Using-the-store
const counterStore = useCounterStore();

// also have to be careful when we're destructuring from the store too
// https://pinia.vuejs.org/core-concepts/#Destructuring-from-a-Store
// State and getters should be passed through the storeToRefs() function to be extracted without losing reactivity
const { currentCount, specialArray, countDoubled } = storeToRefs(counterStore);
// you can just destructure actions from the store directly through
const { incrementCount, decrementCount, addCountToSpecialArray } = counterStore;
</script>

<script>
export default {
  name: "PiniaExample",
};
</script>

<style scoped>
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
