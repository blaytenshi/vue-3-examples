import { defineStore } from "pinia";

const counterStoreInitialState = {
  currentCount: 0,
};

export const useCounterStore = defineStore("counter", {
  state: () => counterStoreInitialState,
  actions: {
    // keep action functions to regular functions because if we use arrow functions we'll lose reference to 'this'
    incrementCount({ increaseValue }) {
      this.currentCount = this.currentCount + increaseValue;
    },
    decrementCount({ decreaseValue }) {
      this.currentCount = this.currentCount - decreaseValue;
    },
    resetCount() {
      this.state = counterStoreInitialState;
    },
  },
});