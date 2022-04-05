<template>
  <div>
    <h1>CompositionAPI Watcher</h1>
    <div>
      {{ watchedValue }} {{ secondWatchedValue }} {{ thirdWatchedValue }}
    </div>
  </div>
</template>

<script>
import { watchEffect, watch, toRefs } from "vue";

export default {
  name: "WatchersVue3",
  props: {
    watchedValue: String,
    secondWatchedValue: String,
    thirdWatchedValue: String,
  },
  setup(props) {
    const { watchedValue, secondWatchedValue, thirdWatchedValue } = toRefs(
      props
    );

    watch(
      [secondWatchedValue, thirdWatchedValue],
      ([newVal2, newVal3], [oldVal2, oldVal3]) => {
        console.log(`CompAPI 2nd, 3rd: ${newVal2} ${newVal3}`);
      },
      {
        immediate: true,
      }
    );

    watch(
      watchedValue,
      (newVal, oldVal) => {
        console.log(`CompAPI watchedValue newVal: ${newVal}`);
      },
      {
        immediate: true,
      }
    );

    // use watchEffect if you wanna watch everything that changes
    // watchEffect(() => {
    //   console.log(`CompAPI newValue: ${JSON.stringify(props)}`);
    // });
  },
};
</script>