<template>
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
  <ul>
    <router-link
      v-for="{ name, displayName } in routes"
      :key="name"
      :to="{ name }"
    >
      <li>{{ displayName }}</li>
    </router-link>
  </ul>
</template>

<script>
import routes from "../router/routes";

export default {
  name: "HomePage",
  computed: {
    routes() {
      return routes;
    },
  },
};
</script>