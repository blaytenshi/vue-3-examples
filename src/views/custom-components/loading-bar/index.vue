<script setup>
import LoadingBar from "./loading-bar.vue";
import Container from "@/components/Container.vue";
import { CONTAINER_DIRECTIONS } from "@/constants/options.js";
import { ref } from "vue";

const progress = ref(0);

const randomiseProgressValue = () => {
  progress.value = Math.random() * 101;
  console.log(progress);
};

</script>

<template>
  <Container :direction="CONTAINER_DIRECTIONS.COLUMN">
    <loading-bar :progress="progress" />
    <p>Progress Value: {{ progress }}</p>
    <button @click="randomiseProgressValue">
      Randomise Progress
    </button>
  </Container>
</template>
