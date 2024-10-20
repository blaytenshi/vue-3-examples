<script>
import { ref } from "vue";

export default {
  setup() {
    // the ref() can wrap all types of values; primitives, objects, arrays, etc and makes them deeply reactive. It
    // returns a Reactive object such that when you change the .value of the Reactive object, it will cause the page
    // to refresh.
    const myRefdValue = ref("refd value");
    // while you may need the .value to update or access a ref()'d value in javascript. You don't need to do this when
    // rendering the value to the template as it is automatically unwrapped for you
    let myUnrefdValue = "unrefd value";

    // you can change the value of the Reactive object in the setup function before you return it...
    myRefdValue.value = "update refd value";
    myUnrefdValue = "update unrefed value";

    const updateRefs = () => {
      myUnrefdValue = "second update to unrefd value";
      myRefdValue.value = "second update to refd value"; // maintains reactivity, still a reactive object
      console.log("updateRefs myUnrefdValue", myUnrefdValue);
      console.log("updateRefs myRefdValue", myRefdValue);
    };

    // variables or functions need to be returned by the setup function before they can be used by the template
    return {
      myUnrefdValue,
      myRefdValue, // still a Reactive object at this point
      updateRefs,
    };
  },
  methods: {
    // updateRefs() { // this method would conflict with the updateRefs() being returned from setup()
    //   console.log("I replaced the returned updatedRefs() function!");
    // },
    nonReactiveUpdate() {
      this.myUnrefdValue = "third update to unrefd value"; // once this function is invoked, this...
      this.myRefdValue = "third update to refd value"; // ...and this would actually replace the returned values!
      console.log("nonReactiveUpdates myUnrefdValue", this.myUnrefdValue);
      console.log("nonReactiveUpdates myRefdValue", this.myRefdValue); // This is no longer a Proxy object!
    },
    anotherNonReactiveUpdate() {
      // this function errors because no longer works because nonReactiveUpdate() wrote over myRefdValue
      // will throw error in console saying this.myRefdValue.value is undefined.
      this.myUnrefdValue = "third update to unrefd value";
      this.myRefdValue.value = "third update to refd value";
      console.log("anotherNonReactiveUpdate myUnrefdValue", this.myUnrefdValue);
      console.log("anotherNonReactiveUpdate myRefdValue", this.myRefdValue);
    },
  },
};
</script>

<template>
  <h2>All About Refs</h2>
  <p>Unrefd value: {{ myUnrefdValue }}</p>
  <p>Refd value: {{ myRefdValue }}</p>
  <button @click="updateRefs">
    Press me 1st, maintains reactivity!
  </button>
  <button @click="nonReactiveUpdate">
    Press me 2nd, myRefdValue loses reactivity!
  </button>
  <button @click="anotherNonReactiveUpdate">
    Press me 3rd, myRefdValue no longer updates!
  </button>
</template>

<style scoped>
</style>