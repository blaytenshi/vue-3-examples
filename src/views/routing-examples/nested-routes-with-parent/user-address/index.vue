<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const { userName } = route.params;
</script>

<template>
  <h1>User Address {{ userName }}</h1>
</template>

<style scoped>

</style>
