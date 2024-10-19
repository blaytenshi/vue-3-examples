<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <h1>Welcome to Vue3 examples</h1>
    <p>
      Welcome to my Vue 3 Examples page. It's just a playground for testing out my
      ideas and strengthening my own concepts. Feel free to take any examples you
      see here. I hope they're useful :) -J
    </p>
    <p>
      One new thing with Vue 3 is that you'll notice that this `template` now has
      multiple element nodes (not only one now compared to how thing were in Vue
      2). Meaning you don't need a root &lt;div&gt; wrapping everything in order
      for it to render. There are multiple elements at the 'root', an &lt;h1&gt;,
      2 x &lt;p&gt; tags and then a &lt;ul&gt; tag. Neat, huh?
    </p>
  </Container>
</template>

<script>
import Container from "../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "../constants/options.js";

export default {
  name: "HomePage",
  components: { Container },
  computed: {
    CONTAINER_DIRECTIONS() {
      return CONTAINER_DIRECTIONS;
    },
  },
};
</script>

<style scoped>

</style>
