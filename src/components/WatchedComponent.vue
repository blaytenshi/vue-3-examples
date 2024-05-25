<template>
  <h1>OptionAPI Watcher</h1>
  <div>{{ watchedValue }} {{ secondWatchedValue }} {{ thirdWatchedValue }}</div>
</template>

<script>
export default {
  name: "WatchedComponent",
  props: {
    watchedValue: String,
    secondWatchedValue: String,
    thirdWatchedValue: String,
  },
  watch: {
    watchedValue: {
      handler(value, oldValue) {
        console.log(`watchedValue oldValue: ${oldValue}, newValue: ${value}`);
      },
      immediate: true, // immediate makes this run right during component creation
    },
    secondWatchedValue: {
      handler(value, oldValue) {
        console.log(
          `secondWatchedValue oldValue: ${oldValue}, newValue: ${value}`,
        );
      },
      immediate: true,
    },
    thirdWatchedValue: {
      handler(value, oldValue) {
        console.log(
          `thirdWatchedValue oldValue: ${oldValue}, newValue: ${value}`,
        );
      },
      immediate: true,
    },
  },
  created() {
    console.log("watchedValue", this.watchedValue);
  },
};
</script>