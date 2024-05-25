<template>
  <h1>Watchers Example</h1>
  <WatchedComponent
    v-bind="{ watchedValue, secondWatchedValue, thirdWatchedValue }"
  />
  <WatchedComponentVue3
    v-bind="{ watchedValue, secondWatchedValue, thirdWatchedValue }"
  />
  <p>
    clicking on the button below will change the watchedValue in data() to
    "blahBlah"
  </p>
  <button @click="handleClick">
    Change!
  </button>
</template>

<script>
import WatchedComponent from "../components/WatchedComponent.vue";
import WatchedComponentVue3 from "../components/WatchedComponentVue3.vue";

export default {
  name: "WatchersExample",
  components: {
    WatchedComponent,
    WatchedComponentVue3,
  },
  data() {
    return {
      watchedValue: "blah",
      secondWatchedValue: "blah2",
      thirdWatchedValue: "blah3",
    };
  },
  methods: {
    handleClick() {
      this.watchedValue = "blahBlah";
      this.secondWatchedValue = "blahBlah2";
      this.thirdWatchedValue = "blahBlah3";
    },
  },
};
</script>
