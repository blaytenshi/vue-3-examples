<script>
import AllAboutRefs from "./all-about-refs.vue";
import UsingSetupInScript from "./using-setup-in-script.vue";
import AllAboutReactive from "./all-about-reactive.vue";
import RealRefReactiveExample from "./real-ref-reactive-example.vue";

export default {
  name: "VueReactivityFundamentals",
  components: {
    RealRefReactiveExample,
    AllAboutRefs,
    AllAboutReactive,
    UsingSetupInScript,
  },
};
</script>

<template>
  <h1>Vue Reactivity Fundamentals</h1>
  <h2>What is even reactivity?</h2>
  <p>
    Reactivity is the mechanism that allows Vue to detect when data used on the page has changed (mutated), and to
    update the page in an optimal way to reflect these changes, that is, tells the page/component to re-render.
  </p>
  <AllAboutRefs />
  <UsingSetupInScript />
  <AllAboutReactive />
  <RealRefReactiveExample />
</template>

<style scoped>

</style>