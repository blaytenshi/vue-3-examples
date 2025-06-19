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
    <vs-button
      :colour="BUTTON_COLOURS.SUCCESS"
      label="Click!"
      @click="updateState"
    />
    <vs-button
      :colour="BUTTON_COLOURS.PRIMARY"
      label="Primary Button"
      @click="updateState"
    />
    <vs-icon
      :name="iconName"
      :fill="iconFill"
      :width="iconWidth"
      :height="iconHeight"
    />
    <img
      src="../../assets/close.svg"
      width="256px"
    >
    <img
      src="../../assets/balloon.svg"
      width="256px"
    >
  </Container>
</template>

<script setup>
import { ref } from "vue";
import Container from "../../components/Container.vue";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";
import VsIcon from "@/components/vs-icon/vs-icon.vue";
import VsButton from "@/components/vs-button/vs-button.vue";
import { BUTTON_COLOURS } from "@/constants/colours.js";

const iconName = ref("balloon");
const iconFill = ref("#aabc81");
const iconWidth = ref("64px");
const iconHeight = ref("64px");

function updateState() {
  iconName.value = iconName.value === "close"
    ? "balloon"
    : "close";
  iconFill.value = "#c253a5";
  iconWidth.value = "24px";
  iconHeight.value = "24px";
  console.log("clicked!");
}
</script>

<style scoped>

</style>
