import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    currentCount: 0, // must set the state like this in pinia if you are to use the $reset() function
    specialArray: [],
  }),
  getters: {
    countDoubled(state) {
      return state.currentCount * 2;
    },
  },
  actions: {
    // keep action functions to regular functions because if we use arrow functions we'll lose reference to 'this'
    incrementCount({ increaseValue }) {
      this.currentCount = this.currentCount + increaseValue;
    },
    decrementCount({ decreaseValue }) {
      this.currentCount = this.currentCount - decreaseValue;
    },
    addCountToSpecialArray() {
      this.specialArray.push(this.currentCount);
    },
  },
});
